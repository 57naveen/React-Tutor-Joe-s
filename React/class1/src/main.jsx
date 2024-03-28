import React from 'react'
import ReactDOM from 'react-dom/client'
// import { UserDetails } from './formSamples/UserDetails'
import { RegFrm } from './formSamples/RegFrm'
// import App from './App.jsx'
// import './index.css'
// import './css/UserCard.css'
// import './css/QrCode.css'
// import { Cart } from './formSamples/Cart'
// import { UserCard } from './UserCard'
// import { QrCode } from './QrCode'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> 
      <UserCard/>
      <QrCode/>
      <Cart/>
      <UserDetails/>
    */}
    
    <RegFrm/>
   

  </React.StrictMode>,
)
