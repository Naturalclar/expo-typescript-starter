import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DialogCloseButton from './DialogCloseButton';

storiesOf('molecules', module).add('DialogCloseButton', () => (
  <DialogCloseButton onPress={action('onPress')} />
));
