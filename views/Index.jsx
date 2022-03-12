const React = require('react');
const Default = require('./layout/Default.jsx');

class Index extends React.Component {
    render() {
        return(
            <Default>
                <header>
                    <h1>
                        Follow the Money
                    </h1>
                    <nav>
                        <a href="/user/login"><button>Login</button></a>
                        <a href="/user/signup"><button>Signup</button></a>
                    </nav>
                </header>
            </Default>
        )
    }
};

module.exports = Index;