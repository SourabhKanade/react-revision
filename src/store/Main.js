import { createSlice, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import axios from 'axios';

 const initialState = {
   entities: [],
   loading: false,
 }
 
 export const getPosts = createAsyncThunk(
   'posts/getPosts',
   async (thunkAPI) => {
    const data = {
      "bpp_user_alias": "ravokad214",
      "domain": "https://jodostaging.avhan.com:4443",
      "org_bpp_alias": "jodoorgcusLnPFXV7nv266XJ"
    }
    let response = axios.post('https://jodostaging.avhan.com:4443/userBppApi/get_bpp_user', data ,{
      headers: {
        'token': 'testtoken',
        'content-type': 'application/json',
        'token_secret': 'testtokensecret',
      }
    })
    return response.data;
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // console.log("data was clicked")
 });
 
 
 export const postSlice = createSlice({
   name: 'posts',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getPosts.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    })
  },
  //  extraReducers: {

    // task: (state) => {
    //   state.entities = getPosts;
    // },
    //  [getPosts.pending]: (state) => {
    //    state.loading = true
    //  },
    //  [getPosts.fulfilled]: (state, { payload }) => {
    //    state.loading = false
    //    state.entities = payload
    //  },
    //  [getPosts.rejected]: (state) => {
    //    state.loading = false
    //  },
  // },
})
 
const postReducer = postSlice.reducer;


 const store = configureStore({reducer: {postreducer: postReducer}});
 export default store;

 export const counterActions = postSlice.actions;