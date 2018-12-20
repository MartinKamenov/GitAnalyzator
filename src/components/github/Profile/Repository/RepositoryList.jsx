import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepositoryElement from './RepositoryElement';

class RepositoryList extends Component {
    state = {

    };
    render() {
        return (
            this.props.repositories.map((repo, i) => {
                return <RepositoryElement key={i} repo={repo}/>;
            })
        );
    }
}

RepositoryList.propTypes = {
    repositories: PropTypes.array
};
 
export default RepositoryList;