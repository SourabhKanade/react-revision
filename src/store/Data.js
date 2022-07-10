import React from 'react'

function Data() {
  
  const taskHandler = () => {
  axios.post('https://jodostaging.avhan.com:4443/userBppApi/get_bpp_user', {
    method: POST,
headers: {
	"Content-Type": "application/json",
	"token": "testtoken",
   "token_secret": "testtokensecret",
},
body: {
	"bpp_user_alias": "ravokad214",
  "domain": "https://jodostaging.avhan.com:4443",
  "org_bpp_alias": "jodoorgcusLnPFXV7nv266XJ"
}
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }


  return (
    <>
    <div onSubmit={taskHandler}>
     <button>Data</button>
    </div>
    </>
 
  )
}

export default Data