import { Menu } from 'antd'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'
import Four from './pages/Four'

const MenuItemList = [
  {
    label: '菜单一',
    key: 1
  },
  {
    label: '菜单二',
    key: 2
  },
  {
    label: '菜单三',
    key: 3
  },
  {
    label: '菜单四',
    key: 4
  }
]
function App() {
  return (
    <div className="main">
      <div className="left">
        <Menu items={MenuItemList} />
      </div>
      <div className="right">
        <BrowserRouter>
          <Routes>
            <Route path="/one" element={<One />}></Route>
            <Route path="/two" element={<Two />}></Route>
            <Route path="/three" element={<Three />}></Route>
            <Route path="/four" element={<Four />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
