import React from 'react';
import "./posts.scss"
import userImg1 from '../../assets/images/user.jpeg'
import userImg2 from '../../assets/images/story.jpg'
import Post from '../post/Post';
import postImg1 from '../../assets/images/login-left.jpg'
import postImg2 from '../../assets/images/register.jpg';


const Posts = () => {

    const posts = [
        {
            id: 1,
            name: "Samim Usman Chapabaj",
            userId: 101,
            profilePic: userImg1,
            description: "This is the first item with a detailed description that contains more than 10 words.",
            img: postImg1
        },
        {
            id: 2,
            name: "Akash Nil",
            userId: 102,
            profilePic: userImg2,
            description: "The second item has a unique description that provides valuable information about the item.",
            img: postImg2
        },
        {
            id: 3,
            name: "Samim Usman Chapabaj",
            userId: 101,
            profilePic: userImg1,
            description: "Item number three is described with a long description exceeding 10 words.",
            img: postImg1
        },
        {
            id: 4,
            name: "Somon Mia",
            userId: 102,
            profilePic: userImg2,
            description: "A detailed description for the fourth item that offers insights about the item.",
            img: postImg2
        },
        {
            id: 5,
            name: "Samim Usman Chapabaj",
            userId: 101,
            profilePic: userImg1,
            description: "Fifth item's description is quite informative, providing key details about the item.",
            img: postImg1
        },
        {
            id: 6,
            name: "jhon doe",
            userId: 102,
            profilePic: userImg2,
            description: "This is the sixth item, and its description is comprehensive and well-detailed.",
            img: postImg2
        }
    ];


    return (
        <div className='posts'>
            {
                posts.map(post => (
                    <Post key={post.id} post={post} />
                ))
            }
        </div>
    );
};

export default Posts;