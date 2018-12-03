import React, { Component } from 'react';

class GithubComparer extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <div>
                    <h2>Compare github profiles</h2>
                </div>
                <form>
                    <input type="text" 
                    placeholder="First github profile"
                    className="form-input" />
                    <input type="text" 
                    placeholder="Second github profile"
                    className="form-input" />
                    <button type="submit" onSubmit={() => this.submit()} className="btn btn-success">Analyze</button>
                </form>
            </div>
        );
    }
}
 
export default GithubComparer;