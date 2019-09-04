---
name: "screen"
description: "screen component template"
message: "Please enter the name of component to be created"
root: "./src/screens"
output: "**/*"
ignore: []
---

# `{{ input }}.tsx`

```jsx
import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

type Props = {}

const {{ input }} = ({}: Props) => (
<View style={styles.container}></View>
)

export default {{ input }}

```

# `{{ input }}.story.tsx`

```jsx
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {{ input }} from './{{input}}'

storiesOf("sceens", module)
  .add("{{input}}", () =>  <{{ input }} />);
```
