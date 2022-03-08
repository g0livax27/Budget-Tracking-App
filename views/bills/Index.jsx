const React = require('react');
const Default = require('../layout/Default.jsx');

class Index extends React.Component {
    render() {
        const { bills } = this.props;
        return(
                <Default>
                    <h1>Track Your Finances</h1>
                    <nav>
                        <a href="/bills/new">Enter Monthly Expenses</a>
                    </nav>
                    
                    <ul>
                    {
                        bills.map((bill) => { 
                            return(
                                <li>
                                    {bill.month}<br/>
                                    <a href={`/bills/${bill.month}`}>View Expenses</a>
                                    <form action={`/bills/${bill._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value={`Delete`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                    </ul>
                </Default>
        )
    }
};

module.exports = Index;