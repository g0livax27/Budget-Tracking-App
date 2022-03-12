const React = require('react');

const Default = require('../layout/Default.jsx');

class Month extends React.Component {
    render() {
        const { wishlist, month } = this.props;
        return(
            <Default>
                <h1>{month}'s Wish List</h1>
                <a href="/wishlist">Back</a><br/><br/>
                <a href="/wishlist/new">Add a Wish List Item</a><br/><br/>
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Item Amount</th>
                                <th>A Must Have?</th>
                                <th>Edit Item</th>
                                <th>Delete Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishlist.map((month) =>{
                                    return(
                                        <tr>
                                            <td>{month.itemName}</td>
                                            <td>${month.itemAmount}</td>
                                            <td>{month.mustHave ? 'Absolutely Need!' : 'No, I can do without'}</td>
                                            <td><a href={`/wishlist/${month._id}/edit`}>Edit</a></td>
                                            <td><form action={`/wishlist/${month._id}?_method=DELETE`} method="POST">
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