"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[686],{13805:function(e,r,t){t.d(r,{EC:function(){return V},FQ:function(){return O},Fe:function(){return v},PO:function(){return x},Qz:function(){return A},RM:function(){return U},RR:function(){return h},T8:function(){return P},Vr:function(){return p},Ww:function(){return y},b9:function(){return L},bw:function(){return m},bx:function(){return g},jY:function(){return S},p4:function(){return C},qF:function(){return D},qd:function(){return _},qz:function(){return N},rC:function(){return k},vC:function(){return I},vT:function(){return B},wc:function(){return T},xW:function(){return R}});var a,n,c,o,i,d,s,f,u=t(9783),b=t.n(u),F=t(35553),E=t(42946),l=F.fi,C=1,A=43114,x=42161,B=5,D=421613,h=56,p=97,v=1337,g=43113,k=g,m=(a={},b()(a,x,[]),b()(a,g,["https://api.avax-test.network/ext/bc/C/rpc"]),a);n={},b()(n,h,{nativeTokenSymbol:"BNB",defaultCollateralSymbol:"BUSD",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:8,v2:!1}),b()(n,p,{nativeTokenSymbol:"BNB",defaultCollateralSymbol:"BUSD",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:8,v2:!1}),b()(n,D,{nativeTokenSymbol:"ETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:l("0.0003"),INCREASE_ORDER_EXECUTION_GAS_FEE:l("0.0003"),DECREASE_ORDER_EXECUTION_GAS_FEE:l("0.000300001")}),b()(n,x,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:l("0.0003"),INCREASE_ORDER_EXECUTION_GAS_FEE:l("0.0003"),DECREASE_ORDER_EXECUTION_GAS_FEE:l("0.000300001")}),b()(n,A,{nativeTokenSymbol:"AVAX",wrappedTokenSymbol:"WAVAX",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:l("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:l("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:l("0.0100001")}),b()(n,B,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:l("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:l("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:l("0.0100001")}),b()(n,v,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:l("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:l("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:l("0.0100001")});function S(e){return 3===e?"https://ropsten.etherscan.io/":42===e?"https://kovan.etherscan.io/":e===h?"https://bscscan.com/":e===p?"https://testnet.bscscan.com/":e===D?"https://testnet.arbiscan.io/":e===x?"https://arbiscan.io/":e===A?"https://snowtrace.io/":e===B?"https://goerli.etherscan.io/":"https://testnet.snowtrace.io/"}var R=(c={},b()(c,x,"0"),b()(c,A,"3000000000"),b()(c,v,"3000000000"),b()(c,B,"3000000000"),c),_=(o={},b()(o,A,"200000000000"),b()(o,v,"200000000000"),b()(o,B,"200000000000"),o),P=["https://arb1.arbitrum.io/rpc"],y=["https://api.avax.network/ext/bc/C/rpc"],w=["https://bsc-dataseed.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed2.defibit.io","https://bsc-dataseed3.defibit.io","https://bsc-dataseed4.defibit.io","https://bsc-dataseed2.ninicoin.io","https://bsc-dataseed3.ninicoin.io","https://bsc-dataseed4.ninicoin.io","https://bsc-dataseed1.binance.org","https://bsc-dataseed2.binance.org","https://bsc-dataseed3.binance.org","https://bsc-dataseed4.binance.org"],O=[g],M=(i={},b()(i,h,"BSC"),b()(i,p,"BSC Testnet"),b()(i,D,"Arbitrum Goerli Testnet"),b()(i,x,"Arbitrum"),b()(i,A,"Avalanche"),b()(i,g,"Avalanche Fuji Testnet"),b()(i,v,"Local Dev"),b()(i,B,"Goerli"),i),T=(d={},b()(d,h,{chainId:"0x"+h.toString(16),chainName:"BSC",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:w,blockExplorerUrls:["https://bscscan.com"]}),b()(d,p,{chainId:"0x"+p.toString(16),chainName:"BSC Testnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-testnet.public.blastapi.io"],blockExplorerUrls:["https://testnet.bscscan.com/"]}),b()(d,D,{chainId:"0x"+D.toString(16),chainName:"Arbitrum Testnet",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["https://goerli-rollup.arbitrum.io/rpc"],blockExplorerUrls:["https://goerli.arbiscan.io/"]}),b()(d,x,{chainId:"0x"+x.toString(16),chainName:"Arbitrum",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:P,blockExplorerUrls:[S(x)]}),b()(d,A,{chainId:"0x"+A.toString(16),chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:y,blockExplorerUrls:[S(A)]}),b()(d,g,{chainId:"0x"+g.toString(16),chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:["https://api.avax-test.network/ext/C/rpc"],blockExplorerUrls:["https://testnet.snowtrace.io"]}),b()(d,B,{chainId:"0x"+B.toString(16),chainName:"GOERLI",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://goerli.infura.io/v3/"],blockExplorerUrls:[S(B)]}),b()(d,v,{chainId:"0x"+v.toString(16),chainName:"Local",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["http://127.0.0.1:8545"],blockExplorerUrls:[S(v)]}),d);function N(e){return M[e]}s={},b()(s,x,3),b()(s,A,3),b()(s,v,3),b()(s,B,3);var I=(f={},b()(f,C,["https://rpc.ankr.com/eth"]),b()(f,h,w),b()(f,x,P),b()(f,A,y),b()(f,g,["https://api.avax-test.network/ext/bc/C/rpc"]),b()(f,v,"http://127.0.0.1:8545"),b()(f,B,"https://goerli.infura.io/v3/"),f);function U(e){return(0,E.Z)(I[e])}function L(e){return(0,E.Z)(m[e])}function V(e){return O.includes(e)}},27960:function(e,r,t){t.d(r,{K:function(){return f}});var a,n=t(9783),c=t.n(n),o=JSON.parse('{"MockOracle":"0xADae5078D4c622A48397B2E87E067DD1f895d240","USDC":"0xe8F5C365A311E5C18f87fbD9E32e3bc678cB6DAc","ETH":"0xEa0c41Fd13852a84052b4832d87BF995C95Ba8A4","BTC":"0x46Ba3808743065deEB270f604d0c745C24759Afd","LINK":"0xC112E008e88CE6c35a9afebaA31cd6706d06E36A","----------":"-------------------","PositionValid":"0xd1d44D00CEf1C71AED92878e455AfE034D53e96f","PositionMarket":"0x6888857C6B217397D0573Ff3DA9C92C212A91219","PositionBook":"0x6D90AF4d4eccA60bB56fED8858a95c5029227813","MarketPositionMgr":"0x7A0A0D7A20c885d6aC97aFa75BD9a48B1D30014f","OpenStoreLong":"0x5Cab7aCBFc1026115144c51f0FfFCF06D43A5e6A","CloseStoreLong":"0x0E2a58A5752ef43e5BC27dFCF9BFB4679739305C","OpenStoreShort":"0x5974e1cA0273573f5553649c3782EB821e6d2d3a","CloseStoreShort":"0xC9CB2E21b086A2eA2eA32cF1bbE0891aF83d37C5","Market":"0xf495b4651797ce119AFa7C241360e0a469a0234F","Market2":"0x82BaCc084C13b77F869701b909D013F53e719136","OrderBookLong":"0x39dD21013d8A195a51a7B64ed7445D0Cff92FF40","OrderBookShort":"0x1a1b04a350191CB36E72FE324CAd0c24239c3F4d","FeeVault":"0x8572C17fCbDadd015565c144024cc5a8Cb45A4c3","LP":"0x486aF7633aE482C9D1C1D65FfF3274B2A9412EF9","CoreVault":"0xf1FE1c31ddc6dC9d549fdD35F4934a3f3316c575","VaultRouter":"0x9C43Cbc9CA77d133828697148B57a2aE76389daF","Referral":"0x97F0d87a49577f8bd0B7EaDFb0bb2B70e3a008d2","MarketReader":"0x678b583b6018405b43c69d55D635111773B55542","MarketValid":"0xf5c058270FB2b4cD6C2326CA238ab1032B2B81Ce","MarketFactory":"0xA3984899fd2E992EF6D21E975F967419f81BF082","MarketAddressesProvider":"0x4414EAb19636d627C2601297696b85739BF5E705","MarketValidReader":"0x972c416B3CEA2ae027E471EB7141926Cf9100EE6","FeeStore":"0xd2bD9b48eA48cE4AEc22B95b2ed2C55a7836A45D","ExecFee":"0xc7323F7226E493d190601258e0CA546cA4536727","OpenFee":"0x28189D29A24D8f675eCF2BD10B45D08e2BBCAaca","CloseFee":"0x72C741fbDB42076fFC69AE78E4cA82Ff73B674b7","FundFee":"0x4b8Fd43fFd2240C05193BaD881c5cE188408822c","LiquidateFee":"0xfa339956c46FE54e4ae58c0d4c962Abc0182Fc61","FeeRouter":"0x4Eb7B95C49c3a0a8b5631C3CA83e1e7D0B524E27","AutoOpenOrderMock":"0xbF6871Fb7B33f3c295C02D97440FbA4E2A2CA212","AutoCloseOrderMock":"0x8deBF895AbDCfb6B5674Fb45fc721C107322D0d2","AutoLiquidateMock":"0xc85AeBe228036Fe412b941f0B81d2345F1D11a91"}'),i=JSON.parse('{"PositionValid":"0xc10E7A6B52EAF38e42F8bebACB3A908C59c6fF8c","PositionBook":"0x71317eD50bc0c418d95DeFb1B15D9DEac3070703","MarketPositionMgr":"0xcD17b35cd2553A8a71a92f690bd77f6414aFd7dd","OpenStoreLong":"0x00f74dAc097a0E26725549aaBB1D546670081d53","CloseStoreLong":"0x0bA7BC8566366188547927c5eD401c3785e870a7","OpenStoreShort":"0xd2C8F633aa0AbA43A244b24b5D0828f190a7c5DF","CloseStoreShort":"0x1A9bC34d6ad1a82aC90c985eB344E36e46C7c6E1","Market":"0xe1F7429803636cFFa97304318003B4fDaE5a9a2c","OrderBook_true":"0x007F259299f3298bd91e266FA625C09537a6e6FC","OrderBook_false":"0x900486B2aB593d5A02e92F93fB1184981EBb22af","FeeVault":"0xa70309a0676Fe3826e93F86395220600B6cC3c0F","LP":"0xc01a7a82f59532cfBCE95a2172B6Dc7202309798","USDC":"0x9a459864dA19B6Dc8d4F88782c597aec03EfFf7a","BTC":"0x8fA482291bdf587248f1121aca42579359fbbd0E","ETH":"0xf124c30133084306ba0d7aa19B9102c6a7652adA","LINK":"0x18473B4049800ecE4f49f9c3F2661387216CCeDE","CoreVault":"0xC73aA40fC6b656722a20943BFeA88B48adf95160","VaultRouter":"0xFd45757534FB0956D187D757bc64A1c910951E3F","MarketReader":"0xa72feB9d414c87e6Ddf9Ff3877C373A05f30081B","MarketValid":"0x2DFA96b88428BC78c443546b4D059Ff1Cb4EB10A","MarketFactory":"0x0384c305bf356D6aD4fFDC876171efaD51ac8E02","MarketAddressesProvider":"0x557E5718aeb597f5C28EF8c9848824eE2d2de595","MarketValidReader":"0xF654eBe46dE714986927b3C0683409892C385B9f","AMMPriceFeed":"0x6d1BBa7d6C7F05580AC1833F0d964A4Bc7B8cA72","ChainPriceFeed":"0xB206a6d9D48F53ad4d0BcD6Dc2d5286b08F93E12","FastPriceFeed":"0x7677dFd654983De4513E417A91b2DEC39dc5c6Ef","Price":"0x261854A54637Bb1a185d3AAB512D6B0cC51Ab673","ExecFee":"0xD8c716359d8Dd3De2e79e7E20Eb91DB7614f140E","OpenFee":"0x66C25E846353fb4826A75E98b718262379787dB8","CloseFee":"0x1DC6a7a260937062e06a28D0c8F950820441689c","FundFee":"0x1fc7869E435755AB05BdC030FD9BAc59BF64AAC1","LiquidateFee":"0x752534A11CC4F94433708073192Df70042325aEb","FeeRouter":"0x3C03114113D12AE235CAE141151cDB9A9e72a297"}'),d=t(13805),s=(a={},c()(a,d.bx,o),c()(a,d.vT,i),c()(a,d.RR,{MarketReader:"0x2A19Ca0DA18af5917b13e2d580Ea77822E88f6eE",MarketFactory:"0x338C2A3Fd9c506D00d07939fcA1AEcfda993C750"}),c()(a,d.Vr,{PositionValid:"0x9a78C72E5Bbd712f12745f1D1329c0aedFd86734",PositionBook:"0xA7D7e4Cae1fB53a817387f803FB981aA170ffE09",LP:"0x644E7b38Dcb0cF2A2617d3DaF74682071986F19E",USDC:"0x51b17FC671Fdc226d8d879BD6b3862FC23ee9684",BTC:"0xA0099F5a2ec87E92279366e3072BDc9187956D1C",ETH:"0x5758CD2017Ba4445f7A0e9E97BC9FA67d63587D1",LINK:"0xe881Ad0BFAe80c4198e3bc7520DBD3E0Ad786D5b",CoreVault:"0xaA521A22BC128CaE339B7eA037b4Ff304f1B56c6",VaultRouter:"0xEb32E5f1d61aeA828fD93bd2Bb84bf72C89698c4",AMMPriceFeed:"0x875D4602eCE6879BF6645cDf2cE2029D25675Ae5",ChainPriceFeed:"0xbe9a6965076cf8534969ef465E30d8104455730d",FastPriceFeed:"0x3AfcadB370F810048Bd40E5FE2AeeE4A0829F078",Price:"0x6268E48753aa16A1cb4Ba96df85FAE77dd4927e1",FeeVault:"0x45203E6E0ef4938B6C20fCA0E6216C32FB2D7cC9",ExecFee:"0x299dbBA0C9e03c0B1fA68689672B5e4187a7E30A",OpenFee:"0xbCe501f0926Be2b9D1c20c36e269575F2F33585E",CloseFee:"0x120410bDec436b741B058De2FCfe0088a4F2D621",FundFee:"0x6a2117ef4588dc5cD535fa99AFb546dF2663705b",LiquidateFee:"0xFEc46Ea513ca731d595dc7E7cbd526a28E7373a1",FeeRouter:"0x40D5570BE450F04fc778e7C40eB3381dafDD2cd7",MarketReader:"0x83b03ef3a5058Db7C99531f1A1050986DFbb76Bd",MarketAddressesProvider:"0xdb26b820154Fc6bBb725bF9e22099d16946B2953",MarketFactory:"0x2E471218f0669fcc62F6daC849798320A86A2B72",MarketPositionMgr:"0x90cb36493966feB50d9Efc91e727e780098248f8",OpenStoreLong:"0x6C7aBAe8Ec68C2f3FeB9bbf3880B4A768e0c2E72",CloseStoreLong:"0xf1F1098148e458C4A53A74A3165BAD4235A09c9d",OpenStoreShort:"0x95dA6FeC26106e7242980231b79Ff2c6e61F5bD5",CloseStoreShort:"0xe091274C10cF0FC52bd0e931e32B5000729AAf73",Market:"0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99",MarketValid:"0x7fa4B0bf142CeB49e6827D703d3a0F6c9dF490b8",OrderBook_true:"0xe7DFF0d37E9730FC21E08A3262a121164Da342EA",OrderBook_false:"0xD0390472fD2376808D83AA03DE0a8B23e0E7e153",MarketValidReader:"0xbE9aA7d1D4b98fEDD319f42f9c042971e2E15AFa"}),c()(a,d.qF,{PositionValid:"0x9a78C72E5Bbd712f12745f1D1329c0aedFd86734",PositionBook:"0xA7D7e4Cae1fB53a817387f803FB981aA170ffE09",LP:"0x644E7b38Dcb0cF2A2617d3DaF74682071986F19E",USDC:"0x51b17FC671Fdc226d8d879BD6b3862FC23ee9684",BTC:"0xA0099F5a2ec87E92279366e3072BDc9187956D1C",ETH:"0x5758CD2017Ba4445f7A0e9E97BC9FA67d63587D1",LINK:"0xe881Ad0BFAe80c4198e3bc7520DBD3E0Ad786D5b",CoreVault:"0xaA521A22BC128CaE339B7eA037b4Ff304f1B56c6",VaultRouter:"0xEb32E5f1d61aeA828fD93bd2Bb84bf72C89698c4",AMMPriceFeed:"0x875D4602eCE6879BF6645cDf2cE2029D25675Ae5",ChainPriceFeed:"0xbe9a6965076cf8534969ef465E30d8104455730d",FastPriceFeed:"0x3AfcadB370F810048Bd40E5FE2AeeE4A0829F078",Price:"0x6268E48753aa16A1cb4Ba96df85FAE77dd4927e1",FeeVault:"0x45203E6E0ef4938B6C20fCA0E6216C32FB2D7cC9",ExecFee:"0x299dbBA0C9e03c0B1fA68689672B5e4187a7E30A",OpenFee:"0xbCe501f0926Be2b9D1c20c36e269575F2F33585E",CloseFee:"0x120410bDec436b741B058De2FCfe0088a4F2D621",FundFee:"0x6a2117ef4588dc5cD535fa99AFb546dF2663705b",LiquidateFee:"0xFEc46Ea513ca731d595dc7E7cbd526a28E7373a1",FeeRouter:"0x40D5570BE450F04fc778e7C40eB3381dafDD2cd7",MarketReader:"0x83b03ef3a5058Db7C99531f1A1050986DFbb76Bd",MarketAddressesProvider:"0xdb26b820154Fc6bBb725bF9e22099d16946B2953",MarketFactory:"0x2E471218f0669fcc62F6daC849798320A86A2B72",MarketPositionMgr:"0x90cb36493966feB50d9Efc91e727e780098248f8",OpenStoreLong:"0x6C7aBAe8Ec68C2f3FeB9bbf3880B4A768e0c2E72",CloseStoreLong:"0xf1F1098148e458C4A53A74A3165BAD4235A09c9d",OpenStoreShort:"0x95dA6FeC26106e7242980231b79Ff2c6e61F5bD5",CloseStoreShort:"0xe091274C10cF0FC52bd0e931e32B5000729AAf73",Market:"0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99",MarketValid:"0x7fa4B0bf142CeB49e6827D703d3a0F6c9dF490b8",OrderBook_true:"0xe7DFF0d37E9730FC21E08A3262a121164Da342EA",OrderBook_false:"0xD0390472fD2376808D83AA03DE0a8B23e0E7e153",MarketValidReader:"0xbE9aA7d1D4b98fEDD319f42f9c042971e2E15AFa"}),c()(a,d.PO,{PositionValid:"0x9a78C72E5Bbd712f12745f1D1329c0aedFd86734",PositionBook:"0xA7D7e4Cae1fB53a817387f803FB981aA170ffE09",LP:"0x644E7b38Dcb0cF2A2617d3DaF74682071986F19E",USDC:"0x51b17FC671Fdc226d8d879BD6b3862FC23ee9684",BTC:"0xA0099F5a2ec87E92279366e3072BDc9187956D1C",ETH:"0x5758CD2017Ba4445f7A0e9E97BC9FA67d63587D1",LINK:"0xe881Ad0BFAe80c4198e3bc7520DBD3E0Ad786D5b",CoreVault:"0xaA521A22BC128CaE339B7eA037b4Ff304f1B56c6",VaultRouter:"0xEb32E5f1d61aeA828fD93bd2Bb84bf72C89698c4",AMMPriceFeed:"0x875D4602eCE6879BF6645cDf2cE2029D25675Ae5",ChainPriceFeed:"0xbe9a6965076cf8534969ef465E30d8104455730d",FastPriceFeed:"0x3AfcadB370F810048Bd40E5FE2AeeE4A0829F078",Price:"0x6268E48753aa16A1cb4Ba96df85FAE77dd4927e1",FeeVault:"0x45203E6E0ef4938B6C20fCA0E6216C32FB2D7cC9",ExecFee:"0x299dbBA0C9e03c0B1fA68689672B5e4187a7E30A",OpenFee:"0xbCe501f0926Be2b9D1c20c36e269575F2F33585E",CloseFee:"0x120410bDec436b741B058De2FCfe0088a4F2D621",FundFee:"0x6a2117ef4588dc5cD535fa99AFb546dF2663705b",LiquidateFee:"0xFEc46Ea513ca731d595dc7E7cbd526a28E7373a1",FeeRouter:"0x40D5570BE450F04fc778e7C40eB3381dafDD2cd7",MarketReader:"0x83b03ef3a5058Db7C99531f1A1050986DFbb76Bd",MarketAddressesProvider:"0xdb26b820154Fc6bBb725bF9e22099d16946B2953",MarketFactory:"0x2E471218f0669fcc62F6daC849798320A86A2B72",MarketPositionMgr:"0x90cb36493966feB50d9Efc91e727e780098248f8",OpenStoreLong:"0x6C7aBAe8Ec68C2f3FeB9bbf3880B4A768e0c2E72",CloseStoreLong:"0xf1F1098148e458C4A53A74A3165BAD4235A09c9d",OpenStoreShort:"0x95dA6FeC26106e7242980231b79Ff2c6e61F5bD5",CloseStoreShort:"0xe091274C10cF0FC52bd0e931e32B5000729AAf73",Market:"0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99",MarketValid:"0x7fa4B0bf142CeB49e6827D703d3a0F6c9dF490b8",OrderBook_true:"0xe7DFF0d37E9730FC21E08A3262a121164Da342EA",OrderBook_false:"0xD0390472fD2376808D83AA03DE0a8B23e0E7e153",MarketValidReader:"0xbE9aA7d1D4b98fEDD319f42f9c042971e2E15AFa",Vault:"0x489ee077994B6658eAfA855C308275EAd8097C4A",Router:"0xaBBc5F99639c9B6bCb58544ddf04EFA6802F4064",VaultReader:"0xfebB9f4CAC4cD523598fE1C5771181440143F24A",Reader:"0x2b43c90D1B727cEe1Df34925bcd5Ace52Ec37694",GlpManager:"0x3963FfC9dff443c2A94f21b129D429891E32ec18",RewardRouter:"0xA906F338CB21815cBc4Bc87ace9e68c87eF8d8F1",GlpRewardRouter:"0xB95DB5B167D75e6d04227CfFFA61069348d271F5",RewardReader:"0x8BFb8e82Ee4569aee78D03235ff465Bd436D40E0",NATIVE_TOKEN:"0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",GLP:"0x4277f8F2c384827B5273592FF7CeBd9f2C1ac258",USDG:"0x45096e7aA921f27590f8F19e457794EB09678141",StakedGlpTracker:"0x1aDDD80E6039594eE970E5872D247bf0414C8903",FeeGlpTracker:"0x4e971a87900b931fF39d1Aad67697F49835400b6",GlpVester:"0xA75287d2f8b217273E7FCD7E86eF07D33972042E",OrderBook:"0x09f77E8A13De9a35a7231028187e9fD5DB8a2ACB",OrderExecutor:"0x7257ac5D0a0aaC04AA7bA2AC0A6Eb742E332c3fB",OrderBookReader:"0xa27C20A7CF0e1C68C0460706bB674f98F362Bc21",PositionRouter:"0xb87a436B93fFE9D75c5cFA7bAcFff96430b09868",PositionManager:"0x75E42e6f01baf1D6022bEa862A28774a9f8a4A0C",ReferralStorage:"0xe6fab3f0c7199b0d34d7fbe83394fc0e0d06e99d",ReferralReader:"0x8Aa382760BCdCe8644C33e6C2D52f6304A76F5c8"}),c()(a,d.Qz,{PositionValid:"0x9a78C72E5Bbd712f12745f1D1329c0aedFd86734",PositionBook:"0xA7D7e4Cae1fB53a817387f803FB981aA170ffE09",LP:"0x644E7b38Dcb0cF2A2617d3DaF74682071986F19E",USDC:"0x51b17FC671Fdc226d8d879BD6b3862FC23ee9684",BTC:"0xA0099F5a2ec87E92279366e3072BDc9187956D1C",ETH:"0x5758CD2017Ba4445f7A0e9E97BC9FA67d63587D1",LINK:"0xe881Ad0BFAe80c4198e3bc7520DBD3E0Ad786D5b",CoreVault:"0xaA521A22BC128CaE339B7eA037b4Ff304f1B56c6",VaultRouter:"0xEb32E5f1d61aeA828fD93bd2Bb84bf72C89698c4",AMMPriceFeed:"0x875D4602eCE6879BF6645cDf2cE2029D25675Ae5",ChainPriceFeed:"0xbe9a6965076cf8534969ef465E30d8104455730d",FastPriceFeed:"0x3AfcadB370F810048Bd40E5FE2AeeE4A0829F078",Price:"0x6268E48753aa16A1cb4Ba96df85FAE77dd4927e1",FeeVault:"0x45203E6E0ef4938B6C20fCA0E6216C32FB2D7cC9",ExecFee:"0x299dbBA0C9e03c0B1fA68689672B5e4187a7E30A",OpenFee:"0xbCe501f0926Be2b9D1c20c36e269575F2F33585E",CloseFee:"0x120410bDec436b741B058De2FCfe0088a4F2D621",FundFee:"0x6a2117ef4588dc5cD535fa99AFb546dF2663705b",LiquidateFee:"0xFEc46Ea513ca731d595dc7E7cbd526a28E7373a1",FeeRouter:"0x40D5570BE450F04fc778e7C40eB3381dafDD2cd7",MarketReader:"0x83b03ef3a5058Db7C99531f1A1050986DFbb76Bd",MarketAddressesProvider:"0xdb26b820154Fc6bBb725bF9e22099d16946B2953",MarketFactory:"0x2E471218f0669fcc62F6daC849798320A86A2B72",MarketPositionMgr:"0x90cb36493966feB50d9Efc91e727e780098248f8",OpenStoreLong:"0x6C7aBAe8Ec68C2f3FeB9bbf3880B4A768e0c2E72",CloseStoreLong:"0xf1F1098148e458C4A53A74A3165BAD4235A09c9d",OpenStoreShort:"0x95dA6FeC26106e7242980231b79Ff2c6e61F5bD5",CloseStoreShort:"0xe091274C10cF0FC52bd0e931e32B5000729AAf73",Market:"0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99",MarketValid:"0x7fa4B0bf142CeB49e6827D703d3a0F6c9dF490b8",OrderBook_true:"0xe7DFF0d37E9730FC21E08A3262a121164Da342EA",OrderBook_false:"0xD0390472fD2376808D83AA03DE0a8B23e0E7e153",MarketValidReader:"0xbE9aA7d1D4b98fEDD319f42f9c042971e2E15AFa",Vault:"0x9ab2De34A33fB459b538c43f251eB825645e8595",Router:"0x5F719c2F1095F7B9fc68a68e35B51194f4b6abe8",VaultReader:"0x66eC8fc33A26feAEAe156afA3Cb46923651F6f0D",Reader:"0x2eFEE1950ededC65De687b40Fd30a7B5f4544aBd",GlpManager:"0xD152c7F25db7F4B95b7658323c5F33d176818EE4",RewardRouter:"0x82147C5A7E850eA4E28155DF107F2590fD4ba327",GlpRewardRouter:"0xB70B91CE0771d3f4c81D87660f71Da31d48eB3B3",RewardReader:"0x04Fc11Bd28763872d143637a7c768bD96E44c1b6",NATIVE_TOKEN:"0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",GLP:"0x01234181085565ed162a948b6a5e88758CD7c7b8",USDG:"0xc0253c3cC6aa5Ab407b5795a04c28fB063273894",StakedGlpTracker:"0x9e295B5B976a184B14aD8cd72413aD846C299660",FeeGlpTracker:"0xd2D1162512F927a7e282Ef43a362659E4F2a728F",StakedGlpDistributor:"0xDd593Cf40734199afc9207eBe9ffF23dA4Bf7720",OrderBook:"0x4296e307f108B2f583FF2F7B7270ee7831574Ae5",OrderExecutor:"0x4296e307f108B2f583FF2F7B7270ee7831574Ae5",OrderBookReader:"0xccFE3E576f8145403d3ce8f3c2f6519Dae40683B",PositionRouter:"0xffF6D276Bc37c61A23f06410Dce4A400f66420f8",PositionManager:"0xA21B83E579f4315951bA658654c371520BDcB866",ReferralStorage:"0x827ed045002ecdabeb6e2b0d1604cf5fc3d322f8",ReferralReader:"0x505Ce16D3017be7D76a7C2631C0590E71A975083"}),c()(a,d.Fe,{PositionValid:"0x5FbDB2315678afecb367f032d93F642f64180aa3",PositionBook:"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",MarketPositionMgr:"0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",OpenStoreLong:"0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",CloseStoreLong:"0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",OpenStoreShort:"0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",CloseStoreShort:"0x0165878A594ca255338adfa4d48449f69242Eb8F",Market:"0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",OrderBook:"0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",OrderBook_false:"0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",FeeVault:"0x610178dA211FEF7D417bC0e6FeD39F05609AD788",LP:"0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",USDC:"0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0",BTC:"0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",ETH:"0x9A676e781A523b5d0C0e43731313A708CB607508",LINK:"0x0B306BF915C4d645ff596e518fAf3F9669b97016",CoreVault:"0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1",VaultRouter:"0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE",MarketReader:"0x68B1D87F95878fE05B998F19b66F4baba5De1aed",MarketValid:"0x3Aa5ebB10DC797CAC828524e59A333d0A371443c",MarketFactory:"0xc6e7DF5E7b4f2A278906862b61205850344D4e7d",MarketAddressesProvider:"0x59b670e9fA9D0A427751Af201D676719a970857b",MarketValidReader:"0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1",AMMPriceFeed:"0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44",ChainPriceFeed:"0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f",FastPriceFeed:"0x4A679253410272dd5232B3Ff7cF5dbB88f295319",Price:"0xf5059a5D33d5853360D16C683c16e67980206f36",ExecFee:"0x5eb3Bc0a489C5A8288765d2336659EbCA68FCd00",OpenFee:"0x36C02dA8a0983159322a80FFE9F24b1acfF8B570",CloseFee:"0x809d550fca64d94Bd9F66E60752A544199cfAC3D",FundFee:"0x4c5859f0F772848b2D91F1D83E2Fe57935348029",LiquidateFee:"0x1291Be112d480055DaFd8a610b7d1e203891C274",FeeRouter:"0x5f3f1dBD7B74C6B46e8c44f98792A1dAf8d69154"}),a);function f(e,r){if(!s[e][r])throw new Error('Unknown contract "'.concat(r,'" for chainId ').concat(e));return s[e][r]}},67216:function(e,r,t){t.d(r,{Ab:function(){return F},C7:function(){return C},bf:function(){return E}});var a=t(19632),n=t.n(a),c=t(15009),o=t.n(c),i=t(99289),d=t.n(i),s=t(8433),f=t(90044),u=t(13805),b=t(24069);function F(e,r){return new Promise((function(t,a){s.Z.get("https://api.tenderly.co/api/v1/public-contract/".concat(r,"/tx/").concat(e)).then((function(e){t((0,f.Z)(e,"data.error_message"))})).catch((function(){t(void 0)}))}))}function E(e,r,t){return l.apply(this,arguments)}function l(){return(l=d()(o()().mark((function e(r,t,a){var n,c,i,d;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.qd[a],c=u.xW[a]||(0,b._b)(0),e.prev=2,e.next=5,t.getFeeData();case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:return e.next=11,t.getGasPrice();case 11:if(i=e.sent,!n){e.next=21;break}return i.gt(n)&&(n=i),e.next=16,t.getFeeData();case 16:if(!(d=e.sent)||!d.maxPriorityFeePerGas){e.next=21;break}return r.maxFeePerGas=n,r.maxPriorityFeePerGas=d.maxPriorityFeePerGas.add(c),e.abrupt("return");case 21:return r.gasPrice=i.add(c),e.abrupt("return");case 23:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}function C(e,r){return A.apply(this,arguments)}function A(){return A=d()(o()().mark((function e(r,t){var a,c,i,d,s,f,u=arguments;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u.length>2&&void 0!==u[2]?u[2]:[],i=u.length>3?u[3]:void 0,d=(0,b._b)(0),(s=i)||(s=d),e.next=7,(a=r.estimateGas)[t].apply(a,n()(c).concat([{value:s}]));case 7:return(f=e.sent).lt(22e3)&&(f=(0,b._b)(22e3)),e.abrupt("return",f.mul(11e3).div(1e4));case 10:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}},88469:function(e,r,t){t.d(r,{U:function(){return n}});var a=t(84774),n={success:function(e,r){a.Am.dismiss(),a.Am.success(e,r)},error:function(e,r){a.Am.dismiss(),a.Am.error(e,r)}}},24069:function(e,r,t){t.d(r,{H2:function(){return f},Jl:function(){return o},_b:function(){return c},dN:function(){return d},tP:function(){return s}});var a=t(2593),n=t(35553);function c(e){try{return a.O$.from(e)}catch(e){return console.error("bigNumberify error",e),a.O$.from(0)}}function o(e,r){return c(e).mul(c(10).pow(r))}var i=function(e,r){var t=e.toString();if(void 0===r)return t;if(0===r)return t.split(".")[0];var a=t.indexOf(".");if(-1!==a){var n=t.length-a-1;n>r&&(t=t.substr(0,t.length-(n-r)))}return t};var d=function(e,r,t,a,c){if(c||(c="..."),void 0===e||0===e.toString().length)return c;var o=n.bM(e,r);return o=i(o,t),a?function(e){if(!e)return"...";var r=e.toString().split(".");return r[0]=r[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),r.join(".")}(o):o},s=function(e,r,t){if(!e)return"...";var a=n.bM(e,r);return function(e){return parseFloat(e)===parseInt(e)?parseInt(e).toString():e}(a=i(a,t))},f=function(e,r){if(e instanceof a.O$)return e;var t=parseFloat(e);return isNaN(t)?void 0:(e=i(e,r),c(n.vz(e,r)))}},1403:function(e,r,t){t.d(r,{E3:function(){return E},VH:function(){return l},XJ:function(){return C}});var a=t(15009),n=t.n(a),c=t(99289),o=t.n(c),i=t(5574),d=t.n(i),s=t(11427),f=t(42946),u=t(90044),b=t(62435),F=t(13805);function E(e){var r=(0,b.useState)(),t=d()(r,2),a=t[0],c=t[1];return(0,b.useEffect)((function(){function r(){return r=o()(n()().mark((function r(){var t,a;return n()().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=(0,F.RM)(e)){r.next=3;break}return r.abrupt("return");case 3:return a=new s.JsonRpcProvider(t),r.next=6,a.ready;case 6:c(a);case 7:case"end":return r.stop()}}),r)}))),r.apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[e]),{provider:a}}function l(e,r){var t;return e?e.getSigner():(t=(0,f.Z)((0,u.Z)(F.vC,r.toString())),new s.StaticJsonRpcProvider(t,{chainId:r}))}function C(e){if(F.bw[e]){var r=(0,F.b9)(e);return new s.StaticJsonRpcProvider(r,{chainId:e})}}},16330:function(e,r,t){t.d(r,{If:function(){return y},VK:function(){return B},_G:function(){return R},a_:function(){return _},fJ:function(){return m},gn:function(){return w},hL:function(){return D},nu:function(){return g},qd:function(){return S},yW:function(){return k}});var a=t(15009),n=t.n(a),c=t(99289),o=t.n(c),i=t(5574),d=t.n(i),s=t(9783),f=t.n(s),u=t(34713),b=t(30950),F=t(83929),E=t(62435),l=t(13805),C=t(65334),A=t(88469),x=t(86074);function B(){localStorage.removeItem(C.eQ)}function D(){Object.entries(localStorage).map((function(e){return e[0]})).filter((function(e){return e.startsWith(C.kX)})).map((function(e){return localStorage.removeItem(e)}))}var h=function(){var e,r=l.rC;return new F.zw({rpc:(e={},f()(e,l.Qz,l.Ww[0]),f()(e,l.PO,l.T8[0]),f()(e,l.qF,"https://rinkeby.arbitrum.io/rpc"),e),qrcode:!0,chainId:r})},p=new b._k({supportedChainIds:l.FQ});function v(){return p}function g(e){var r=window.ethereum;if(null!=r&&r.providers||null!=r&&r.isCoinbaseWallet||null!=r&&r.isMetaMask){var t;if(null!=r&&r.providers)if("CoinBase"===e)t=r.providers.find((function(e){return e.isCoinbaseWallet}));else t=r.providers.find((function(e){return e.isMetaMask}));t&&r.setSelectedProvider(t)}}function k(e){var r=(0,u.Ge)(),t=r.activate,a=r.active,c=(0,E.useState)(!1),i=d()(c,2),s=i[0],f=i[1];return(0,E.useEffect)((function(){o()(n()().mark((function r(){var a,c,o,i,d,s,u;return n()().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!0===Boolean(localStorage.getItem(C.Cs))){r.next=4;break}return B(),D(),r.abrupt("return");case 4:a=!1;try{(c=localStorage.getItem(C.eQ))&&(o=JSON.parse(c))&&o.connected&&(a=!0)}catch(e){e instanceof SyntaxError&&B()}if(!a){r.next=18;break}return r.prev=7,i=h(),e(i),r.next=12,t(i,void 0,!0);case 12:return r.abrupt("return");case 15:r.prev=15,r.t0=r.catch(7),B();case 18:return r.prev=18,s=v(),!1!==(u=null!==(d=localStorage.getItem(C.Wr))&&void 0!==d&&d)&&g(u),r.next=24,s.isAuthorized();case 24:if(!r.sent){r.next=29;break}return e(s),r.next=29,t(s,void 0,!0);case 29:r.next=33;break;case 31:r.prev=31,r.t1=r.catch(18);case 33:f(!0);case 34:case"end":return r.stop()}}),r,null,[[7,15],[18,31]])})))()}),[]),(0,E.useEffect)((function(){!s&&a&&f(!0)}),[s,a]),s}function m(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=v(),t=(0,u.Ge)(),a=t.active,n=t.error,c=t.activate;(0,E.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!a&&!n&&!e){var o=function(){c(r)},i=function(){c(r)},d=function(e){e.length>0&&c(r)},s=function(){c(r)};return t.on("connect",o),t.on("chainChanged",i),t.on("accountsChanged",d),t.on("networkChanged",s),function(){t.removeListener&&(t.removeListener("connect",o),t.removeListener("chainChanged",i),t.removeListener("accountsChanged",d),t.removeListener("networkChanged",s))}}}),[a,n,e,c])}function S(){return window.ethereum}var R=function(e,r){return function(){return new Promise((function(t,a){e(v(),(function(e){var t;if(e instanceof u.Uu)return r(),void a();var n=null!==(t=e.message)&&void 0!==t?t:e.toString();a(n)})).then(t)}))}},_=function(e,r,t){var a=function(){var a=o()(n()().mark((function a(){var c;return n()().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c=h(),t(c),e(c,(function(e){e instanceof u.Uu?(A.U.error("Unsupported chain. Switch to Arbitrum network on your wallet and try again"),console.warn(e)):e instanceof F.ab||(A.U.error(e.message),console.warn(e)),B(),r()}));case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return a},P=function(){var e=o()(n()().mark((function e(r){return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"wallet_addEthereumChain",params:[r]}).catch();case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),y=function(){var e=o()(n()().mark((function e(r,t,a){var c;return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return localStorage.setItem(C.HC,String(r)),document.location.reload(),e.abrupt("return");case 4:return e.prev=4,c="0x"+r.toString(16),e.next=8,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:c}]});case 8:return a&&a(),A.U.success("Connected to ".concat((0,l.qz)(r))),e.abrupt("return",(0,l.qz)(r));case 13:if(e.prev=13,e.t0=e.catch(4),4001===e.t0.code){e.next=19;break}return e.next=18,P(l.wc[r]);case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(r,t,a){return e.apply(this,arguments)}}();function w(){var e=(0,u.Ge)(),r=e.error,t=e.deactivate;(0,E.useEffect)((function(){var e;r instanceof u.Uu&&(e=l.rC,A.U.error((0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{children:["Your wallet is not connected to ",(0,l.qz)(e),"."]}),(0,x.jsxs)("div",{className:"clickable underline",onClick:function(){return y(e,!0)},children:["Switch to ",(0,l.qz)(e)]})]})),t())}),[r,t])}},37765:function(e,r,t){t.d(r,{k:function(){return X}});var a=t(15009),n=t.n(a),c=t(99289),o=t.n(c),i=t(12444),d=t.n(i),s=t(72004),f=t.n(s),u=t(9783),b=t.n(u),F=t(77294),E=t(27960),l=t(5574),C=t.n(l),A=t(19632),x=t.n(A),B=t(52677),D=t.n(B),h=t(94184),p=t.n(h),v=t(62435),g=t(86074);var k=function(e){var r=e.href,t=e.children,a=e.className,n=p()("link-underline",a);return(0,g.jsx)("a",{href:r,className:n,target:"_blank",rel:"noopener noreferrer",children:t})};function m(e){var r=(0,v.useState)(!1),t=C()(r,2),a=t[0],n=t[1];return(0,g.jsxs)("div",{className:"Toastify-debug",children:[(0,g.jsx)("span",{className:"Toastify-debug-button",onClick:function(){return n((function(e){return!e}))},children:a?"Hide error":"Show error"}),a&&(0,g.jsx)("div",{className:"Toastify-debug-content",children:e.children})]})}var S,R=t(13805),_=t(67216),P=t(16330),y=t(88469),w=t(96695),O=t.n(w),M="NOT_ENOUGH_FUNDS",T="USER_DENIED",N="SLIPPAGE",I="RPC_ERROR",U="NETWORK_CHANGED",L=(S={},b()(S,M,[{msg:"not enough funds for gas"},{msg:"failed to execute call with revert code InsufficientGasFunds"}]),b()(S,T,[{msg:"User denied transaction signature"}]),b()(S,N,[{msg:"Router: mark price lower than limit"},{msg:"Router: mark price higher than limit"}]),b()(S,U,[{msg:"underlying network changed"}]),b()(S,I,[{code:-32005},{msg:"Non-200 status code"},{msg:"Request limit exceeded"},{msg:"Internal JSON-RPC error"},{msg:"Response has no error or result"},{msg:"we can't execute this request"},{msg:"couldn't connect to the network"}]),S);function V(e){var r;if(!e)return[];var t=(null===(r=e.data)||void 0===r?void 0:r.message)||e.message,a=e.code;if(!t&&!a)return[];for(var n=0,c=Object.entries(L);n<c.length;n++){var o,i=C()(c[n],2),d=i[0],s=i[1],f=O()(s);try{for(f.s();!(o=f.n()).done;){var u=o.value,b=u.code&&a===u.code,F=u.msg&&t&&t.includes(u.msg);if(b||F)return[t,d,e.data]}}catch(e){f.e(e)}finally{f.f()}}return[t,null,e.data]}function G(e,r,t,a,n){return j.apply(this,arguments)}function j(){return(j=o()(n()().mark((function e(r,t,a,c,o){var i,d,s,f,u,b,F,E,l,A,B,h,p,v,S;return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Array.isArray(c)||"object"!==D()(c)||void 0!==o||(o=c,c=[]),o||(o={}),d={},o.value&&(d.value=o.value),!o.gasLimit){e.next=9;break}e.t0=o.gasLimit,e.next=12;break;case 9:return e.next=11,(0,_.C7)(t,a,c,d.value);case 11:e.t0=e.sent;case 12:return d.gasLimit=e.t0,e.next=15,(0,_.bf)(d,t.provider,r);case 15:return e.next=18,t[a].apply(t,x()(c).concat([d]));case 18:return s=e.sent,f=(0,R.jY)(r)+"tx/"+s.hash,u=o.sentMsg||"Transaction sent.",y.U.success((0,g.jsxs)("div",{children:[u," ",(0,g.jsx)(k,{href:f}),(0,g.jsx)("br",{})]})),o.setPendingTxns&&(b=o.hideSuccessMsg?void 0:o.successMsg||"Transaction completed!",F={hash:s.hash,message:b,callback:o.callback},o.setPendingTxns((function(e){return[].concat(x()(e),[F])}))),e.abrupt("return",s);case 26:e.prev=26,e.t1=e.catch(0),l=5e3,A=V(e.t1),B=C()(A,3),h=B[0],p=B[1],v=B[2],e.t2=p,e.next=e.t2===M?33:e.t2===U?35:e.t2===T?37:e.t2===N?39:e.t2===I?41:45;break;case 33:return E=(0,g.jsxs)("div",{children:["There is not enough ETH in your account on Arbitrum to send this transaction.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)(k,{href:"https://arbitrum.io/bridge-tutorial/",children:"Bridge ETH to Arbitrum"})]}),e.abrupt("break",47);case 35:return E=(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{children:["Your wallet is not connected to ",(0,R.qz)(r),"."]}),(0,g.jsx)("br",{}),(0,g.jsxs)("div",{className:"clickable underline",onClick:function(){return(0,P.If)(r,!0)},children:["Switch to ",(0,R.qz)(r)]})]}),e.abrupt("break",47);case 37:return E="Transaction was cancelled.",e.abrupt("break",47);case 39:return E='The mark price has changed, consider increasing your Allowed Slippage by clicking on the "..." icon next to your address.',e.abrupt("break",47);case 41:return l=!1,S=(null==v||null===(i=v.error)||void 0===i?void 0:i.message)||(null==v?void 0:v.message)||h,E=(0,g.jsxs)("div",{children:["Transaction failed due to RPC error.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"Please try changing the RPC url in your wallet settings. ",(0,g.jsx)("br",{}),S&&(0,g.jsx)(m,{children:S})]}),e.abrupt("break",47);case 45:l=!1,E=(0,g.jsxs)("div",{children:[o.failMsg||"Transaction failed",(0,g.jsx)("br",{}),h&&(0,g.jsx)(m,{children:h})]});case 47:throw y.U.error(E,{autoClose:l}),e.t1;case 49:case"end":return e.stop()}}),e,null,[[0,26]])})))).apply(this,arguments)}var H=t(24069),q=t(1403),X=function(){function e(r,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;d()(this,e),b()(this,"_contract",void 0),b()(this,"_address",void 0),b()(this,"_library",void 0),b()(this,"_abi",void 0),b()(this,"_chainId",void 0),b()(this,"_PendingTxns",void 0),this._chainId=t,this._address=null==n?this.getAddress(this._chainId):n,this._abi=a,this._library=r,this._contract=this.newContract(this._address,this._abi)}var r,t;return f()(e,[{key:"newContract",value:function(e,r){null!=r&&(this._abi=r);var t=(0,q.VH)(this._library,this._chainId);return W(e,this._abi,t)}},{key:"setChainId",value:function(e){this._chainId=e,this._address=this.getAddress(e),this._contract=this.newContract(this._address,this._abi)}},{key:"getAddress",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:43113,r=this.getClassName(),t=(0,E.K)(e,r);return t}},{key:"getClassName",value:function(){return this.constructor.name}},{key:"setPendingTxns",value:function(e){this._PendingTxns=e}},{key:"call",value:(t=o()(n()().mark((function e(r){var t,a,c,i,d,s=this,f=arguments;return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=f.length,a=new Array(t>1?t-1:0),c=1;c<t;c++)a[c-1]=f[c];return i=!0,d=function(){var e=o()(n()().mark((function e(t,c,o){var d,f;return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return");case 2:if(i=!1,d=(0,q.XJ)(s._chainId)){e.next=7;break}return c(o),e.abrupt("return");case 7:(f=W(s._address,s._abi,d))[r].apply(f,a).then((function(e){t(e)})).catch((function(e){console.log("SolidityContract call failed address",s._contract.address,s.getClassName()),console.log("SolidityContract call failed functionName",r),console.log("SolidityContract call failed params",a),console.log("SolidityContract call failed error",e),c(e),y.U.error(e.reason)}));case 9:case"end":return e.stop()}}),e)})));return function(r,t,a){return e.apply(this,arguments)}}(),e.abrupt("return",new Promise(function(){var e=o()(n()().mark((function e(t,c){var o;return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(o=s._contract)[r].apply(o,a).then((function(e){i=!1,t(e)})).catch((function(e){d(t,c,e)})),setTimeout((function(){d(t,c,"contractCall timeout")}),4e3);case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()));case 4:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"send",value:(r=o()(n()().mark((function e(r,t,a){return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(this._chainId,this._contract,r,this._PendingTxns,t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t,a){return r.apply(this,arguments)})}]),e}(),W=function(e,r,t){return new F.Contract(e,r,t)};function z(){return K.apply(this,arguments)}function K(){return K=o()(n()().mark((function e(){var r,t,a,c,o,i,d,s=arguments;return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>0&&void 0!==s[0]?s[0]:5,t=s.length>1?s[1]:void 0,a=s.length>2?s[2]:void 0,c=s.length>3?s[3]:void 0,o=s.length>4?s[4]:void 0,i=s.length>5?s[5]:void 0,e.prev=6,e.next=9,G(r,t,a,o,{gasLimit:(0,H._b)(3e6),setPendingTxns:c,callback:i});case 9:return d=e.sent,e.abrupt("return",d);case 13:e.prev=13,e.t0=e.catch(6),console.log("SolidityContract send failed address",t.address),console.log("SolidityContract send failed functionName",a),console.log("SolidityContract send failed params",o),console.log("SolidityContract send failed error",e.t0),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[6,13]])}))),K.apply(this,arguments)}}}]);