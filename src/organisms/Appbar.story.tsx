import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Appbar from './Appbar';

storiesOf('React Native Paper', module).add('Appbar', () => (
  <Appbar
    title={text('title', 'Title')}
    subtitle={text('subtitle', 'Subtitle')}
    onPressBack={action('onPressBack')}
    onPressAction={action('onPressAction')}
  />
));
