const React = require('react');

const Default = require('../layout/Default.jsx');

class Show extends React.Component {
    render() {
        const { bill } = this.props;
        return(
            <Default>
                <h1>{bill.month}'s Expenses</h1>
                <a href="/bills">Back</a><br/><br/>
                <a href="/bills/:month/new">Add Expense to this Month</a><br/>
                <div>
                    <p>Expenses:</p>
                    <p>{bill.billName}</p>
                    <li>{bill.billAmount}</li>
                    <p>Is Bill Paid? {bill.billPaid ? 'Paid in Full' : 'No, Still Need to Pay'}</p>
                </div>
                <a href={`/bills/expense/${bill._id}/edit`}>Edit this Expense</a>
             </Default>
        )
    }
};

module.exports = Show;