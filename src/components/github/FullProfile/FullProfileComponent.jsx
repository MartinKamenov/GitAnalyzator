import React, {Component} from 'react';
import * as githubActions from '../../../actions/githubActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoaderComponent from '../Common/Loader';
import ProfileCard from './ProfileCard';
import FullProfileContributions from './FullProfileContributions';

class FullProfileComponent extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        const username = this.props.match.params.username;
        this.props.actions.getFullGithubUser(username);
    }

    componentWillReceiveProps(props) {
        this.setState({isLoading: false});
    }
    render() {
        return (
            <div className='wrapper container center'>
                {
                    (() => {
                        if(!this.state.isLoading) {
                            return (
                                <div>
                                    <h2>{this.props.fullUser.username}</h2>
                                    <ProfileCard profile={this.props.fullUser}/>
                                    <FullProfileContributions profile={this.props.fullUser}/>
                                </div>
                            );
                        } else {
                            return <LoaderComponent/>;
                        }
                    })()
                }
            </div>
        );
    }
}

FullProfileComponent.propTypes = {
    fullUser: PropTypes.shape({
        profile: PropTypes.shape({
            username: PropTypes.string,
            data: PropTypes.shape({
                pictureUrl: PropTypes.string,
                totalContributionsCount: PropTypes.number,
                daysWithoutContributions: PropTypes.number,
                conclussiveContributions: PropTypes.number,
                maxContributionsForDay: PropTypes.number,
                dateContributionsNumbers: PropTypes.array
            }).isRequired,
            repositories: PropTypes.array,
            followers: PropTypes.array
        }).isRequired
    }).isRequired
};

const mapStateToProps = (state) => {
    return {
        fullUser: state.fullUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(githubActions, dispatch)
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(FullProfileComponent);