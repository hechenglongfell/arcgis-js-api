/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../views/3d/environment/NoiseTextureAtlas","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(t,e,n,a){"use strict";function o(t){const o=new a.ShaderBuilder;return o.attributes.add("position","vec3"),o.fragment.uniforms.add("cloudRadius","float").add("halfCubeMapSize","float").add("power","float").add("sigmaE","float").add("density","float").add("cloudSize","float").add("detailSize","float").add("smoothness","float").add("cloudHeight","float").add("coverage","float").add("viewMatrix","mat3").add("cloudShapeTexture","sampler2D"),o.vertex.code.add(n.glsl`void main(void) {
gl_Position = vec4(position, 1.0);
}`),o.fragment.code.add(n.glsl`
    const int STEPS = ${0===t.steps?n.glsl`16`:1===t.steps?n.glsl`100`:n.glsl`200`};
    const int STEPS_LIGHT = 6;
    const float stepL = 300.0 / float(STEPS_LIGHT);

    const float cloudStart = 1500.0;

    vec3 rayDirection(vec2 fragCoord) {
      vec2 xy = fragCoord - halfCubeMapSize;
      return normalize(vec3(-xy, -halfCubeMapSize));
    }

    float remap(float x, float low1, float high1, float low2, float high2) {
      return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
    }

    float saturate(float x) {
      return clamp(x, 0.0, 1.0);
    }`),o.fragment.code.add(`\n    float getCloudShape(vec3 pos, float pOffset) {\n      const float textureWidth = float(${e.ATLAS_SIZE});\n      const float dataWidth = float(${e.ATLAS_SIZE});\n      const float tileRows = float(${e.TILE_ROWS});\n      const vec3 atlasDimensions = vec3(float(${e.TILE_SIZE}), float(${e.TILE_SIZE}), tileRows * tileRows);\n\n      //Change from Y being height to Z being height\n      vec3 p = pos.xzy;\n\n      //Pixel coordinates of point in the 3D data\n      vec3 coord = vec3(mod(p - pOffset * atlasDimensions, atlasDimensions));\n      float f = fract(coord.z);\n      float level = floor(coord.z);\n      float tileY = floor(level / tileRows);\n      float tileX = level - tileY * tileRows;\n\n      //The data coordinates are offset by the x and y tile, the two boundary cells between each tile pair and the initial boundary cell on the first row/column\n      vec2 offset = atlasDimensions.x * vec2(tileX, tileY) + 2.0 * vec2(tileX, tileY) + 1.0;\n      vec2 pixel = coord.xy + offset;\n      vec2 data = texture2D(cloudShapeTexture, mod(pixel, dataWidth) / textureWidth).xy;\n\n      return 1.0 - mix(data.x, data.y, f);\n    }`),o.fragment.code.add("\n    float clouds(vec3 p) {\n      float cloudVariations = getCloudShape(0.002 * p, 0.5);\n\n      float cloud = saturate(0.5 * mix(0.0, 1.0, min(2.0 * coverage, 1.0)));\n      cloud += (cloudVariations * 0.6 - 0.3) * ( -4.0 * (coverage * coverage - coverage));\n      float heightFraction = saturate((length(p) - cloudRadius - cloudStart) / cloudHeight);\n\n      //Round the bottom and top of the clouds\n      cloud *= saturate(remap(heightFraction, 0.0, 0.25, 0.0, 1.0)) * saturate(remap(heightFraction, 0.75, 1.0, 1.0, 0.0));\n\n      float shape = getCloudShape(cloudSize * p, 0.0);\n      shape *= mix(0.0, 1.0, min(2.0 * (1.0 - coverage), 1.0));\n      cloud = saturate(remap(cloud, shape, 1.0, 0.0, 1.0));\n\n      if (cloud <= 0.0) {\n        return 0.0;\n      }\n\n      return density * saturate(remap(cloud, smoothness * getCloudShape(detailSize * p, 0.0), 1.0, 0.0, 1.0));\n    }"),o.fragment.code.add("\n    vec2 sphereIntersections(vec3 start, vec3 dir, float radius) {\n      float a = dot(dir, dir);\n      float b = 2.0 * dot(dir, start);\n      float c = dot(start, start) - (radius * radius);\n      float d = (b * b) - 4.0 * a * c;\n\n      if (d < 0.0) {\n        return vec2(1e5, -1e5);\n      }\n\n      return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));\n    }\n\n    float HenyeyGreenstein(float g, float costh) {\n      return (1.0 / (4.0 * 3.1415))  * ((1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * costh, 1.5));\n    }\n    "),o.fragment.code.add("\n    vec3 multipleOctaves(float extinction, float mu, float stepL) {\n      float attenuation = 1.0;\n      float contribution = 1.0;\n      float phaseAttenuation = 1.0;\n      vec3 luminance = vec3(0);\n\n      for (int i = 0; i < 4; i++) {\n        float phase = mix(HenyeyGreenstein(0.0, mu), HenyeyGreenstein(0.3 * phaseAttenuation, mu), 0.7);\n        luminance += contribution * phase * exp(-stepL * extinction * sigmaE * attenuation);\n        attenuation *= 0.2;\n        contribution *= 0.6;\n        phaseAttenuation *= 0.5;\n      }\n\n      return luminance;\n    }"),o.fragment.code.add("\n    vec3 lightRay(vec3 org, vec3 p, float phaseFunction, float mu, vec3 sunDirection) {\n      float lightRayDensity = clouds(p);\n      lightRayDensity += clouds(p + sunDirection * 1.0 * stepL);\n      lightRayDensity += clouds(p + sunDirection * 2.0 * stepL);\n      lightRayDensity += clouds(p + sunDirection * 3.0 * stepL);\n      lightRayDensity += clouds(p + sunDirection * 4.0 * stepL);\n      lightRayDensity += clouds(p + sunDirection * 5.0 * stepL);\n\n      vec3 beersLaw = multipleOctaves(lightRayDensity, mu, stepL);\n\n      return mix(beersLaw * 2.0 * (1.0 - (exp(-stepL * lightRayDensity * 2.0 * sigmaE ))), beersLaw, 0.5 + 0.5 * mu);\n    }"),o.fragment.code.add('\n    vec3 mainRay(vec3 org, vec3 dir, vec3 sunDirection, float distToStart, float totalDistance, out float totalTransmittance) {\n\n      // This is never true but having the if statement stops later loop unrolling, texture prefetching and WebGL context crashes\n      if (dir.z < 0.0) {\n        return vec3(0);\n      }\n\n      //Variable to track transmittance along view ray. Assume clear sky and attenuate light when encountering clouds.\n      totalTransmittance = 1.0;\n\n      float stepS = totalDistance / float(STEPS);\n      float cameraHeight = length(org);\n\n      //Alignment of view and light directions.\n      float mu = 0.5 + 0.5 * dot(sunDirection, dir);\n      float phaseFunction = mix(HenyeyGreenstein(-0.3, mu), HenyeyGreenstein(0.3, mu), 0.7);\n\n      vec3 p = org + distToStart  * dir;\n      float dist = distToStart;\n      vec3 color = vec3(0.0);\n\n      for (int i = 0; i < STEPS; i++) {\n\n        float sampleDensity = clouds(p);\n        float sampleSigmaE = sampleDensity * sigmaE;\n\n        if (sampleDensity > 0.0 ) {\n          float ambient = mix((1.2), (1.6), saturate((length(p) - cloudRadius - cloudStart) / cloudHeight));\n\n          vec3 luminance = sampleDensity * (ambient + power * phaseFunction * lightRay(org, p, phaseFunction, mu, sunDirection));\n          float transmittance = exp(-sampleSigmaE * stepS);\n\n          //Better energy conserving integration\n          //"From Physically based sky, atmosphere and cloud rendering in Frostbite" 5.6\n          color += totalTransmittance * (luminance - luminance * transmittance) / sampleSigmaE;\n\n          totalTransmittance *= transmittance;\n\n          //If ray combined transmittance is close to 0, nothing beyond this sample point is visible, so break early.\n          if (totalTransmittance <= 0.001) {\n            totalTransmittance = 0.0;\n            break;\n          }\n\n        }\n\n        dist += stepS;\n        p = org + dir * dist;\n      }\n\n      return color;\n    }'),o.fragment.code.add("\n    void main() {\n      vec3 rayDir = rayDirection(gl_FragCoord.xy);\n      rayDir = normalize(viewMatrix * rayDir);\n\n      vec3 viewPos = vec3(0, 0, cloudRadius + 1.0);\n\n      bool hitsPlanet = rayDir.z < 0.0;\n\n      if (hitsPlanet) {\n        gl_FragColor = vec4(vec3(0), 1);\n        return;\n      }\n\n      vec2 rayStartIntersect = sphereIntersections(viewPos, rayDir, cloudRadius + cloudStart);\n      vec2 rayEndIntersect = sphereIntersections(viewPos, rayDir, cloudRadius + cloudStart + cloudHeight);\n      float distToStart = rayStartIntersect.y;\n      float totalDistance = rayEndIntersect.y - distToStart;\n\n      float totalTransmittance = 1.0;\n      vec3 sunDirection = normalize(vec3(0, 0, 1));\n      vec3 col = 0.5 * mainRay(viewPos, rayDir, sunDirection, distToStart, totalDistance, totalTransmittance).rgb;\n\n      gl_FragColor = vec4(col, totalTransmittance);\n    }\n  "),o}const i=Object.freeze({__proto__:null,build:o});t.CloudsShader=i,t.build=o}));
