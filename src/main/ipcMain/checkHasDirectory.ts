import { ipcMain } from "electron";
import fs from 'fs'

ipcMain.handle('checkHasDirectory', (_ , dir:string) => {
  const has = fs.existsSync(dir)
  return has
})
