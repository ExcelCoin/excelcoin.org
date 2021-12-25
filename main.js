const addExcelCoinMainnetChain = {
  'method': 'wallet_addEthereumChain',
  'params': [{
    'chainId': '0x6019',
    'chainName': 'ExcelCoin',
    'rpcUrls': ['https://api.excelcoin.org/'],
    'nativeCurrency': {'name': 'ExcelCoin', 'symbol': 'XLS', 'decimals': 18},
    'blockExplorerUrls': ['https://explorer.excelcoin.org']
  }]
};

function addToChain() {
  ethereum.request(addExcelCoinMainnetChain);
}
