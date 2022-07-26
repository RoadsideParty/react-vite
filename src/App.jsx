import { Menu } from 'antd'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.scss'
import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'
import Four from './pages/Four'

function App() {
  const menuItemList = [
    {
      label: '菜单一',
      key: '/',
      link: '/'
    },
    {
      label: '菜单二',
      key: '/two',
      link: '/two'
    },
    {
      label: '菜单三',
      key: '/three',
      link: '/three'
    },
    {
      label: '菜单四',
      key: '/four',
      link: '/four'
    }
  ]
  const navigate = useNavigate()
  const clickMenuItem = (e) => {
    navigate(e.key)
  }
  return (
    <div className="main">
      <div className="left">
        <Menu items={menuItemList} onClick={e => clickMenuItem(e)} />
      </div>
      <div className="right">
        <Routes>
          <Route index element={<One />}></Route>
          <Route path="/two" element={<Two />}></Route>
          <Route path="/three" element={<Three />}></Route>
          <Route path="/four" element={<Four />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
