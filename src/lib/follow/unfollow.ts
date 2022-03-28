import { gql } from '@apollo/client/core';
import { ethers } from 'ethers';
import { graphqlClient as apolloClient } from '@/services/apolloClient';
import { login } from '@/lib/authentication/login';
import { LENS_FOLLOW_NFT_ABI } from '@/utils/config';
import { getAddressFromSigner, getSigner, signedTypeData, splitSignature } from '@/services/etherService';
import { prettyJSON } from '@/utils/helpers';

const CREATE_UNFOLLOW_TYPED_DATA = `
  mutation($request: UnfollowRequest!) { 
    createUnfollowTypedData(request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          BurnWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          tokenId
        }
      }
    }
 }
`;

const createUnfollowTypedData = (profile: string) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_UNFOLLOW_TYPED_DATA),
    variables: {
      request: {
        profile,
      },
    },
  });
};

export const unfollow = async () => {
  const address = getAddressFromSigner();
  console.log('unfollow: address', address);

  await login(address);

  // hard coded to make the code example clear
  const unfollowProfileId = '0x0338a3';
  const result = await createUnfollowTypedData(unfollowProfileId);
  console.log('unfollow: result', result);

  const typedData = result.data.createUnfollowTypedData.typedData;
  prettyJSON('unfollow: typedData', typedData);

  const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
  console.log('unfollow: signature', signature);

  const { v, r, s } = splitSignature(signature);

  // load up the follower nft contract
  const followNftContract = new ethers.Contract(
    typedData.domain.verifyingContract,
    LENS_FOLLOW_NFT_ABI,
    getSigner()
  );

  const sig = {
    v,
    r,
    s,
    deadline: typedData.value.deadline,
  };

  // force the tx to send
  const tx = await followNftContract.burnWithSig(typedData.value.tokenId, sig);
  console.log('follow: tx hash', tx.hash);
};

(async () => {
  await unfollow();
})();
