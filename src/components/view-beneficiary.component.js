import React, {Component, Fragment} from "react";
import Navigation from "./nav.component";
import axios from "axios";
import "../css/add-ben.css"

class ViewBeneficiary extends Component {
    constructor(props) {
        super(props);
        this.state = {accounts: []};
    }

    componentDidMount() {
        (async () => {

            try {
                const token = this.props.token;

                const api = axios.create({
                    baseURL: 'http://45.77.58.134:8080',
                    headers: {'Authorization': 'Bearer ' + token}
                });

                this.setState({
                    isLoading: true
                });
                const accounts = await api.get(`/accounts/${this.props.clients[0]._id}`);

                this.setState({
                    accounts: accounts.data,
                    isLoading: false
                });
                // console.log(accounts);

            } catch (e) {
                // handle error.
                this.setState({
                    isLoading: false
                })
            }
        })();
    }

    render() {
        return (
            <Fragment>
                <Navigation clients={this.props.clients}/>
                <h1>View Beneficiary</h1>

                <div class="container">
                  <p>Name: Example Name</p>
                  <p>Bank: Bank of The Sun</p>
                  <p>Branch: Branch Name</p>
                  <p>Account Type: Savings</p>
                  <p>Account Number: 1234567</p>
                  <p>Reference: Pay Rent</p>
                </div>

                <div class="Buttons">
                  <button type="button" class="btn btn-ghost btn-ghost-bordered center-block">Edit Beneficiary</button>
                  <p></p>
                  <button type="button" class="btn btn-ghost btn-ghost-bordered center-block">Delete Beneficiary</button>
                </div>

            </Fragment>
        )
    }
}

export default ViewBeneficiary
