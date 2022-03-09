const React = require('react');

const Default = require('../layout/Default.jsx');

class Show extends React.Component {
    render() {
        const { wishlist } = this.props;
        return(
            <Default>
                <h1>{wishlist.month}'s Wish List</h1>
                <a href="/wishlist">Back</a><br/><br/>
                <div>
                    <p>Wish List Items:</p>
                    <p>{wishlist.itemName}</p>
                    <li>{wishlist.itemAmount}</li>
                    <p>A Must Have? {wishlist.mustHave ? 'Absolutely Need!' : 'No, I can do without'}</p>
                </div>
                <a href={`/wishlist/expense/${wishlist._id}/edit`}>Edit this Wish List Item</a>
             </Default>
        )
    }
};

module.exports = Show;