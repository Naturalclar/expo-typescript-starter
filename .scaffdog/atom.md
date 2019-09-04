---
name: "atom"
description: "Atom component template"
message: "Please enter the name of component to be created"
root: "./src/atoms"
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

const {{ input }} : React.FC<Props> = ({}: Props):JSX.Element => (
<View style={styles.container}></View>
)

export default {{ input }}

```

# `{{ input }}.story.tsx`

```jsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import {{ input }} from './{{input}}';
import { StorybookContainer } from "../templates/StoryContainer";

storiesOf("atoms", module)
  .addDecorator(StorybookContainer)
    .add("{{input}}", () =>  <{{ input }} />);
```
