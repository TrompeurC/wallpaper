import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      setSaveDirectory(): Promise<string>
      checkHasDirectory(path: string): Promise<boolean>
    }
  }
}
