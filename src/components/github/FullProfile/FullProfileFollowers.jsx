import React from 'react';

const FullProfileFollowers = ({followers}) => (
    <div className='row'>
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
);
 
export default FullProfileFollowers;