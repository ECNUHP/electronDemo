const {app, Menu, BrowserWindow} = require('electron');


const isMac = process.platform === 'darwin';

let template = [
    {
        label: 'ss',
        submenu:[
            {
                label: '项目1',
                accelerator: 'ctrl+n',
                click: () => {
                    let win = new BrowserWindow({
                        width: 500,
                        height: 800,
                        webPreferences: {nodeIntegration: true}
                    });
                    win.loadFile('yellow.html');
                    win.on('closed', ()=> {
                        win = null;
                    });
                }
        
            },
            {label: '项目2'}
        ]
    },
    {
        label: '选项栏',
        submenu: [
            {label: '选项1'},
            {label: '选项2'}
        ]
    }
];

if (process.platform === 'darwin') {
    template.unshift({
        label: app.getName(),
        submenu: [
            {
                label: 'Quit',
                accelerator: 'CmdOrCtrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    });
}

let m = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(m);