import React, { Component } from 'react';

import './LookUpTable.scss';

export default class LookUpTable extends Component {
  createTransaction = ( transaction, idx )=>{
    const{
      to,
      from,
      gas,
      gasPrice,
      timeStamp,
      value
    } = transaction;

    // magic numbers to get it looking like the etherscan numbers
    const convertGasPrice = val =>  (val * .00000000000000001).toFixed(8);
    const convertValue = val => (val * .000000000000000001).toFixed(7);

    return(
      <tbody key={ idx }>
        <tr className="results">
          <td>{ new Date( timeStamp * 1000 ).toDateString() }</td>
          <td><a onClick={ this.props.onHashClicked }>{ to }</a></td>
          <td><a onClick={ this.props.onHashClicked }>{ from }</a></td>
          <td>{ gas }</td>
          <td>{ convertGasPrice( gasPrice ) }</td>
          <td>{ convertValue( value ) }</td>
        </tr>
      </tbody>
    )
  }

  render(){
    if( this.props.transactions.length === 0 ){
      return (<div className="loader" uk-spinner="ratio: 3"></div>);
    }

    return(
      // would use a flex box with more time...
      <div id="lookup-table">
        <table>
          <tbody>
            <tr className="info">
              <td>date</td>
              <td>to</td>
              <td>from</td>
              <td>gas</td>
              <td>gasPrice</td>
              <td>value</td>
            </tr>
          </tbody>
            { this.props.transactions.map( this.createTransaction ) }
        </table>
      </div>
    )
  }
}

LookUpTable.defaultProps = {
  transactions : []
};
