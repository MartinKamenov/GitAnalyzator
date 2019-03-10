import React from 'react';
import PropTypes from 'prop-types';
import ProgrammingLanguageImages from '../../contracts/ProgrammingLanguageImages';
import './css/selectorInformation.css';

const SelectorInformationComponent = ({ selectorInformation }) => {
    const title = selectorInformation.sectorTitle;
    const color = ProgrammingLanguageImages
        .getLanguageColor(title);
    const imageUrl = ProgrammingLanguageImages
        .getImageSrc(title);
    
    return (
        <div className='selector-information-container'
            style={{backgroundColor: color}}>
            <img
                className='pie-image'
                src={imageUrl}
                alt={title}/>
        </div>
    );
}

SelectorInformationComponent.propTypes = {
    selectorInformation: PropTypes.shape({
        sectorTitle: PropTypes.string.isRequired,
        sectorPercentage: PropTypes.number.isRequired
    }).isRequired
};
 
export default SelectorInformationComponent;