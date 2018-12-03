import React, { Component } from 'react';

class GithubAnalyzer extends Component {
    state = {  }

    submit = () => {
        alert('submit');
    }
    render() { 
        return ( 
            <div>
                <div>
                    <h2>Analyze github profile</h2>
                </div>
                <form>
                    <input type="text" 
                    placeholder="Github profile"
                    className="form-input" />
                    <button type="submit" onSubmit={() => this.submit()} className="btn btn-success">Analyze</button>
                </form>
            </div>
        );
    }
}
 
export default GithubAnalyzer;