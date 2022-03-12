const React = require('react');
const Default = require('../layout/Default.jsx');

class New extends React.Component {
    render() {
        return(
        <Default>
            <h1>Enter a New Expense to Track Below:</h1>
            <a href="/bills">Back to Monthly Tracker</a><br/><br/>
            <form class="new" action="/bills" method="POST">
                <fieldset>
                    Month: <input name="month" type="text"/><br/>
                    Name of Bill: <input name="billName" type="text"/><br/>
                    Bill Amount: <input name="billAmount" type="text"/><br/>
                    Is Bill Paid?: <input name="billPaid" type="checkbox"/><br/>
                    <input type="submit" value="Enter Expense"/>
                </fieldset>
            </form>
        </Default>    
        )
    }
}

module.exports = New;