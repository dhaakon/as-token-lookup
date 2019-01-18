import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";

import getWeb3 from "./utils/getWeb3";
import etherscanApi from 'etherscan-api/dist/bundle.js';

import LookUpTable from './LookUpTable.js';
import "./App.scss";

const DEFAULT_HASH = "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae"
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
;
      this.getTransaction( DEFAULT_HASH );

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

  getTransaction = async( hash ) => {
    // reset the transaction state
    this.setState( { transactions: [] });

    let transactions = await api.account.txlist( hash );

    // Sort to get most recent transactions
    let results = transactions.result.sort( (a, b) => b.timeStamp - a.timeStamp );

    this.setState( { transactions: results });
  }

  onHashClicked = ( event )=>{
    const hash = event.currentTarget.innerHTML;

    document.querySelector('.hash-input').value = hash;
  }

  onSubmitClickedHandler = ( event )=>{
    const hash = document.querySelector('.hash-input').value;

    this.getTransaction( hash );
  }

  render() {
    if (!this.state.web3) {
      return (<div className="loader" uk-spinner="ratio: 3"></div>);
    }
    return (
      <div className="App">
        <h1> Etherscan Address Lookup </h1>
        <h3 id="copy">Paste an account hash into the field and submit to retrieve a list of transactions.</h3>
        <div id="lookup-form">
            <span></span>
            <input
              className="hash-input"
              onClick={ this.lookupTransaction }
              defaultValue={ DEFAULT_HASH }></input>
            <button
              className="uk-button uk-button-primary"
              onClick={ this.onSubmitClickedHandler }>Submit</button>
          </div>
        <LookUpTable transactions={ this.state.transactions } onHashClicked={ this.onHashClicked }></LookUpTable>
      </div>
    );
  }
}

export default App;
