import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChartComponent from '../Chart/ChartComponent';
import GithubContributionsDetails from '../Common/GihubContributionsDetails';
import GithubProfileLink from '../Common/GithubProfileLink';
import LoaderComponent from '../Common/Loader';

const GithubPage = ({profile}) => {
    return ( 
        <div>
            <h2>Profile Contributions Page</h2>
            {
                (() => {
                    if(profile.data) {
                        const data = [];
                        profile.data.dateContributionsNumbers.forEach((c, i) => data.push([i, c]));
                        const dataArray = [{
                            title: profile.username, 
                            contributions: data,
                            classColor: 'first-profile-legend'
                        }];
                        return (
                            <div>
                                <GithubProfileLink username={profile.username}/>
                                <GithubContributionsDetails profile={profile}/>
                                <div className="contribution-chart" >
                                    <ChartComponent dataArray={dataArray} shouldColorChart={true}/>
                                </div>
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

GithubPage.propTypes = {
    profile: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.profile
    };
};
 
export default connect(mapStateToProps)(GithubPage);