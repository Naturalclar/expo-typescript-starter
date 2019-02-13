---
name: "template"
description: "template component template"
message: "Please enter the name of component to be created"
root: "./src/templates"
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

const {{ input }} = ({}: Props) => (
<View style={styles.container}></View>
)

class {{ input }} extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

export default {{ input }}

```

# `{{ input }}.story.tsx`

```jsx
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {{ input }} from './{{input}}'

storiesOf("templates", module).add("{{input}}", () => (
  <{{ input }} />
));
```
