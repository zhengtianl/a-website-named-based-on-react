// 导入路由
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// 导入页面组件
import Layout from './pages/Layout'
import Login from '@/pages/Login'
import '@/App.css'
import { AuthRoute } from './components/AuthRoute'
import Article from './pages/Article'
import Home from './pages/Home'
import Publish from './pages/Publish'
// 配置路由规则
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            {/*需要鉴权*/}
            <Route path="/" element={
              <AuthRoute>
                <Layout />
              </AuthRoute>
            }>
              <Route index element={<Home />} />
              <Route path="article" element={<Article />} />
              <Route path="Publish" element={<Publish />} />
            </Route>
            <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App