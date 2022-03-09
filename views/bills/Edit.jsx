const React = require('react');
const Default = require('../layout/Default.jsx');

class Edit extends React.Component {
    render(){
        const { bills } = this.props;
        return(
            <Default>
                <form action={`/bills/${bills._id}?_method=PUT`} method="POST">
                    <fieldset>
                        <legend>{`Edit ${bills.billName}`}</legend>
                        <label>
                            Bill Name:<input
                            type="text"
                            name="billName"
                            placeholder="enter bill name"
                                defaultValue={bills.billName}/>
                        </label><br/>
                        <label>
                            Bill Amount:<input
                            type="text"
                            name="billAmount"
                            placeholder="enter bill amount"
                                defaultValue={bills.billAmount}/>
                        </label><br/>
                        <label>
                            Is Bill Paid?:{ this.props.bills.billPaid? <input type="checkbox" name="billPaid" defaultChecked />: <input type="checkbox" name="billPaid"/> }
                        </label>
                    </fieldset>
                    <input type="submit" value="Submit Change"/><br/>
                    <a href="/bills">Back to Main</a>
                </form>
            </Default>
        )
    }
};

module.exports = Edit;