"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[546],{

/***/ 27960:
/*!*********************************************!*\
  !*** ./src/config/contracts.ts + 3 modules ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": function() { return /* binding */ getAddress; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(38416);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
;// CONCATENATED MODULE: ./src/config/address/contract-addresses-avalancheTest.json
var contract_addresses_avalancheTest_namespaceObject = JSON.parse('{"LP":"0x9794FCacb87e0f6FA03FDebc581Afe4e9f21e38c","USDC":"0xD1dAd7b21cd2E88C98d0B935B63232Fda75B102e","BTC":"0x2e02944df8fc02EAedfD7A04c0d5B9a58Ca46D47","ETH":"0x720b15C633f20f8ffc8a5A59E10109F04557400d","LINK":"0x4B4884C72BdbD3B5bd924b5bCA3b96570D859db7","PositionValid":"0x385753fc09dB3e16032Bf1fac2cBd8D1059D4C56","PositionBook":"0x90B45B4378e97E83aBCAaCceED89fDf087Ec7127","MarketPositionMgr":"0x998721065125Af13a6e7e77B56Ec418E58430b84","OpenStoreLong":"0x8604413797E116A7cf863814049cA3C0BF17d211","CloseStoreLong":"0x41E45bF8aCF0ACB2c775DAc0b9694A519187f00c","OpenStoreShort":"0x780f71D3Bf7966E5B1B8f3e042A70bDbD2434C2A","CloseStoreShort":"0xea46b7D61791c67153fc9278d50D4623E180a3d9","Market":"0x5A2E0B0763afF7eE54cbf9812cc0ae81d852C35B","OrderBookLong":"0x8dB14e74A60C14ECBba6c9cd1bECceF9Db06Ef09","OrderBookShort":"0x210783e62f40B3c32690c8b6d0AAcF7a48108918","FeeVault":"0x33f51706F67Cdaefc981A288838Fd374343121F7","CoreVault":"0xA65c8A59f04F80E422315cC6D5Dd9EbC0564baEf","VaultRouter":"0x7F52ea3f85C8Ec67AF554Cd40860Eb497ba87197","MarketReader":"0x554D09b6067Be6F66a55F166d978AB2E43188Db3","MarketValid":"0x55A1f9039C9d29E4a5bAb20E06f11340c6625D0c","MarketFactory":"0x89f89eEC290cA2F27A02246e0cf8Ab5E592FCC28","MarketAddressesProvider":"0xd210430908aaD0Da3483De2eb7c38CB1b99984eC","MarketValidReader":"0xBdAee2f6f8b5f9d9Fa89996876F54487dD7CA8f0","MockOracle":"0x349315f076a5Db24Ca849669c0D51Afa4E6e585f","ExecFee":"0x27A23ad314b1c3F457A928E9eB053df1B4F15883","OpenFee":"0xd1A45adA8743c5Ecf92f8a8afe32c67102D88FeE","CloseFee":"0xEfd3bDAf5703Aba308B13145d012e596B765Dbb1","FundFee":"0x9352A188eAFDaC54b11f89849131c32897d25e05","LiquidateFee":"0xF8ce0b8738a1EbFEeCf4A64641a8012667Fd6EF9","FeeRouter":"0x0E9202653923FE2Cdf8E2476cb82ffc6e83078E5"}');
;// CONCATENATED MODULE: ./src/config/address/contract-addresses-goerli.json
var contract_addresses_goerli_namespaceObject = JSON.parse('{"PositionValid":"0xc10E7A6B52EAF38e42F8bebACB3A908C59c6fF8c","PositionBook":"0x71317eD50bc0c418d95DeFb1B15D9DEac3070703","MarketPositionMgr":"0xcD17b35cd2553A8a71a92f690bd77f6414aFd7dd","OpenStoreLong":"0x00f74dAc097a0E26725549aaBB1D546670081d53","CloseStoreLong":"0x0bA7BC8566366188547927c5eD401c3785e870a7","OpenStoreShort":"0xd2C8F633aa0AbA43A244b24b5D0828f190a7c5DF","CloseStoreShort":"0x1A9bC34d6ad1a82aC90c985eB344E36e46C7c6E1","Market":"0xe1F7429803636cFFa97304318003B4fDaE5a9a2c","OrderBook_true":"0x007F259299f3298bd91e266FA625C09537a6e6FC","OrderBook_false":"0x900486B2aB593d5A02e92F93fB1184981EBb22af","FeeVault":"0xa70309a0676Fe3826e93F86395220600B6cC3c0F","LP":"0xc01a7a82f59532cfBCE95a2172B6Dc7202309798","USDC":"0x9a459864dA19B6Dc8d4F88782c597aec03EfFf7a","BTC":"0x8fA482291bdf587248f1121aca42579359fbbd0E","ETH":"0xf124c30133084306ba0d7aa19B9102c6a7652adA","LINK":"0x18473B4049800ecE4f49f9c3F2661387216CCeDE","CoreVault":"0xC73aA40fC6b656722a20943BFeA88B48adf95160","VaultRouter":"0xFd45757534FB0956D187D757bc64A1c910951E3F","MarketReader":"0xa72feB9d414c87e6Ddf9Ff3877C373A05f30081B","MarketValid":"0x2DFA96b88428BC78c443546b4D059Ff1Cb4EB10A","MarketFactory":"0x0384c305bf356D6aD4fFDC876171efaD51ac8E02","MarketAddressesProvider":"0x557E5718aeb597f5C28EF8c9848824eE2d2de595","MarketValidReader":"0xF654eBe46dE714986927b3C0683409892C385B9f","AMMPriceFeed":"0x6d1BBa7d6C7F05580AC1833F0d964A4Bc7B8cA72","ChainPriceFeed":"0xB206a6d9D48F53ad4d0BcD6Dc2d5286b08F93E12","FastPriceFeed":"0x7677dFd654983De4513E417A91b2DEC39dc5c6Ef","Price":"0x261854A54637Bb1a185d3AAB512D6B0cC51Ab673","ExecFee":"0xD8c716359d8Dd3De2e79e7E20Eb91DB7614f140E","OpenFee":"0x66C25E846353fb4826A75E98b718262379787dB8","CloseFee":"0x1DC6a7a260937062e06a28D0c8F950820441689c","FundFee":"0x1fc7869E435755AB05BdC030FD9BAc59BF64AAC1","LiquidateFee":"0x752534A11CC4F94433708073192Df70042325aEb","FeeRouter":"0x3C03114113D12AE235CAE141151cDB9A9e72a297"}');
// EXTERNAL MODULE: ./src/config/chains.ts
var chains = __webpack_require__(13805);
;// CONCATENATED MODULE: ./src/config/addressConfig.ts

var _CONTRACTS;



var CONTRACTS = (_CONTRACTS = {}, defineProperty_default()(_CONTRACTS, chains/* AVALANCHE_FUJITEST */.bx, contract_addresses_avalancheTest_namespaceObject), defineProperty_default()(_CONTRACTS, chains/* GOERLI */.vT, contract_addresses_goerli_namespaceObject), defineProperty_default()(_CONTRACTS, chains/* MAINNET */.RR, {
  MarketReader: '0x2A19Ca0DA18af5917b13e2d580Ea77822E88f6eE',
  MarketFactory: '0x338C2A3Fd9c506D00d07939fcA1AEcfda993C750'
  // bsc mainnet
}), defineProperty_default()(_CONTRACTS, chains/* TESTNET */.Vr, {
  PositionValid: '0x9a78C72E5Bbd712f12745f1D1329c0aedFd86734',
  PositionBook: '0xA7D7e4Cae1fB53a817387f803FB981aA170ffE09',
  LP: '0x644E7b38Dcb0cF2A2617d3DaF74682071986F19E',
  USDC: '0x51b17FC671Fdc226d8d879BD6b3862FC23ee9684',
  BTC: '0xA0099F5a2ec87E92279366e3072BDc9187956D1C',
  ETH: '0x5758CD2017Ba4445f7A0e9E97BC9FA67d63587D1',
  LINK: '0xe881Ad0BFAe80c4198e3bc7520DBD3E0Ad786D5b',
  CoreVault: '0xaA521A22BC128CaE339B7eA037b4Ff304f1B56c6',
  VaultRouter: '0xEb32E5f1d61aeA828fD93bd2Bb84bf72C89698c4',
  AMMPriceFeed: '0x875D4602eCE6879BF6645cDf2cE2029D25675Ae5',
  ChainPriceFeed: '0xbe9a6965076cf8534969ef465E30d8104455730d',
  FastPriceFeed: '0x3AfcadB370F810048Bd40E5FE2AeeE4A0829F078',
  Price: '0x6268E48753aa16A1cb4Ba96df85FAE77dd4927e1',
  FeeVault: '0x45203E6E0ef4938B6C20fCA0E6216C32FB2D7cC9',
  ExecFee: '0x299dbBA0C9e03c0B1fA68689672B5e4187a7E30A',
  OpenFee: '0xbCe501f0926Be2b9D1c20c36e269575F2F33585E',
  CloseFee: '0x120410bDec436b741B058De2FCfe0088a4F2D621',
  FundFee: '0x6a2117ef4588dc5cD535fa99AFb546dF2663705b',
  LiquidateFee: '0xFEc46Ea513ca731d595dc7E7cbd526a28E7373a1',
  FeeRouter: '0x40D5570BE450F04fc778e7C40eB3381dafDD2cd7',
  MarketReader: '0x83b03ef3a5058Db7C99531f1A1050986DFbb76Bd',
  MarketAddressesProvider: '0xdb26b820154Fc6bBb725bF9e22099d16946B2953',
  MarketFactory: '0x2E471218f0669fcc62F6daC849798320A86A2B72',
  MarketPositionMgr: '0x90cb36493966feB50d9Efc91e727e780098248f8',
  OpenStoreLong: '0x6C7aBAe8Ec68C2f3FeB9bbf3880B4A768e0c2E72',
  CloseStoreLong: '0xf1F1098148e458C4A53A74A3165BAD4235A09c9d',
  OpenStoreShort: '0x95dA6FeC26106e7242980231b79Ff2c6e61F5bD5',
  CloseStoreShort: '0xe091274C10cF0FC52bd0e931e32B5000729AAf73',
  Market: '0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99',
  MarketValid: '0x7fa4B0bf142CeB49e6827D703d3a0F6c9dF490b8',
  OrderBook_true: '0xe7DFF0d37E9730FC21E08A3262a121164Da342EA',
  OrderBook_false: '0xD0390472fD2376808D83AA03DE0a8B23e0E7e153',
  MarketValidReader: '0xbE9aA7d1D4b98fEDD319f42f9c042971e2E15AFa'
}), defineProperty_default()(_CONTRACTS, chains/* ARBITRUM_TESTNET */.qF, {
  PositionValid: '0x9a78C72E5Bbd712f12745f1D1329c0aedFd86734',
  PositionBook: '0xA7D7e4Cae1fB53a817387f803FB981aA170ffE09',
  LP: '0x644E7b38Dcb0cF2A2617d3DaF74682071986F19E',
  USDC: '0x51b17FC671Fdc226d8d879BD6b3862FC23ee9684',
  BTC: '0xA0099F5a2ec87E92279366e3072BDc9187956D1C',
  ETH: '0x5758CD2017Ba4445f7A0e9E97BC9FA67d63587D1',
  LINK: '0xe881Ad0BFAe80c4198e3bc7520DBD3E0Ad786D5b',
  CoreVault: '0xaA521A22BC128CaE339B7eA037b4Ff304f1B56c6',
  VaultRouter: '0xEb32E5f1d61aeA828fD93bd2Bb84bf72C89698c4',
  AMMPriceFeed: '0x875D4602eCE6879BF6645cDf2cE2029D25675Ae5',
  ChainPriceFeed: '0xbe9a6965076cf8534969ef465E30d8104455730d',
  FastPriceFeed: '0x3AfcadB370F810048Bd40E5FE2AeeE4A0829F078',
  Price: '0x6268E48753aa16A1cb4Ba96df85FAE77dd4927e1',
  FeeVault: '0x45203E6E0ef4938B6C20fCA0E6216C32FB2D7cC9',
  ExecFee: '0x299dbBA0C9e03c0B1fA68689672B5e4187a7E30A',
  OpenFee: '0xbCe501f0926Be2b9D1c20c36e269575F2F33585E',
  CloseFee: '0x120410bDec436b741B058De2FCfe0088a4F2D621',
  FundFee: '0x6a2117ef4588dc5cD535fa99AFb546dF2663705b',
  LiquidateFee: '0xFEc46Ea513ca731d595dc7E7cbd526a28E7373a1',
  FeeRouter: '0x40D5570BE450F04fc778e7C40eB3381dafDD2cd7',
  MarketReader: '0x83b03ef3a5058Db7C99531f1A1050986DFbb76Bd',
  MarketAddressesProvider: '0xdb26b820154Fc6bBb725bF9e22099d16946B2953',
  MarketFactory: '0x2E471218f0669fcc62F6daC849798320A86A2B72',
  MarketPositionMgr: '0x90cb36493966feB50d9Efc91e727e780098248f8',
  OpenStoreLong: '0x6C7aBAe8Ec68C2f3FeB9bbf3880B4A768e0c2E72',
  CloseStoreLong: '0xf1F1098148e458C4A53A74A3165BAD4235A09c9d',
  OpenStoreShort: '0x95dA6FeC26106e7242980231b79Ff2c6e61F5bD5',
  CloseStoreShort: '0xe091274C10cF0FC52bd0e931e32B5000729AAf73',
  Market: '0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99',
  MarketValid: '0x7fa4B0bf142CeB49e6827D703d3a0F6c9dF490b8',
  OrderBook_true: '0xe7DFF0d37E9730FC21E08A3262a121164Da342EA',
  OrderBook_false: '0xD0390472fD2376808D83AA03DE0a8B23e0E7e153',
  MarketValidReader: '0xbE9aA7d1D4b98fEDD319f42f9c042971e2E15AFa'
}), defineProperty_default()(_CONTRACTS, chains/* ARBITRUM */.PO, {
  PositionValid: '0x9a78C72E5Bbd712f12745f1D1329c0aedFd86734',
  PositionBook: '0xA7D7e4Cae1fB53a817387f803FB981aA170ffE09',
  LP: '0x644E7b38Dcb0cF2A2617d3DaF74682071986F19E',
  USDC: '0x51b17FC671Fdc226d8d879BD6b3862FC23ee9684',
  BTC: '0xA0099F5a2ec87E92279366e3072BDc9187956D1C',
  ETH: '0x5758CD2017Ba4445f7A0e9E97BC9FA67d63587D1',
  LINK: '0xe881Ad0BFAe80c4198e3bc7520DBD3E0Ad786D5b',
  CoreVault: '0xaA521A22BC128CaE339B7eA037b4Ff304f1B56c6',
  VaultRouter: '0xEb32E5f1d61aeA828fD93bd2Bb84bf72C89698c4',
  AMMPriceFeed: '0x875D4602eCE6879BF6645cDf2cE2029D25675Ae5',
  ChainPriceFeed: '0xbe9a6965076cf8534969ef465E30d8104455730d',
  FastPriceFeed: '0x3AfcadB370F810048Bd40E5FE2AeeE4A0829F078',
  Price: '0x6268E48753aa16A1cb4Ba96df85FAE77dd4927e1',
  FeeVault: '0x45203E6E0ef4938B6C20fCA0E6216C32FB2D7cC9',
  ExecFee: '0x299dbBA0C9e03c0B1fA68689672B5e4187a7E30A',
  OpenFee: '0xbCe501f0926Be2b9D1c20c36e269575F2F33585E',
  CloseFee: '0x120410bDec436b741B058De2FCfe0088a4F2D621',
  FundFee: '0x6a2117ef4588dc5cD535fa99AFb546dF2663705b',
  LiquidateFee: '0xFEc46Ea513ca731d595dc7E7cbd526a28E7373a1',
  FeeRouter: '0x40D5570BE450F04fc778e7C40eB3381dafDD2cd7',
  MarketReader: '0x83b03ef3a5058Db7C99531f1A1050986DFbb76Bd',
  MarketAddressesProvider: '0xdb26b820154Fc6bBb725bF9e22099d16946B2953',
  MarketFactory: '0x2E471218f0669fcc62F6daC849798320A86A2B72',
  MarketPositionMgr: '0x90cb36493966feB50d9Efc91e727e780098248f8',
  OpenStoreLong: '0x6C7aBAe8Ec68C2f3FeB9bbf3880B4A768e0c2E72',
  CloseStoreLong: '0xf1F1098148e458C4A53A74A3165BAD4235A09c9d',
  OpenStoreShort: '0x95dA6FeC26106e7242980231b79Ff2c6e61F5bD5',
  CloseStoreShort: '0xe091274C10cF0FC52bd0e931e32B5000729AAf73',
  Market: '0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99',
  MarketValid: '0x7fa4B0bf142CeB49e6827D703d3a0F6c9dF490b8',
  OrderBook_true: '0xe7DFF0d37E9730FC21E08A3262a121164Da342EA',
  OrderBook_false: '0xD0390472fD2376808D83AA03DE0a8B23e0E7e153',
  MarketValidReader: '0xbE9aA7d1D4b98fEDD319f42f9c042971e2E15AFa',
  // arbitrum mainnet
  Vault: '0x489ee077994B6658eAfA855C308275EAd8097C4A',
  Router: '0xaBBc5F99639c9B6bCb58544ddf04EFA6802F4064',
  VaultReader: '0xfebB9f4CAC4cD523598fE1C5771181440143F24A',
  Reader: '0x2b43c90D1B727cEe1Df34925bcd5Ace52Ec37694',
  GlpManager: '0x3963FfC9dff443c2A94f21b129D429891E32ec18',
  RewardRouter: '0xA906F338CB21815cBc4Bc87ace9e68c87eF8d8F1',
  GlpRewardRouter: '0xB95DB5B167D75e6d04227CfFFA61069348d271F5',
  RewardReader: '0x8BFb8e82Ee4569aee78D03235ff465Bd436D40E0',
  NATIVE_TOKEN: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  GLP: '0x4277f8F2c384827B5273592FF7CeBd9f2C1ac258',
  GMX: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
  ES_GMX: '0xf42Ae1D54fd613C9bb14810b0588FaAa09a426cA',
  BN_GMX: '0x35247165119B69A40edD5304969560D0ef486921',
  USDG: '0x45096e7aA921f27590f8F19e457794EB09678141',
  ES_GMX_IOU: '0x6260101218eC4cCfFF1b778936C6f2400f95A954',
  StakedGmxTracker: '0x908C4D94D34924765f1eDc22A1DD098397c59dD4',
  BonusGmxTracker: '0x4d268a7d4C16ceB5a606c173Bd974984343fea13',
  FeeGmxTracker: '0xd2D1162512F927a7e282Ef43a362659E4F2a728F',
  StakedGlpTracker: '0x1aDDD80E6039594eE970E5872D247bf0414C8903',
  FeeGlpTracker: '0x4e971a87900b931fF39d1Aad67697F49835400b6',
  StakedGmxDistributor: '0x23208B91A98c7C1CD9FE63085BFf68311494F193',
  StakedGlpDistributor: '0x60519b48ec4183a61ca2B8e37869E675FD203b34',
  GmxVester: '0x199070DDfd1CFb69173aa2F7e20906F26B363004',
  GlpVester: '0xA75287d2f8b217273E7FCD7E86eF07D33972042E',
  OrderBook: '0x09f77E8A13De9a35a7231028187e9fD5DB8a2ACB',
  OrderExecutor: '0x7257ac5D0a0aaC04AA7bA2AC0A6Eb742E332c3fB',
  OrderBookReader: '0xa27C20A7CF0e1C68C0460706bB674f98F362Bc21',
  PositionRouter: '0xb87a436B93fFE9D75c5cFA7bAcFff96430b09868',
  PositionManager: '0x75E42e6f01baf1D6022bEa862A28774a9f8a4A0C',
  UniswapGmxEthPool: '0x80A9ae39310abf666A87C743d6ebBD0E8C42158E',
  ReferralStorage: '0xe6fab3f0c7199b0d34d7fbe83394fc0e0d06e99d',
  ReferralReader: '0x8Aa382760BCdCe8644C33e6C2D52f6304A76F5c8'
}), defineProperty_default()(_CONTRACTS, chains/* AVALANCHE */.Qz, {
  PositionValid: '0x9a78C72E5Bbd712f12745f1D1329c0aedFd86734',
  PositionBook: '0xA7D7e4Cae1fB53a817387f803FB981aA170ffE09',
  LP: '0x644E7b38Dcb0cF2A2617d3DaF74682071986F19E',
  USDC: '0x51b17FC671Fdc226d8d879BD6b3862FC23ee9684',
  BTC: '0xA0099F5a2ec87E92279366e3072BDc9187956D1C',
  ETH: '0x5758CD2017Ba4445f7A0e9E97BC9FA67d63587D1',
  LINK: '0xe881Ad0BFAe80c4198e3bc7520DBD3E0Ad786D5b',
  CoreVault: '0xaA521A22BC128CaE339B7eA037b4Ff304f1B56c6',
  VaultRouter: '0xEb32E5f1d61aeA828fD93bd2Bb84bf72C89698c4',
  AMMPriceFeed: '0x875D4602eCE6879BF6645cDf2cE2029D25675Ae5',
  ChainPriceFeed: '0xbe9a6965076cf8534969ef465E30d8104455730d',
  FastPriceFeed: '0x3AfcadB370F810048Bd40E5FE2AeeE4A0829F078',
  Price: '0x6268E48753aa16A1cb4Ba96df85FAE77dd4927e1',
  FeeVault: '0x45203E6E0ef4938B6C20fCA0E6216C32FB2D7cC9',
  ExecFee: '0x299dbBA0C9e03c0B1fA68689672B5e4187a7E30A',
  OpenFee: '0xbCe501f0926Be2b9D1c20c36e269575F2F33585E',
  CloseFee: '0x120410bDec436b741B058De2FCfe0088a4F2D621',
  FundFee: '0x6a2117ef4588dc5cD535fa99AFb546dF2663705b',
  LiquidateFee: '0xFEc46Ea513ca731d595dc7E7cbd526a28E7373a1',
  FeeRouter: '0x40D5570BE450F04fc778e7C40eB3381dafDD2cd7',
  MarketReader: '0x83b03ef3a5058Db7C99531f1A1050986DFbb76Bd',
  MarketAddressesProvider: '0xdb26b820154Fc6bBb725bF9e22099d16946B2953',
  MarketFactory: '0x2E471218f0669fcc62F6daC849798320A86A2B72',
  MarketPositionMgr: '0x90cb36493966feB50d9Efc91e727e780098248f8',
  OpenStoreLong: '0x6C7aBAe8Ec68C2f3FeB9bbf3880B4A768e0c2E72',
  CloseStoreLong: '0xf1F1098148e458C4A53A74A3165BAD4235A09c9d',
  OpenStoreShort: '0x95dA6FeC26106e7242980231b79Ff2c6e61F5bD5',
  CloseStoreShort: '0xe091274C10cF0FC52bd0e931e32B5000729AAf73',
  Market: '0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99',
  MarketValid: '0x7fa4B0bf142CeB49e6827D703d3a0F6c9dF490b8',
  OrderBook_true: '0xe7DFF0d37E9730FC21E08A3262a121164Da342EA',
  OrderBook_false: '0xD0390472fD2376808D83AA03DE0a8B23e0E7e153',
  MarketValidReader: '0xbE9aA7d1D4b98fEDD319f42f9c042971e2E15AFa',
  // avalanche
  Vault: '0x9ab2De34A33fB459b538c43f251eB825645e8595',
  Router: '0x5F719c2F1095F7B9fc68a68e35B51194f4b6abe8',
  VaultReader: '0x66eC8fc33A26feAEAe156afA3Cb46923651F6f0D',
  Reader: '0x2eFEE1950ededC65De687b40Fd30a7B5f4544aBd',
  GlpManager: '0xD152c7F25db7F4B95b7658323c5F33d176818EE4',
  RewardRouter: '0x82147C5A7E850eA4E28155DF107F2590fD4ba327',
  GlpRewardRouter: '0xB70B91CE0771d3f4c81D87660f71Da31d48eB3B3',
  RewardReader: '0x04Fc11Bd28763872d143637a7c768bD96E44c1b6',
  NATIVE_TOKEN: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
  GLP: '0x01234181085565ed162a948b6a5e88758CD7c7b8',
  GMX: '0x62edc0692BD897D2295872a9FFCac5425011c661',
  ES_GMX: '0xFf1489227BbAAC61a9209A08929E4c2a526DdD17',
  BN_GMX: '0x8087a341D32D445d9aC8aCc9c14F5781E04A26d2',
  USDG: '0xc0253c3cC6aa5Ab407b5795a04c28fB063273894',
  ES_GMX_IOU: '0x6260101218eC4cCfFF1b778936C6f2400f95A954',
  // placeholder address

  StakedGmxTracker: '0x2bD10f8E93B3669b6d42E74eEedC65dd1B0a1342',
  BonusGmxTracker: '0x908C4D94D34924765f1eDc22A1DD098397c59dD4',
  FeeGmxTracker: '0x4d268a7d4C16ceB5a606c173Bd974984343fea13',
  StakedGlpTracker: '0x9e295B5B976a184B14aD8cd72413aD846C299660',
  FeeGlpTracker: '0xd2D1162512F927a7e282Ef43a362659E4F2a728F',
  StakedGmxDistributor: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
  StakedGlpDistributor: '0xDd593Cf40734199afc9207eBe9ffF23dA4Bf7720',
  GmxVester: '0x472361d3cA5F49c8E633FB50385BfaD1e018b445',
  GlpVester: '0x62331A7Bd1dfB3A7642B7db50B5509E57CA3154A',
  OrderBook: '0x4296e307f108B2f583FF2F7B7270ee7831574Ae5',
  OrderExecutor: '0x4296e307f108B2f583FF2F7B7270ee7831574Ae5',
  OrderBookReader: '0xccFE3E576f8145403d3ce8f3c2f6519Dae40683B',
  PositionRouter: '0xffF6D276Bc37c61A23f06410Dce4A400f66420f8',
  PositionManager: '0xA21B83E579f4315951bA658654c371520BDcB866',
  TraderJoeGmxAvaxPool: '0x0c91a070f862666bbcce281346be45766d874d98',
  ReferralStorage: '0x827ed045002ecdabeb6e2b0d1604cf5fc3d322f8',
  ReferralReader: '0x505Ce16D3017be7D76a7C2631C0590E71A975083'
}), defineProperty_default()(_CONTRACTS, chains/* LOCAL */.Fe, {
  PositionValid: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  PositionBook: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
  MarketPositionMgr: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
  OpenStoreLong: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
  CloseStoreLong: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
  OpenStoreShort: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
  CloseStoreShort: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
  Market: '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853',
  OrderBook: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
  OrderBook_false: '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318',
  FeeVault: '0x610178dA211FEF7D417bC0e6FeD39F05609AD788',
  LP: '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e',
  USDC: '0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0',
  BTC: '0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82',
  ETH: '0x9A676e781A523b5d0C0e43731313A708CB607508',
  LINK: '0x0B306BF915C4d645ff596e518fAf3F9669b97016',
  CoreVault: '0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1',
  VaultRouter: '0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE',
  MarketReader: '0x68B1D87F95878fE05B998F19b66F4baba5De1aed',
  MarketValid: '0x3Aa5ebB10DC797CAC828524e59A333d0A371443c',
  MarketFactory: '0xc6e7DF5E7b4f2A278906862b61205850344D4e7d',
  MarketAddressesProvider: '0x59b670e9fA9D0A427751Af201D676719a970857b',
  MarketValidReader: '0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1',
  AMMPriceFeed: '0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44',
  ChainPriceFeed: '0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f',
  FastPriceFeed: '0x4A679253410272dd5232B3Ff7cF5dbB88f295319',
  Price: '0xf5059a5D33d5853360D16C683c16e67980206f36',
  ExecFee: '0x5eb3Bc0a489C5A8288765d2336659EbCA68FCd00',
  OpenFee: '0x36C02dA8a0983159322a80FFE9F24b1acfF8B570',
  CloseFee: '0x809d550fca64d94Bd9F66E60752A544199cfAC3D',
  FundFee: '0x4c5859f0F772848b2D91F1D83E2Fe57935348029',
  LiquidateFee: '0x1291Be112d480055DaFd8a610b7d1e203891C274',
  FeeRouter: '0x5f3f1dBD7B74C6B46e8c44f98792A1dAf8d69154'
}), _CONTRACTS);
/* harmony default export */ var addressConfig = (CONTRACTS);
;// CONCATENATED MODULE: ./src/config/contracts.ts

function getAddress(chainId, name) {
  if (!addressConfig[chainId][name]) {
    throw new Error("Unknown contract \"".concat(name, "\" for chainId ").concat(chainId));
  }
  return addressConfig[chainId][name];
}

/***/ }),

/***/ 61895:
/*!******************************!*\
  !*** ./src/lib/bigNumber.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": function() { return /* binding */ toBigNumber; }
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/bignumber */ 2593);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ 70794);
/* harmony import */ var _lib_numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/numbers */ 24069);



function toBigNumber(value) {
  if (value instanceof _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__/* .BigNumber */ .O$) {
    return (0,bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)((0,_lib_numbers__WEBPACK_IMPORTED_MODULE_2__/* .formatAmount */ .dN)(value, 18, 2));
  }
  return (0,bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value === '...' ? 0 : value);
}

/***/ }),

/***/ 24069:
/*!****************************!*\
  !*** ./src/lib/numbers.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H2": function() { return /* binding */ parseValue; },
/* harmony export */   "Jl": function() { return /* binding */ expandDecimals; },
/* harmony export */   "_b": function() { return /* binding */ bigNumberify; },
/* harmony export */   "dN": function() { return /* binding */ formatAmount; }
/* harmony export */ });
/* unused harmony exports trimZeroDecimals, limitDecimals, numberWithCommas, padDecimals, formatKeyAmount, formatArrayAmount, formatAmountFree */
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ 2593);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ 35553);

function bigNumberify(n) {
  try {
    return ethers__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(n);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('bigNumberify error', e);
    return ethers__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(0);
  }
}
function expandDecimals(n, decimals) {
  // console.log(n)
  // console.log(decimals)
  // @ts-ignore
  return bigNumberify(n).mul(bigNumberify(10).pow(decimals));
}
var trimZeroDecimals = function trimZeroDecimals(amount) {
  if (parseFloat(amount) === parseInt(amount)) {
    return parseInt(amount).toString();
  }
  return amount;
};
var limitDecimals = function limitDecimals(amount, maxDecimals) {
  var amountStr = amount.toString();
  if (maxDecimals === undefined) {
    return amountStr;
  }
  if (maxDecimals === 0) {
    return amountStr.split('.')[0];
  }
  var dotIndex = amountStr.indexOf('.');
  if (dotIndex !== -1) {
    var decimals = amountStr.length - dotIndex - 1;
    if (decimals > maxDecimals) {
      amountStr = amountStr.substr(0, amountStr.length - (decimals - maxDecimals));
    }
  }
  return amountStr;
};
function numberWithCommas(x) {
  if (!x) {
    return '...';
  }
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
var padDecimals = function padDecimals(amount, minDecimals) {
  var amountStr = amount.toString();
  var dotIndex = amountStr.indexOf('.');
  if (dotIndex !== -1) {
    var decimals = amountStr.length - dotIndex - 1;
    if (decimals < minDecimals) {
      amountStr = amountStr.padEnd(amountStr.length + (minDecimals - decimals), '0');
    }
  } else {
    amountStr = amountStr + '.0000';
  }
  return amountStr;
};
var formatAmount = function formatAmount(amount, tokenDecimals, displayDecimals, useCommas, defaultValue) {
  if (!defaultValue) {
    defaultValue = '...';
  }
  if (amount === undefined || amount.toString().length === 0) {
    return defaultValue;
  }
  if (displayDecimals === undefined) {
    displayDecimals = 4;
  }
  var amountStr = ethers__WEBPACK_IMPORTED_MODULE_1__/* .formatUnits */ .bM(amount, tokenDecimals);
  amountStr = limitDecimals(amountStr, displayDecimals);
  if (displayDecimals !== 0) {
    amountStr = padDecimals(amountStr, displayDecimals);
  }
  if (useCommas) {
    return numberWithCommas(amountStr);
  }
  return amountStr;
};
var formatKeyAmount = function formatKeyAmount(map, key, tokenDecimals, displayDecimals, useCommas) {
  if (!map || !map[key]) {
    return '...';
  }
  return formatAmount(map[key], tokenDecimals, displayDecimals, useCommas);
};
var formatArrayAmount = function formatArrayAmount(arr, index, tokenDecimals, displayDecimals, useCommas) {
  if (!arr || !arr[index]) {
    return '...';
  }
  return formatAmount(arr[index], tokenDecimals, displayDecimals, useCommas);
};
var formatAmountFree = function formatAmountFree(amount, tokenDecimals, displayDecimals) {
  if (!amount) {
    return '...';
  }
  var amountStr = ethers.utils.formatUnits(amount, tokenDecimals);
  amountStr = limitDecimals(amountStr, displayDecimals);
  return trimZeroDecimals(amountStr);
};
var parseValue = function parseValue(value, tokenDecimals) {
  if (value instanceof ethers__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O$) {
    return value;
  }
  var pValue = parseFloat(value);
  if (isNaN(pValue)) {
    return undefined;
  }
  value = limitDecimals(value, tokenDecimals);
  var amount = ethers__WEBPACK_IMPORTED_MODULE_1__/* .parseUnits */ .vz(value, tokenDecimals);
  return bigNumberify(amount);
};

/***/ }),

/***/ 76935:
/*!**********************************************************************************!*\
  !*** ./src/services/datasource/wallet/contracts/SolidityContract.ts + 7 modules ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": function() { return /* binding */ SolidityContract; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(17061);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(17156);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(56690);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(89728);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(38416);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/@ethersproject/contracts/lib.esm/index.js + 16 modules
var lib_esm = __webpack_require__(77294);
// EXTERNAL MODULE: ./src/config/contracts.ts + 3 modules
var contracts = __webpack_require__(27960);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(27424);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(861);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(18698);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
;// CONCATENATED MODULE: ./src/components/ExternalLink/externalLink.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86074);
;// CONCATENATED MODULE: ./src/components/ExternalLink/index.tsx




function ExternalLink(_ref) {
  var href = _ref.href,
    children = _ref.children,
    className = _ref.className;
  var classNames = classnames_default()('link-underline', className);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
    href: href,
    className: classNames,
    target: "_blank",
    rel: "noopener noreferrer",
    children: children
  });
}
/* harmony default export */ var components_ExternalLink = (ExternalLink);
;// CONCATENATED MODULE: ./src/components/ToastifyDebug/index.tsx




function ToastifyDebug(props) {
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "Toastify-debug",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "Toastify-debug-button",
      onClick: function onClick() {
        return setOpen(function (old) {
          return !old;
        });
      },
      children: open ? 'Hide error' : 'Show error'
    }), open && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "Toastify-debug-content",
      children: props.children
    })]
  });
}
// EXTERNAL MODULE: ./src/config/chains.ts
var chains = __webpack_require__(13805);
// EXTERNAL MODULE: ./src/lib/numbers.ts
var numbers = __webpack_require__(24069);
;// CONCATENATED MODULE: ./src/lib/contracts/utils.ts





function setGasPrice(_x, _x2, _x3) {
  return _setGasPrice.apply(this, arguments);
}
function _setGasPrice() {
  _setGasPrice = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(txnOpts, provider, chainId) {
    var maxGasPrice, premium, gasPrice, feeData;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          maxGasPrice = chains/* MAX_GAS_PRICE_MAP */.qd[chainId];
          premium = chains/* GAS_PRICE_ADJUSTMENT_MAP */.xW[chainId] || (0,numbers/* bigNumberify */._b)(0);
          _context.prev = 2;
          _context.next = 5;
          return provider.getFeeData();
        case 5:
          _context.next = 9;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](2);
        case 9:
          _context.next = 11;
          return provider.getGasPrice();
        case 11:
          gasPrice = _context.sent;
          if (!maxGasPrice) {
            _context.next = 21;
            break;
          }
          if (gasPrice.gt(maxGasPrice)) {
            maxGasPrice = gasPrice;
          }
          _context.next = 16;
          return provider.getFeeData();
        case 16:
          feeData = _context.sent;
          if (!(feeData && feeData.maxPriorityFeePerGas)) {
            _context.next = 21;
            break;
          }
          txnOpts.maxFeePerGas = maxGasPrice;
          txnOpts.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas.add(premium);
          return _context.abrupt("return");
        case 21:
          txnOpts.gasPrice = gasPrice.add(premium);
          return _context.abrupt("return");
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 7]]);
  }));
  return _setGasPrice.apply(this, arguments);
}
function getGasLimit(_x4, _x5) {
  return _getGasLimit.apply(this, arguments);
}
function _getGasLimit() {
  _getGasLimit = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(contract, method) {
    var _contract$estimateGas;
    var params,
      targetValue,
      defaultValue,
      value,
      gasLimit,
      _args2 = arguments;
    return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          params = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : [];
          targetValue = _args2.length > 3 ? _args2[3] : undefined;
          defaultValue = (0,numbers/* bigNumberify */._b)(0);
          value = targetValue;
          if (!value) {
            value = defaultValue;
          }
          _context2.next = 7;
          return (_contract$estimateGas = contract.estimateGas)[method].apply(_contract$estimateGas, toConsumableArray_default()(params).concat([{
            value: value
          }]));
        case 7:
          gasLimit = _context2.sent;
          if (gasLimit.lt(22000)) {
            gasLimit = (0,numbers/* bigNumberify */._b)(22000);
          }
          return _context2.abrupt("return", gasLimit.mul(11000).div(10000));
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getGasLimit.apply(this, arguments);
}
// EXTERNAL MODULE: ./src/lib/wallets.tsx
var wallets = __webpack_require__(16330);
// EXTERNAL MODULE: ./src/lib/helperToast.ts
var helperToast = __webpack_require__(71874);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(74704);
var createForOfIteratorHelper_default = /*#__PURE__*/__webpack_require__.n(createForOfIteratorHelper);
;// CONCATENATED MODULE: ./src/lib/contracts/transactionErrors.ts



var _TX_ERROR_PATTERNS;
var NOT_ENOUGH_FUNDS = 'NOT_ENOUGH_FUNDS';
var USER_DENIED = 'USER_DENIED';
var SLIPPAGE = 'SLIPPAGE';
var RPC_ERROR = 'RPC_ERROR';
var NETWORK_CHANGED = 'NETWORK_CHANGED';
var TX_ERROR_PATTERNS = (_TX_ERROR_PATTERNS = {}, defineProperty_default()(_TX_ERROR_PATTERNS, NOT_ENOUGH_FUNDS, [{
  msg: 'not enough funds for gas'
}, {
  msg: 'failed to execute call with revert code InsufficientGasFunds'
}]), defineProperty_default()(_TX_ERROR_PATTERNS, USER_DENIED, [{
  msg: 'User denied transaction signature'
}]), defineProperty_default()(_TX_ERROR_PATTERNS, SLIPPAGE, [{
  msg: 'Router: mark price lower than limit'
}, {
  msg: 'Router: mark price higher than limit'
}]), defineProperty_default()(_TX_ERROR_PATTERNS, NETWORK_CHANGED, [{
  msg: 'underlying network changed'
}]), defineProperty_default()(_TX_ERROR_PATTERNS, RPC_ERROR, [
// @see https://eips.ethereum.org/EIPS/eip-1474#error-codes
{
  code: -32005
}, {
  msg: 'Non-200 status code'
}, {
  msg: 'Request limit exceeded'
}, {
  msg: 'Internal JSON-RPC error'
}, {
  msg: 'Response has no error or result'
}, {
  msg: "we can't execute this request"
}, {
  msg: "couldn't connect to the network"
}]), _TX_ERROR_PATTERNS);
function extractError(ex) {
  var _ex$data;
  if (!ex) {
    return [];
  }
  var message = ((_ex$data = ex.data) === null || _ex$data === void 0 ? void 0 : _ex$data.message) || ex.message;
  var code = ex.code;
  if (!message && !code) {
    return [];
  }
  for (var _i = 0, _Object$entries = Object.entries(TX_ERROR_PATTERNS); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = slicedToArray_default()(_Object$entries[_i], 2),
      type = _Object$entries$_i[0],
      patterns = _Object$entries$_i[1];
    var _iterator = createForOfIteratorHelper_default()(patterns),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pattern = _step.value;
        var matchCode = pattern.code && code === pattern.code;
        var matchMessage = pattern.msg && message && message.includes(pattern.msg);
        if (matchCode || matchMessage) {
          return [message, type, ex.data];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return [message, null, ex.data];
}
;// CONCATENATED MODULE: ./src/lib/contracts/callContract.tsx















function callContract(_x, _x2, _x3, _x4, _x5) {
  return _callContract.apply(this, arguments);
}
function _callContract() {
  _callContract = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(chainId, contract, method, params, opts) {
    var _errorData$error;
    var txnOpts, res, txUrl, sentMsg, message, pendingTxn, failMsg, autoCloseToast, _extractError, _extractError2, _message, type, errorData, originalError;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (!Array.isArray(params) && typeof_default()(params) === 'object' && opts === undefined) {
            opts = params;
            params = [];
          }
          if (!opts) {
            opts = {};
          }
          txnOpts = {};
          if (opts.value) {
            txnOpts.value = opts.value;
          }
          if (!opts.gasLimit) {
            _context.next = 9;
            break;
          }
          _context.t0 = opts.gasLimit;
          _context.next = 12;
          break;
        case 9:
          _context.next = 11;
          return getGasLimit(contract, method, params, txnOpts.value);
        case 11:
          _context.t0 = _context.sent;
        case 12:
          txnOpts.gasLimit = _context.t0;
          _context.next = 15;
          return setGasPrice(txnOpts, contract.provider, chainId);
        case 15:
          if (method === 'increaseTrade') {
            // console.log('[increaseTrade]', params)
          }
          _context.next = 18;
          return contract[method].apply(contract, toConsumableArray_default()(params).concat([txnOpts]));
        case 18:
          res = _context.sent;
          txUrl = (0,chains/* getExplorerUrl */.jY)(chainId) + 'tx/' + res.hash;
          sentMsg = opts.sentMsg || "Transaction sent.";
          helperToast/* helperToast.success */.U.success( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [sentMsg, ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(components_ExternalLink, {
              href: txUrl
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})]
          }));
          if (opts.setPendingTxns) {
            message = opts.hideSuccessMsg ? undefined : opts.successMsg || "Transaction completed!";
            pendingTxn = {
              hash: res.hash,
              message: message
            };
            opts.setPendingTxns(function (pendingTxns) {
              return [].concat(toConsumableArray_default()(pendingTxns), [pendingTxn]);
            });
          }
          return _context.abrupt("return", res);
        case 26:
          _context.prev = 26;
          _context.t1 = _context["catch"](0);
          autoCloseToast = 5000;
          _extractError = extractError(_context.t1), _extractError2 = slicedToArray_default()(_extractError, 3), _message = _extractError2[0], type = _extractError2[1], errorData = _extractError2[2];
          _context.t2 = type;
          _context.next = _context.t2 === NOT_ENOUGH_FUNDS ? 33 : _context.t2 === NETWORK_CHANGED ? 35 : _context.t2 === USER_DENIED ? 37 : _context.t2 === SLIPPAGE ? 39 : _context.t2 === RPC_ERROR ? 41 : 45;
          break;
        case 33:
          failMsg = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: ["There is not enough ETH in your account on Arbitrum to send this transaction.", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(components_ExternalLink, {
              href: "https://arbitrum.io/bridge-tutorial/",
              children: "Bridge ETH to Arbitrum"
            })]
          });
          return _context.abrupt("break", 47);
        case 35:
          failMsg = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: ["Your wallet is not connected to ", (0,chains/* getChainName */.qz)(chainId), "."]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "clickable underline",
              onClick: function onClick() {
                return (0,wallets/* switchNetwork */.If)(chainId, true);
              },
              children: ["Switch to ", (0,chains/* getChainName */.qz)(chainId)]
            })]
          });
          return _context.abrupt("break", 47);
        case 37:
          failMsg = "Transaction was cancelled.";
          return _context.abrupt("break", 47);
        case 39:
          failMsg = "The mark price has changed, consider increasing your Allowed Slippage by clicking on the \"...\" icon next to your address.";
          return _context.abrupt("break", 47);
        case 41:
          autoCloseToast = false;
          originalError = (errorData === null || errorData === void 0 ? void 0 : (_errorData$error = errorData.error) === null || _errorData$error === void 0 ? void 0 : _errorData$error.message) || (errorData === null || errorData === void 0 ? void 0 : errorData.message) || _message;
          failMsg = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: ["Transaction failed due to RPC error.", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Please try changing the RPC url in your wallet settings.", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(components_ExternalLink, {
              href: "https://gmxio.gitbook.io/gmx/trading#backup-rpc-urls",
              children: "More info"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), originalError && /*#__PURE__*/(0,jsx_runtime.jsx)(ToastifyDebug, {
              children: originalError
            })]
          });
          return _context.abrupt("break", 47);
        case 45:
          autoCloseToast = false;
          failMsg = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [opts.failMsg || "Transaction failed", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), _message && /*#__PURE__*/(0,jsx_runtime.jsx)(ToastifyDebug, {
              children: _message
            })]
          });
        case 47:
          helperToast/* helperToast.error */.U.error(failMsg, {
            autoClose: autoCloseToast
          });
          throw _context.t1;
        case 49:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 26]]);
  }));
  return _callContract.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/lib/contracts/index.ts


// EXTERNAL MODULE: ./src/lib/rpc/index.ts
var rpc = __webpack_require__(1403);
;// CONCATENATED MODULE: ./src/services/datasource/wallet/contracts/SolidityContract.ts










var SolidityContract = /*#__PURE__*/function () {
  function SolidityContract(library, chainId) {
    var abi = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    classCallCheck_default()(this, SolidityContract);
    defineProperty_default()(this, "_contract", void 0);
    defineProperty_default()(this, "_address", void 0);
    defineProperty_default()(this, "_library", void 0);
    defineProperty_default()(this, "_abi", void 0);
    defineProperty_default()(this, "_chainId", void 0);
    defineProperty_default()(this, "_PendingTxns", void 0);
    this._chainId = chainId;
    if (address == undefined) this._address = this.getAddress(this._chainId);else this._address = address;
    this._abi = abi;
    this._library = library;
    this._contract = this.newContract(this._address, this._abi);
  }
  createClass_default()(SolidityContract, [{
    key: "newContract",
    value: function newContract(address, abi) {
      if (abi != undefined) this._abi = abi;
      var provider = (0,rpc/* getProvider */.V)(this._library, this._chainId);
      return getContract(address, this._abi, provider);
    }
  }, {
    key: "setChainId",
    value: function setChainId(id) {
      this._chainId = id;
      //修改链id后，按链id获取合约address
      //this._contract=this.newContract(address,this._abi)
      this._address = this.getAddress(id);
      this._contract = this.newContract(this._address, this._abi);
    }
    // TODO move to config
  }, {
    key: "getAddress",
    value: function getAddress() {
      var chainId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 43113;
      var className = this.getClassName();
      //console.log('className', className)
      var addr = (0,contracts/* getAddress */.K)(chainId, className);
      return addr;
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      return this.constructor.name;
    }
  }, {
    key: "setPendingTxns",
    value: function setPendingTxns(txns) {
      this._PendingTxns = txns;
    }
  }, {
    key: "call",
    value: function () {
      var _call = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(method) {
        var _len,
          params,
          _key,
          _this$_contract,
          res,
          _args = arguments;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              for (_len = _args.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                params[_key - 1] = _args[_key];
              }
              _context.prev = 1;
              _context.next = 4;
              return (_this$_contract = this._contract)[method].apply(_this$_contract, params);
            case 4:
              res = _context.sent;
              return _context.abrupt("return", res);
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.log('SolidityContract call failed address', this._contract.address, this.getClassName());
              console.log('SolidityContract call failed functionName', method);
              console.log('SolidityContract call failed params', params);
              console.log('SolidityContract call failed error', _context.t0);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 8]]);
      }));
      function call(_x) {
        return _call.apply(this, arguments);
      }
      return call;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(method) {
        var _len2,
          params,
          _key2,
          _args2 = arguments;
        return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              for (_len2 = _args2.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                params[_key2 - 1] = _args2[_key2];
              }
              _context2.next = 3;
              return callFun(this._chainId, this._contract, method, this._PendingTxns, params);
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function send(_x2) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }]);
  return SolidityContract;
}();
var getContract = function getContract(address, abi, provider) {
  return new lib_esm.Contract(address, abi, provider);
};
function callFun() {
  return _callFun.apply(this, arguments);
}
function _callFun() {
  _callFun = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
    var chainId,
      contract,
      functionName,
      setPendingTxns,
      params,
      result,
      _args3 = arguments;
    return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          chainId = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 5;
          contract = _args3.length > 1 ? _args3[1] : undefined;
          functionName = _args3.length > 2 ? _args3[2] : undefined;
          setPendingTxns = _args3.length > 3 ? _args3[3] : undefined;
          params = _args3.length > 4 ? _args3[4] : undefined;
          _context3.prev = 5;
          _context3.next = 8;
          return callContract(chainId, contract, functionName, params, {
            gasLimit: (0,numbers/* bigNumberify */._b)(3000000),
            setPendingTxns: setPendingTxns
          });
        case 8:
          result = _context3.sent;
          return _context3.abrupt("return", result);
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](5);
          console.log('SolidityContract send failed address', contract.address);
          console.log('SolidityContract send failed functionName', functionName);
          console.log('SolidityContract send failed params', params);
          console.log('SolidityContract send failed error', _context3.t0);
          console.error(_context3.t0);
        case 19:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[5, 12]]);
  }));
  return _callFun.apply(this, arguments);
}

/***/ })

}]);