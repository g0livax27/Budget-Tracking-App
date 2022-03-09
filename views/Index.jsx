const React = require('react');
const Default = require('./layout/Default.jsx');

class Index extends React.Component {
    render() {
        return(
            <Default>
                <h1>Track Your Spending</h1>
                <nav>
                    <a href="/bills">View Monthly Bills</a><br/>
                    <hr/>
                    <a href="/wishlist">View Monthly Wish List Items</a>
                </nav>
                {/* <ol>
                    {
                        months.map((month, i) => { 
                            return(
                                <li>
                                    {month}<br/>
                                    <a href={`/wishlist/${month}`}>View Wish List</a>
                                </li>
                            )
                        })
                    }
                </ol> */}
            </Default>
        )
    }
};

module.exports = Index;