import React,{useState} from 'react'
import "./VideoSideBar.css"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GradeIcon from '@mui/icons-material/Grade';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSideBar({likes,comments,shares}) {

    const [liked,setLiked] = useState(false)

    function HandleLike(){
        setLiked(!liked);
    }

  return (
    <div className='VideoSideBar'>
        <div 
        className='VideoSideBarOptions'
        onClick={HandleLike}
        >
            { liked ? <GradeIcon fontSize="large" /> : <StarBorderIcon fontSize='large'/>}
            <p>{ liked ? likes+1 : likes}</p>
        </div>
        <div className='VideoSideBarOptions'>
            <ChatIcon fontSize='large' />
            <p>{comments}</p>
        </div>
        <div className='VideoSideBarOptions'>
            <ShareIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSideBar