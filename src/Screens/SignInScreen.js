import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import WelcomeText from '../Components/AuthCompoments/WelcomeText';
import InputAuth from '../Components/AuthCompoments/InputAuth';
import {Color, Fonts} from '../global/StyleGlobal';
import {Button} from 'react-native-elements/dist/buttons/Button';
import ButtonAuth from '../Components/AuthCompoments/ButtonAuth';
import TextAuth from '../Components/AuthCompoments/TextAuth';

const SignInScreen = ({navigation}) => {
  return (
    <>
      <WelcomeText
        welcomeText="Chào mừng trở lại!"
        welcomeText2="Đăng nhập vào tài khoản của bạn"
      />
      {/* text input view */}
      <View style={styles.InputController}>
        <InputAuth
          typeIcon="material-community"
          nameIcon="email-check-outline"
          placeholderText="Email"
        />
        <View style={{marginTop: 12}} />
        <InputAuth
          typeIcon="material-community"
          nameIcon="lock-check-outline"
          placeholderText="Mật khẩu"
        />
      </View>
      {/* Forgot Password text */}
      <View style={styles.forgotTextController}>
        <Text style={styles.forgotText}>Quên mật khẩu?</Text>
      </View>
      {/* Button View */}
      <View style={{marginTop: 60}}>
        <ButtonAuth Title="Đăng nhập" />
      </View>
      {/* SignInScreen Press */}
      <View style={{marginTop: 52}}>
        <TextAuth
          navigation={navigation}
          NavigateWhere="SignUpScreen"
          Text1="Không có tài khoản? "
          Text2="Đăng ký"
        />
      </View>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  InputController: {
    marginTop: 64,
    alignItems: 'center',
  },
  forgotTextController: {
    alignItems: 'flex-end',
    marginRight: 43,
    marginTop: 16,
  },
  forgotText: {
    fontSize: 14,
    fontWeight: '500',
    color: Color.LightBlack,
    fontFamily: Fonts.Inter,
  },
});
