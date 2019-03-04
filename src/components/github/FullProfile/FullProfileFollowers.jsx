import React from 'react';
import NotFoundComponent from '../Common/NotFoundComponent';

const FullProfileFollowers = ({followers}) => {
    debugger;
    const allFollowers = followers.map(f => f.toLowerCase());
    if(allFollowers.length === 0) {
        return <NotFoundComponent field='followers'/>;
    }
    return (
        <div className='row followers-container'>
            {
                allFollowers.map((follower) => 
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