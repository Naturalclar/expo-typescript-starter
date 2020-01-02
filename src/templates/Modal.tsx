import * as React from 'react';
import { Modal } from 'react-native-paper';

interface Props {
  visible: boolean;
  children: React.ReactNode;
}

const ModalTemplate: React.FC<Props> = ({
  visible,
  children,
}: Props): JSX.Element => <Modal visible={visible}>{children}</Modal>;

export default ModalTemplate;
