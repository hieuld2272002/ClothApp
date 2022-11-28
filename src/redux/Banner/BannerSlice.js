import {createSlice} from '@reduxjs/toolkit';
import MofshopApi from '../../api/Mofshop';

const BannerSlice = createSlice({
  name: 'Banner',
  initialState: {
    data: [],
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {
    getAllData: (state, action) => {
      state.data = [action.payload];
    },
  },
});

export const getBannerAsync = async dispatch => {
  try {
    const response = await MofshopApi.get('/api/banners/getall');
    dispatch(getAllData(response.data));
  } catch (error) {
    throw new Error(error);
  }
};
export const {getAllData} = BannerSlice.actions;
export const showData = state => state.Banner.data;
export default BannerSlice.reducer;
