import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";

import getWeb3 from "./utils/getWeb3";
import etherscanApi from 'etherscan-api/dist/bundle.js';

import LookUpTable from './LookUpTable.js';
import "./App.scss";

var key = 'NJ9ERA6N3DAQ8EZHU6B9SZF3Y77EJIUW1T';
var api = etherscanApi.init( key );

class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    transactions: []
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];

      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      let transactionAddress = '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae';
      this.getTransaction( transactionAddress );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error(error);
    }
  };

  lookupTransaction(){

  }

  getTransaction = async( txHash ) => {
    let transactions = await api.account.txlist( txHash );
    this.setState( { transactions: transactions.result });
  }

  render() {
    if (!this.state.web3) {
      return (<div className="loader" uk-spinner="ratio: 3"></div>);
    }
    return (
      <div className="App">
        <h1> Etherscan Address Lookup </h1>
        <div id="lookup-form">
            <span></span>
            <input className="hash-input" onClick={ this.lookupTransaction } defaultValue="0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae"></input>
            <button className="uk-button uk-button-default">Submit</button>
          </div>
        <LookUpTable transactions={ this.state.transactions }></LookUpTable>
      </div>
    );
  }
}

export default App;
