const { Web3 } = require("web3");
const { ETH_DATA_FORMAT, DEFAULT_RETURN_FORMAT } = require("web3");
async function main() {
  // Configuring the connection to an Ethereum node
  const network = "sepolia"
  let INFURA_API_KEY = "ENTER-API-KEY"
  let SIGNER_PRIVATE_KEY = "ENTER-SIGNER'S-PRIVATE-KEY"
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      `https://${network}.infura.io/v3/${INFURA_API_KEY}`,
    ),
  );
  // Creating a signing account from a private key
  const signer = web3.eth.accounts.privateKeyToAccount(
    SIGNER_PRIVATE_KEY,
  );
  web3.eth.accounts.wallet.add(signer);
  console.log("Signer's Address  " + signer.address)

  // 'data' is info of a compiled smart contract that will be responsible  
  // for its deployement, in this code 'data' of a compiled contract from 
  // is used (Contract compiled on Remix IDe)
  let data = '0x60806040526040518060600160405280600160ff168152602001600260ff168152602001600360ff1681525060009060036200003d929190620001d4565b5060405180606001604052806040518060400160405280600581526020017f6170706c6500000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600681526020017f62616e616e61000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600681526020017f636172726f74000000000000000000000000000000000000000000000000000081525081525060019060036200010a9291906200022b565b5060405180604001604052806040518060600160405280600160ff168152602001600260ff168152602001600360ff1681525081526020016040518060600160405280600460ff168152602001600560ff168152602001600660ff1681525081525060039060026200017e9291906200028b565b5033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550348015620001cd57600080fd5b5062000726565b82805482825590600052602060002090810192821562000218579160200282015b8281111562000217578251829060ff16905591602001919060010190620001f5565b5b509050620002279190620002ed565b5090565b82805482825590600052602060002090810192821562000278579160200282015b82811115620002775782518290816200026691906200063f565b50916020019190600101906200024c565b5b5090506200028791906200030c565b5090565b828054828255906000526020600020908101928215620002da579160200282015b82811115620002d957825182906003620002c8929190620001d4565b5091602001919060010190620002ac565b5b509050620002e9919062000334565b5090565b5b8082111562000308576000816000905550600101620002ee565b5090565b5b808211156200033057600081816200032691906200035c565b506001016200030d565b5090565b5b808211156200035857600081816200034e9190620003a2565b5060010162000335565b5090565b5080546200036a906200042e565b6000825580601f106200037e57506200039f565b601f0160209004906000526020600020908101906200039e9190620002ed565b5b50565b5080546000825590600052602060002090810190620003c29190620002ed565b50565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200044757607f821691505b6020821081036200045d576200045c620003ff565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004c77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000488565b620004d3868362000488565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620005206200051a6200051484620004eb565b620004f5565b620004eb565b9050919050565b6000819050919050565b6200053c83620004ff565b620005546200054b8262000527565b84845462000495565b825550505050565b600090565b6200056b6200055c565b6200057881848462000531565b505050565b5b81811015620005a0576200059460008262000561565b6001810190506200057e565b5050565b601f821115620005ef57620005b98162000463565b620005c48462000478565b81016020851015620005d4578190505b620005ec620005e38562000478565b8301826200057d565b50505b505050565b600082821c905092915050565b60006200061460001984600802620005f4565b1980831691505092915050565b60006200062f838362000601565b9150826002028217905092915050565b6200064a82620003c5565b67ffffffffffffffff811115620006665762000665620003d0565b5b6200067282546200042e565b6200067f828285620005a4565b600060209050601f831160018114620006b75760008415620006a2578287015190505b620006ae858262000621565b8655506200071e565b601f198416620006c78662000463565b60005b82811015620006f157848901518255600182019150602085019450602081019050620006ca565b868310156200071157848901516200070d601f89168262000601565b8355505b6001600288020188555050505b505050505050565b610a3f80620007366000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635e383d211161005b5780635e383d21146100da5780636422c4c81461010a5780639ae918c71461013a578063d3268fc11461016a5761007d565b806326eb4dbb146100825780633a5fbaaa146100a057806354d4daf2146100bc575b600080fd5b61008a61019a565b60405161009791906103d7565b60405180910390f35b6100ba60048036038101906100b5919061054c565b6101a7565b005b6100c46101df565b6040516100d191906105d6565b60405180910390f35b6100f460048036038101906100ef919061061d565b610205565b60405161010191906106c9565b60405180910390f35b610124600480360381019061011f919061061d565b6102b1565b60405161013191906106c9565b60405180910390f35b610154600480360381019061014f919061061d565b61035d565b60405161016191906103d7565b60405180910390f35b610184600480360381019061017f91906106eb565b610381565b60405161019191906103d7565b60405180910390f35b6000600280549050905090565b6001819080600181540180825580915050600190039060005260206000200160009091909190915090816101db9190610937565b5050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002818154811061021557600080fd5b9060005260206000200160009150905080546102309061075a565b80601f016020809104026020016040519081016040528092919081815260200182805461025c9061075a565b80156102a95780601f1061027e576101008083540402835291602001916102a9565b820191906000526020600020905b81548152906001019060200180831161028c57829003601f168201915b505050505081565b600181815481106102c157600080fd5b9060005260206000200160009150905080546102dc9061075a565b80601f01602080910402602001604051908101604052809291908181526020018280546103089061075a565b80156103555780601f1061032a57610100808354040283529160200191610355565b820191906000526020600020905b81548152906001019060200180831161033857829003601f168201915b505050505081565b6000818154811061036d57600080fd5b906000526020600020016000915090505481565b6003828154811061039157600080fd5b9060005260206000200181815481106103a957600080fd5b90600052602060002001600091509150505481565b6000819050919050565b6103d1816103be565b82525050565b60006020820190506103ec60008301846103c8565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61045982610410565b810181811067ffffffffffffffff8211171561047857610477610421565b5b80604052505050565b600061048b6103f2565b90506104978282610450565b919050565b600067ffffffffffffffff8211156104b7576104b6610421565b5b6104c082610410565b9050602081019050919050565b82818337600083830152505050565b60006104ef6104ea8461049c565b610481565b90508281526020810184848401111561050b5761050a61040b565b5b6105168482856104cd565b509392505050565b600082601f83011261053357610532610406565b5b81356105438482602086016104dc565b91505092915050565b600060208284031215610562576105616103fc565b5b600082013567ffffffffffffffff8111156105805761057f610401565b5b61058c8482850161051e565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105c082610595565b9050919050565b6105d0816105b5565b82525050565b60006020820190506105eb60008301846105c7565b92915050565b6105fa816103be565b811461060557600080fd5b50565b600081359050610617816105f1565b92915050565b600060208284031215610633576106326103fc565b5b600061064184828501610608565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610684578082015181840152602081019050610669565b60008484015250505050565b600061069b8261064a565b6106a58185610655565b93506106b5818560208601610666565b6106be81610410565b840191505092915050565b600060208201905081810360008301526106e38184610690565b905092915050565b60008060408385031215610702576107016103fc565b5b600061071085828601610608565b925050602061072185828601610608565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061077257607f821691505b6020821081036107855761078461072b565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026107ed7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826107b0565b6107f786836107b0565b95508019841693508086168417925050509392505050565b6000819050919050565b600061083461082f61082a846103be565b61080f565b6103be565b9050919050565b6000819050919050565b61084e83610819565b61086261085a8261083b565b8484546107bd565b825550505050565b600090565b61087761086a565b610882818484610845565b505050565b5b818110156108a65761089b60008261086f565b600181019050610888565b5050565b601f8211156108eb576108bc8161078b565b6108c5846107a0565b810160208510156108d4578190505b6108e86108e0856107a0565b830182610887565b50505b505050565b600082821c905092915050565b600061090e600019846008026108f0565b1980831691505092915050565b600061092783836108fd565b9150826002028217905092915050565b6109408261064a565b67ffffffffffffffff81111561095957610958610421565b5b610963825461075a565b61096e8282856108aa565b600060209050601f8311600181146109a1576000841561098f578287015190505b610999858261091b565b865550610a01565b601f1984166109af8661078b565b60005b828110156109d7578489015182556001820191506020850194506020810190506109b2565b868310156109f457848901516109f0601f8916826108fd565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220705c9f9cd5ffd42c54237b5d804cfb820e63e987d1a823e27b3bcb4ee771572b64736f6c63430008120033'
  await web3.eth
    .estimateGas(
      {
        from: signer.address,
        data: data
        
      },
      "latest"
    )
    .then((value) => {
      limit = value;
    });

  // Creating the transaction object
  const tx = {
    from: signer.address,
    gas: limit,
    nonce: await web3.eth.getTransactionCount(signer.address),
    maxPriorityFeePerGas: web3.utils.toWei("3", "gwei"),
    maxFeePerGas: web3.utils.toWei("4", "gwei"),
    data: data
  };
  signedTx = await web3.eth.accounts.signTransaction(tx, signer.privateKey);
  console.log("Raw transaction data: " + signedTx.rawTransaction);
  // Sending the transaction to the network
  const receipt = await web3.eth
    .sendSignedTransaction(signedTx.rawTransaction)
    .once("transactionHash", (txhash) => {
      console.log(`Mining transaction ...`);
      console.log(`https://${network}.etherscan.io/tx/${txhash}`);
    });
  // The transaction is now on chain!
  console.log(`Mined in block ${receipt.blockNumber}`);
}
main();