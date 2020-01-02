import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ListItem from './ListItem';
import { StorybookContainer } from '../templates/StoryContainer';

storiesOf('atoms', module)
  .addDecorator(StorybookContainer)
  .add('ListItem', () => (
    <ListItem
      onPress={action('onPress')}
      name={text('name', 'Bob Dilan')}
      content={text('content', 'hello world')}
    />
  ));
