const React = require('react');
const Default = require('../layout/Default.jsx');

class New extends React.Component {
    render() {
        return(
        <Default>
            <h1>Enter a New Expense to Track Below:</h1>
            <nav>
                <a href="/bills">Back to Monthly Tracker</a>
            </nav>
            <form action="/bills" method="POST">
                Month: <input name="month" type="text"/><br/>
                Bill Amount: <input name="billAmount" type="text"/><br/>
                Name of Bill: <input name="billName" type="text"/><br/>
                Bill Paid?: <input name="billPaid" type="checkbox"/><br/>
                <input type="submit" value="Enter Expense"/>
            </form>
        </Default>    
        )
    }
}

module.exports = New;