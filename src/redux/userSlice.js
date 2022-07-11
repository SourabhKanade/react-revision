import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
    const data = {
       "bpp_user_alias": "ravokad214",
       "domain": "https://jodostaging.avhan.com:4443",
       "org_bpp_alias": "jodoorgcusLnPFXV7nv266XJ"
     }
     const response = await axios.post('https:/jodostaging.avhan.com:4443/userBppApi/get_bpp_user', data ,{
       headers: {
         'token': 'testtoken',
         'content-type': 'application/json',
         'token_secret': 'testtokensecret',
      }
     })
    //  console.log(response)
     return response.data;
     

  });
  

export const userSlice = createSlice({
  name: "user",
  initialState: {
  entities: [],
  name: "sourabh testing",
  pending: null,
  error: false,
  },
  reducers: {
    setName(state, action){
      state.name = action.payload;
    }
  },
    // update: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    // }

    // extraReducers: (builder) => {
      
    //   // Add reducers for additional action types here, and handle loading state as needed
    //   builder.addCase(updateUser.fulfilled, (state, action) => {
    //     // Add user to the state array
    //     state.entities.push(action.payload)
    //   })
      
    // }
  extraReducers: {
    [updateUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.pending = false;
      state.entities = action.payload;
      // state.entities.push(action.payload)
    },
    [updateUser.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    }
  }
});

export const { setName } = userSlice.actions;
export default userSlice.reducer;