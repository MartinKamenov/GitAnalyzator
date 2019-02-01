import React from 'react';
import NotFoundComponent from '../Common/NotFoundComponent';

const FullProfileFollowers = ({followers}) => {
    followers = followers.map(f => f.toLowerCase());
    if(followers.length === 0) {
        return <NotFoundComponent field='followers'/>;
    }
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
    );
};
 
export default FullProfileFollowers;