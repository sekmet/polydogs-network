// import { useEffect, useState, Fragment } from 'react';

// import { useEthers, useBlockMeta, useBlockNumber } from '@usedappify/core';

import { Dashboard } from '@/layouts/Dashboard';
import { Meta } from '@/layouts/Meta';

const Trending = () => {
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
          title="Trending - Polydogs Network"
          description="A decentralized social network to connect dog breeders/owners/lovers and more..."
        />
      }
    >
      <div className="max-w-none">
        <div className="social">
          <div className="flex justify-between items-baseline lg:mr-8  uk-visible@s">
            <h1 className="mb-6 text-lg font-extrabold tracking-tight leading-none text-gray-900 lg:text-2xl">
              {' '}
              Trending{' '}
            </h1>
            <a
              href="trending.html#"
              className="text-blue-400 hover:text-blue-500"
            >
              {' '}
              See all
            </a>
          </div>
          {/* users */}
          <div className="relative uk-visible@s" uk-slider="finite: true">
            <a
              className="flex absolute bottom-1/2 -left-2 z-10 justify-center items-center p-2 w-9 text-xl dark:text-white bg-white dark:bg-gray-800 rounded-full shadow"
              href="trending.html#"
              uk-slider-item="previous"
            >
              {' '}
              <i className="icon-feather-chevron-left" />{' '}
            </a>
            <a
              className="flex absolute right-4 bottom-1/2 z-10 justify-center items-center p-2 w-9 text-xl dark:text-white bg-white dark:bg-gray-800 rounded-full shadow"
              href="trending.html#"
              uk-slider-item="next"
            >
              {' '}
              <i className="icon-feather-chevron-right" />
            </a>
            <div className="pb-3 lg:mr-3 uk-slider-container">
              <ul className="uk-slider-items uk-grid uk-grid-small">
                <li>
                  <div className="relative p-1 m-1 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                    <img
                      src="/assets/images/avatars/avatar-2.jpg"
                      className="w-20 h-20 bg-gray-200 rounded-full border-2 border-white"
                    />
                    <a
                      href="trending.html#"
                      className="flex absolute right-2 bottom-0 justify-center items-center p-2 w-8 h-8 text-white bg-blue-600 rounded-full border-4 border-white"
                    >
                      +{' '}
                    </a>
                  </div>
                  <a
                    href="profile.html"
                    className="block w-24 font-medium text-center text-gray-500 truncate text-x"
                  >
                    You{' '}
                  </a>
                </li>
                <li>
                  <a href="trending.html#story-view" uk-toggle="true">
                    <div className="p-1 m-1 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-1.jpg"
                        className="w-20 h-20 bg-gray-200 rounded-full border-2 border-white"
                      />
                    </div>
                  </a>
                  <a
                    href="profile.html"
                    className="block w-24 font-medium text-center text-gray-500 truncate text-x"
                  >
                    Dennis{' '}
                  </a>
                </li>
                <li>
                  <a href="trending.html#story-view" uk-toggle="true">
                    <div className="p-1 m-1 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-3.jpg"
                        className="w-20 h-20 bg-gray-200 rounded-full border-2 border-white"
                      />
                    </div>
                  </a>
                  <a
                    href="profile.html"
                    className="block w-24 font-medium text-center text-gray-500 truncate text-x"
                  >
                    Jonathan{' '}
                  </a>
                </li>
                <li>
                  <a href="trending.html#story-view" uk-toggle="true">
                    <div className="p-1 m-1 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-4.jpg"
                        className="w-20 h-20 bg-gray-200 rounded-full border-2 border-white"
                      />
                    </div>
                  </a>
                  <a
                    href="profile.html"
                    className="block w-24 font-medium text-center text-gray-500 truncate text-x"
                  >
                    Stella{' '}
                  </a>
                </li>
                <li>
                  <a href="trending.html#story-view" uk-toggle="true">
                    <div className="p-1 m-1 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-5.jpg"
                        className="w-20 h-20 bg-gray-200 rounded-full border-2 border-white"
                      />
                    </div>
                  </a>
                  <a
                    href="profile.html"
                    className="block w-24 font-medium text-center text-gray-500 truncate text-x"
                  >
                    Alex{' '}
                  </a>
                </li>
                <li>
                  <a href="trending.html#story-view" uk-toggle="true">
                    <div className="p-1 m-1 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-6.jpg"
                        className="w-20 h-20 bg-gray-200 rounded-full border-2 border-white"
                      />
                    </div>
                  </a>
                  <a
                    href="profile.html"
                    className="block w-24 font-medium text-center text-gray-500 truncate text-x"
                  >
                    {' '}
                    Adrian
                  </a>
                </li>
                <li>
                  <a href="trending.html#story-view" uk-toggle="true">
                    <div className="p-1 m-1 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-1.jpg"
                        className="w-20 h-20 bg-gray-200 rounded-full border-2 border-white"
                      />
                    </div>
                  </a>
                  <a
                    href="profile.html"
                    className="block w-24 font-medium text-center text-gray-500 truncate text-x"
                  >
                    Jonathan{' '}
                  </a>
                </li>
                <li>
                  <a href="trending.html#story-view" uk-toggle="true">
                    <div className="p-1 m-1 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        className="w-20 h-20 bg-gray-200 rounded-full border-2 border-white"
                      />
                    </div>
                  </a>
                  <a
                    href="profile.html"
                    className="block w-24 font-medium text-center text-gray-500 truncate text-x"
                  >
                    Dennis{' '}
                  </a>
                </li>
                <li>
                  <a href="trending.html#story-view" uk-toggle="true">
                    <div className="p-1 m-1 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-3.jpg"
                        className="w-20 h-20 bg-gray-200 rounded-full border-2 border-white"
                      />
                    </div>
                  </a>
                  <a
                    href="profile.html"
                    className="block w-24 font-medium text-center text-gray-500 truncate text-x"
                  >
                    Stella{' '}
                  </a>
                </li>
                <li>
                  <a href="trending.html#story-view" uk-toggle="true">
                    <div className="p-1 m-1 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-4.jpg"
                        className="w-20 h-20 bg-gray-200 rounded-full border-2 border-white"
                      />
                    </div>
                  </a>
                  <a
                    href="profile.html"
                    className="block w-24 font-medium text-center text-gray-500 truncate text-x"
                  >
                    Adrian{' '}
                  </a>
                </li>
                <li>
                  <a href="trending.html#story-view" uk-toggle="true">
                    <div className="p-1 m-1 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-5.jpg"
                        className="w-20 h-20 bg-gray-200 rounded-full border-2 border-white"
                      />
                    </div>
                  </a>
                  <a
                    href="profile.html"
                    className="block w-24 font-medium text-center text-gray-500 truncate text-x"
                  >
                    Dennis{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-baseline uk-visible@s">
            <h1 className="mt-8 mb-6 text-lg font-extrabold tracking-tight leading-none text-gray-900 lg:text-2xl">
              {' '}
              Suggestion
            </h1>
            <a
              href="trending.html#"
              className="text-blue-400 hover:text-blue-500"
            >
              {' '}
              See all
            </a>
          </div>
          <div className="relative" uk-slider="finite: true">
            <div className="pb-3 -ml-3 uk-slider-container">
              <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid-small">
                <li>
                  <div className="overflow-hidden relative max-w-full h-52 bg-gray-200 rounded-lg lg:h-64">
                    <a href="profile.html">
                      <img
                        src="/assets/images/post/img7.jpg"
                        className="object-cover absolute inset-0 w-full h-full"
                      />
                    </a>
                    <a
                      href="trending.html#"
                      className="absolute top-3 right-3 bg-black bg-opacity-60 rounded-full"
                      data-tippy-placement="left"
                      title="Hide"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="m-1.5 w-6 h-6 text-white fill-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </a>
                    <div className="absolute bottom-0 p-4 w-full custom-overly1">
                      <div className="flex flex-wrap justify-between text-white align-bottom">
                        <div className="w-full text-lg truncate">
                          {' '}
                          John Michael{' '}
                        </div>
                        <div className="text-sm leading-5">
                          <div> 21, Turkey </div>
                        </div>
                        <a
                          href="trending.html#"
                          className="absolute right-3 bottom-3 bg-gradient-to-tr from-blue-500 to-purple-700 rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="m-1.5 w-6 h-6 text-white fill-current"
                          >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="overflow-hidden relative max-w-full h-52 bg-gray-200 rounded-lg lg:h-64">
                    <a href="profile.html">
                      <img
                        src="/assets/images/avatars/avatar-6.jpg"
                        className="object-cover absolute inset-0 w-full h-full"
                      />
                    </a>
                    <a
                      href="trending.html#"
                      className="absolute top-3 right-3 bg-black bg-opacity-60 rounded-full"
                      data-tippy-placement="left"
                      title="Hide"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="m-1.5 w-6 h-6 text-white fill-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </a>
                    <div className="absolute bottom-0 p-4 w-full custom-overly1">
                      <div className="flex flex-wrap justify-between text-white align-bottom">
                        <div className="w-full text-lg truncate">
                          {' '}
                          Monroe Parker{' '}
                        </div>
                        <div className="text-sm leading-5">
                          <div> 19, Austria </div>
                        </div>
                        <a
                          href="trending.html#"
                          className="absolute right-3 bottom-3 bg-gradient-to-tr from-blue-500 to-purple-700 rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="m-1.5 w-6 h-6 text-white fill-current"
                          >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="overflow-hidden relative max-w-full h-52 bg-gray-200 rounded-lg lg:h-64">
                    <a href="profile.html">
                      <img
                        src="/assets/images/avatars/avatar-4.jpg"
                        className="object-cover absolute inset-0 w-full h-full"
                      />
                    </a>
                    <a
                      href="trending.html#"
                      className="absolute top-3 right-3 bg-black bg-opacity-60 rounded-full"
                      data-tippy-placement="left"
                      title="Hide"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="m-1.5 w-6 h-6 text-white fill-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </a>
                    <div className="absolute bottom-0 p-4 w-full custom-overly1">
                      <div className="flex flex-wrap justify-between text-white align-bottom">
                        <div className="w-full text-lg truncate">
                          {' '}
                          Martin Gray{' '}
                        </div>
                        <div className="text-sm leading-5">
                          <div> 19, New York </div>
                        </div>
                        <a
                          href="trending.html#"
                          className="absolute right-3 bottom-3 bg-gradient-to-tr from-blue-500 to-purple-700 rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="m-1.5 w-6 h-6 text-white fill-current"
                          >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="overflow-hidden relative max-w-full h-52 bg-gray-200 rounded-lg lg:h-64">
                    <a href="profile.html">
                      <img
                        src="/assets/images/avatars/avatar-7.jpg"
                        className="object-cover absolute inset-0 w-full h-full"
                      />
                    </a>
                    <a
                      href="trending.html#"
                      className="absolute top-3 right-3 bg-black bg-opacity-60 rounded-full"
                      data-tippy-placement="left"
                      title="Hide"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="m-1.5 w-6 h-6 text-white fill-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </a>
                    <div className="absolute bottom-0 p-4 w-full custom-overly1">
                      <div className="flex flex-wrap justify-between text-white align-bottom">
                        <div className="w-full text-lg truncate">
                          {' '}
                          Jesse Stevens
                        </div>
                        <div className="text-sm leading-5">
                          <div> 19, London </div>
                        </div>
                        <a
                          href="trending.html#"
                          className="absolute right-3 bottom-3 bg-gradient-to-tr from-blue-500 to-purple-700 rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="m-1.5 w-6 h-6 text-white fill-current"
                          >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="overflow-hidden relative max-w-full h-52 bg-gray-200 rounded-lg lg:h-64">
                    <a href="profile.html">
                      <img
                        src="/assets/images/avatars/avatar-1.jpg"
                        className="object-cover absolute inset-0 w-full h-full"
                      />
                    </a>
                    <a
                      href="trending.html#"
                      className="absolute top-3 right-3 bg-black bg-opacity-60 rounded-full"
                      data-tippy-placement="left"
                      title="Hide"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="m-1.5 w-6 h-6 text-white fill-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </a>
                    <div className="absolute bottom-0 p-4 w-full custom-overly1">
                      <div className="flex flex-wrap justify-between text-white align-bottom">
                        <div className="w-full text-lg truncate">
                          {' '}
                          James Lewis{' '}
                        </div>
                        <div className="text-sm leading-5">
                          <div> 19, Austria </div>
                        </div>
                        <a
                          href="trending.html#"
                          className="absolute right-3 bottom-3 bg-gradient-to-tr from-blue-500 to-purple-700 rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="m-1.5 w-6 h-6 text-white fill-current"
                          >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <a
                className="flex justify-center items-center p-3.5 -mx-4 mb-6 w-10 h-10 dark:text-white bg-white dark:bg-gray-800 rounded-full shadow-md uk-position-center-left uk-position-small"
                href="trending.html#"
                uk-slidenav-previous="true"
                uk-slider-item="previous"
              />
              <a
                className="flex justify-center items-center p-3.5 -mx-4 w-10 h-10 dark:text-white bg-white dark:bg-gray-800 rounded-full shadow-md uk-position-center-right uk-positsion-small"
                href="trending.html#"
                uk-slidenav-next="true"
                uk-slider-item="next"
              />
            </div>
          </div>
          <h1 className="mt-8 mb-6 text-lg font-extrabold tracking-tight leading-none text-gray-900 lg:text-2xl">
            {' '}
            Explore{' '}
          </h1>
          <div className="grid grid-cols-2 gap-3 mt-6 hover:text-yellow-700 lg:grid-cols-3 uk-link-reset">
            <div>
              <div className="overflow-hidden relative max-w-full h-48 bg-red-400 rounded-lg shadow lg:h-60 uk-transition-toggle">
                <a href="trending.html#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img8.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <a
                  href="trending.html#story-modal"
                  uk-toggle="true"
                  className="flex absolute justify-center items-center w-8 w-full h-full bg-black bg-opacity-10 uk-transition-scale-up"
                >
                  <img
                    src="/assets/images/icon-play.svg"
                    alt="image polydogs"
                    className="-mt-5 w-16 h-16"
                  />
                </a>
                <div className="flex absolute bottom-0 flex-1 items-center p-3 w-full text-white custom-overly1 uk-transition-slide-bottom-medium">
                  <a
                    href="profile.html"
                    className="hidden flex-1 items-center lg:flex"
                  >
                    <div className="p-1 m-0.5 mr-2 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        className="w-8 bg-gray-200 rounded-full border border-white"
                      />
                    </div>
                    <div> James Lewis </div>
                  </a>
                  <div className="flex flex-1 justify-around space-x-2 lg:flex-initial">
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-48 bg-green-400 rounded-lg shadow lg:h-72 uk-transition-toggle">
                <a href="trending.html#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img2.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <div className="flex absolute bottom-0 flex-1 items-center p-3 w-full text-white custom-overly1 uk-transition-slide-bottom-medium">
                  <a
                    href="profile.html"
                    className="hidden flex-1 items-center lg:flex"
                  >
                    <div className="p-1 m-0.5 mr-2 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        className="w-8 bg-gray-200 rounded-full border border-white"
                      />
                    </div>
                    <div> James Lewis </div>
                  </a>
                  <div className="flex flex-1 justify-around space-x-2 lg:flex-initial">
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-48 bg-yellow-400 rounded-lg shadow lg:h-60 uk-transition-toggle">
                <a href="trending.html#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img3.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <a
                  href="trending.html#story-modal"
                  uk-toggle="true"
                  className="flex absolute justify-center items-center w-8 w-full h-full bg-black bg-opacity-10 uk-transition-scale-up"
                >
                  <img
                    src="/assets/images/icon-play.svg"
                    alt="image polydogs"
                    className="-mt-5 w-16 h-16"
                  />
                </a>
                <div className="flex absolute bottom-0 flex-1 items-center p-3 w-full text-white custom-overly1 uk-transition-slide-bottom-medium">
                  <a
                    href="profile.html"
                    className="hidden flex-1 items-center lg:flex"
                  >
                    <div className="p-1 m-0.5 mr-2 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        className="w-8 bg-gray-200 rounded-full border border-white"
                      />
                    </div>
                    <div> John Michael </div>
                  </a>
                  <div className="flex flex-1 justify-around space-x-2 lg:flex-initial">
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-48 bg-pink-400 rounded-lg shadow lg:-mt-12 lg:h-72 uk-transition-toggle">
                <a href="trending.html#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img7.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <div className="flex absolute bottom-0 flex-1 items-center p-3 w-full text-white custom-overly1 uk-transition-slide-bottom-medium">
                  <a
                    href="profile.html"
                    className="hidden flex-1 items-center lg:flex"
                  >
                    <div className="p-1 m-0.5 mr-2 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        className="w-8 bg-gray-200 rounded-full border border-white"
                      />
                    </div>
                    <div> Monroe Parker </div>
                  </a>
                  <div className="flex flex-1 justify-around space-x-2 lg:flex-initial">
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-48 bg-purple-400 rounded-lg shadow lg:h-60 uk-transition-toggle">
                <a href="trending.html#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img5.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <div className="flex absolute bottom-0 flex-1 items-center p-3 w-full text-white custom-overly1 uk-transition-slide-bottom-medium">
                  <a
                    href="profile.html"
                    className="hidden flex-1 items-center lg:flex"
                  >
                    <div className="p-1 m-0.5 mr-2 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        className="w-8 bg-gray-200 rounded-full border border-white"
                      />
                    </div>
                    <div> Martin Gray </div>
                  </a>
                  <div className="flex flex-1 justify-around space-x-2 lg:flex-initial">
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-48 bg-pink-400 rounded-lg shadow lg:-mt-12 lg:h-72 uk-transition-toggle">
                <a href="trending.html#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img1.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <div className="flex absolute bottom-0 flex-1 items-center p-3 w-full text-white custom-overly1 uk-transition-slide-bottom-medium">
                  <a
                    href="profile.html"
                    className="hidden flex-1 items-center lg:flex"
                  >
                    <div className="p-1 m-0.5 mr-2 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full transition hover:scale-105 -rotate-2 hover:rotate-3">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        className="w-8 bg-gray-200 rounded-full border border-white"
                      />
                    </div>
                    <div> Jesse Stevens </div>
                  </a>
                  <div className="flex flex-1 justify-around space-x-2 lg:flex-initial">
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 my-3 hover:text-yellow-700 lg:grid-cols-4 uk-link-reset">
            <div>
              <div className="overflow-hidden relative max-w-full h-48 bg-red-400 rounded-lg shadow lg:h-56 uk-transition-toggle">
                <a href="trending.html#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img2.jpg"
                    className="object-cover absolute inset-0 w-full h-full scale-150"
                  />
                </a>
                <div className="flex absolute bottom-0 flex-1 items-center p-3 w-full text-white custom-overly1 uk-transition-slide-bottom-medium">
                  <a
                    href="profile.html"
                    className="hidden flex-1 items-center lg:flex"
                  >
                    <div> James Lewis </div>
                  </a>
                  <div className="flex flex-1 justify-around space-x-2 lg:flex-initial">
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-48 bg-yellow-400 rounded-lg shadow lg:h-56 uk-transition-toggle">
                <a href="trending.html#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img6.jpg"
                    className="object-cover absolute inset-0 w-full h-full scale-150"
                  />
                </a>
                <div className="flex absolute bottom-0 flex-1 items-center p-3 w-full text-white custom-overly1 uk-transition-slide-bottom-medium">
                  <a
                    href="trending.html#"
                    className="hidden flex-1 items-center lg:flex"
                  >
                    <div> James Lewis </div>
                  </a>
                  <div className="flex flex-1 justify-around space-x-2 lg:flex-initial">
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-48 bg-green-400 rounded-lg shadow lg:h-56 uk-transition-toggle">
                <a href="trending.html#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/avatars/avatar-1.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <div className="flex absolute bottom-0 flex-1 items-center p-3 w-full text-white custom-overly1 uk-transition-slide-bottom-medium">
                  <a
                    href="trending.html#"
                    className="hidden flex-1 items-center lg:flex"
                  >
                    <div> James Lewis </div>
                  </a>
                  <div className="flex flex-1 justify-around space-x-2 lg:flex-initial">
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden relative max-w-full h-48 bg-blue-400 rounded-lg shadow lg:h-56 uk-transition-toggle">
                <a href="trending.html#story-modal" uk-toggle="true">
                  <img
                    src="/assets/images/post/img7.jpg"
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                </a>
                <div className="flex absolute bottom-0 flex-1 items-center p-3 w-full text-white custom-overly1 uk-transition-slide-bottom-medium">
                  <a
                    href="trending.html#"
                    className="hidden flex-1 items-center lg:flex"
                  >
                    <div> James Lewis </div>
                  </a>
                  <div className="flex flex-1 justify-around space-x-2 lg:flex-initial">
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 150{' '}
                    </a>
                    <a href="trending.html#">
                      {' '}
                      <i className="uil-heart" /> 30{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Load more */}
          <div className="flex justify-center mt-6">
            <a
              href="trending.html#"
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

export default Trending;
