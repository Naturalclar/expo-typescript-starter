import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import IconText from './IconText';
import { StorybookContainer } from '../templates/StoryContainer';

storiesOf('molecules', module)
  .addDecorator(StorybookContainer)
  .add('IconText', () => (
    <IconText icon={text('icon', 'check')}>
      {text('children', 'Take it easy')}
    </IconText>
  ));
