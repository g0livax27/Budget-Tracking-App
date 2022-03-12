const React = require('react');
const Default = require('./layout/Default.jsx');

class Show extends React.Component {
    render() {
        return(
            <Default>
                <header>
                    <h1>
                        Follow the Money
                    </h1>
                    <nav class="show">
                        <a href="/user/logout">Logout</a>
                        <hr/>
                    </nav>
                </header>
                <a href="/bills"><button>View Monthly Bills</button></a><br/>
                <a href="/wishlist"><button class="show">View Monthly Wish Lists</button></a>
            </Default>
        )
    }
};

module.exports = Show;