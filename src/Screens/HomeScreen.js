import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {Color, Fonts} from '../global/StyleGlobal';
import {useSelector, useDispatch} from 'react-redux';
import {showData, getBannerAsync} from '../redux/Banner/BannerSlice';
import SwiperBanner from '../Components/HomeCompoments/SwiperBanner';
import CategoryList from '../Components/HomeCompoments/CategoryList';

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBannerAsync);
  }, []);
  const getData = useSelector(showData);

  return (
    <View style={styles.container}>
      {/* Brand Text */}
      <View style={styles.BrandTextContainer}>
        <Text style={styles.BrandText}>MOF</Text>
        <SwiperBanner data={getData[0]} />
      </View>
      <View style={styles.ProductWapper}>
        <CategoryList />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  BrandTextContainer: {
    flex: 3,
    alignItems: 'center',
    marginTop: 59,
  },
  BrandText: {
    fontFamily: Fonts.Playfair,
    fontWeight: '500',
    lineHeight: 32,
    fontSize: 24,
    color: Color.LightBlack,
    marginBottom: 17,
  },
  ProductWapper: {
    flex: 4,
    marginLeft: 20,
    marginRight: 17,
  },
});
