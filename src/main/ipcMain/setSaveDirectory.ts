import { IpcMainInvokeEvent, dialog, ipcMain } from "electron";

ipcMain.handle('setSaveDirectory', async (_event: IpcMainInvokeEvent) => {
  const res = await dialog.showOpenDialog({
    title: '选择文件夹',
    message:'选择图片保存路径',
    properties: ['createDirectory', 'openDirectory'],
  })

  if(!res.canceled && res.filePaths.length) {
    return res.filePaths[0]
  }
  return ''
})
