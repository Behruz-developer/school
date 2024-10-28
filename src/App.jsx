import React from 'react'
import Nav from './Components/Nav/Nav'
import Upcoming from './Components/Upcoming/Upcoming'
import Customer from './Components/Customer/Customer'
import Form from './Components/Form/Form'
import About from './Components/About/About'
import Additional from './Components/Additional/Additional'
import Teacher from './Components/Teacher/Teacher'
import Map from './Components/Map/Map'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Upcoming />
      <Customer />
      <Form />
      <About />
      <Form />
      <Additional />
      <Teacher />
      <Form />
      <Map/>
      <Footer/>
    </div>
  )
}

export default App
