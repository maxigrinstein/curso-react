import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyAwesomeApp } from './MyAwesomeApp.tsx'
import { FirstStepsApp } from './FirstStepsApp.tsx'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FirstStepsApp /> */}
    <MyAwesomeApp name='Maximiliano' lastName='Grinstein'/>
  </StrictMode>,
)
