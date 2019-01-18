import React, {Component} from 'react';
import * as githubActions from '../../../actions/githubActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FullProfileComponent extends Component {
    render() {
        console.log(this.props.match);
        debugger;
        return (
            <div className='wrapper container center'>
                <div>{this.props.profile}</div>
            </div>
        );
    }
}

FullProfileComponent.propTypes = {
    profile: PropTypes.shape({
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