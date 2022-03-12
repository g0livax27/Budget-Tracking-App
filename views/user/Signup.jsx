const React = require('react');
const Default = require('../layout/Default.jsx');

class Signup extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <form action="/user/signup" method="POST">
                        <fieldset>
                            <legend>
                                New User
                            </legend>
                            <label>
                                Username: <input type="text" name="username" required/>
                            </label>
                            <br/>
                            <label>
                                Password: <input type="password" name="password" required/>
                            </label>
                            <br/>
                            <input type="submit" value="Create Account"/>
                        </fieldset>
                    </form>
                </div>
            </Default>
        )
    }
};

module.exports = Signup;