const React = require('react');
const Default = require('../layout/Default.jsx');

class New extends React.Component {
    render() {
        return(
        <Default>
            <h1>Enter a New Wish List Item Below:</h1>
            <nav>
                <a href="/wishlist">Back to Monthly Wish List</a>
            </nav>
            <form action="/wishlist" method="POST">
                Month: <input name="month" type="text"/><br/>
                Wish List Item: <input name="itemName" type="text"/>
                Wish List Item Amount: <input name="itemAmount" type="text"/><br/>
                A Must Have?: <input name="mustHave" type="checkbox"/><br/>
                <input type="submit" value="Enter Wish List Item"/>
            </form>
        </Default>    
        )
    }
}

module.exports = New;