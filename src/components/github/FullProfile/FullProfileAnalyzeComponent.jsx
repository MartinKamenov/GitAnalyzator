import React from 'react';
import PropTypes from 'prop-types';
import ProgrammingLanguageImages from '../../contracts/ProgrammingLanguageImages';
import ChartComponent from '../Chart/ChartComponent';
import PieChart from 'react-minimal-pie-chart';

const FullProfileAnalyzeComponent = ({ profile }) => {
    const profileAnalyze = profile.profileAnalyze;
    if(!profileAnalyze) {
        return <div>No data for analyze</div>;
    }

    const dataArray = [{
        title: profile.username, 
        contributions: profile.data.dateContributionsNumbers.map((c, i) => { return [i, c]; })
    }];
    
    const contributionsAnalyze = profileAnalyze.contributionsAnalyze;
    let repositoriesAnalyze = profileAnalyze.repositoriesAnalyze;

    if(!contributionsAnalyze || !repositoriesAnalyze) {
        return <div>No data for analyze</div>;
    }

    const pieChartData = repositoriesAnalyze.map((repoInfo) => {
        const language = ProgrammingLanguageImages[repoInfo.repo] ?
            repoInfo.repo : 'undefined';
        return {
            title: repoInfo.repo,
            value: repoInfo.count,
            color: ProgrammingLanguageImages.getLanguageColor(language)
        };
    });

    repositoriesAnalyze = repositoriesAnalyze.filter((repoInfo) => repoInfo.repo);
    let mainLanguage = null;
    if(repositoriesAnalyze.length && repositoriesAnalyze[0].count > 0) {
        mainLanguage = repositoriesAnalyze[0].repo;
    }

    return (
        <div>
            <div className='analyze-main-container-outer'>
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
                        <h2>{profile.username.substring(0, 15)}<br/>{(() => {
                            if(mainLanguage) {
                                return (mainLanguage);
                            }
                        })()}</h2>
                        <img
                            alt={profile.username}
                            className="profile-image"
                            src={profile.data.pictureUrl}>
                        </img>
                        <div>
                            <div>{contributionsAnalyze.contributorType}</div>
                            <div className="progress-label">Contribution progress</div>
                            {
                                contributionsAnalyze.sectors.map((s, i) => {
                                    return (
                                        <img
                                            alt='progress-selector'
                                            src={'/arrows/' + s + '.png'}
                                            key={i}
                                            className='sector-img'></img>);
                                })
                            }
                        </div>
                        <div>
                            {
                                repositoriesAnalyze.filter(repo => repo && repo.count > 2)
                                    .map((repo, i) => {
                                        return (
                                            <span
                                                className='repo-label'
                                                key={i}>#{repo.repo}</span>
                                        );
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="analyze-chart">
                <ChartComponent dataArray={dataArray}/>
            </div>
            <div className='pie-container'>
                <PieChart data={pieChartData} animate={true}/>
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