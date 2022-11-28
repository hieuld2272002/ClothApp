import {configureStore} from '@reduxjs/toolkit';
import BannerSlice from './Banner/BannerSlice';
import CateListSlice from './Category/CateListSlice';

export default configureStore({
  reducer: {
    Banner: BannerSlice,
    CateList: CateListSlice,
  },
});
