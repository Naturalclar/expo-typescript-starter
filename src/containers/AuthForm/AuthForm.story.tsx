import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { AuthForm } from './index'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { StoryContainer } from 'containers'
import { withRedux } from 'helpers'

storiesOf('Containers', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('AuthForm', () => (
    <StoryContainer>
      <AuthForm
        loading={boolean('loading', false)}
        onFacebook={action('onFacebook')}
        onSubmit={action('onSubmit')}
      />
    </StoryContainer>
  ))
