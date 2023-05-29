const fs = require('fs');

window.onload = function(){
    let btn = this.document.querySelector('#btn1');
    let mydiv = this.document.querySelector('#mydiv');

    btn.onclick = function() {
        fs.readFile('name.txt', (err,data)=> {
            mydiv.innerHTML = data;
        })
    }


}