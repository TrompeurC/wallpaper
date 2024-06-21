import { IpcMainEvent, dialog, ipcMain } from "electron";
import { download } from "./utils";
import path from 'path'


ipcMain.on('downloadImage', async (_: IpcMainEvent, url:string, toSavePath: string) => {

  const filename = url.split('/').pop()!
  download(url , path.resolve(toSavePath , filename))
  // const res = await dialog.showSaveDialog({
  //   title: 'download',
  //   message: '保存图片',
  //   properties: ['createDirectory'],
  //   defaultPath:filename
  // })
  // if(!res.canceled && res.filePath) download(url,res.filePath)
})
