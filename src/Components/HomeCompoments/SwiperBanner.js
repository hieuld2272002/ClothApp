import {StyleSheet, View} from 'react-native';
import React from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {Dimensions} from 'react-native';
import {Image} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SwiperBanner = ({data}) => {
  return (
    <>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        data={data}
        renderItem={({item}) => (
          <View style={styles.ImgContainer}>
            <Image style={styles.ImgBanners} source={{uri: item.anh}} />
          </View>
        )}
      />
    </>
  );
};

export default SwiperBanner;

const styles = StyleSheet.create({
  ImgContainer: {
    borderRadius: 20,
  },
  ImgBanners: {
    width: SCREEN_WIDTH,
    height: 232,
    borderRadius: 40,
  },
});
