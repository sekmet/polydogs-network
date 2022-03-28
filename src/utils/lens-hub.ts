import { ethers } from 'ethers';

//import { getSigner } from '@/services/etherService';
import { LENS_HUB_ABI, LENS_HUB_CONTRACT } from '@/utils/config';

//const signer = async () => {
//  return await getSigner();
//}
// lens contract info can all be found on the deployed
// contract address on polygon.
//const currentSigner = signer();

export const lensHub = new ethers.Contract(
  String(LENS_HUB_CONTRACT),
  LENS_HUB_ABI
);
