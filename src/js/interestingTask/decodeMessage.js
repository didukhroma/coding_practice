console.log('interesting-task-decodeMessage.js');
const text =
  '296 land\n3 sun\n216 too\n197 huge\n237 dont\n249 such\n81 noun\n113 student\n30 brown\n111 complete\n157 play\n165 cook\n188 yard\n195 clock\n105 would\n116 plain\n293 excite\n137 fire\n178 wish\n211 cool\n87 child\n275 past\n261 colony\n186 oil\n292 dog\n125 back\n289 money\n103 kind\n19 open\n241 finger\n100 touch\n248 are\n29 dad\n236 am\n74 modern\n200 meant\n15 ocean\n229 pitch\n151 suit\n46 town\n59 east\n194 over\n108 group\n65 good\n114 kind\n170 down\n89 band\n214 especially\n164 organ\n12 of\n85 fire\n73 out\n205 area\n167 touch\n123 happen\n76 sat\n120 electric\n119 wrote\n66 buy\n8 lot\n117 stop\n133 corn\n70 where\n274 check\n75 live\n118 best\n95 hold\n9 cause\n259 grand\n223 present\n4 indicate\n150 slave\n281 we\n23 like\n110 visit\n210 state\n20 morning\n98 true\n72 are\n189 ball\n135 history\n155 seat\n6 rain\n7 less\n146 glass\n154 tone\n226 song\n202 fair\n93 element\n80 speed\n190 produce\n71 quotient\n162 sand\n143 begin\n298 moment\n122 offer\n41 probable\n68 all\n255 necessary\n153 post\n56 cent\n288 happen\n250 speech\n243 object\n234 silver\n25 third\n299 crease\n145 wait\n176 triangle\n27 idea\n233 clothe\n139 young\n62 discuss\n147 field\n212 company\n96 capital\n253 compare\n60 chart\n300 possible\n187 written\n283 remember\n168 mile\n69 cold\n152 lady\n290 felt\n265 against\n42 skin\n183 prepare\n268 he\n271 card\n130 organ\n84 object\n231 our\n22 major\n86 discuss\n13 system\n24 hole\n287 above\n184 they\n295 produce\n256 straight\n57 level\n161 though\n97 modern\n90 dry\n263 bought\n126 milk\n280 make\n94 show\n242 middle\n92 center\n33 blood\n203 speak\n107 prove\n40 select\n83 power\n35 come\n156 brown\n5 experiment\n39 strong\n262 hurry\n276 touch\n279 reach\n166 case\n64 beat\n124 over\n144 dry\n47 hill\n142 company\n1 opposite\n159 work\n34 field\n284 felt\n193 prepare\n49 now\n50 his\n136 stay\n232 toward\n221 observe\n218 time\n102 stop\n91 possible\n78 card\n224 prepare\n61 current\n238 compare\n67 neighbor\n134 thus\n131 include\n206 copy\n182 bit\n227 stead\n138 does\n285 general\n48 solve\n112 glad\n16 duck\n63 offer\n129 happen\n267 ball\n37 bread\n225 like\n2 machine\n257 come\n160 any\n291 band\n45 it\n32 section\n177 close\n277 heavy\n254 produce\n106 got\n149 possible\n82 insect\n207 way\n230 before\n54 men\n264 bird\n181 ease\n174 trade\n28 winter\n246 am\n148 repeat\n31 first\n21 to\n11 each\n140 guide\n172 column\n52 single\n213 remember\n36 wild\n272 major\n99 coast\n245 class\n217 done\n252 jump\n88 sister\n173 feel\n127 check\n199 fire\n278 nine\n185 indicate\n44 parent\n273 whole\n77 her\n101 the\n294 temperature\n258 design\n175 big\n58 skill\n235 friend\n196 hit\n169 wait\n240 instant\n14 blow\n17 about\n260 chick\n204 answer\n270 man\n26 material\n43 current\n10 think\n198 print\n163 nor\n180 better\n282 example\n220 people\n121 drink\n222 gun\n215 together\n244 cost\n51 require\n179 or\n128 people\n247 planet\n219 ease\n55 ready\n239 enough\n251 sugar\n109 deal\n79 with\n38 us\n228 share\n286 office\n141 protect\n269 low\n104 thus\n18 farm\n209 oxygen\n266 fire\n132 force\n297 select\n171 paragraph\n191 always\n115 poem\n53 chick\n158 planet\n208 fact\n192 moment\n201 term';

// const text = '3 love\n6 computers\n2 dogs\n4 cats\n1 I\n5 you';
// sorting arr
// const arr = text
//   .split('\n')
//   .map(el => el.split(' '))
//   .sort((a, b) => Number(a[0]) - Number(b[0]));
// // result
// const result = [];

// let idx = 0;
// let i = 1;
// //
// // for (let i = 1; i <= arr.length; i += 1) {
// //   idx += i;
// //   if (idx > arr.length) break;
// //   result.push(arr[idx - 1]);
// // }
// while (idx <= arr.length) {
//   idx += i;
//   result.push(arr[idx - 1]);
//   i++;
// }

function decode(message) {
  const sortArr = message
    .split('\n')
    .map(el => el.split(' '))
    .sort((a, b) => Number(a[0]) - Number(b[0]));
  const result = [];

  let idx = 0;
  //   let i = 1; //for for need to commit this line
  //while
  //   while (idx < sortArr.length) {
  //     idx += i;
  //     if (idx > sortArr.length) break;
  //     console.log(idx);
  //     result.push(sortArr[idx - 1][1]);
  //     i++;
  //   }
  //dowhile
  //   do {
  //     idx += i;
  //     if (idx > sortArr.length) break;
  //     result.push(sortArr[idx - 1][1]);
  //     i++;
  //     } while (idx <= sortArr.length);
  //for
  for (let i = 1; i <= sortArr.length; i += 1) {
    idx += i;
    if (idx > sortArr.length) break;
    result.push(sortArr[idx - 1][1]);
  }
  return result.join(' ');
}

console.log(decode(text));
