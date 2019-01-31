import React from 'react';

const FullProfileFollowers = ({followers}) => {
    followers = followers.map(f => f.toLowerCase());
    return (
        <div className='row followers-container'>
            {
                followers.map((follower) => 
                    <a
                        className='follower-container col-md-2'
                        href={'/profile/' + follower}>
                        {follower}
                    </a>
                )
            }
        </div>
)};
 
export default FullProfileFollowers;