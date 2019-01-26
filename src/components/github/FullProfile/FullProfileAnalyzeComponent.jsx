import React from 'react';
import PropTypes from 'prop-types';

const FullProfileAnalyzeComponent = ({ profile }) => {
    const profileAnalyze = profile.profileAnalyze;
    if(!profileAnalyze) {
        return <div>No data for analyze</div>;
    }
    const contributionsAnalyze = profileAnalyze.contributionsAnalyze;
    const repositoriesAnalyze = profileAnalyze.repositoriesAnalyze;
    let mainLanguage = null;
    if(repositoriesAnalyze.length && repositoriesAnalyze[0].count > 1) {
        mainLanguage = repositoriesAnalyze[0].repo;
    }
    return (
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='analyze-container col-md-4'>
                {
                    (() => {
                        if(profileAnalyze.followersStar) {
                            return <div>Star</div>;
                        }
                    })
                }
                <h2>{mainLanguage} developer</h2>
                <img
                    className="profile-image"
                    src={profile.data.pictureUrl}>
                </img>
                <div>
                    <div>{contributionsAnalyze.contributorType}</div>
                    {
                        contributionsAnalyze.sectors.map((s, i) => {
                            return (
                                <img
                                    src={'/arrows/' + s + '.png'}
                                    key={i}
                                    className='sector-img'></img>);
                        })
                    }
                </div>
                <div>
                    {
                        repositoriesAnalyze.map((repo, i) => {
                            if(repo.count > 2) {
                                return (
                                    <span
                                        className='repo-label'
                                        key={i}>#{repo.repo}</span>
                                );
                            }
                        })
                    }
                </div>
            </div>
            <div className='col-md-4'></div>
        </div>
    );
};

FullProfileAnalyzeComponent.propTypes = {
    profile: PropTypes.shape({
        profileAnalyze: PropTypes.object.isRequired
    }).isRequired
};
 
export default FullProfileAnalyzeComponent;