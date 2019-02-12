import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("atoms", module).add("Button", () => (
  <Button>Hello Typescript!</Button>
));
