const React = require('react');
const Default = require('./layout/Default.jsx');

class Index extends React.Component {
    render() {
        return(
            <Default>
                <a href="/user/signup"><button>Signup</button></a>
                <a href="/user/login"><button>Login</button></a>
            </Default>
        )
    }
};

module.exports = Index;