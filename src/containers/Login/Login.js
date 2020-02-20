import React, { Component } from 'react';
import LoginPage from '../../components/Login/Login';

class Login extends Component {
    state = {
        checked: false
    }

    yesNoHandler = () => {
        let checked = this.state.checked;
        this.setState({ checked: !checked });
    }

    render() {
        return(
            <LoginPage 
            yesNo={this.yesNoHandler}
            checkedState={this.state.checked} />
        );
    }
}

export default Login;