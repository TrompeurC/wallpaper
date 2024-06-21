import { IpcMainEvent, ipcMain } from "electron";
import path from "path";

import wallpaper from 'wallpaper'
import { download } from "./utils";

ipcMain.on('setWallpaper', async (_: IpcMainEvent, url:string , toSavePath: string) => {
  console.log(url)
  const filepath = await download(url, path.resolve(toSavePath, url.split('/').pop()!))
  wallpaper.set(filepath, {screen: 'all',scale: 'auto'})
})
