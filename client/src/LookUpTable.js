import React, { Component } from 'react';

import etherscanApi from 'etherscan-api/dist/bundle.js';
import './LookUpTable.css';

var key = 'NJ9ERA6N3DAQ8EZHU6B9SZF3Y77EJIUW1T';
var api = etherscanApi.init( key );

export default class LookUpTable extends Component {
  render(){
    const { props } = this;
    const {
      blockHash,
      blockNumber,
      from,
      gas,
      gasPrice,
      hash,
      input,
      nonce,
      r,
      s,
      to,
      transactionIndex,
      v,
      value
    } = props;


    return(
      <div id="lookup-table">
        <ul>
          <li> { blockHash } </li>
          <li> { blockNumber } </li>
          <li> { from } </li>
          <li> { gas } </li>
          <li> { gasPrice } </li>
          <li> { hash } </li>
          <li> { input } </li>
          <li> { nonce } </li>
          <li> { r } </li>
          <li> { s } </li>
          <li> { to } </li>
          <li> { transactionIndex } </li>
          <li> { v } </li>
          <li> { value } </li>
         </ul>
      </div>
    )
  }

}
