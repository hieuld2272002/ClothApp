import {createSlice} from '@reduxjs/toolkit';
import MofshopApi from '../../api/Mofshop';

const CateListSlice = createSlice({
  name: 'Category',
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

export const getCateListAsync = async dispatch => {
  try {
    const response = await MofshopApi.get('/api/categorys/getall');
    dispatch(getAllData(response.data));
  } catch (error) {
    throw new Error(error);
  }
};

export const {getAllData} = CateListSlice.actions;
export const showData = state => state.Category.data;
export default CateListSlice.reducer;
