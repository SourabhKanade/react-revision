import React from 'react';
import classes from './Details.module.css';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
// import { useDispatch } from 'react-redux';
// import {  getPosts } from  '../store/Main';


const Details = (props) => {
  let {name} = props;

  // const dispatch = useDispatch();
  // const { entities, loading } = useSelector((state) => state.entities)
  // const entities = useSelector((state) => state.entities)
  // if (loading) return <p> Loading... </p>

// const jodo = dispatch(getPosts());
// console.log(data);

  // const jodoHandler = (e) => {
  //   e.preventDefault();
  //   // console.log(data)
  //   console.log("fitr");
  //   // dispatch(getPosts());
  // }

    // dispatch(counterActions.task());
    // dispatch(getPosts());
    
  // }

  // return (
  //   <div>
  //     <h2>Blog Posts</h2>
  //     {entities.map((post) => (
  //       <p key={post.id}>{post.title}</p>
  //     ))}
  //   </div>
  // )
  return (
<>
      <div className={classes.container}>
      {/* <button onClick={jodoHandler}>jodoHandler</button> */}


    <a href='https://docs.jodoworld.com/index.php/docs/jodo-bpp-unified-toolbar/jodo-links-widget/' target='_blank' rel="noreferrer">
    <img src='https://jodostaging.avhan.com:4443/linkservice/static/media/InfoIcon.fd726316.svg' alt='info' style={{height:"25px",cursor:"pointer"}}/>
    </a>
    <div style={{marginLeft: '2rem'}}><br></br>
      <div style={{height: '140px', width:'140px'}}>
        <img src='https://jodostaging.avhan.com:4443/linkservice/static/media/svg_logo.ed2adb17.svg' alt='logo'/>
      </div>
    </div>

    <div className={classes.main_div}>
    <div className={classes.first_div}>
    <div>
      <div className={classes.user_name}>{"Sourabh"}</div>
    </div>
    <hr className={classes.horizontal_line} />
    <div className={classes.social_icons}>
      <button type='button' id='startChat' style={{pointerEvents:"auto", opacity:"unset"}}>
        <span className={classes.label}>
        <ForumOutlinedIcon />
        </span>
      </button>

      <button type='button' id='startVoiceCall' style={{pointerEvents:"auto", opacity:"unset"}}>
        <span className={classes.label}>
        <AddIcCallOutlinedIcon />
        </span>
      </button>

      <button type='button' id='startVideoCall' style={{pointerEvents:"auto", opacity:"unset"}}>
        <span className={classes.label}>
        <VideoCameraFrontOutlinedIcon />
        </span>
      </button>
    </div>
    <div>
      <div className={classes.designation}>{'Designation'}</div>
      <div className={classes.post}>{'Manager'}</div>
    </div>
    <hr className={classes.horizontal_line} />
    <div>
      <div className={classes.designation}>{'Designation'}</div>
      <div className={classes.post}>{'Manager'}</div>
    </div>
    <hr className={classes.horizontal_line} />
    <div>
      <div className={classes.designation}>{'About Me'}</div>
      <div className={classes.post}>{'Test Admin'}</div>
    </div>
    </div>
    <div className={classes.second_div}>
      <div className={classes.right}>
         <img className={classes.brand} src='https://jodostaging.avhan.com:4443/linkservice/static/media/jw.a2d8b162.png' alt='brand'/><br></br>
           <div className={classes.profile_pic}>
             <img className={classes.profile_crop} src='https://jodostaging.avhan.com:4443/upload/localhost_3000_jodoservices_widget.pngFriJun10202214:01:08GMT+0530(IndiaStandardTime)' alt='profile_pic'/>
           </div>
         <h1 style={{color:"red", fontWeight: 900, fontSize: '20px', fontFamily: 'sans-serif'}}>Sourabh Test User</h1>
         <text className={classes.posting}> Manager </text>
      </div>
    </div>

    </div>
 

    
     </div>
    </>
  )
}

export default Details