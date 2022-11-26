import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../global/StyleGlobal';
import {Button} from 'react-native-elements';

const ButtonAuth = ({Title}) => {
  return (
    <View style={styles.ButtonContailer}>
      <Button title={Title} buttonStyle={styles.buttonStyle} />
    </View>
  );
};

export default ButtonAuth;

const styles = StyleSheet.create({
  ButtonContailer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: Color.LightBlack,
    borderRadius: 32.5,
    width: 311.03,
    height: 56,
  },
});
