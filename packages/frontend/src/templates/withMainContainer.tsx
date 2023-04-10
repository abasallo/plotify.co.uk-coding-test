import { ComponentType } from 'react'

import { Container, Contents, CopyrightBox } from './MainContainer.styled.components'

import AppBar from '../components/AppBar/AppBar'
import Copyright from '../components/Copyright/Copyright'

export const withMainContainer = <T extends object>(Component: ComponentType<T>) => {
  return (props: T) => (
    <Container>
      <AppBar />
      <Contents>
        <Component {...props} />
      </Contents>
      <CopyrightBox mt={8}>
        <Copyright />
      </CopyrightBox>
    </Container>
  )
}
