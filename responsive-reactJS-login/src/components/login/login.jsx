import React from 'react';
import logingImg from '../../hacker.svg';

export class Login extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={logingImg} alt="Hacker login"/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="btn">
                    <button type="button" className="btn">
                        Login
                    </button>
                </div>
            </div>
        </div>
        );
    }
}