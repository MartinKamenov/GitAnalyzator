import React, { Component, Fragment } from 'react';
import * as githubActions from '../../../actions/githubActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../Common/Loader';
import ProgrammingLanguageImages from '../../contracts/ProgrammingLanguageImages';
import PieComponent from '../Common/PieComponent';
import RepositoryContributorsListComponent from './RepositoryContributorsListComponent';
import './repository.css';

class RepositoryComponent extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        const username = this.props.match.params.username;
        const repositoryName = this.props.match.params.repositoryname;
        this.getRepository(username, repositoryName);
    }

    componentWillReceiveProps() {
        this.setState({isLoading: false});
    }
    getRepository(username, repositoryName) {
        this.props.actions.getGithubRepository(username, repositoryName);
    }
    render() {
        let pieChartData;
        if(this.props.repository.languages) {
            pieChartData = this.props.repository.languages
                .map((lang) => {
                    return {
                        title: lang.language, 
                        value: lang.percent,
                        color: ProgrammingLanguageImages.getLanguageColor(lang.language)
                    };
                })
        }
        return(
            <div className='wrapper container center'>
                {(() => {
                    if(!this.state.isLoading && this.props.repository) {
                        return (
                            <Fragment>
                                <div className='repository-wrapper'>
                                    <h3>{this.props.repository.repositoryName}</h3>
                                    <div className='repository-pie-container'>
                                        <PieComponent pieChartData={pieChartData}/>
                                    </div>
                                </div>
                                <h2 style={{color: 'white'}}>
                                    Contributors to {this.props.repository.repositoryName}
                                </h2>
                                <RepositoryContributorsListComponent
                                        contributors={this.props.repository.contributors}/>
                            </Fragment>
                        );
                    }
                    return (
                        <Loader/>
                    );
                })()}
            </div>
        );
    }
}

RepositoryComponent.propTypes = {
    repository: PropTypes.shape({
        username: PropTypes.string.isRequired,
        repositoryName: PropTypes.string.isRequired,
        contributors: PropTypes.array.isRequired,
        languages: PropTypes.array.isRequired
    }).isRequired
};

const mapStateToProps = (state) => {
    return {
        repository: state.repository
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(githubActions, dispatch)
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(RepositoryComponent);