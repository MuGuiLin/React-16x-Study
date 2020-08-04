import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Context from './Context';
import Prompt from './Prompt';

@withRouter
class index extends Component {

    render() {
        // console.log('Provider', this.props);

        return (
            <Context.Provider value={this.props}>
                <Prompt {...this.props}></Prompt>
            </Context.Provider>
        );
    }
}

export default index;
