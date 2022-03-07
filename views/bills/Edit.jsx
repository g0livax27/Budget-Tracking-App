const React = require('react');
const Default = require('../layout/Default.jsx');

class Edit extends React.Component {
    render(){
        const { bills } = this.props;
        return(
            <Default>
                <form action={`/bills/${bills._id}?_method=PUT`} method="post">
                    <fieldset>
                        <legend>Edit {bills.billName}</legend>
                        <label>
                            Bill Name:<input
                            type="text"
                            name="billName"
                            placeholder="enter bill name"
                                defaultValue={bills.billName}/>
                        </label>
                        <label>
                            Bill Amount:<input
                            type="text"
                            name="billAmount"
                            placeholder="enter bill amount"
                                defaultValue={bills.billAmount}/>
                        </label>
                        <label>
                            Bill Paid?:{ this.props.bills.billPaid? <input type="checkbox" name="billName" defaultChecked />: <input type="checkbox" name="billName"/> }
                        </label>
                    </fieldset>
                    <input type="submit" value={`Edit ${bills.billName}`} /> <br/>
                    <a href="/bills/"><button>Back to Main</button></a>
                </form>
            </Default>
        )
    }
};

module.exports = Edit;