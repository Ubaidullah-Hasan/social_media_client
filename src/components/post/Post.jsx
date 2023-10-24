import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import './post.scss'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Comments from '../comments/Comments';

const Post = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false);

    // TEMPORARY
    const liked = false;

    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post?.profilePic} alt={post?.name} />
                        <div className='details'>
                            <Link to={`/profile/${post?.userId}`}>
                                <span className='name'>{post?.name}</span>
                            </Link>
                            <span className='date'>1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon />
                </div>

                <div className="content">
                    <p>{post?.description}</p>
                    <img src={post?.img} alt="" />
                </div>

                <div className="info">
                    <div className="item">
                        {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                        12 Likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)} >
                        <TextsmsOutlinedIcon />
                        12 Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>

                {commentOpen && <Comments />}

            </div>
        </div>
    );
};

export default Post;