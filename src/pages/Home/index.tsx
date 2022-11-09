import React from 'react'
import { Container } from 'react-bootstrap'
import { Landing } from '../../components/Landing'
import ListProducts from '../../components/ListProducts/ListProducts'

export const Home: React.FC<{}> = () => {
  return (
    <div>
      <Landing/>
      <ListProducts/>
    </div>
    )
}
