const React = require('react');

const Default = require('../layout/Default.jsx');

class Month extends React.Component {
    render() {
        const { bills } = this.props;
        return(
            <Default>
                <h1>{bills.month}'s Expenses</h1>
                <a href="/bills">Back</a><br/><br/>
                <a href="/months/new">Add Expense to this Month</a><br/>

                {
                    bills.map((month) =>{
                        return(
                            <div>
                                <p>Expenses:</p>
                                <p>{month.monthName}</p>
                                <li>{month.monthAmount}</li>
                                <p>Is Bill Paid? {month.monthPaid ? 'Paid in Full' : 'No, Still Need to Pay'}</p>
                                <a href={`/months/${month._id}/edit`}>Edit this Expense</a>
                            </div>
                        )
                    })
                }
             </Default>
        )
    }
};

module.exports = Month;