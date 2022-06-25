const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT || ''
const frontEndUrl = process.env.NEXT_PUBLIC_REACT_APP_FRONT_URL || ''
const socketURL = process.env.NEXT_PUBLIC_REACT_APP_SOCKET_URI || ''
const appMode = process.env.NEXT_PUBLIC_APP_MODE || 'dev'
const nftAddress = process.env.NEXT_PUBLIC_REACT_APP_NFT_ADDRESS || ''
const nftMarketAddress = process.env.NEXT_PUBLIC_REACT_APP_NFT_MARKET_ADDRESS || ''
const lfgAddress = '' || "";
export {
  baseURL,
  frontEndUrl,
  socketURL,
  appMode,
  nftAddress,
  nftMarketAddress,
  lfgAddress,
};