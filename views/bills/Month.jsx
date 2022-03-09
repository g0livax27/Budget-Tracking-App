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
                <h2>Bills:</h2>
                {
                    bills.map((month) =>{
                        console.log(month);
                        return(
                            <div>
                                <ol>
                                    <h3>{month.billName}</h3>
                                </ol>
                                <li>
                                    {month.billAmount}
                                </li>
                                <h4>Is Bill Paid? {month.billPaid ? 'Paid in Full' : 'No, Still Need to Pay'}</h4>
                                <a href={`/bills/${month._id}/edit`}>Edit this Expense</a>
                                <form action={`/bills/${month._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value={`Delete this Expense`}/>
                                </form>
                                <hr/>
                            </div>
                        )
                    })
                }
             </Default>
        )
    }
};

module.exports = Month;