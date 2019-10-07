import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Home from './index'
import { withKnobs } from '@storybook/addon-knobs'
import { StoryContainer } from 'containers'
import { withRedux } from 'helpers'

storiesOf('Screen', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('Home', () => (
    <StoryContainer>
      <Home />
    </StoryContainer>
  ))
