import * as React from "react";
import { storiesOf } from "@storybook/react";
import HelloWorld from "./HelloWorld";

storiesOf("atoms", module).add("Hello World", () => (
  <HelloWorld>Hello Typescript!</HelloWorld>
));
