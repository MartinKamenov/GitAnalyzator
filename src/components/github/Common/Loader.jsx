import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderComponent = () => {
    return ( 
        <div className='loader-container'>
            <Loader 
                type="Puff"
                color="#00BFFF"
                height="100"	
                width="100"
            />
            <span>Loading...</span>
        </div>
    );
};
 
export default LoaderComponent;