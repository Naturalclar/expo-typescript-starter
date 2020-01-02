import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { View } from 'react-native';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import RoundButton from './RoundButton';
import { StorybookContainer } from '../../templates/StoryContainer';

storiesOf('atoms', module)
  .addDecorator(StorybookContainer)
  .add('RoundButton', () => (
    <View>
      <RoundButton
        label={text('label', 'RoundButton')}
        color={text('color', 'dodgerblue')}
        onPress={action('onPress')}
      />
    </View>
  ));
