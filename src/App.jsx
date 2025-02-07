import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './components/Home'
import Search from './components/Search'
import About from './components/About'
import Contacts from './components/Contacts'
import UserWarning from './components/UserWarning'

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-[100vh] pb-[68px] relative bg-slate-200">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
        <UserWarning />
      </div>
    </BrowserRouter>
  )
}

export default App
