import React from 'react';

import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSumit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]:value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign with your email and password</span>

                <form>
                    <input 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        required
                        onChange={this.handleChange}
                        />
                    <label>Email</label>
                    <input 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required
                        onChange={this.handleChange}
                        />
                    <labe>Password</labe>

                    <input type='Submit' value='Submit Form'/>
                </form>
            </div>
        )
    }
}

export default SignIn;