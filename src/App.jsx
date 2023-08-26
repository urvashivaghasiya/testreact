import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './pages/User'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /> </Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path='/user' element={<Layout><User /></Layout>} />
      </Routes >
    </>
  )
}

export default App
