import React from 'react';
import PropTypes from 'prop-types';
const ProgrammingLanguageImages = require('../../../contracts/ProgrammingLanguageImages');

const SearchingLanguageComponent = ({ onLanguageChanged }) => {
    let languages = Object.keys(ProgrammingLanguageImages.default);
    const indexUndefined = languages.indexOf('undefined');
    languages = languages.slice(0, indexUndefined);
    languages.splice(0, 0, 'Programming language');

    return (
        <select
            onChange={onLanguageChanged}
            className='sorting-container'>
            {
                languages.map((lang) => {
                    return <option className="language-option">{lang}</option>;
                })
            }
        </select>
    );
};

SearchingLanguageComponent.propTypes = {
    onLanguageChanged: PropTypes.func.isRequired
};
 
export default SearchingLanguageComponent;