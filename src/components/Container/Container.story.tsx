import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from 'react-native'
import { Container } from './index'
import { withKnobs, text } from '@storybook/addon-knobs'
import { StoryContainer } from 'containers'
import { withRedux } from 'helpers'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('Container', () => (
    <StoryContainer>
      <Container>
        <Text>{text('title', 'Hello world')}</Text>
      </Container>
    </StoryContainer>
  ))
