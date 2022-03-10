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
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>Bill Name</th>
                                <th>Bill Amount</th>
                                <th>Is Bill Paid?</th>
                                <th>Edit Expense</th>
                                <th>Delete Expense</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bills.map((month) =>{
                                    return(
                                        <tr>
                                            <td>{month.billName}</td>
                                            <td>{month.billAmount}</td>
                                            <td>{month.billPaid ? 'Paid in Full' : 'No, Still Need to Pay'}</td>
                                            <td><a href={`/bills/${month._id}/edit`}>Edit</a></td>
                                            <td><form action={`/bills/${month._id}?_method=DELETE`} method="POST">
                                                <input type="submit" value={`Delete`}/>
                                            </form></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>   
             </Default>
        )
    }
};

module.exports = Month;