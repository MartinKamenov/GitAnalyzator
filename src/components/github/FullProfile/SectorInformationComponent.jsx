import React from 'react';
import PropTypes from 'prop-types';
import ProgrammingLanguageImages from '../../contracts/ProgrammingLanguageImages';
import './css/selectorInformation.css';

const SelectorInformationComponent = ({ selectorInformation }) => {
    const title = selectorInformation.sectorTitle;
    const percentage = selectorInformation.sectorPercentage;
    let color = ProgrammingLanguageImages
        .getLanguageColor(title);
    if(!color) {
        color = '#222222';
    }
    const imageUrl = ProgrammingLanguageImages
        .getImageSrc(title);
    
    return (
        <div
            style={{backgroundColor: color}}
            className='selector-information-container'>
            <h3>{title + ' (' + percentage + '%)'}</h3>
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