// 1-
let firstH1 = document.getElementsByTagName("h1")[0];
let header1 = firstH1.closest("header");
header1.style.border = '5px solid';

// 2- 
for (element of (Array.from(document.querySelector('.info').children))) {
    if (element.classList.contains('info-package')) {
        document.querySelectorAll('.package-title').forEach(el => { el.previousElementSibling.style.border = '2px solid blue'; console.log(el); })
        break;
    }
}

document.querySelectorAll('label').forEach(label => label.style.borderBottom = (label.classList.contains('mild') ? 'yellow solid 2px' : label.classList.contains('intense') ? 'orange solid 2px' : 'red solid 2px'));

document.querySelector('.nav-list').childNodes.forEach(n => document.querySelector('.site-map').appendChild(n.cloneNode(true)));

