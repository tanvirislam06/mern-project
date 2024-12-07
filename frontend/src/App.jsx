import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <nav>NavBar</nav>
    <main className='min-h-screen'>
      <Outlet/>
    </main>
      <footer>Footer</footer>
    </>
  )
}

export default App
