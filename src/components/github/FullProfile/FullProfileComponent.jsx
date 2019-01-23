import React, {Component} from 'react';
import * as githubActions from '../../../actions/githubActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoaderComponent from '../Common/Loader';
import ProfileCard from './ProfileCard';
import FullProfileContributions from './FullProfileContributions';
import RepositoryList from '../Profile/Repository/RepositoryList';
import TabsFullUser from '../../contracts/TabsFullUser';
import FullProfileTabListComponent from './tabs/FullProfileTabListComponent';
import FullProfileFollowers from './FullProfileFollowers';
import './css/fullProfile.css';

class FullProfileComponent extends Component {
    state = {
        isLoading: true,
        tabs: TabsFullUser,
        tab: TabsFullUser[0]
    }
    componentDidMount() {
        const username = this.props.match.params.username;
        this.props.actions.getFullGithubUser(username);
    }

    componentWillReceiveProps(props) {
        this.setState({isLoading: false});
    }

    changeTabHandler = (tab) => {
        this.setState({tab});
    }
    render() {
        const fullUser = this.props.fullUser;
        return (
            <div className='wrapper container center'>
                <FullProfileTabListComponent
                    tabs={this.state.tabs}
                    currentTab={this.state.tab}
                    changeTabHandler={this.changeTabHandler}/>
                {
                    (() => {
                        if(!this.state.isLoading) {
                            switch(this.state.tab){
                                case 'analyze':
                                    return <ProfileCard profile={fullUser}/>;
                                case 'repositories':
                                    return <RepositoryList
                                        username={fullUser.username}
                                        repositories={fullUser.repositories}/>;
                                case 'followers':
                                    return <FullProfileFollowers
                                        followers={fullUser.followers}/>;
                            }
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