---
name: "component"
description: "Component component template"
message: "Please enter the name of component to be created"
root: "./src/components"
output: "**/*"
ignore: []
---

# `{{ input | pascal }}/index.tsx`

```jsx
import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  padding: 10px;
`

type Props = {}

export const {{ input | pascal }} : React.FC<Props> = ({}: Props):JSX.Element => {


  return (
    <Container>

    </Container>
    )
}

```

# `{{ input | pascal }}/{{ input | pascal }}.story.tsx`

```jsx
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import {{ input | pascal }} from './index'
import { withKnobs } from '@storybook/addon-knobs'
import { AppPage } from 'containers'
import { withRedux } from 'helpers'

storiesOf('Components', module)
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
