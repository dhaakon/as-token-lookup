import React, { Component } from 'react';

import etherscanApi from 'etherscan-api/dist/bundle.js';
import './LookUpTable.scss';

var key = 'NJ9ERA6N3DAQ8EZHU6B9SZF3Y77EJIUW1T';
var api = etherscanApi.init( key );

/*
  blockHash: "0xd3cabad6adab0b52eb632c386ea194036805713682c62cb589b5abcd76de2159"
  blockNumber: "54092"
  confirmations: "7031671"
  contractAddress: "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae"
  cumulativeGasUsed: "1436963"
  from: "0x5abfec25f74cd88437631a7731906932776356f9"
  gas: "2000000"
  gasPrice: "10000000000000"
  gasUsed: "1436963"
  hash: "0x9c81f44c29ff0226f835cd0a8a2f2a7eca6db52a711f8211b566fd15d3e0e8d4"
  input: "0x6060604052600760018181557305096a47749d8bfab0a90c1bb7a95115dbe4cea6600355737c56d94ebeccb769524379c450873519a9d805ff600490815573cda0ad7542e30bf520652a05056ebe0105c7e49a60055573775e18be7a50a0abb8a4e82b1bd697d79f31fe0460065573063dd253c8da4ea9b12105781c9611b8297f5d1490925573036c8cecce8d8bbf0831d840d7f29c9e3ddefa63600855733fb1cd2cd96c6d5c0b5eb3322d807b34482481d4600955683635c9adc5dea0000091905b600781116100f457806101026000600283610100811015610002570154815260209190915260409020556001016100c2565b506000556101058190556201518042046101075550610f33806101186000396000f300606060405236156100b95760e060020a6000350463173825d9811461010b5780632f54bf6e1461015b5780634123cb6b146101835780635c52c2f51461018c5780637065cb48146101b2578063746c9171146101db578063797af627146101e4578063b20d30a9146101f7578063b61d27f614610220578063b75c7dc614610241578063ba51a6df14610270578063c2cf732614610299578063cbf0b0c0146102d7578063f00d4b5d14610300578063f1736d861461032e575b61033860003411156101095760408051600160a060020a033316815234602082015281517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c929181900390910190a15b565b6103386004356000600036604051808383808284375050509081018190039020905061063d815b600160a060020a03331660009081526101026020526040812054818082811415610bb357610d0b565b61033a6004355b600160a060020a03811660009081526101026020526040812054115b919050565b61033a60015481565b610338600036604051808383808284375050509081018190039020905061078e81610132565b61033860043560003660405180838380828437505050908101819003902090506105b581610132565b61033a60005481565b61033a6004355b6000816109f181610132565b610338600435600036604051808383808284375050509081018190039020905061078281610132565b61033a6004803590602480359160443591820191013560006107ad33610162565b610338600435600160a060020a0333166000908152610102602052604081205490808281141561034c576103cb565b61033860043560003660405180838380828437505050908101819003902090506106fc81610132565b61033a600435602435600082815261010360209081526040808320600160a060020a0385168452610102909252822054828181141561075557610779565b610338600435600036604051808383808284375050509081018190039020905061079c81610132565b6103386004356024356000600036604051808383808284375050509081018190039020905061045681610132565b61033a6101055481565b005b60408051918252519081900360200190f35b50506000828152610103602052604081206001810154600284900a9290831611156103cb5780546001828101805492909101835590839003905560408051600160a060020a03331681526020810186905281517fc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b929181900390910190a15b50505050565b600160a060020a03831660028361010081101561000257508301819055600160a060020a03851660008181526101026020908152604080832083905584835291829020869055815192835282019290925281517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c929181900390910190a1505b505050565b156103cb5761046483610162565b1561046f5750610451565b600160a060020a0384166000908152610102602052604081205492508214156104985750610451565b6103d15b6101045460005b81811015610e5857610104805461010891600091849081101561000257600080516020610f1383398151915201548252506020918252604081208054600160a060020a0319168155600181018290556002810180548382559083528383209193610edd92601f92909201048101906109d9565b60018054810190819055600160a060020a038316906002906101008110156100025790900160005081905550600160005054610102600050600084600160a060020a03168152602001908152602001600020600050819055507f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3826040518082600160a060020a0316815260200191505060405180910390a15b505b50565b156105b0576105c382610162565b156105ce57506105b2565b6105d661049c565b60015460fa90106105eb576105e9610600565b505b60015460fa901061051657506105b2565b6106ba5b600060015b6001548110156109ed575b600154811080156106305750600281610100811015610002570154600014155b15610d1357600101610610565b1561045157600160a060020a03831660009081526101026020526040812054925082141561066b57506105b0565b600160016000505403600060005054111561068657506105b0565b600060028361010081101561000257508301819055600160a060020a038416815261010260205260408120556105fc61049c565b5060408051600160a060020a038516815290517f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da9181900360200190a1505050565b156105b05760015482111561071157506105b2565b600082905561071e61049c565b6040805183815290517facbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da9181900360200190a15050565b506001820154600282900a908116600014156107745760009350610779565b600193505b50505092915050565b156105b0575061010555565b156105b25760006101065550565b156105b05781600160a060020a0316ff5b156109c9576107c1846000610ded33610162565b1561087d577f92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd00433858786866040518086600160a060020a0316815260200185815260200184600160a060020a031681526020018060200182810382528484828181526020019250808284378201915050965050505050505060405180910390a184600160a060020a03168484846040518083838082843750505090810191506000908083038185876185025a03f150600093506109c992505050565b600036436040518084848082843750505090910190815260405190819003602001902091506108ad9050816101eb565b1580156108d0575060008181526101086020526040812054600160a060020a0316145b156109c95760008181526101086020908152604082208054600160a060020a03191688178155600181018790556002018054858255818452928290209092601f019190910481019084908682156109d1579182015b828111156109d1578235826000505591602001919060010190610925565b50507f1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf328133868887876040518087815260200186600160a060020a0316815260200185815260200184600160a060020a03168152602001806020018281038252848482818152602001925080828437820191505097505050505050505060405180910390a15b949350505050565b506109439291505b808211156109ed57600081556001016109d9565b5090565b15610ba05760008381526101086020526040812054600160a060020a031614610ba05760408051600091909120805460018201546002929092018054600160a060020a0392909216939091819083908015610a7157820191906000526020600020905b815481529060010190602001808311610a5457829003601f168201915b505091505060006040518083038185876185025a03f150505060008481526101086020908152604080519281902080546001820154600160a060020a033381811688529587018b905293860181905292166060850181905260a06080860181815260029390930180549187018290527fe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a975094958a959293909160c083019084908015610b4357820191906000526020600020905b815481529060010190602001808311610b2657829003601f168201915b5050965050505050505060405180910390a160008381526101086020908152604082208054600160a060020a031916815560018101839055600281018054848255908452828420919392610ba692601f92909201048101906109d9565b50919050565b505050600191505061017e565b60008581526101036020526040812080549093501415610c3b576000805483556001838101919091556101048054918201808255828015829011610c0a57818360005260206000209182019101610c0a91906109d9565b50505060028301819055610104805487929081101561000257600091909152600080516020610f1383398151915201555b506001810154600283900a90811660001415610d0b5760408051600160a060020a03331681526020810187905281517fe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda929181900390910190a1815460019011610cf8576000858152610103602052604090206002015461010480549091908110156100025760406000908120600080516020610f138339815191529290920181905580825560018281018290556002909201559450610d0b9050565b8154600019018255600182018054821790555b505050919050565b5b60018054118015610d3657506001546002906101008110156100025701546000145b15610d4a5760018054600019019055610d14565b60015481108015610d6d5750600154600290610100811015610002570154600014155b8015610d8757506002816101008110156100025701546000145b15610de857600154600290610100811015610002578101549082610100811015610002578101919091558190610102906000908361010081101561000257810154825260209290925260408120929092556001546101008110156100025701555b610605565b1561017e5761010754610e035b62015180420490565b1115610e1c57600061010655610e17610dfa565b610107555b6101065480830110801590610e3a5750610106546101055490830111155b15610e505750610106805482019055600161017e565b50600061017e565b6105b06101045460005b81811015610ee85761010480548290811015610002576000918252600080516020610f13833981519152015414610ed557610104805461010391600091849081101561000257600080516020610f1383398151915201548252506020919091526040812081815560018101829055600201555b600101610e62565b5050506001016104a3565b610104805460008083559190915261045190600080516020610f13833981519152908101906109d956004c0be60200faa20559308cb7b5a1bb3255c16cb1cab91f525b5ae7a03d02fabe"
  isError: "0"
  nonce: "0"
  timeStamp: "1439048640"
  to: ""
  transactionIndex: "0"
  txreceipt_status: ""
  value: "11901464239480000000000000"
*/

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

    // 
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
