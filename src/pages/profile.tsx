import { gql } from '@apollo/client/core';
import { graphqlClient as apolloClient } from '@/services/apolloClient';
import { login } from '@/lib/authentication/login';
import { argsBespokeInit } from '@/utils/config';
import { getAddressFromSigner } from '@/services/etherService';
import { prettyJSON } from '@/utils/helpers';
import { createProfile } from '@/lib/profile/create-profile';
import NewProfileModal from '@/components/Profile/NewProfileModal';
import { useEffect, useState } from 'react';

// import { useEthers, useBlockMeta, useBlockNumber } from '@usedappify/core';

import { Dashboard } from '@/layouts/Dashboard';
import { Meta } from '@/layouts/Meta';


const GET_PROFILES = `
  query($request: ProfileQueryRequest!) {
    profiles(request: $request) {
      items {
        id
        name
        bio
        location
        website
        twitterUrl
        picture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
          __typename
        }
        handle
        coverPicture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
          __typename
        }
        ownedBy
        depatcher {
          address
          canUseRelay
        }
        stats {
          totalFollowers
          totalFollowing
          totalPosts
          totalComments
          totalMirrors
          totalPublications
          totalCollects
        }
        followModule {
          ... on FeeFollowModuleSettings {
            type
            amount {
              asset {
                symbol
                name
                decimals
                address
              }
              value
            }
            recipient
          }
          __typename
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
`;

export interface ProfilesRequest {
  profileIds?: string[];
  ownedBy?: string;
  handles?: string[];
  whoMirroredPublicationId?: string;
}

const getProfilesRequest = (request: ProfilesRequest) => {
  return apolloClient.query({
    query: gql(GET_PROFILES),
    variables: {
      request,
    },
  });
};

export const profiles = async (request?: ProfilesRequest) => {
  const address = await getAddressFromSigner();
  console.log('profiles: address', address);
  
  await login(address);

  if (!request) {
    request = { ownedBy: address };
  }

  // only showing one example to query but you can see from request
  // above you can query many
  const profilesFromProfileIds = await getProfilesRequest(request);

  prettyJSON('profiles: result', profilesFromProfileIds.data);

  return profilesFromProfileIds.data;


};

const Profile = () => {
  /* const router = useRouter();
  const [blockNumber, setBlockNumber] = useState<number | undefined>(0);
  const { account } = useEthers();
  const { timestamp } = useBlockMeta();
  const blocknumber = useBlockNumber();

  useEffect(() => {
    setBlockNumber(blocknumber);
  }, [blocknumber]); */

  const [userprofiles, setUserProfiles] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      //if (argsBespokeInit()) {
        const currentProfiles = await profiles();
        if (!currentProfiles?.profiles?.items[0]) {
          await createProfile()
        }
          setUserProfiles(currentProfiles);
      //}
    };
    fetchData();
  }, [userprofiles]);

  const userProfile = userprofiles?.profiles?.items[0];
  console.log('userProfile', userProfile);

  return (
    <Dashboard
      auth={true}
      meta={
        <Meta
          title="Profile - Polydogs Network"
          description="A decentralized social network to connect dog breeders/owners/lovers and more..."
        />
      }
    >
      <div className="pro-container">
        <div>
          {/* profile-cover */}
          <div className="flex flex-col items-center lg:flex-row lg:py-8 lg:space-x-8">
            <div>
              <div className="overflow-hidden relative p-1 m-0.5 mr-2 w-56 h-56  bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full uk-transition-toggle">
                <img
                  src={'https://cloudflare-ipfs.com/ipfs/bafkreie5bpan2yermeshki66lrkq737hul3ck45zg5mzteqt4pq54bfn2m'}
                  className="w-full h-full bg-gray-200 rounded-full border-4 border-white dark:border-gray-900"
                />
                {/*userProfile?.picture?.original?.url*/}
                <div className="flex absolute -bottom-3 justify-center pt-4 pb-7 space-x-3 w-full text-2xl text-white custom-overly1 uk-transition-slide-bottom-medium">
                  <a href="#" className="hover:text-white">
                    <i className="uil-camera" />
                  </a>
                  <a href="#" className="hover:text-white">
                    <i className="uil-crop-alt" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center lg:items-start lg:w/8/12">
              <h2 className="mb-2 text-lg font-semibold lg:text-2xl">
                {' '}
                {userProfile?.name}
              </h2>
              <p className="mb-2 text-center dark:text-gray-100  lg:text-left">
                {' '}
                {userProfile?.bio}
              </p>
              <div className="flex mb-3 space-x-2 font-semibold  dark:text-gray-10">
                <a href="#">Husky</a> ,{' '}
                <a href="#">Samoieda</a> ,{' '}
                <a href="#">Boxer</a>
              </div>
              <div className="flex my-2 space-x-3 text-sm font-semibold text-center capitalize">
                <a
                  href="#"
                  className="p-2 px-6 bg-gray-300 dark:bg-gray-700 rounded-md shadow-sm"
                >
                  {' '}
                  Add friend
                </a>
                <a
                  href="#"
                  className="p-2 px-6 text-white hover:text-white bg-pink-500 hover:bg-pink-600 rounded-md shadow-sm pink-500"
                >
                  {' '}
                  Send message
                </a>
                <div>
                  <a
                    href="#"
                    className="flex justify-center items-center w-9 h-full text-xl bg-gray-300 dark:bg-gray-700 rounded-full"
                  >
                    <i className="icon-feather-chevron-down" />
                  </a>
                  <div
                    className="hidden p-2 mx-auto mt-12 w-56 text-base text-gray-500 bg-white dark:bg-gray-900 rounded-md shadow-md"
                    uk-drop="mode: click"
                  >
                    <ul className="space-y-1">
                      <li>
                        <a
                          href="#"
                          className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                        >
                          <i className="mr-2 uil-user-minus" />
                          Unfriend
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                        >
                          <i className="mr-2  uil-eye-slash" />
                          Hide Your Story
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                        >
                          <i className="mr-2 uil-share-alt" /> Share This
                          Profile
                        </a>
                      </li>
                      <li>
                        <hr className="my-2 -mx-2  dark:border-gray-700" />
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center py-2 px-3 text-red-500 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-600 rounded-md"
                        >
                          <i className="mr-2 uil-stop-circle" /> Block
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-3 w-full text-center dark:text-gray-100 divide-x divide-gray-300 divide-transparent lg:text-lg lg:text-left">
                <div className="flex flex-col lg:flex-row">
                  {' '}
                  {userProfile?.stats?.totalPosts || '0'} <strong className="lg:pl-2">Posts</strong>
                </div>
                <div className="flex flex-col lg:flex-row lg:pl-4">
                  {' '}
                  {userProfile?.stats?.totalFollowers || '0'} <strong className="lg:pl-2">Followers</strong>
                </div>
                <div className="flex flex-col lg:flex-row lg:pl-4">
                  {' '}
                  {userProfile?.stats?.totalFollowing || '0'} <strong className="lg:pl-2">Following</strong>
                </div>
              </div>
            </div>
            <div className="w-20" />
          </div>
          <h1 className="mt-8 text-lg font-extrabold tracking-tight leading-none text-gray-900 lg:text-2xl">
            {' '}
            Highligths{' '}
          </h1>
          <div className="grid grid-cols-3 gap-2 my-6 hover:text-yellow-700 lg:grid-cols-5 uk-link-reset">
            <a href="#">
              <div className="flex relative flex-col justify-center items-center w-full h-full bg-gray-100 rounded-2xl border-4 border-dashed">
                <i className="text-4xl uil-plus-circle" />{' '}
                <span> Add new </span>
              </div>
            </a>
            <a href="#story-modal" uk-toggle="true">
              <img
                src="/assets/images/avatars/avatar-lg-1.jpg"
                alt="image polydogs"
                className="object-cover w-full h-40 rounded-md lg:h-60"
              />
            </a>
            <a href="#story-modal" uk-toggle="true">
              <img
                src="/assets/images/post/img2.jpg"
                alt="image polydogs"
                className="object-cover w-full h-40 rounded-md lg:h-60"
              />
            </a>
            <a href="#story-modal" uk-toggle="true">
              <img
                src="/assets/images/post/img7.jpg"
                alt="image polydogs"
                className="object-cover w-full h-40 rounded-md lg:h-60 uk-visible@s"
              />
            </a>
            <a href="#story-modal" uk-toggle="true">
              <img
                src="/assets/images/post/img2.jpg"
                alt="image polydogs"
                className="object-cover w-full h-40 rounded-md lg:h-60"
              />
            </a>
          </div>
          <div className="flex justify-between items-center mt-8 space-x-3">
            <h1 className="flex-1 text-lg font-extrabold tracking-tight leading-none text-gray-900 lg:text-2xl uk-heading-line">
              <span>Explore</span>
            </h1>
            <div className="flex bg-white dark:bg-gray-100 rounded-md border-2 border-gray-300 divide-x divide-gray-300 shadow-sm">
              <a
                href="#"
                className="flex justify-center items-center w-10 h-10  bg-gray300"
                data-tippy-placement="top"
                title="Grid view"
              >
                {' '}
                <i className="uil-apps" />
              </a>
              <a
                href="#"
                className="flex justify-center items-center w-10 h-10"
                data-tippy-placement="top"
                title="List view"
              >
                {' '}
                <i className="uil-list-ul" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5 my-6 hover:text-yellow-700 lg:grid-cols-4 uk-link-reset">
            <div>
              <div
                className="overflow-hidden relative max-w-full h-40 bg-red-500 rounded-md lg:h-64 uk-transition-toggle"
                tabIndex={0}
              >
                <img
                  src="/assets/images/avatars/avatar-lg-1.jpg"
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="flex absolute bottom-0 justify-center items-center space-x-5 w-full h-full text-lg text-white bg-black bg-opacity-40 uk-transition-scale-up">
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-heart" /> 150{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-chat" /> 30{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-pricetag-alt" /> 12
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                className="overflow-hidden relative max-w-full h-40 bg-red-500 rounded-md lg:h-64 uk-transition-toggle"
                tabIndex={0}
              >
                <img
                  src="/assets/images/post/img1.jpg"
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="flex absolute bottom-0 justify-center items-center space-x-5 w-full h-full text-lg text-white bg-black bg-opacity-40 uk-transition-scale-up">
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-heart" /> 150{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-chat" /> 30{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-pricetag-alt" /> 12
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                className="overflow-hidden relative max-w-full h-40 bg-red-500 rounded-md lg:h-64 uk-transition-toggle"
                tabIndex={0}
              >
                <img
                  src="/assets/images/post/img2.jpg"
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="flex absolute bottom-0 justify-center items-center space-x-5 w-full h-full text-lg text-white bg-black bg-opacity-40 uk-transition-scale-up">
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-heart" /> 150{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-chat" /> 30{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-pricetag-alt" /> 12
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                className="overflow-hidden relative max-w-full h-40 bg-red-500 rounded-md lg:h-64 uk-transition-toggle"
                tabIndex={0}
              >
                <img
                  src="/assets/images/post/img3.jpg"
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="flex absolute bottom-0 justify-center items-center space-x-5 w-full h-full text-lg text-white bg-black bg-opacity-40 uk-transition-scale-up">
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-heart" /> 150{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-chat" /> 30{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-pricetag-alt" /> 12
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                className="overflow-hidden relative max-w-full h-40 bg-red-500 rounded-md lg:h-64 uk-transition-toggle"
                tabIndex={0}
              >
                <img
                  src="/assets/images/post/img4.jpg"
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="flex absolute bottom-0 justify-center items-center space-x-5 w-full h-full text-lg text-white bg-black bg-opacity-40 uk-transition-scale-up">
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-heart" /> 150{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-chat" /> 30{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-pricetag-alt" /> 12
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                className="overflow-hidden relative max-w-full h-40 bg-red-500 rounded-md lg:h-64 uk-transition-toggle"
                tabIndex={0}
              >
                <img
                  src="/assets/images/post/img5.jpg"
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="flex absolute bottom-0 justify-center items-center space-x-5 w-full h-full text-lg text-white bg-black bg-opacity-40 uk-transition-scale-up">
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-heart" /> 150{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-chat" /> 30{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-pricetag-alt" /> 12
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                className="overflow-hidden relative max-w-full h-40 bg-red-500 rounded-md lg:h-64 uk-transition-toggle"
                tabIndex={0}
              >
                <img
                  src="/assets/images/avatars/avatar-1.jpg"
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="flex absolute bottom-0 justify-center items-center space-x-5 w-full h-full text-lg text-white bg-black bg-opacity-40 uk-transition-scale-up">
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-heart" /> 150{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-chat" /> 30{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-pricetag-alt" /> 12
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                className="overflow-hidden relative max-w-full h-40 bg-red-500 rounded-md lg:h-64 uk-transition-toggle"
                tabIndex={0}
              >
                <img
                  src="/assets/images/avatars/avatar-6.jpg"
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="flex absolute bottom-0 justify-center items-center space-x-5 w-full h-full text-lg text-white bg-black bg-opacity-40 uk-transition-scale-up">
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-heart" /> 150{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-chat" /> 30{' '}
                  </a>
                  <a
                    href="#story-modal"
                    uk-toggle="true"
                    className="flex items-center"
                  >
                    {' '}
                    <i className="mr-1 uil-pricetag-alt" /> 12
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="#"
              className="py-2 px-6 my-3 font-semibold dark:text-white bg-white dark:bg-gray-800 rounded-full shadow-md"
            >
              {' '}
              Load more ..
            </a>
          </div>
        </div>
      </div>
      
    </Dashboard>
  );
};

export default Profile;
