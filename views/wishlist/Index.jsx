const React = require('react');
const Default = require('../layout/Default.jsx');

class Index extends React.Component {
    render() {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        return(
            <Default>
                <header>
                    <h1>Track Your Wish Lists</h1>
                    <nav>
                        <a href="/expenses">Home - </a>
                        <a href="/user/logout">Logout - </a>
                        <a href="/wishlist/new">Enter Wish List Items</a><br/><br/>
                        <hr/>
                    </nav>
                </header>
                <ol>
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
                </ol>
            </Default>
        )
    }
};

module.exports = Index;