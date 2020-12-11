const {app, BrowserWindow} = require ("electron");
const path = require("path")


function createWindow(){
const win = new BrowserWindow({
    width: 800,
    height: 800,
    icon: path.join(__dirname, "imagens", "icons", "calcIcon.png")

});
win.loadFile("./src/index.html");



}

app.whenReady().then(() => {
createWindow()
});