import React from 'react'

import Navbar from './components/Navbar'
import Routes from './Routes'
import Home from './components/Home'

const App = () => {
  return (
    <div style={{display: 'flex'}}>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
