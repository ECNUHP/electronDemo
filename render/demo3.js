const {shell} = require('electron');
let ele = document.querySelector('#ahref');

ele.onclick = function(e) {
    e.preventDefault();
    let href = this.getAttribute('href');
    shell.openExternal(href);

}

let mybtn = document.querySelector('#mybtn');
// mybtn.onclick = function(e) {
//     window.open('https://baidu.com');
// }

mybtn.onclick = function(e) {
    window.open('./popup_page.html');
}

window.addEventListener('message', (msg) => {

    let mytext = document.querySelector('#mytext');
    mytext.innerHTML = msg.data;
})