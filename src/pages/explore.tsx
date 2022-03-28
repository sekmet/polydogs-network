import { useEffect, useState } from 'react';
import { gql } from '@apollo/client/core';
import { graphqlClient as apolloClient } from '@/services/apolloClient';
// import { useEthers, useBlockMeta, useBlockNumber } from '@usedappify/core';
import { prettyJSON } from '@/utils/helpers';
import { Dashboard } from '@/layouts/Dashboard';
import { Meta } from '@/layouts/Meta';

const EXPLORE_PUBLICATIONS = `
  query($request: ExplorePublicationRequest!) {
    explorePublications(request: $request) {
      items {
        __typename 
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }

  fragment MediaFields on Media {
    url
    width
    height
    mimeType
  }

  fragment ProfileFields on Profile {
    id
    name
    bio
    location
    website
    twitterUrl
    handle
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
        small {
          ...MediaFields
        }
        medium {
          ...MediaFields
        }
      }
    }
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
        small {
         ...MediaFields
        }
        medium {
          ...MediaFields
        }
      }
    }
    ownedBy
    depatcher {
      address
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
            name
            symbol
            decimals
            address
          }
          value
        }
        recipient
      }
    }
  }

  fragment PublicationStatsFields on PublicationStats { 
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
  }

  fragment MetadataOutputFields on MetadataOutput {
    name
    description
    content
    image
    media {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
    attributes {
      displayType
      traitType
      value
    }
  }

  fragment Erc20Fields on Erc20 {
    name
    symbol
    decimals
    address
  }

  fragment CollectModuleFields on CollectModule {
    __typename
    ... on EmptyCollectModuleSettings {
      type
    }
    ... on FeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedTimedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
    ... on RevertCollectModuleSettings {
      type
    }
    ... on TimedFeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
  }

  fragment PostFields on Post {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
  }

  fragment MirrorBaseFields on Mirror {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
  }

  fragment MirrorFields on Mirror {
    ...MirrorBaseFields
    mirrorOf {
     ... on Post {
        ...PostFields          
     }
     ... on Comment {
        ...CommentFields          
     }
    }
  }

  fragment CommentBaseFields on Comment {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
  }

  fragment CommentFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
        ...MirrorBaseFields
        mirrorOf {
          ... on Post {
             ...PostFields          
          }
          ... on Comment {
             ...CommentMirrorOfFields        
          }
        }
      }
    }
  }

  fragment CommentMirrorOfFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
         ...MirrorBaseFields
      }
    }
  }
`;

const explorePublications = (explorePublicationQueryRequest: {
  sortCriteria: string;
  limit: number;
}) => {
  return apolloClient.query({
    query: gql(EXPLORE_PUBLICATIONS),
    variables: {
      request: explorePublicationQueryRequest,
    },
  });
};

export const explore = async () => {
  const result = await explorePublications({
    sources: ['polydogs'],
    // switch for `TOP_COLLECTED` if you wanted collected!
    sortCriteria: 'TOP_COMMENTED',
    limit: 10,
  });

  prettyJSON('explore: result', result.data);

  return result.data;
};

const Explore = () => {
  /* const router = useRouter();
  const [blockNumber, setBlockNumber] = useState<number | undefined>(0);
  const { account } = useEthers();
  const { timestamp } = useBlockMeta();
  const blocknumber = useBlockNumber();

  useEffect(() => {
    setBlockNumber(blocknumber);
  }, [blocknumber]); */

  const [explorePublications, setExplorePublications] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      //if (argsBespokeInit()) {
        const currentExplore = await explore();
        setExplorePublications(currentExplore);
      //}
    };
    fetchData();
  }, [explorePublications]);


  console.log(explorePublications)

  return (
    <Dashboard
      auth={true}
      meta={
        <Meta
          title="Explore - Polydogs Network"
          description="A decentralized social network to connect dog breeders/owners/lovers and more..."
        />
      }
    >
      <div className="max-w-none">
        <div className="social">
          <h1 className="mb-5 text-lg font-extrabold tracking-tight leading-none text-gray-900 lg:text-2xl">
            {' '}
            Explore{' '}
          </h1>
          <div
            className="flex relative justify-between items-center py-2 -mx-5 space-x-3 lg:m-0 dark-tabs"
            uk-sticky="cls-active: bg-gray-100 bg-opacity-95; media : @m ; media @m"
          >
            <div className="flex overflow-x-scroll pl-5 space-x-3 lg:overflow-hidden lg:py-2 lg:pl-0">
              <a
                href="#"
                className="inline-block py-2 px-4 font-bold bg-white rounded shadow"
              >
                {' '}
                Shihtzu
              </a>
              <a
                href="#"
                className="inline-block py-2 px-4 font-bold bg-white rounded shadow"
              >
                {' '}
                Pincher{' '}
              </a>
              <a
                href="#"
                className="inline-block py-2 px-4 font-bold bg-white rounded shadow"
              >
                {' '}
                Husky
              </a>
              <a
                href="#"
                className="inline-block py-2 px-4 font-bold bg-white rounded shadow"
              >
                {' '}
                Sammy
              </a>
              <a
                href="#"
                className="inline-block py-2 px-4 font-bold bg-white rounded shadow"
              >
                {' '}
                Golden{' '}
              </a>
              <a
                href="#"
                className="inline-block py-2 px-4 font-bold bg-white rounded shadow"
              >
                {' '}
                Fox Terrier
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 hover:text-yellow-700 lg:grid-cols-4 uk-link-reset">
            <div>
              <div className="overflow-hidden relative max-w-full h-4 bg-red-400 rounded-md shadow-sm lg:h-64 uk-transition-toggle">
                <a href="#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/avatars/avatar-1.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <a
                  href="#story-modal"
                  uk-toggle="true"
                  className="flex absolute justify-center items-center h-full bg-black bg-opacity-10 max-w-8 uk-transition-scale-up"
                >
                  <img
                    src="/assets/images/icon-play.svg"
                    alt="image polydogs"
                    className="w-16 h-16"
                  />
                </a>
                <div className="flex absolute bottom-0 justify-between items-center py-3 px-4 space-x-2 w-full text-white absolut custom-overly1">
                  <a href="#">Johnson </a>
                  <div className="flex space-x-3">
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-chat" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="overflow-hidden relative max-w-full h-full bg-pink-400 rounded-md shadow-sm uk-transition-toggle">
                <a href="#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img2.jpg"
                    className="object-cover absolute inset-0 w-full h-full scale-125"
                  />
                </a>
                <div className="hidden absolute bottom-0 p-6 space-y-2 w-full text-white lg:block absolut custom-overly1 uk-light">
                  <div className="flex flex-1 items-center space-x-2">
                    <a href="#" className="flex items-center">
                      <div className="p-1 m-0.5 mr-2 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                        <img
                          src="/assets/images/avatars/avatar-2.jpg"
                          className="w-8 bg-gray-200 rounded-full border border-white"
                        />
                      </div>
                      Fox Terrier
                    </a>
                    <div className="flex space-x-3">
                      <a href="#" className="flex items-center">
                        <i className="uil-heart" /> 150
                      </a>
                      <a href="#" className="flex items-center">
                        <i className="uil-chat" /> 30
                      </a>
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold">
                    {' '}
                    Lorem ipsum dolor sit amet consectetuer adipiscing
                  </h1>
                  <p>
                    {' '}
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim placerat facer possim{' '}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-40 bg-green-400 rounded-md shadow-sm lg:h-64 uk-transition-toggle">
                <a href="#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img6.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <a
                  href="#story-modal"
                  uk-toggle="true"
                  className="flex absolute justify-center items-center w-8 w-full h-full bg-black bg-opacity-10 uk-transition-scale-up"
                >
                  <img
                    src="/assets/images/icon-play.svg"
                    alt="image polydogs"
                    className="w-16 h-16"
                  />
                </a>
                <div className="flex absolute bottom-0 justify-between items-center py-3 px-4 space-x-2 w-full text-white absolut custom-overly1">
                  <a href="#">James</a>
                  <div className="flex space-x-3">
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-chat" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-40 bg-yellow-400 rounded-md shadow-sm lg:h-64">
                <a href="#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img4.jpg"
                    className="object-cover object-left absolute inset-0 w-full h-full"
                  />
                </a>
                <div className="flex absolute bottom-0 justify-between items-center py-3 px-4 space-x-2 w-full text-white absolut custom-overly1">
                  <a href="#">Martin</a>
                  <div className="flex space-x-3">
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-chat" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-40 bg-purple-400 rounded-md shadow-sm lg:h-64">
                <a href="#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/avatars/avatar-lg-1.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <div className="flex absolute bottom-0 justify-between items-center py-3 px-4 space-x-2 w-full text-white absolut custom-overly1">
                  <a href="#">Johnson </a>
                  <div className="flex space-x-3">
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-chat" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-40 bg-blue-400 rounded-md shadow-sm lg:h-64">
                <a href="#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img1.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <div className="flex absolute bottom-0 justify-between items-center py-3 px-4 space-x-2 w-full text-white absolut custom-overly1">
                  <a href="#">Jesse</a>
                  <div className="flex space-x-3">
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-heart" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-40 bg-green-400 rounded-md shadow-sm lg:h-64">
                <a href="#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img3.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <div className="flex absolute bottom-0 justify-between items-center py-3 px-4 space-x-2 w-full text-white absolut custom-overly1">
                  <a href="#">Johnson </a>
                  <div className="flex space-x-3">
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-heart" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-40 bg-red-400 rounded-md shadow-sm lg:h-64">
                <a href="#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img8.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <div className="flex absolute bottom-0 justify-between items-center py-3 px-4 space-x-2 w-full text-white absolut custom-overly1">
                  <a href="#">James</a>
                  <div className="flex space-x-3">
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-heart" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-40 bg-yellow-400 rounded-md shadow-sm lg:h-64">
                <a href="#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img5.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <div className="flex absolute bottom-0 justify-between items-center py-3 px-4 space-x-2 w-full text-white absolut custom-overly1">
                  <a href="#">Monroe</a>
                  <div className="flex space-x-3">
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="#" className="flex items-center">
                      {' '}
                      <i className="uil-chat" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Load more */}
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

export default Explore;
