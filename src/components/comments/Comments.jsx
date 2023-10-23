import React, { useContext } from 'react';
import "./comments.scss"
import img1 from "../../assets/images/story.jpg"
import img2 from "../../assets/images/user.jpeg"
import { AuthContext } from '../../context/AuthContextProvider';

const Comments = () => {
    const {currentUser} = useContext(AuthContext);

    // TEMPORARY
    const comments = [
        {
            id: 1,
            description: "Great post!",
            profilePicture: img1,
            userId: 101,
            name: "John Doe"
        },
        {
            id: 2,
            description: "I love this content!",
            profilePicture: img1,
            userId: 102,
            name: "Jane Smith"
        },
        {
            id: 3,
            description: "Awesome!",
            profilePicture: img1,
            userId: 103,
            name: "Alice Johnson"
        },
        {
            id: 4,
            description: "Keep it up!",
            profilePicture: img2,
            userId: 104,
            name: "Bob Wilson"
        },
        {
            id: 5,
            description: "This is so inspiring!",
            profilePicture: img2,
            userId: 105,
            name: "Eva Davis"
        },
        {
            id: 6,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure hic, cumque magni obcaecati maiores quibusdam eius omnis nesciunt minus repellendus!",
            profilePicture: img2,
            userId: 106,
            name: "Chris Brown"
        }
    ];


    return (
        <div className='comments'>
            <div className='comment'>
                <div className='write'>
                    <img src={currentUser?.profilePic} alt={currentUser?.name} />
                    <input type="text" placeholder='Write a comment' />
                    <button>Send</button>
                </div>
            </div>
            {
                comments.map((comment) => (
                    <div className='comment' key={comment?.id}>
                        <img src={comment?.profilePicture} alt={comment?.name} />
                        <div className='info'>
                            <span>{comment?.name}</span>
                            <p className='desc'>{comment?.description}</p>
                        </div>
                        <span className='date'>1 hour ago</span>
                    </div>
                ))
            }
        </div>
    );
};

export default Comments;