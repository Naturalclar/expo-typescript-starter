import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, number } from '@storybook/addon-knobs';
import IconButton from './IconButton';
import { StorybookContainer } from '../../templates/StoryContainer';

storiesOf('atoms', module)
  .addDecorator(StorybookContainer)
  .add('IconButton', () => (
    <IconButton
      icon={text('icon', 'close')}
      onPress={action('onPress')}
      color={text('color', 'gray')}
      size={number('size', 20)}
    />
  ));
