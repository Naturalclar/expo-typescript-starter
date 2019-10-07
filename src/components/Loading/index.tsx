import * as React from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native-paper'
import { Container } from 'components'

const Activity = styled(ActivityIndicator)`
  color: ${props => props.theme.primary};
`

interface IProps {}

export const Loading: React.FC<IProps> = (): JSX.Element => (
  <Container>
    <Activity />
  </Container>
)
