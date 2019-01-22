import React from 'react';

const FullProfileFollowers = ({followers}) => (
    <div>
        {
            followers.map((follower) => 
                <a
                    className='follower-container'
                    href={'/profile/' + follower}>
                    {follower}
                </a>
            )
        }
    </div>
);
 
export default FullProfileFollowers;