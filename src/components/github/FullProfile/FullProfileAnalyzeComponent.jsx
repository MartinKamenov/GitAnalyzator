import React from 'react';
import PropTypes from 'prop-types';
import ProgrammingLanguageImages from '../../contracts/ProgrammingLanguageImages';

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
        <div>
            <div className='analyze-main-container'>
                <div style={
                    {backgroundImage: 'url("' + ProgrammingLanguageImages.getImageSrc(mainLanguage) + '")'}
                }
                className='analyze-container'>
                </div>
                <div className='analyze-inner-container'>
                    {
                        (() => {
                            if(profileAnalyze.followersStar) {
                                return <div>Star</div>;
                            }
                        })
                    }
                    <h2>{profile.username}<br/>{(() => {
                        if(mainLanguage) {
                            return (mainLanguage);
                        }
                    })()}</h2>
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
            </div>
        </div>
    );
};

FullProfileAnalyzeComponent.propTypes = {
    profile: PropTypes.shape({
        profileAnalyze: PropTypes.object.isRequired
    }).isRequired
};
 
export default FullProfileAnalyzeComponent;