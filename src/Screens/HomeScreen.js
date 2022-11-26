import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../global/StyleGlobal';
import {Icon} from 'react-native-elements';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.BrandSerController}>
        {/* Brand Text */}
        <View style={styles.BrandTextController}>
          <Text style={styles.BrandText}>MOF</Text>
        </View>
        {/* search */}
        <View style={styles.SerContainer}>
          <Icon name="search" type="material" />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BrandSerController: {
    flex: 1,
    flexDirection: 'row',
  },
  BrandTextController: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 59,
  },
  BrandText: {
    fontFamily: Fonts.Playfair,
    fontWeight: '500',
    lineHeight: 32,
    fontSize: 24,
    color: Color.LightBlack,
  },
  SerContainer: {flex: 2, flexDirection: 'row'},
});
