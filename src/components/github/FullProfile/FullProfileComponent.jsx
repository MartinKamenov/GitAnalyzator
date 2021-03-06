import React, {Component} from 'react';
import * as githubActions from '../../../actions/githubActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoaderComponent from '../Common/Loader';
import RepositoryList from '../Profile/Repository/RepositoryList';
import TabsFullUser from '../../contracts/TabsFullUser';
import FullProfileTabListComponent from './tabs/FullProfileTabListComponent';
import FullProfileFollowers from './FullProfileFollowers';
import './css/fullProfile.css';
import FullProfileAnalyzeComponent from './FullProfileAnalyzeComponent';

class FullProfileComponent extends Component {
    state = {
        isLoading: true,
        tabs: TabsFullUser,
        tab: TabsFullUser[0],
        selectorInformation: {
            sectorTitle: '',
            sectorPercentage: 0,
        }
    }

    dismiss() {
        this.props.unmountMe();
    }
    componentDidMount() {
        const username = this.props.match.params.username;
        this.props.actions.getFullGithubUser(username);
    }

    componentWillReceiveProps(props) {
        const fullUser = props.fullUser;
        let selectorInformation = {
            sectorTitle: 'No languages',
            sectorPercentage: 0,
        };

        if(props.fullUser) {
            if(!fullUser.profileAnalyze) {
                this.setState({isLoading: false, selectorInformation});
                return;
            }

            const repositoriesAnalyze = fullUser.profileAnalyze.repositoriesAnalyze;

            if(!repositoriesAnalyze) {
                this.setState({isLoading: false, selectorInformation});
                return;
            }

            const record = repositoriesAnalyze[0];
            if(!record) {
                this.setState({isLoading: false, selectorInformation});
                return;
            }

            let percentage = record.count / (repositoriesAnalyze.map(d => d.count)
                .reduce((acc, a) => acc + a)) * 100;
            percentage = Math.round(percentage);

            selectorInformation = {
                sectorTitle: record.repo,
                sectorPercentage: percentage,
            };
        }
        this.setState({isLoading: false, selectorInformation});
    }

    changeTabHandler = (tab) => {
        this.setState({tab});
    }

    onSectorChanged = (sector, percentage) => {
        this.setState({ selectorInformation: { 
            sectorTitle: sector,
            sectorPercentage: percentage
        }});
    }
    render() {
        let fullUser = this.props.fullUser;
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
                                    return <FullProfileAnalyzeComponent
                                        profile={fullUser}
                                        selectorInformation={this.state.selectorInformation}
                                        onSectorChanged={this.onSectorChanged}/>;
                                case 'repositories':
                                    return <RepositoryList
                                        username={fullUser.username}
                                        repositories={fullUser.repositories}/>;
                                case 'followers':
                                    return <FullProfileFollowers
                                        followers={fullUser.followers}/>;
                                default:
                                    return <FullProfileAnalyzeComponent
                                        profileAnalyze profile={fullUser}/>;
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