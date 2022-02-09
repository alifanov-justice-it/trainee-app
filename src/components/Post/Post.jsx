import React from 'react';
import './Post.css';
import Photo1 from './Photo1.png';
import userAvatar1 from './user1.png';
import Vector from './Vector.svg';

export default function Post () {
    return (
        <div className='Post-box'>
            <div>
                <img className='Post-Photo' src={Photo1} alt='Photo'/>
            </div>
            <article className='Post-read-box'>
                <div className='Post-tag-box'>
                    <section className='Post-tag'>
                        #Typography
                    </section>
                </div>
                <div className='Post-topic-box'>
                    <p className='Post-topic'> Humane Typography in the Digital Age </p>
                </div>
                <div className='Post-text-box'>
                    <p className='Post-text'> Human beings aren’t perfect. Perfection is something that will always elude us. There will always be a small part of humanity in everything we do. No matter how small that part, we should make sure that it transcends the limits of the medium. We have to think about the message first. What type should we use and why? Does the type match the message and what?</p>
                </div>
                <div className='Post-info-box'>
                    <div className='Post-info-box__user-avatar-box'>
                        <img className='Post-info-box__user-avatar' src={userAvatar1} alt='user-avatar'/>
                    </div>
                    <div className='Post-info-box__user-name-box'>
                        <p className='Post-info-box__user-name'> Janay Wright </p>
                    </div>
                    <div className='Post-info-box__dataPost-box'>
                        <p className='Post-info-box__dataPost'> Jun 13 · 5 min read </p>
                    </div>
                    <img className='Post-info-box__vector' src={Vector} alt='Vector'/>
                    <p className='Post-info-box__views'> 1690 </p>
                </div>
            </article>
        </div>
    )
}