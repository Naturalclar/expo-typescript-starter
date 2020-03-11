import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {RoundButton} from '../src/atoms/button/RoundButton';

describe('RoundButton snapshot', () => {
  it('renders the loading screen', async () => {
    const tree = renderer
      .create(<RoundButton label="Hello World!" onPress={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
