const React = require('react');
const Default = require('../layout/Default.jsx');

class Login extends React.Component{
    render(){
        return(
            <div>
                <form action="/user/login" method="POST">
                    <fieldset>
                        <legend>
                            User Login
                        </legend>
                        <label>
                            Username: <input type="text" name="username"  required/>
                        </label>
                        <br/>
                        <label>
                            Password: <input type="password" name="password" required/>
                        </label>
                        <br/>
                        <input type="submit" value="Login"/>
                    </fieldset>
                </form>
            </div>
        )
    }
};

module.exports = Login;