import axios from "axios";

  export const getPosts = createAsyncThunk('posts/getPosts',async (thunkAPI) => {
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
