import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {Color, Fonts} from '../../global/StyleGlobal';
import {useSelector, useDispatch} from 'react-redux';
import {showData, getCateListAsync} from '../../redux/Category/CateListSlice';
const CategoryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCateListAsync);
  }, []);
  const getData = useSelector(showData);
  console.log(getData);
  return (
    <View>
      <Text style={styles.TitleTextCate}>Danh mục</Text>
      <FlatList
        data={getData}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  TitleTextCate: {
    fontWeight: '700',
    fontSize: 18,
    fontFamily: Fonts.Inter,
    color: Color.LightBlack,
    lineHeight: 22,
    letterSpacing: -0.3,
  },
});
