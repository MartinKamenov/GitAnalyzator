import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GithubRepositorySearch extends Component {
    state = {
        username: '',
        repositoryName: ''
    }

    handleChangeInput(event, fieldName) {
        const value = event.target.value;
        const state = this.state;
        state[fieldName] = value;
        this.setState(state);
    }

    getClassLink() {
        const className = 'send-button';
        return this.state.username && this.state.repositoryName ?
            className + ' active' : className + ' inactive';
    }

    render() {
        return (
            <div className='wrapper container center'>
                <div>
                    <div>
                        <h2>Analyze github repository</h2>
                    </div>
                    <div>
                        <input
                            onChange={(ev) => this.handleChangeInput(ev, 'username')}
                            type="text" 
                            placeholder="Github username"
                            className="form-input" />
                        <input
                            style={{marginBottom: '15px'}}
                            onChange={(ev) => this.handleChangeInput(ev, 'repositoryName')}
                            type="text" 
                            placeholder="Github repository"
                            className="form-input" />
                        <Link
                            to={'/repository/' + this.state.username + '/' + this.state.repositoryName}
                            className={this.getClassLink()}>Analyze</Link>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default GithubRepositorySearch;