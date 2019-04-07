---
name: "molecule"
description: "molecule component template"
message: "Please enter the name of component to be created"
root: "./src/molecules"
output: "**/*"
ignore: []
---

# `{{ input }}.tsx`

```jsx
import * as React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

interface Props {}

const {{ input }} : React.FC<Props>= ({}: Props):JSX.Element => (
<View style={styles.container}></View>
)

export default {{ input }}

```

# `{{ input }}.story.tsx`

```jsx
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { View, Text, StyleSheet } from 'react-native';
import {{ input }} from './{{input}}'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor:'dodgerblue'
  },
  component: {
    backgroundColor: 'white',
  },
})

storiesOf("molecules", module)
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
