import React, { useContext } from 'react';
import "./stories.scss"
import img from '../../assets/images/story.jpg'
import { AuthContext } from '../../context/AuthContextProvider';

const Stories = () => {
    const { currentUser } = useContext(AuthContext)

    // TEMPORARY
    const stories = [
        {
            id: 1,
            name: "Item 1",
            img: { img }
        },
        {
            id: 2,
            name: "Item 2",
            img: "image2.jpg"
        },
        {
            id: 2,
            name: "Item 2",
            img: "image2.jpg"
        }
    ];

    return (
        <div className='stories'>
            <div className='story'>
                <img src={currentUser?.profilePic} alt="" />
                <span>{currentUser?.name}</span>
                <button>+</button>
            </div>
            {
                stories.map(story => <div
                    key={story?.id}
                    className='story'
                >
                    <img src={img} alt="" />
                    <span>{story?.name}</span>
                </div>)
            }
        </div>
    );
};

export default Stories;