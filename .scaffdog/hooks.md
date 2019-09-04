---
name: "hooks"
description: "CustomHooks component template"
message: "Please enter the name of component to be created"
root: "./src/hooks"
output: "**/*"
ignore: []
---

# `{{ input }}.ts`

```jsx
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const {{ input }} = () => {}

```
