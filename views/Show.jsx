const React = require('react');
const Default = require('./layout/Default.jsx');

class Show extends React.Component {
    render() {
        return(
            <Default>
                <h1>Where's Your Money?</h1>
                <nav>
                    <a href="/bills"><button>View Monthly Bills</button></a><br/>
                    <hr/>
                    <a href="/wishlist"><button>View Monthly Wish Lists</button></a><br/><br/>
                    <a href="/user/logout"><button>Logout</button></a>
                </nav>
            </Default>
        )
    }
};

module.exports = Show;