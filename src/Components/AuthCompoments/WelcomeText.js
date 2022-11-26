import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../../global/StyleGlobal';
const WelcomeText = ({welcomeText, welcomeText2}) => {
  return (
    <View>
      <Text style={styles.welcomeText}>{welcomeText}</Text>
      <Text style={styles.welcomeText2}>{welcomeText2}</Text>
    </View>
  );
};

export default WelcomeText;

const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: Fonts.Inter,
    fontWeight: '700',
    fontSize: 22,
    marginLeft: 32,
    marginTop: 108,
    color: Color.LightBlack,
  },
  welcomeText2: {
    marginTop: 11,
    marginLeft: 32,
    fontWeight: '500',
    fontSize: 14,
    fontFamily: Fonts.Inter,
  },
});
