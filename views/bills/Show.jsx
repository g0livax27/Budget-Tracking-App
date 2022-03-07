const React = require('react');

const Default = require('../layout/Default.jsx');

class Show extends React.Component {
    render() {
        const bill = this.props.bill;
        return(
            <Default>
                <h1>{bill.month}'s Expenses</h1>
                <a href="/bills">Back</a><br/><br/>
                <div>
                    <p>Monthly Expense:<br/>{bill.billName}</p>
                    <p>Bill Paid:<br/>{bill.billPaid ? 'Need to Pay' : 'Paid in Full'}</p>
                </div>
                <a href={`/bills/${bill._id}/edit`}>Edit this Expense</a>
             </Default>
        )
    }
};

module.exports = Show;