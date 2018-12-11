import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChartComponent from '../Chart/ChartComponent';
import GithubContributionsDetails from '../Common/GihubContributionsDetails';

const GithubProfileComparer = ({ profiles }) => {
    const elements = profiles.map((profile, i) => {
        const data = profile.data;
        return (
        <div className="col-md-6" key={i}>
            <GithubContributionsDetails profile={profile}/>
        </div>
        );
    });
    return ( 
        <div>
            <h2>Profiles comparer</h2>
            <div>{
                (() => {
                    if(profiles.length) {
                        const dataArray = [];
                        profiles.map((profile, i) => {
                            const dataContributions = profile.data.dateContributionsNumbers;
                            const contributions = [];
                            dataContributions.map((c, i) => contributions.push([i, c]));
                            const classColor = i === 0 ? 
                                'first-profile-legend' : 'second-profile-legend';
                            return (
                                dataArray
                                .push({
                                    title: profile.username, 
                                    contributions,
                                    classColor }
                                ));
                        });
                        return (
                            <div className="contribution-chart">
                                <h2>Profile Comparer</h2>
                                <div>
                                    <h3 className="username-header">{profiles[0].username}</h3> vs <h3 className="username-header">{profiles[1].username}</h3>
                                </div>
                                <div className="row">
                                    {elements.map((profile) => profile)}
                                </div>
                                <ChartComponent dataArray={dataArray}/>
                            </div>
                        );
                    } else {
                        return <div>Fetching data...</div>;
                    }
                })()
            }</div>
        </div>
    );
}

GithubProfileComparer.propTypes = {
    profiles: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        profiles: state.profiles
    };
};

export default connect(mapStateToProps)(GithubProfileComparer);