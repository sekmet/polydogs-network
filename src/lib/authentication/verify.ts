import { gql } from '@apollo/client/core';
import { graphqlClient as apolloClient } from '@/services/apolloClient';
import { getAddressFromSigner } from '@/services/etherService';
import { prettyJSON } from '@/utils/helpers';
import { login } from './login';

const VERIFY = `
  query($request: VerifyRequest!) {
    verify(request: $request)
  }
`;

const verify = (accessToken: string) => {
  return apolloClient.query({
    query: gql(VERIFY),
    variables: {
      request: {
        accessToken,
      },
    },
  });
};

export const verifyRequest = async () => {
  const address = getAddressFromSigner();
  console.log('verify: address', address);

  const accessTokens = await login(address);

  const result = await verify(accessTokens.authenticate.accessToken);
  prettyJSON('verify: result', result.data);

  return result.data;
};

(async () => {
  await verifyRequest();
})();
