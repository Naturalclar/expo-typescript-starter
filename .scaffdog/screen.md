---
name: "screen"
description: "screen component template"
message: "Please enter the name of component to be created"
root: "src/screens"
output: "**/*"
ignore: []
---

# `{{ input }}.tsx`

```tsx
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

# `{{ input | pascal }}/{{ input | pascal }}.story.tsx`

```jsx
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import {{ input | pascal }} from './index'
import { withKnobs } from '@storybook/addon-knobs'
import { AppPage } from 'containers'
import { withRedux } from 'helpers'

storiesOf('Screens', module)
  .addDecorator(withKnobs)
  .addDecorator(withRedux())
  .add('{{ input | pascal }}', () => (
    <AppPage>
      <{{ input | pascal }} />
    </AppPage>
  ))

```

# `{{ input | pascal }}/__tests__/{{ input | pascal }}.test.tsx`

```jsx
import React from "react";
import renderer from "react-test-renderer";
import "react-native";
import { {{ input | pascal }} } from "../";

it("renders correctly", () => {
  const tree = renderer.create(<{{ input | pascal }} />).toJSON();

  expect(tree).toMatchSnapshot();
});
```
