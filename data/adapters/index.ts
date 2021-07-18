import sdk from '../sdk';

import registerAave from './aave';
import registerAvalanche from './avalanche';
import registerBalancer from './balancer';
import registerBancor from './bancor';
import registerBSC from './bsc';
import registerCoinMetrics from './coinmetrics';
import registerCompound from './compound';
// import registerCurve from './curve';
import registerFTM from './fantom';
import registerQuickswap from './quickswap';
import registerHegic from './hegic';
import registerHoneyswap from './honeyswap';
import registerLinkswap from './linkswap';
import registerMaker from './maker';
import register0x from './zerox';
import registerMstable from './mStable';
import registerOptimism from './optimism';
import registerPolygon from './polygon';
import registerPolymarket from './polymarket';
import registerRen from './ren';
import registerSushiswap from './sushi';
import registerSynthetix from './synthetix';
import registerPolkadot from './polkadot';
import registerTBTC from './tbtc';
import registerTerra from './terra';
import registerTornado from './tornado';
import registerUniswap from './uniswap';
import registerXDai from './xdai';
import registerZilliqa from './zilliqa';

const feesList = sdk.getList('fees');

feesList.addAdaptersWithSetupFunction(register0x);
feesList.addAdaptersWithSetupFunction(registerAave);
feesList.addAdaptersWithSetupFunction(registerAvalanche);
feesList.addAdaptersWithSetupFunction(registerBalancer);
feesList.addAdaptersWithSetupFunction(registerBancor);
feesList.addAdaptersWithSetupFunction(registerBSC);
feesList.addAdaptersWithSetupFunction(registerCoinMetrics);
feesList.addAdaptersWithSetupFunction(registerCompound);
//feesList.addAdaptersWithSetupFunction( registerCurve(register);
feesList.addAdaptersWithSetupFunction(registerFTM);
feesList.addAdaptersWithSetupFunction(registerHegic);
feesList.addAdaptersWithSetupFunction(registerHoneyswap);
feesList.addAdaptersWithSetupFunction(registerLinkswap);
feesList.addAdaptersWithSetupFunction(registerMaker);
feesList.addAdaptersWithSetupFunction(registerMstable);
feesList.addAdaptersWithSetupFunction(registerOptimism);
feesList.addAdaptersWithSetupFunction(registerQuickswap);
feesList.addAdaptersWithSetupFunction(registerPolkadot);
feesList.addAdaptersWithSetupFunction(registerPolygon);
feesList.addAdaptersWithSetupFunction(registerPolymarket);
feesList.addAdaptersWithSetupFunction(registerRen);
feesList.addAdaptersWithSetupFunction(registerSushiswap);
feesList.addAdaptersWithSetupFunction(registerSynthetix);
feesList.addAdaptersWithSetupFunction(registerTBTC);
feesList.addAdaptersWithSetupFunction(registerTerra);
feesList.addAdaptersWithSetupFunction(registerTornado);
feesList.addAdaptersWithSetupFunction(registerUniswap);
feesList.addAdaptersWithSetupFunction(registerXDai);
feesList.addAdaptersWithSetupFunction(registerZilliqa);
