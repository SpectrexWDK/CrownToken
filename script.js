if(typeof window.ethereum !== 'undefined')
    {
        console.log("Installed")
    }

const tokenAddress = '0x79b951fefc4ce499e517bc9337a58bd6b7383f2c';
const tokenSymbol = 'CROWN';
const tokenDecimals = 18;
const tokenImage = 'https://github.com/SpectrexWDK/RxdProjects/blob/main/CrownToken.png?raw=true';

async function addTokenFunction() {

try {
  
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', 
      options: {
        address: tokenAddress, 
        symbol: tokenSymbol, 
        decimals: tokenDecimals, 
        image: tokenImage, 
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('HelloWorld Coin has not been added');
  }
} catch (error) {
  console.log(error);
}
}