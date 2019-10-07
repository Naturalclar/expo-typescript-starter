import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Loading } from './index'
import { withKnobs } from '@storybook/addon-knobs'
import { withRedux } from 'helpers'
import { StoryContainer } from 'containers'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('Loading', () => (
    <StoryContainer>
      <Loading />
    </StoryContainer>
  ))
