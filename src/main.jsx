import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MovieSearchProvider from './context/MovieSearchProvider.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieSearchProvider>
      <App />
    </MovieSearchProvider>
  </StrictMode>
)
