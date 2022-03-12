const React = require('react');
const Default = require('./layout/Default.jsx');

class Index extends React.Component {
    render() {
        return(
            <Default>
                <h1>
                    Follow Your Money
                    
                </h1>
                <nav>
                    <a href="/user/signup"><button>Signup</button></a>
                    <a href="/user/login"><button>Login</button></a>
                </nav>
            </Default>
        )
    }
};

module.exports = Index;