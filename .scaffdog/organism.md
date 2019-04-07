---
name: "organism"
description: "organism component template"
message: "Please enter the name of component to be created"
root: "./src/organisms"
output: "**/*"
ignore: []
---

# `{{ input }}.tsx`

```jsx
import React, {Dispatch} from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { RootState, ThunkAction } from "../../types";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

interface Props {}

export const {{ input }} = ({}: Props) => (
<View style={styles.container}></View>
)

export class {{ input }} extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

const StateToProps = (state: RootState) => {
  return {

  }
}

const DispatchToProps = (dispatch: Dispatch<ThunkAction>) => {
  return {

  }
}

export default connect(StateToProps,DispatchToProps)({{ input }})

```

# `{{ input }}.story.tsx`

```jsx
import * as React from 'react';
import {View ,StyleSheet} from 'react-native'
import { storiesOf } from '@storybook/react';
import { {{ input }} } from './{{input}}'

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor:'dodgerBlue'
  },
  component: {
    backgroundColor: 'white',
  },
})

storiesOf("organisms", module)
  .addDecorator(story => (
    <View style={styles.container}>
      <View style={styles.component}>{story()}</View>
      <Text>
        Componentが見やすい様にPaddingが敷かれています。この部分は端末には表示されません。
      </Text>
    </View>
  )).add("{{input}}", () => (
  <{{ input }} />
));

```
