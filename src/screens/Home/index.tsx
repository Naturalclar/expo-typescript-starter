import React from 'react'
import { Appbar, Button } from 'react-native-paper'
import { Container } from 'components'
import { useDispatch } from 'react-redux'

import { AppLanguageChange } from 'store/app/actions'
import styled from 'styled-components/native'
import { AuthForm } from 'containers'

const Divider = styled.View`
  margin-bottom: 10px;
`
interface IProps {}

export const Home: React.FC<IProps> = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Title" subtitle="Subtitle" />
        <Appbar.Action icon="search" onPress={() => console.log('teste')} />
      </Appbar.Header>
      <Container>
        <AuthForm onSubmit={console.log} onFacebook={console.log} />
        <Button
          mode="contained"
          onPress={() => dispatch(AppLanguageChange('pt'))}
        >
          Language Pt
        </Button>
        <Divider />
        <Button
          mode="contained"
          onPress={() => dispatch(AppLanguageChange('en'))}
        >
          Language en
        </Button>
        <Divider />
      </Container>
    </>
  )
}
export default Home
