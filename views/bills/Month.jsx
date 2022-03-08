const React = require('react');

const Default = require('../layout/Default.jsx');

class Month extends React.Component {
    render() {
        const { bills, month } = this.props;
        return(
            <Default>
                <h1>{month}'s Expenses</h1>
                <a href="/bills">Back</a><br/><br/>
                <a href="/bills/new">Add a Bill to this Month</a><br/>
                <p>Bills:</p>
                {
                    bills.map((month) =>{
                        return(
                            <div>
                                <ol>
                                    {month.billName}
                                </ol>
                                <li>
                                    {month.billAmount}
                                </li>
                                <p>Is Bill Paid? {month.billPaid ? 'Paid in Full' : 'No, Still Need to Pay'}</p>
                                <a href={`/bills/${month}/edit`}>Edit this Expense</a>
                                <form action={`/bills/${month}?_method=DELETE`} method="POST">
                                    <input type="submit" value={`Delete this Expense`}/>
                                </form>
                            </div>
                        )
                    })
                }
             </Default>
        )
    }
};

module.exports = Month;