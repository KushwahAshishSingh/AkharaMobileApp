import React from 'react';
import {
  Modal as RNModal,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import type {ModalProps} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

interface IModal extends ModalProps {
  visible: boolean;
  modalHeight?: any;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({
  modalHeight,
  onClose,
  visible,
  children,
  ...props
}: IModal) => {
  const styles = useStyles({modalHeight: modalHeight});
  const height = useHeaderHeight();

  return (
    <RNModal visible={visible} onRequestClose={onClose} transparent {...props}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        keyboardVerticalOffset={height + 47}
        style={{flex: 1}}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'height '}>
        <View style={styles.modal_container}>
          <View style={styles.backdrop}>
            <TouchableOpacity
              style={styles.backdrop_touchable}
              onPress={onClose}
            />
          </View>
          <View style={styles.modal_body_wrapper}>
            <View style={styles.modal_body}>{children}</View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </RNModal>
  );
};

const useStyles = ({modalHeight}: {modalHeight: string}) => {
  return StyleSheet.create({
    modal_container: {flex: 2, backgroundColor: 'rgba(0, 0, 0, 0.1)'},
    backdrop: {flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'},
    backdrop_touchable: {height: '100%'},
    modal_body_wrapper: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      height: modalHeight,
    },
    modal_body: {
      height: '100%',
      backgroundColor: 'black',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
  });
};
