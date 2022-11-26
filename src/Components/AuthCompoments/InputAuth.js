import {StyleSheet, View, TextInput} from 'react-native';
import {Input} from 'react-native-elements';

import React from 'react';
import {Color} from '../../global/StyleGlobal';

const InputAuth = ({typeIcon, nameIcon, placeholderText}) => {
  return (
    <View style={styles.InputBackContailer}>
      <Input
        leftIcon={{type: typeIcon, name: nameIcon}}
        placeholder={placeholderText}
        inputContainerStyle={styles.inputContainer}
        onChangeText={text => text}
      />
    </View>
  );
};

export default InputAuth;

const styles = StyleSheet.create({
  InputBackContailer: {
    width: 311,
    height: 56,
    backgroundColor: Color.InputBackGround,
    borderRadius: 32.5,
  },
  inputContainer: {
    borderBottomWidth: 0,
    marginTop: 3,
    marginLeft: 26,
  },
});
