import {
  TypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import { ethers, utils, Wallet } from 'ethers';

import { MUMBAI_RPC_URL, PK } from '@/utils/config';
import { omit } from '@/utils/helpers';

declare let window: any;

export const ethersProvider = new ethers.providers.JsonRpcProvider(
  MUMBAI_RPC_URL
);

export const getSigner = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // Prompt user for account connections
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  return signer;
     //new Wallet(address, provider);
};

export const getAddressFromSigner = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // Prompt user for account connections
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  return address;
};

export const signedTypeData = async (
  domain: TypedDataDomain,
  types: Record<string, TypedDataField[]>,
  value: Record<string, any>
) => {
  const signer = await getSigner();
  // remove the __typedname from the signature!
  return signer._signTypedData(
    omit(domain, '__typename'),
    omit(types, '__typename'),
    omit(value, '__typename')
  );
};

export const splitSignature = (signature: string) => {
  return utils.splitSignature(signature);
};

export const sendTx = async (
  transaction: ethers.utils.Deferrable<ethers.providers.TransactionRequest>
) => {
  const signer = await getSigner();
  return signer.sendTransaction(transaction);
};

export const signText = async (text: string) => {
  const signer = await getSigner();
  return signer.signMessage(text);
};
