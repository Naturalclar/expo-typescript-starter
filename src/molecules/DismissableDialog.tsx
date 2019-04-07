import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import DialogCloseButton from "./DialogCloseButton";
import { RoundButton } from "../atoms";
import IconText from "./IconText";

const styles = StyleSheet.create({
  modal: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24
  },
  container: {
    padding: 24,
    borderRadius: 10,
    backgroundColor: "white"
  },
  main: {
    flex: 1,
    alignItems: "center"
  },
  titleContainer: {
    marginBottom: 16
  },
  titleText: {
    fontSize: 18
  },
  bodyContainer: {
    marginBottom: 16
  },
  bodyText: {
    fontSize: 14,
    color: "gray"
  },
  checkList: {
    marginBottom: 16
  }
});

interface Props {
  title: string;
  body: string;
  onPressOk: () => void;
  onRequestClose: () => void;
  buttonText?: string;
}

const DismissableDialog: React.FC<Props> = ({
  title,
  body,
  onPressOk,
  onRequestClose,
  buttonText = "ok"
}: Props): JSX.Element => (
  <View style={styles.modal}>
    <View style={styles.container}>
      <DialogCloseButton onPress={onRequestClose} />
      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>{body}</Text>
        </View>
        <View style={styles.checkList}>
          <IconText icon="check" iconColor="#4080FD">
            個人情報が含まれてない
          </IconText>
          <IconText icon="check" iconColor="#4080FD">
            患者さんからの同意がある
          </IconText>
          <IconText icon="check" iconColor="#4080FD">
            著作権等の権利を侵害していない
          </IconText>
        </View>
        <RoundButton color="#4080FD" label={buttonText} onPress={onPressOk} />
      </View>
    </View>
  </View>
);

export default DismissableDialog;
