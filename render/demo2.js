const btn  = this.document.querySelector('#btn');
const {BrowserWindow, Menu, getCurrentWindow} = require('@electron/remote');


window.onload = function() {
    btn.onclick = () => {
        newWin = new BrowserWindow({
            width: 800,
            height: 600
        });
        newWin.loadFile('yellow.html');
        newWin.on('close', ()=> {
            newWin = null;
        });

    }
}

let rightTemplate = [
    {
        label: '粘贴',
        accelerator: 'ctrl+v',
    },
    {
        label: '复制',
        accelerator: 'ctrl+c',
    }
];

let m = Menu.buildFromTemplate(rightTemplate);

window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    m.popup({window: getCurrentWindow()})

});