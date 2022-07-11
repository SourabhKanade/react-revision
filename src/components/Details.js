import React, { useEffect } from 'react';
import classes from './Details.module.css';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import { updateUser} from '../redux/userSlice'
import { useSelector, useDispatch } from 'react-redux';


const Details = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUser());
  }, [])

  const store = useSelector((state) => state);
  const { entities } = store.user;
  
  // console.log(entities);

  return (
<>
    <div className={classes.container}>
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
      <div className={classes.user_name}>{ entities && entities.userdetails && entities.userdetails.username }</div>
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
      <div className={classes.post}>{entities && entities.userdetails && entities.userdetails.usertype }</div>
    </div>
    <hr className={classes.horizontal_line} />
    <div>
      <div className={classes.designation}>{'Department'}</div>
      <div className={classes.post}>{entities && entities.processdetails && entities.processdetails.processdesc}</div>
    </div>
    <hr className={classes.horizontal_line} />
    <div>
      <div className={classes.designation}>{'About Me'}</div>
      <div className={classes.post}>{entities && entities.userdetails && entities.userdetails.login}</div>
    </div>
    </div>
    <div className={classes.second_div}>
      <div className={classes.right}>
         <img className={classes.brand} src='https://jodostaging.avhan.com:4443/linkservice/static/media/jw.a2d8b162.png' alt='brand'/><br></br>
           <div className={classes.profile_pic}>
             <img className={classes.profile_crop} src={entities && entities.userdetails && entities.userdetails.userimage}  alt='profile_pic'/>
           </div>
         <h1 style={{color:"red", fontWeight: 900, fontSize: '20px', fontFamily: 'sans-serif'}}>{entities && entities.userdetails && entities.userdetails.username}</h1>
         <p className={classes.posting}> {entities && entities.userdetails && entities.userdetails.usertype } </p>
      </div>
    </div>
   </div>
  </div>
    </>
)
}

export default Details