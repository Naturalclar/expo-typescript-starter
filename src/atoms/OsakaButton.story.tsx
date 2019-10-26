import React from 'react';
import { storiesOf } from '@storybook/react';
import OsakaButton from './OsakaButton';
import { StorybookContainer } from "../templates/StoryContainer";

storiesOf("atoms", module)
  .addDecorator(StorybookContainer)
    .add("OsakaButton", () =>  <OsakaButton />);