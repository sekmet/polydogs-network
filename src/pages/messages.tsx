// import { useEffect, useState } from 'react';

// import { useEthers, useBlockMeta, useBlockNumber } from '@usedappify/core';

import { Dashboard } from '@/layouts/Dashboard';
import { Meta } from '@/layouts/Meta';

const Messages = () => {
  /* const router = useRouter();
  const [blockNumber, setBlockNumber] = useState<number | undefined>(0);
  const { account } = useEthers();
  const { timestamp } = useBlockMeta();
  const blocknumber = useBlockNumber();

  useEffect(() => {
    setBlockNumber(blocknumber);
  }, [blocknumber]); */

  return (
    <Dashboard
      auth={true}
      meta={
        <Meta
          title="Messages - Polydogs Network"
          description="A decentralized social network to connect dog breeders/owners/lovers and more..."
        />
      }
    >
      <div className="max-w-none">
        <div className="social">
          <h1 className="mb-5 text-lg font-extrabold tracking-tight leading-none text-gray-900 lg:text-2xl">
            {' '}
            Messages
          </h1>
          <div className="overflow-hidden -mx-5 space-y-8 rounded-md lg:flex lg:-mx-0 lg:space-y-0 lg:bg-white lg:dark:bg-gray-800 lg:shadow">
            {/* left message */}
            <div className="overflow-hidden bg-white dark:bg-gray-800 border-r dark:border-gray-600 lg:w-4/12">
              {/* search */}
              <div className="p-4 border-b dark:border-gray-600">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-md input-with-icon">
                  <input
                    id="autocomplete-input"
                    type="text"
                    placeholder="Search"
                    className="max-h-10 bg-transparent shadow-none"
                  />
                  <i className="icon-material-outline-search" />
                </div>
              </div>
              {/* user list */}
              <div className="pb-16 w-full">
                <ul className="dark:text-gray-100">
                  <li>
                    <a
                      href="chat.html#"
                      className="flex items-center py-3 px-4 space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div className="relative shrink-0 w-12 h-12 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-2.jpg"
                          alt="image polydogs"
                          className="absolute w-full h-full rounded-full"
                        />
                        <span className="absolute right-0 bottom-0 m-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-md" />
                      </div>
                      <div className="relative flex-1 min-w-0 text-gray-500">
                        <h4 className="font-semibold text-black dark:text-white">
                          David Peterson
                        </h4>
                        <span className="absolute top-1 right-0 text-xs">
                          Sun
                        </span>
                        <p className="truncate">Esmod tincidunt ut laoreet</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chat.html#"
                      className="flex items-center py-3 px-4 space-x-3 bg-gray-100 dark:bg-gray-700"
                    >
                      <div className="relative shrink-0 w-12 h-12 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-1.jpg"
                          alt="image polydogs"
                          className="absolute w-full h-full rounded-full"
                        />
                        <span className="absolute right-0 bottom-0 m-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-md" />
                      </div>
                      <div className="relative flex-1 min-w-0 text-gray-500">
                        <h4 className="font-semibold text-black dark:text-white">
                          Sindy Forest
                        </h4>
                        <span className="absolute top-1 right-0 text-xs">
                          {' '}
                          Mon
                        </span>
                        <p className="truncate">
                          Seddiam nonummy nibh euismod laoreet
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chat.html#"
                      className="flex items-center py-3 px-4 space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div className="relative shrink-0 w-12 h-12 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-5.jpg"
                          alt="image polydogs"
                          className="absolute w-full h-full rounded-full"
                        />
                        <span className="absolute right-0 bottom-0 m-0.5 w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-md" />
                      </div>
                      <div className="relative flex-1 min-w-0 text-gray-500">
                        <h4 className="font-semibold text-black dark:text-white">
                          {' '}
                          Zara Ali{' '}
                        </h4>
                        <span className="absolute top-1 right-0 text-xs">
                          4 hours ago
                        </span>
                        <p className="truncate">Consectetuer adiscing elit</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chat.html#"
                      className="flex items-center py-3 px-4 space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div className="relative shrink-0 w-12 h-12 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-4.jpg"
                          alt="image polydogs"
                          className="absolute w-full h-full rounded-full"
                        />
                        <span className="absolute right-0 bottom-0 m-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-md" />
                      </div>
                      <div className="relative flex-1 min-w-0 text-gray-500">
                        <h4 className="font-semibold text-black dark:text-white">
                          David Peterson
                        </h4>
                        <span className="absolute top-1 right-0 text-xs">
                          Week ago
                        </span>
                        <p className="truncate">
                          Nam liber tempor{' '}
                          <i className="uil-grin-tongue-wink" />
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chat.html#"
                      className="flex items-center py-3 px-4 space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div className="relative shrink-0 w-12 h-12 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-2.jpg"
                          alt="image polydogs"
                          className="absolute w-full h-full rounded-full"
                        />
                        <span className="absolute right-0 bottom-0 m-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-md" />
                      </div>
                      <div className="relative flex-1 min-w-0 text-gray-500">
                        <h4 className="font-semibold text-black dark:text-white">
                          David Peterson
                        </h4>
                        <span className="absolute top-1 right-0 text-xs">
                          Week ago
                        </span>
                        <p className="truncate">Esmod tincidunt ut laoreet</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*  message */}
            <div className="bg-white dark:bg-gray-800 lg:w-8/12">
              <div className="flex py-4 px-5 uk-flex-between">
                <a href="chat.html#" className="flex items-center space-x-3">
                  <div className="relative shrink-0 w-10 h-10 rounded-full">
                    <img
                      src="/assets/images/avatars/avatar-1.jpg"
                      alt="image polydogs"
                      className="w-full h-full rounded-full"
                    />
                    <span className="absolute right-0 bottom-0 m-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-md" />
                  </div>
                  <div className="relative flex-1 min-w-0 text-gray-500">
                    <h4 className="text-lg font-semibold text-black">
                      Sindy Forest
                    </h4>
                    <p className="text-sm font-semibold leading-3 text-green-500">
                      is online
                    </p>
                  </div>
                </a>
                <a
                  href="chat.html#"
                  className="flex items-center space-x-2 font-medium leading-8 text-red-500 hover:text-red-400"
                >
                  <i className="uil-trash-alt" />{' '}
                  <span className="hidden lg:block"> Delete Conversation </span>
                </a>
              </div>
              <div className="border-t dark:border-gray-600">
                <div className="p-4 space-y-5 lg:p-8">
                  <h3 className="mx-auto text-sm lg:pt-2 lg:w-60 uk-heading-line uk-text-center">
                    <span> 28 June, 2018 </span>
                  </h3>
                  {/* my message */}
                  <div className="flex flex-row-reverse lg:items-center">
                    <div className="relative shrink-0 w-14 h-14 rounded-full">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        alt="image polydogs"
                        className="absolute w-full h-full rounded-full"
                      />
                    </div>
                    <div className="relative py-2 px-3 mr-2 h-full text-white bg-blue-600 rounded lg:mr-5 lg:ml-20">
                      <p className="leading-6">
                        consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod laoreet dolore magna{' '}
                        <i className="uil-grin-tongue-wink" />{' '}
                      </p>
                      <div className="absolute top-3 -right-1 w-3 h-3 bg-blue-600 rotate-45" />
                    </div>
                  </div>
                  <h3 className="mx-auto text-sm lg:pt-2 lg:w-60 uk-heading-line uk-text-center">
                    <span> 28 June, 2018 </span>
                  </h3>
                  <div className="flex lg:items-center">
                    <div className="relative shrink-0 w-14 h-14 rounded-full">
                      <img
                        src="/assets/images/avatars/avatar-1.jpg"
                        alt="image polydogs"
                        className="absolute w-full h-full rounded-full"
                      />
                    </div>
                    <div className="relative py-2 px-3 ml-2 h-full text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700 rounded lg:mr-20 lg:ml-5">
                      <p className="leading-6">
                        In ut odio libero vulputate{' '}
                        <i className="uil-heart"> </i>{' '}
                        <i className="uil-grin-tongue-wink"> </i>{' '}
                      </p>
                      <div className="absolute top-3 -left-1 w-3 h-3 bg-gray-100 dark:bg-gray-700 rotate-45" />
                    </div>
                  </div>
                  {/* my message */}
                  <div className="flex flex-row-reverse lg:items-center">
                    <div className="relative shrink-0 w-14 h-14 rounded-full">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        alt="image polydogs"
                        className="absolute w-full h-full rounded-full"
                      />
                    </div>
                    <div className="relative py-2 px-3 mr-2 h-full text-white bg-blue-600 rounded lg:mr-5 lg:ml-20">
                      <p className="leading-6">
                        Nam liber tempor cum soluta nobis eleifend option{' '}
                        <i className="uil-grin-tongue-wink-alt" />
                      </p>
                      <div className="absolute top-3 -right-1 w-3 h-3 bg-blue-600 rotate-45" />
                    </div>
                  </div>
                  <h3 className="mx-auto text-sm lg:pt-2 lg:w-60 uk-heading-line uk-text-center">
                    <span> 28 June, 2018 </span>
                  </h3>
                  <div className="flex flex-row-reverse lg:items-center">
                    <div className="relative shrink-0 w-14 h-14 rounded-full">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        alt="image polydogs"
                        className="absolute w-full h-full rounded-full"
                      />
                    </div>
                    <div className="relative py-2 px-3 mr-2 h-full text-white bg-blue-600 rounded lg:mr-5 lg:ml-20">
                      <p className="leading-6">
                        consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod laoreet dolore magna.
                      </p>
                      <div className="absolute top-3 -right-1 w-3 h-3 bg-blue-600 rotate-45" />
                    </div>
                  </div>
                  <h3 className="mx-auto text-sm lg:pt-2 lg:w-60 uk-heading-line uk-text-center">
                    <span> 28 June, 2018 </span>
                  </h3>
                  <div className="flex lg:items-center">
                    <div className="relative shrink-0 w-14 h-14 rounded-full">
                      <img
                        src="/assets/images/avatars/avatar-1.jpg"
                        alt="image polydogs"
                        className="absolute w-full h-full rounded-full"
                      />
                    </div>
                    <div className="relative py-2 px-3 ml-2 h-full text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700 rounded lg:mr-20 lg:ml-5">
                      <p className="leading-6">
                        Nam liber tempor cum soluta nobis eleifend option congue
                        nihil imperdiet doming{' '}
                      </p>
                      <div className="absolute top-3 -left-1 w-3 h-3 bg-gray-100 dark:bg-gray-700 rotate-45" />
                    </div>
                  </div>
                  {/* my message */}
                  <div className="flex flex-row-reverse lg:items-center">
                    <div className="relative shrink-0 w-14 h-14 rounded-full">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        alt="image polydogs"
                        className="absolute w-full h-full rounded-full"
                      />
                    </div>
                    <div className="relative py-2 px-3 mr-2 h-full text-white bg-blue-600 rounded lg:mr-5 lg:ml-20">
                      <p className="leading-6">
                        quis nostrud exerci tation ullamcorper suscipit .
                      </p>
                      <div className="absolute top-3 -right-1 w-3 h-3 bg-blue-600 rotate-45" />
                    </div>
                  </div>
                  <div className="flex lg:items-center">
                    <div className="relative shrink-0 w-14 h-14 rounded-full">
                      <img
                        src="/assets/images/avatars/avatar-1.jpg"
                        alt="image polydogs"
                        className="absolute w-full h-full rounded-full"
                      />
                    </div>
                    <div className="relative py-2 px-3 ml-2 h-full text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700 rounded lg:mr-20 lg:ml-5">
                      <div className="flex my-2 space-x-0.5 animate-pulse">
                        <div className="w-2 h-2 bg-gray-400 rounded-full" />
                        <div className="w-2 h-2 bg-gray-300 rounded-full" />
                        <div className="w-2 h-2 bg-gray-300 rounded-full" />
                      </div>
                      <div className="absolute top-3 -left-1 w-3 h-3 bg-gray-100 dark:bg-gray-700 rotate-45" />
                    </div>
                  </div>
                </div>
                <div className="flex p-6 border-t dark:border-gray-700">
                  <textarea
                    cols={1}
                    rows={1}
                    placeholder="Your Message.."
                    className="flex-1 min-w-0 h-10 min-h-0 dark:bg-transparent border-0 shadow-none resize-none"
                    defaultValue={''}
                  />
                  <div className="flex space-x-2 h-full">
                    <button
                      type="submit"
                      className="py-2 px-6 font-semibold text-white bg-blue-600 rounded-md"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Messages;
