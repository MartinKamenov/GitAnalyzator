import React from 'react';
import PropTypes from 'prop-types';

const FullProfileAnalyzeComponent = ({ profile }) => {
    const profileAnalyze = profile.profileAnalyze;
    const contributionsAnalyze = profileAnalyze.contributionsAnalyze;
    const repositoriesAnalyze = profileAnalyze.repositoriesAnalyze;
    let mainLanguage = null;
    if(repositoriesAnalyze.length && repositoriesAnalyze[0].count > 1) {
        mainLanguage = repositoriesAnalyze[0].repo;
    }
    return (
        <div>
            {
                (() => {
                    if(!profileAnalyze) {
                        return <div>No data for analyze</div>;
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
                                <h3>{mainLanguage} developer</h3>
                                <img
                                    className="profile-image"
                                    src={profile.data.pictureUrl}>
                                </img>
                            </div>
                            <div className='col-md-4'></div>
                        </div>
                    );
                })()
            }
        </div>
    );
};

FullProfileAnalyzeComponent.propTypes = {
    profile: PropTypes.shape({
        profileAnalyze: PropTypes.object.isRequired
    }).isRequired
};
 
export default FullProfileAnalyzeComponent;