import React from "react"
import LoginStore from './login.Store'
import UserStore from './user.Store'

class RootStore {
  // 组合模块
  constructor() {
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()
  }
}

const StoresContext = React.createContext(new RootStore())
export const useStore = () => React.useContext(StoresContext)