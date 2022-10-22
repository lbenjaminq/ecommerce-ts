import React from 'react'
import { Container } from 'react-bootstrap'
import ListProducts from '../../components/ListProducts/ListProducts'

export const Home: React.FC<{}> = () => {
  return (
    <Container>
      <ListProducts/>
    </Container>
    )
}
