import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../../global/StyleGlobal';

const TextAuth = ({navigation, Text1, Text2, NavigateWhere}) => {
  return (
    <View style={styles.SignInTextController}>
      <Text style={styles.SignInText}>{Text1}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(NavigateWhere)}>
        <Text style={styles.SignInTextClick}> {Text2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextAuth;

const styles = StyleSheet.create({
  SignInTextController: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  SignInText: {
    fontSize: 14,
    fontFamily: Fonts.Inter,
    lineheight: '150%',
    color: Color.LightGrey,
    fontWeight: '500',
  },
  SignInTextClick: {
    fontWeight: '700',
    lineheight: 21,
    color: Color.LightBlack,
    fontSize: 14,
    fontFamily: Fonts.Inter,
  },
});
