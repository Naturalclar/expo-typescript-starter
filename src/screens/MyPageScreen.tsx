import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connectActionSheet } from '@expo/react-native-action-sheet';

interface Props {
  showActionSheetWithOptions: (
    options: any,
    buttonIndex: (index: number) => void
  ) => void;
}

const MyPageScreen = ({ showActionSheetWithOptions }: Props): JSX.Element => {
  const onOpenActionSheet = (): void => {
    const options = ['Foo', 'Bar', 'Cancel'];
    const okButtonIndex = 0;
    const destructionButtonIndex = 1;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      buttonIndex => {
        switch (buttonIndex) {
          case cancelButtonIndex:
            break;
          case okButtonIndex:
            break;
          case destructionButtonIndex:
            break;
          default:
            break;
        }
      }
    );
  };

  return (
    <View>
      <TouchableOpacity onPress={onOpenActionSheet}>
        <Text>Hello World!</Text>
      </TouchableOpacity>
    </View>
  );
};

MyPageScreen.navigationOptions = {
  title: 'MyPage',
};

export default connectActionSheet(MyPageScreen);
