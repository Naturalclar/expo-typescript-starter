import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./HelloWorld";

storiesOf("atoms", module).add("Button", () => (
  <Button>Hello Typescript!</Button>
));
