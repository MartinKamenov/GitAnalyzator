import React from 'react';
import PropTypes from 'prop-types';

const FullProfileAnalyzeComponent = ({profileAnalyze}) => {
    return (
        <div>
            {
                (() => {
                    if(!profileAnalyze) {
                        return <div>No data for analyze</div>;
                    }
                    
                    return <div>Analyze</div>;
                })()
            }
        </div>
    );
};

FullProfileAnalyzeComponent.propTypes = {
    profileAnalyze: PropTypes.object
};
 
export default FullProfileAnalyzeComponent;