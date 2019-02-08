import React from 'react';
import PropTypes from 'prop-types';
const ProgrammingLanguageImages = require('../../../contracts/ProgrammingLanguageImages');

const SearchingLanguageComponent = ({ onLanguageChanged }) => {
    let keys = Object.keys(ProgrammingLanguageImages.default);
    const indexUndefined = keys.indexOf('undefined');
    keys = keys.slice(0, indexUndefined);
    const languages = [];
    keys.forEach((key) => languages.push({
        name: key,
        imageSrc: ProgrammingLanguageImages.default[key]
    }));

    return (
        <div className='language-container'>
            {languages.map((lang) => (
                <span key={lang.name}>
                    <img
                        alt={lang.name}
                        src={lang.imageSrc}
                        title={lang.name}
                        className='small-language-img'>
                    </img>
                </span>
            ))}
            
        </div>
    );
};

SearchingLanguageComponent.propTypes = {
    onLanguageChanged: PropTypes.func.isRequired
};
 
export default SearchingLanguageComponent;