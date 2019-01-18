import React, {Component} from 'react';
import * as githubActions from '../../../actions/githubActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoaderComponent from '../Common/Loader';

class FullProfileComponent extends Component {
    state = {
        isLoading: true,
        currentPage: 0
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
                            return <div>{this.props.fullUser.username}</div>;
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
};

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        profiles: state.profiles
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(githubActions, dispatch)
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(FullProfileComponent);