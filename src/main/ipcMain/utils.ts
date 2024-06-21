import { IpcMainEvent, dialog, ipcMain } from "electron";
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util'
import fetch from 'node-fetch';
import path from "node:path";

export const download = async ( url: string, toFile?: string) => {
  const streamPipeline = promisify(pipeline);
  const filename = url.split('/').pop()!

  const response = await fetch(url);

  if (!response.ok) {
    dialog.showErrorBox('提示', '图片下载错误！')
    throw new Error(`unexpected response ${response.statusText}`);
  }
  const filepath = path.resolve(__dirname, '../../', 'wallpaper', filename)
  await streamPipeline(response.body, createWriteStream(toFile || filepath));
  return filepath
}
