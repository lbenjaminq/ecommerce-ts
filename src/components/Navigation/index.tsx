import { type } from 'os'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Checkout, Home } from '../../pages'
import { NavbarComponent } from '../Navbar'

export type Props = {
  handleShow: () => void
}

export const Navigation: React.FC<Props> = ({handleShow}) => {
  return (
      <>
        <NavbarComponent handleShow={handleShow}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="checkout" element={<Checkout/>} />
        </Routes>
      </>
    )
}
