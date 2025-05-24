
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
