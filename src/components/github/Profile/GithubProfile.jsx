import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Chart } from "react-charts";

const GithubPage = ({profile}) => {
    return ( 
        <div>
            <h2>Profile Page</h2>
            <div>{profile.username}</div>
            <div>
                {
                    (() => {
                        if(profile.data) {
                            const data = [];
                            profile.data.dateContributionsNumbers.forEach((c, i) => data.push([i, c]));
                            return (
                                <div style={{
                                    width: "400px",
                                    height: "300px"
                                  }}>
                                    <span>Contributions this year:
                                    { profile.data.totalContributionsCount }
                                    </span>
                                    <Chart data={[
                                        {
                                        label: "Contributions",
                                        data
                                        }
                                    ]}
                                    axes={[
                                        { primary: true, type: "linear", position: "bottom" },
                                        { type: "linear", position: "left" }
                                    ]}/>
                                </div>
                            );
                        }
                    })()
                }
            </div>
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