import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './components/Home'
import Movies from './components/Movies'
import About from './components/About'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import UserWarning from './components/UserWarning'

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-[100vh] pb-[68px] relative bg-slate-200">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <UserWarning />
      </div>
    </BrowserRouter>
  )
}

export default App
