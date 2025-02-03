import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center p-5">
        <section className="w-[1200px]">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
