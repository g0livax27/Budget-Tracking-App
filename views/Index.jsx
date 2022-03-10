const React = require('react');
const Default = require('./layout/Default.jsx');

class Index extends React.Component {
    render() {
        return(
            <Default>
                <h1>Budget Tracking</h1>
                <nav>
                    <a href="/bills">View Monthly Bills</a><br/>
                    <hr/>
                    <a href="/wishlist">View Monthly Wish Lists</a>
                </nav>
            </Default>
        )
    }
};

module.exports = Index;