import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WelcomeText from '../Components/AuthCompoments/WelcomeText';
import InputAuth from '../Components/AuthCompoments/InputAuth';
import Spacer from '../Components/Spacer';
import ButtonAuth from '../Components/AuthCompoments/ButtonAuth';
import TextAuth from '../Components/AuthCompoments/TextAuth';
const SignUpScreen = ({navigation}) => {
  return (
    <View>
      <WelcomeText welcomeText="Bắt đầu nào" welcomeText2="Tạo tài khoản mới" />
      <View style={styles.InputController}>
        <InputAuth
          typeIcon="material-community"
          nameIcon="account-check-outline"
          placeholderText="Họ tên"
        />
        <Spacer />
        <InputAuth
          typeIcon="material-community"
          nameIcon="email-check-outline"
          placeholderText="Email"
        />
        <Spacer />
        <InputAuth
          typeIcon="material-community"
          nameIcon="phone-check-outline"
          placeholderText="Số điện thoại"
        />
        <Spacer />
        <InputAuth
          typeIcon="material-community"
          nameIcon="lock-check-outline"
          placeholderText="Mật khẩu "
        />
        <Spacer />
        <InputAuth
          typeIcon="material-community"
          nameIcon="map-marker-radius-outline"
          placeholderText="Địa chỉ"
        />
      </View>
      <View style={{marginTop: 54}}>
        <ButtonAuth Title="Đăng ký" />
      </View>
      <View style={{marginTop: 32}}>
        <TextAuth
          navigation={navigation}
          NavigateWhere="SignInScreen"
          Text1="Bạn đã có tài khoản? "
          Text2="Đăng nhập"
        />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  InputController: {
    marginTop: 60,
    alignItems: 'center',
  },
});
