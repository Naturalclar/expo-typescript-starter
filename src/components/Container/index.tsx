import styled from 'styled-components/native'
import { IStyled } from 'theme'

export const Container = styled.View`
  flex: 1;
  background-color: ${(props: IStyled) => props.theme.background};
  padding: 10px;
`
