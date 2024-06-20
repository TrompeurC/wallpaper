import { IpcMainEvent, dialog, ipcMain } from "electron";
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util'
import fetch from 'node-fetch';
import path from "node:path";
import wallpaper from 'wallpaper'


ipcMain.on('setBackgroundImage', async (_: IpcMainEvent, src:string , setBg?:boolean) => {
  const streamPipeline = promisify(pipeline);
  const filename = src.split('/').pop()!

  const response = await fetch(src);

  if (!response.ok){
    dialog.showErrorBox('提示','图片下载错误！')
    throw new Error(`unexpected response ${response.statusText}`);
  }
  const filepath = path.resolve(__dirname , '../../', 'wallpaper',filename)
  await streamPipeline(response.body, createWriteStream(filepath));
  console.log(filepath)
  try {
    if(setBg) {
      wallpaper.set(filepath, {screen: 'all',scale: 'auto'})
    }
  } catch (error) {
    console.log(error)
  }
})
