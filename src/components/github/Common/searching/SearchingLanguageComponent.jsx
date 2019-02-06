import React from 'react';
const ProgrammingLanguageImages = require('../../../contracts/ProgrammingLanguageImages');

const SearchingLanguageComponent = () => {
    return (
        <select>
            {
                Object.keys(ProgrammingLanguageImages).map((lang) => {
                    return <option>{lang}</option>;
                })
            }
        </select>
    );
};
 
export default SearchingLanguageComponent;