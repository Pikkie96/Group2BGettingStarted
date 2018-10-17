import React, {Component, Fragment} from "react";
import Navigation from "./nav.component";
import axios from "axios";
import "../css/view-acc.css"

class ViewAccounts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          accounts: [],
        };
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
                <h1>View Accounts</h1>

                {this.state.accounts.map((x)=>(
                <div class="container">
                  <p>{`${x.type}`}</p>
                  <p>{`Balance: R${x.balance}`}</p>
                </div>
              ))}

                <div class="row">
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title">Transacation History</h4>
                          <p class="card-text">HISTORY</p>
                          <p class="card-text">HISTORY</p>
                          <p class="card-text">HISTORY</p>
                          <p class="card-text">HISTORY</p>
                          <p class="card-text">HISTORY</p>
                          <p class="card-text">HISTORY</p>
                          <p class="card-text">HISTORY</p>
                          <p class="card-text">HISTORY</p>
                          <p class="card-text">HISTORY</p>
                        </div>
                      </div>
                    </div>

                <div class="col-sm-6">

                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Search</h4>
                      <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search..."/>
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-primary btn-block">Search</button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Manage Limits</h4>
                      <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Set Limit"/>
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-primary btn-block">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  </div>
                </div>


            </Fragment>
        )
    }
}

export default ViewAccounts
