import React from 'react';
import PropTypes from 'prop-types';
const ProgrammingLanguageImages = require('../../../contracts/ProgrammingLanguageImages');

const SearchingLanguageComponent = ({ onLanguageChanged, selectedLanguages }) => {
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
                        onClick={() => onLanguageChanged(lang.name)}
                        alt={lang.name}
                        src={lang.imageSrc}
                        title={lang.name}
                        className={selectedLanguages.includes(lang.name) ?
                            'small-language-img active-img' :
                            'small-language-img inactive-img'}>
                    </img>
                </span>
            ))}
            
        </div>
    );
};

SearchingLanguageComponent.propTypes = {
    onLanguageChanged: PropTypes.func.isRequired,
    selectedLanguages: PropTypes.array.isRequired
};
 
export default SearchingLanguageComponent;