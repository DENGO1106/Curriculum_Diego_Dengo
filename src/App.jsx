import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'


import Dashboard from './pages/Dashboard'
import Trajectory from './pages/Trajectory'
import Certifications from './pages/Certifications'
import Vision from './pages/Vision'

function App() {
  return (
    <div className="app-container">
      <Navigation />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/trayectoria" element={<Trajectory />} />
          <Route path="/certificaciones" element={<Certifications />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>


        <Footer />
      </main>
    </div>
  )
}

export default App
