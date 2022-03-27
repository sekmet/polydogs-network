import { ethers } from 'ethers';

import { getSigner } from '@/services/etherService';
import { LENS_HUB_ABI, LENS_HUB_CONTRACT } from '@/utils/config';

// lens contract info can all be found on the deployed
// contract address on polygon.
export const lensHub = new ethers.Contract(
  String(LENS_HUB_CONTRACT),
  LENS_HUB_ABI,
  getSigner()
);
