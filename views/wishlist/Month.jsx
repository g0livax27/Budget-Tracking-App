const React = require('react');

const Default = require('../layout/Default.jsx');

class Month extends React.Component {
    render() {
        const { wishlist, month } = this.props;
        return(
            <Default>
                <h1>{month}'s Wish List</h1>
                <a href="/wishlist">Back</a><br/><br/>
                <a href="/wishlist/new">Add an Item</a><br/>
                <h2>Wish List Items:</h2>
                {
                    wishlist.map((month) =>{
                        console.log(month);
                        return(
                            <div>
                                <ol>
                                    <h3>{month.itemName}</h3>
                                </ol>
                                <li>
                                    {month.itemAmount}
                                </li>
                                <h4>A Must Have? {month.mustHave ? 'Absolutely Need!' : 'No, I can do without'}</h4>
                                <a href={`/wishlist/${month._id}/edit`}>Edit this Item</a>
                                <form action={`/wishlist/${month._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value={`Delete this Item`}/>
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