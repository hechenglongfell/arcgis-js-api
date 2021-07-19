/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(A){"use strict";const T=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],B=["آ","أ","إ","ا"],_=["ﻵ","ﻷ","ﻹ","ﻻ"],U=["ﻶ","ﻸ","ﻺ","ﻼ"],e=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ"],a=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺉ","ﺅ"],l=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺊ","ﺆ"],i=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ","ﺌ","ﺆ"],r=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺋ","ﺅ"],E=["ء","آ","أ","ؤ","إ","ا","ة","د","ذ","ر","ز","و","ى"],t=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],n=["ء","ف"],o=["غ","ي"],L=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],S=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],b=0,F=1,m=2,N=3,R=4,d=5,s=6,f=7,c=8,O=9,M=10,p=11,I=12,P=13,u=14,v=15,y=16,C=17,D=18,W=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],g=100,j=[g+0,b,b,b,b,g+1,g+2,g+3,F,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,g+4,R,R,R,b,R,b,R,b,R,R,R,b,b,R,R,b,b,b,b,b,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,b,b,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,b,b,b,b,b,b,b,b,b,b,b,b,b,b,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,b,b,R,R,b,b,R,R,b,b,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,b,b,b,g+5,f,f,g+6,g+7],w=[[D,D,D,D,D,D,D,D,D,s,d,s,c,d,D,D,D,D,D,D,D,D,D,D,D,D,D,D,d,d,d,s,c,R,R,p,p,p,R,R,R,R,R,M,O,M,O,O,m,m,m,m,m,m,m,m,m,m,O,R,R,R,R,R,R,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,R,R,R,R,R,R,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,R,R,R,R,D,D,D,D,D,D,d,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,O,R,p,p,p,p,R,R,R,R,b,R,R,D,R,R,p,p,m,m,R,b,R,R,R,m,b,R,R,R,R,R,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,R,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,R,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,R,R,R,R,R,R,R,R,R,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,R,R,b,b,b,b,b,b,b,R,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,R,b,R,R,R,R,R,R,R,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,F,I,F,I,I,F,I,I,F,I,R,R,R,R,R,R,R,R,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,R,R,R,R,R,F,F,F,F,F,R,R,R,R,R,R,R,R,R,R,R],[N,N,N,N,R,R,R,R,f,p,p,f,O,f,R,R,I,I,I,I,I,I,I,I,I,I,I,f,R,R,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,N,N,N,N,N,N,N,N,N,N,p,N,N,f,f,f,I,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,I,I,I,I,I,I,I,N,R,I,I,I,I,I,I,f,f,I,I,R,I,I,I,I,f,f,m,m,m,m,m,m,m,m,m,m,f,f,f,f,f,f],[f,f,f,f,f,f,f,f,f,f,f,f,f,f,R,f,f,I,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,R,R,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,I,I,I,I,I,I,I,I,I,I,I,f,R,R,R,R,R,R,R,R,R,R,R,R,R,R,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,I,I,I,I,I,I,I,I,I,F,F,R,R,R,R,F,R,R,R,R,R],[c,c,c,c,c,c,c,c,c,c,c,D,D,D,b,F,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,c,d,P,u,v,y,C,O,p,p,p,p,p,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,O,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,c,D,D,D,D,D,R,R,R,R,R,D,D,D,D,D,D,m,b,R,R,m,m,m,m,m,m,M,M,R,R,R,b,m,m,m,m,m,m,m,m,m,m,M,M,R,R,R,R,b,b,b,b,b,b,b,b,b,b,b,b,b,R,R,R,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R],[b,b,b,b,b,b,b,R,R,R,R,R,R,R,R,R,R,R,R,b,b,b,b,b,R,R,R,R,R,F,I,F,F,F,F,F,F,F,F,F,F,M,F,F,F,F,F,F,F,F,F,F,F,F,F,R,F,F,F,F,F,R,F,R,F,F,R,F,F,R,F,F,F,F,F,F,F,F,F,F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],[I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,I,I,I,I,I,I,I,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,O,R,O,R,R,O,R,R,R,R,R,R,R,R,R,p,R,R,M,M,R,R,R,R,R,p,p,R,R,R,R,R,f,f,f,f,f,R,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,R,R,D],[R,R,R,p,p,p,R,R,R,R,R,M,O,M,O,O,m,m,m,m,m,m,m,m,m,m,O,R,R,R,R,R,R,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,R,R,R,R,R,R,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,R,R,R,R,R,R,R,R,R,R,R,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,R,R,R,b,b,b,b,b,b,R,R,b,b,b,b,b,b,R,R,b,b,b,b,b,b,R,R,b,b,b,R,R,R,p,p,R,R,R,p,p,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R]];A.AlefTable=B,A.ArabicAlefBetIntervalsBegine=n,A.ArabicAlefBetIntervalsEnd=o,A.BaseForm=e,A.FETo06Table=t,A.FinalForm=l,A.InitialForm=r,A.IsolatedForm=a,A.LamAlefInialTableFE=_,A.LamAlefMedialTableFE=U,A.MedialForm=i,A.PrimaryTable=j,A.StandAlonForm=E,A.SwapTable=T,A.TBBASE=g,A.TYPES_NAMES=W,A.UBAT_AL=f,A.UBAT_AN=N,A.UBAT_B=d,A.UBAT_BN=D,A.UBAT_CS=O,A.UBAT_EN=m,A.UBAT_ES=M,A.UBAT_ET=p,A.UBAT_L=b,A.UBAT_LRE=P,A.UBAT_LRO=y,A.UBAT_NSM=I,A.UBAT_ON=R,A.UBAT_PDF=v,A.UBAT_R=F,A.UBAT_RLE=u,A.UBAT_RLO=C,A.UBAT_S=s,A.UBAT_WS=c,A.UnicodeTable=w,A.impTabLtr=L,A.impTabRtl=S,Object.defineProperty(A,"__esModule",{value:!0})}));
