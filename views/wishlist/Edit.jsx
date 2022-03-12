const React = require('react');
const Default = require('../layout/Default.jsx');

class Edit extends React.Component {
    render(){
        const { wishlist } = this.props;
        return(
            <Default>
                <form class="edit" action={`/wishlist/${wishlist._id}?_method=PUT`} method="POST">
                    <fieldset>
                        <legend>{`Edit ${wishlist.itemName}`}</legend>
                        <label>
                            Item Name:<input
                            type="text"
                            name="itemlName"
                            placeholder="enter item name"
                                defaultValue={wishlist.itemName}/>
                        </label><br/>
                        <label>
                            Item Amount:<input
                            type="text"
                            name="itemAmount"
                            placeholder="enter item amount"
                                defaultValue={wishlist.itemAmount}/>
                        </label><br/>
                        <label>
                            A Must Have?:{ this.props.wishlist.mustHave? <input type="checkbox" name="mustHave" defaultChecked />: <input type="checkbox" name="mustHave"/> }
                        </label>
                    </fieldset>
                    <input type="submit" value="Submit Change"/><br/>
                    <a href="/wishlist">Back to Main</a>
                </form>
            </Default>
        )
    }
};

module.exports = Edit;