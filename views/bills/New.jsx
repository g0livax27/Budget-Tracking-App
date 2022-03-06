const React = require('react');

class New extends React.Component {
    render() {
        return(
        <div>
            <h1>Welcome! This is the New Page</h1>
            <nav>
                <a href="/bills">Go Back to the Bills Index Page</a>
            </nav>
            <form action="/bills" method="POST">
                Bill Amount: <input name="amount" type="text"/><br/>
                Name of Bill: <input name="billName" type="text"/><br/>
                Bill Paid?: <input name="billPaid" type="checkbox"/><br/>
                <input type="submit" value="Enter Expense"/>
            </form>
        </div>    
        )
    }
}

module.exports = New;