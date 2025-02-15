import React, {useRef} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {useStartPopup} from './StartPopupProvider';
import {useAlert} from '@components/common-popups/alert/AlertProvider';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {quizTypeState} from '@atoms/quiz/QuizAtom';
import {useRecoilState} from 'recoil';

export type RootStackParam = {
  quiz: undefined;
};

export const StartPopupManager = () => {
  const [, setQuizType] = useRecoilState(quizTypeState);

  const {type, hideStartPopup, showStartPopup} = useStartPopup();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  const {showAlert} = useAlert();
  const hideInputRef = useRef<TextInput | null>(null);

  const buttonConfig = {
    category: [
      {
        text: '십자말풀이',
        onPress: () => {
          showAlert({
            title: '평명',
            description: '현재는 이용하실 수 없습니다.',
            type: 'okay',
            onConfirm: () => {},
          });
        },
      },
      {
        text: '연습 문제',
        onPress: () => {
          hideStartPopup();
          navigation.navigate('quiz');
        },
      },
      {
        text: '모의 시험',
        onPress: () => {
          showAlert({
            title: '평명',
            description: '현재는 이용하실 수 없습니다.',
            type: 'okay',
            onConfirm: () => {},
          });
        },
      },
      {
        text: '문제 암호',
        onPress: () => {
          showAlert({
            title: '평명',
            description: '현재는 이용하실 수 없습니다.',
            type: 'okay',
            onConfirm: () => {},
          });
        },
      },
    ],
    codeForm: [
      {
        text: '코드 입력',
        onPress: () => {
          showAlert({
            title: '평명',
            description: '현재는 이용하실 수 없습니다.',
            type: 'okay',
            onConfirm: () => {},
          });
        },
      },
    ],
  };

  return (
    <Modal transparent={true} visible={!!type} animationType="fade">
      <TouchableWithoutFeedback onPress={hideStartPopup}>
        <View style={styles.alertContainer}>
          <View style={styles.alert}>
            <View style={styles.btnContainer}>
              {buttonConfig[type]?.map(({text, onPress}, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.yes}
                  onPress={onPress}>
                  <Text style={styles.buttonText}>{text}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TextInput
              ref={hideInputRef}
              style={styles.hideInput}
              autoFocus={true}
              onBlur={() => hideInputRef.current?.focus()}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alert: {
    backgroundColor: 'rgb(250, 250, 250)',
    minWidth: 240,
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  yes: {
    backgroundColor: 'none',
    width: 80,
    height: 35,
    borderRadius: 5,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
  },
  hideInput: {
    position: 'absolute',
    left: -9999,
    width: 1,
    height: 1,
  },
});
