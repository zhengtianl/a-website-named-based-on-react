// 导入路由
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// 导入页面组件
import Layout from './pages/Layout'
import Login from '@/pages/Login'
import { AuthRoute } from './components/AuthRoute'
// 配置路由规则
function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Routes>
            {/*需要鉴权*/}
            <Route path="/" element={
              <AuthRoute>
                <Layout/>
              </AuthRoute>}/>
            {/*不需要鉴权*/}
            <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App