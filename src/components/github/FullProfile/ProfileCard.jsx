import React from 'react';
import ProfileComponent from '../Overview/ProfileComponent';

const ProfileCard = (fullUser) => (
    <div className='profile-card row'>
        <div className='col-md-4'></div>
        <ProfileComponent profile={fullUser.profile}/>
        <div className='col-md-4'></div>
    </div>
);

 
export default ProfileCard;