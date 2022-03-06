const React = require('react');

class Index extends React.Component {
    render() {
        const bills = this.props.bills;
        return(
                <div>
                    <h1>Track Your Finances</h1>
                    <nav>
                        <a href="/bills/new">Enter New Expense</a>
                    </nav>
                    <ul>
                    {
                        bills.map((bill) => { 
                            return(
                                <li>
                                    <a href={`/bills/${bill._id}`}>{bill.billName}</a>
                                    <form action={`/bills/${bill._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value={`Delete Entry`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
        )
    }
};

module.exports = Index;