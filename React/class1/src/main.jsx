import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import './css/UserCard.css'
import './css/QrCode.css'
import { UserCard } from './UserCard'
import { QrCode } from './QrCode'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> 
      <UserCard/>
    */}
    
   <QrCode/>

  </React.StrictMode>,
)
