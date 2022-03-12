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
                <h1>Track Your Monthly Finances</h1>
                <nav>
                    <a href="/expenses"><button>Back to Main</button></a><br/>
                    <a href="/bills/new"><button>Enter an Expense</button></a><br/><br/>
                    <hr/>
                    <a href="/user/logout"><button>Logout</button></a>
                </nav>
                <ol>
                    {
                        months.map((month, i) => { 
                            return(
                                <li>
                                    {month}<br/>
                                    <a href={`/bills/${month}`}>View Expenses</a>
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