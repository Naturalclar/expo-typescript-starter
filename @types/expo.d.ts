import * as React from "react";
import { ViewStyle } from "react-native";

declare module "expo" {
  interface IconProps {
    name: string;
    size: number;
    style: ViewStyle;
    color: string;
  }
  class GeneralIcon extends React.Component<IconProps> {
    static font: any;
  }
  namespace Icon {
    class Ionicons extends GeneralIcon {}
  }
}
