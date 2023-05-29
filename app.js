const electron = require('electron');

let app = electron.app;
let BrowserWindow = electron.BrowserWindow;

// 注册全局快捷键
let globalShortcut = electron.globalShortcut;

let mainWindow = null;  // 声明要打开的主窗口

app.on('ready', ()=> {
    mainWindow = new BrowserWindow({
        width: 800, 
        height:800,
        webPreferences: {nodeIntegration: true, contextIsolation: false},
        enableRemoteModule: true
    });

    globalShortcut.register('ctrl+e', ()=> {
        mainWindow.loadURL('https://baidu.com');
    });
    // 判断是否注册成功
    let isRegister = globalShortcut.isRegistered('ctrl+e')? 'register success': 'register fail';
    console.log(isRegister);

    // require('./main/menu.js')
    require('@electron/remote/main').initialize()
    require('@electron/remote/main').enable(mainWindow.webContents)
    mainWindow.loadFile('index7.html');

    // BrowserView
    // let BrowserView = electron.BrowserView;
    // let view = new BrowserView();
    // mainWindow.setBrowserView(view);
    // view.setBounds({x: 0, y: 220, width: 400, height: 300});
    // view.webContents.loadURL('https://baidu.com');

    mainWindow.on('close', ()=> {
        mainWindow = null;
    });

});

app.on('will-quit', ()=> {

    globalShortcut.unregister('ctrl+e');
    globalShortcut.unregisterAll();

})

