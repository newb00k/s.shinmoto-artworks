'use strict';
{
const worksImages = [
        "img/drawing/forkagura_web.jpg",
        "img/drawing/iei_web.jpg",
        "img/drawing/aruhino_web.jpg",
        "img/drawing/jinbutu_web.jpg",
        "img/drawing/dr_dnc_1_web.jpg",
        "img/drawing/dr_dnc_2_web.jpg",
        "img/drawing/dr_dnc_3_web.jpg",
        "img/drawing/dr_dnc_4_web.jpg",
        "img/drawing/day_dr_1_web.jpg",
        "img/drawing/day_dr_2_web.jpg",
        "img/drawing/eto_tori_web.jpg",
        "img/drawing/okyakuyashiki.jpg",
];


let mt = document.getElementById('mt');

const item0 = mt.querySelectorAll('li')[0];

for(let i = mt.querySelectorAll('li').length; i < worksImages.length; i++ ) {
  const copy = item0.cloneNode(true);
  const itemNew = mt.querySelectorAll('li')[i];
  mt.insertBefore(copy, itemNew);
}

mt.querySelectorAll('img')
.forEach((img, index) => {
  img.setAttribute('src', worksImages[index]);
});
}