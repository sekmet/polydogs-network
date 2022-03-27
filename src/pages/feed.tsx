// import { useEffect, useState } from 'react';

// import { useEthers, useBlockMeta, useBlockNumber } from '@usedappify/core';

import { Dashboard } from '@/layouts/Dashboard';
import { Meta } from '@/layouts/Meta';

const Feed = () => {
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
          title="Feed - Polydogs Network"
          description="A decentralized social network to connect dog breeders/owners/lovers and more..."
        />
      }
    >
      <div className="max-w-none">
        <div className="social">
          <h1 className="mb-5 text-lg font-extrabold tracking-tight leading-none text-gray-900 lg:text-2xl">
            {' '}
            Feed{' '}
          </h1>
          <div className="justify-center space-y-5 lg:flex lg:space-y-0 lg:space-x-10">
            {/* left sidebar */}
            <div className="shrink-0 space-y-5 lg:w-7/12">
              {/* post 1 */}
              <div className="-mx-2 bg-white dark:bg-gray-900 rounded-md shadow lg:mx-0">
                {/* post header */}
                <div className="flex justify-between items-center py-3 px-4">
                  <div className="flex flex-1 items-center space-x-4">
                    <a href="#">
                      <div className="p-0.5 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-2.jpg"
                          className="w-8 h-8 bg-gray-200 rounded-full border border-white"
                        />
                      </div>
                    </a>
                    <span className="block font-semibold dark:text-gray-100 capitalize">
                      {' '}
                      Johnson smith{' '}
                    </span>
                  </div>
                  <div>
                    <a href="#">
                      {' '}
                      <i className="p-2 -mr-1 text-2xl hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition icon-feather-more-horizontal" />{' '}
                    </a>
                    <div
                      className="hidden p-2 mx-auto mt-12 w-56 text-base text-gray-500 dark:text-gray-100 bg-white dark:bg-gray-900 rounded-md border border-gray-100 dark:border-gray-700 shadow-md"
                      uk-drop="mode: hover;pos: top-right"
                    >
                      <ul className="space-y-1">
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-share-alt" /> Share
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-edit-alt" /> Edit Post
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-comment-slash" /> Disable
                            comments
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-favorite" /> Add favorites
                          </a>
                        </li>
                        <li>
                          <hr className="my-2 -mx-2 dark:border-gray-800" />
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 text-red-500 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-600 rounded-md"
                          >
                            <i className="mr-1 uil-trash-alt" /> Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div uk-lightbox="true">
                  <a href="assets/images/post/img4.jpg">
                    <img
                      src="/assets/images/post/img4.jpg"
                      alt="image polydogs"
                    />
                  </a>
                </div>
                <div className="py-3 px-4 space-y-3">
                  <div className="flex space-x-4 lg:font-bold">
                    <a href="#" className="flex items-center space-x-2">
                      <div className="p-2 text-black rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width={22}
                          height={22}
                          className="dark:text-gray-100"
                        >
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                      </div>
                      <div> Like</div>
                    </a>
                    <a href="#" className="flex items-center space-x-2">
                      <div className="p-2 text-black rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width={22}
                          height={22}
                          className="dark:text-gray-100"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div> Comment</div>
                    </a>
                    <a
                      href="#"
                      className="flex flex-1 justify-end items-center space-x-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width={22}
                        height={22}
                        className="dark:text-gray-100"
                      >
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      <div> Share</div>
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <img
                        src="/assets/images/avatars/avatar-1.jpg"
                        alt="image polydogs"
                        className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                      />
                      <img
                        src="/assets/images/avatars/avatar-4.jpg"
                        alt="image polydogs"
                        className="-ml-2 w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                      />
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        alt="image polydogs"
                        className="-ml-2 w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                      />
                    </div>
                    <div className="dark:text-gray-100">
                      Liked <strong> Johnson</strong> and{' '}
                      <strong> 209 Others </strong>
                    </div>
                  </div>
                  <div className="pt-4 space-y-4 border-t dark:border-gray-600">
                    <div className="flex">
                      <div className="relative shrink-0 w-10 h-10 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-1.jpg"
                          alt="image polydogs"
                          className="absolute w-full h-full rounded-full"
                        />
                      </div>
                      <div className="relative py-2 px-3 ml-2 h-full text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 rounded-md  lg:mr-20 lg:ml-5">
                        <p className="leading-6">
                          In ut odio libero vulputate{' '}
                          <i className="i uil-heart" />{' '}
                          <i className="uil-grin-tongue-wink"> </i>{' '}
                        </p>
                        <div className="absolute top-3 -left-1 w-3 h-3 bg-gray-100 dark:bg-gray-800 rotate-45" />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="relative shrink-0 w-10 h-10 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-1.jpg"
                          alt="image polydogs"
                          className="absolute w-full h-full rounded-full"
                        />
                      </div>
                      <div className="relative py-2 px-3 ml-2 h-full text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 rounded-md  lg:mr-20 lg:ml-5">
                        <p className="leading-6">
                          Nam liber tempor cum soluta nobis eleifend option{' '}
                          <i className="uil-grin-tongue-wink-alt" />
                        </p>
                        <div className="absolute top-3 -left-1 w-3 h-3 bg-gray-100 dark:bg-gray-800 rotate-45" />
                      </div>
                    </div>
                  </div>
                  <div className="relative bg-gray-100 dark:bg-gray-800 rounded-full">
                    <input
                      type="text"
                      placeholder="Add your Comment.."
                      className="max-h-10 bg-transparent shadow-none"
                    />
                    <div className="flex absolute right-0 right-3 bottom-0 items-center space-x-2 h-full text-xl">
                      <a href="#">
                        {' '}
                        <i className="uil-image" />
                      </a>
                      <a href="#">
                        {' '}
                        <i className="uil-video" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* post 2 */}
              <div className="-mx-2 bg-white dark:bg-gray-900 rounded-md shadow lg:mx-0">
                {/* post header */}
                <div className="flex justify-between items-center py-3 px-4">
                  <div className="flex flex-1 items-center space-x-4">
                    <a href="#">
                      <div className="p-0.5 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-2.jpg"
                          className="w-8 h-8 bg-gray-200 rounded-full border border-white"
                        />
                      </div>
                    </a>
                    <span className="block font-semibold dark:text-gray-100 capitalize">
                      {' '}
                      Johnson smith{' '}
                    </span>
                  </div>
                  <div>
                    <a href="#">
                      {' '}
                      <i className="p-2 -mr-1 text-2xl hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition icon-feather-more-horizontal" />{' '}
                    </a>
                    <div
                      className="hidden p-2 mx-auto mt-12 w-56 text-base text-gray-500 dark:text-gray-100 bg-white dark:bg-gray-900 rounded-md border border-gray-100 dark:border-gray-700 shadow-md"
                      uk-drop="mode: hover;pos: top-right"
                    >
                      <ul className="space-y-1">
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-share-alt" /> Share
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-edit-alt" /> Edit Post
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-comment-slash" /> Disable
                            comments
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-favorite" /> Add favorites
                          </a>
                        </li>
                        <li>
                          <hr className="my-2 -mx-2 dark:border-gray-800" />
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 text-red-500 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-600 rounded-md"
                          >
                            <i className="mr-1 uil-trash-alt" /> Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div uk-lightbox="true">
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <a
                      href="assets/images/post/img9.jpg"
                      className="col-span-2"
                    >
                      <img
                        src="/assets/images/post/img9.jpg"
                        alt="image polydogs"
                        className="object-cover w-full rounded-md lg:h-76"
                      />
                    </a>
                    <a href="assets/images/post/img10.jpg">
                      <img
                        src="/assets/images/post/img10.jpg"
                        alt="image polydogs"
                        className="w-full h-full rounded-md"
                      />
                    </a>
                    <a href="assets/images/post/img11.jpg" className="relative">
                      <img
                        src="/assets/images/post/img11.jpg"
                        alt="image polydogs"
                        className="w-full h-full rounded-md"
                      />
                      <div className="flex absolute inset-0 justify-center items-center text-2xl text-white bg-gray-900 bg-opacity-30 rounded-md">
                        {' '}
                        + 15 more{' '}
                      </div>
                    </a>
                  </div>
                </div>
                <div className="py-3 px-4 space-y-3">
                  <div className="flex space-x-4 lg:font-bold">
                    <a href="#" className="flex items-center space-x-2">
                      <div className="p-2 text-black rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width={22}
                          height={22}
                          className="dark:text-gray-100"
                        >
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                      </div>
                      <div> Like</div>
                    </a>
                    <a href="#" className="flex items-center space-x-2">
                      <div className="p-2 text-black rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width={22}
                          height={22}
                          className="dark:text-gray-100"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div> Comment</div>
                    </a>
                    <a
                      href="#"
                      className="flex flex-1 justify-end items-center space-x-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width={22}
                        height={22}
                        className="dark:text-gray-100"
                      >
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      <div> Share</div>
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <img
                        src="/assets/images/avatars/avatar-1.jpg"
                        alt="image polydogs"
                        className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                      />
                      <img
                        src="/assets/images/avatars/avatar-4.jpg"
                        alt="image polydogs"
                        className="-ml-2 w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                      />
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        alt="image polydogs"
                        className="-ml-2 w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                      />
                    </div>
                    <div className="dark:text-gray-100">
                      Liked <strong> Johnson</strong> and{' '}
                      <strong> 209 Others </strong>
                    </div>
                  </div>
                  <div className="pt-4 space-y-4 border-t dark:border-gray-600">
                    <div className="flex">
                      <div className="relative shrink-0 w-10 h-10 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-1.jpg"
                          alt="image polydogs"
                          className="absolute w-full h-full rounded-full"
                        />
                      </div>
                      <div className="relative py-2 px-3 ml-2 h-full text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 rounded-md  lg:mr-20 lg:ml-5">
                        <p className="leading-6">
                          In ut odio libero vulputate{' '}
                          <i className="i uil-heart" />{' '}
                          <i className="uil-grin-tongue-wink"> </i>{' '}
                        </p>
                        <div className="absolute top-3 -left-1 w-3 h-3 bg-gray-100 dark:bg-gray-800 rotate-45" />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="relative shrink-0 w-10 h-10 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-1.jpg"
                          alt="image polydogs"
                          className="absolute w-full h-full rounded-full"
                        />
                      </div>
                      <div className="relative py-2 px-3 ml-2 h-full text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 rounded-md  lg:mr-20 lg:ml-5">
                        <p className="leading-6">
                          Nam liber tempor cum soluta nobis eleifend option{' '}
                          <i className="uil-grin-tongue-wink-alt" />
                        </p>
                        <div className="absolute top-3 -left-1 w-3 h-3 bg-gray-100 dark:bg-gray-800 rotate-45" />
                      </div>
                    </div>
                  </div>
                  <div className="relative bg-gray-100 dark:bg-gray-800 rounded-full rounded-md">
                    <input
                      type="text"
                      placeholder="Add your Comment.."
                      className="max-h-10 bg-transparent shadow-none"
                    />
                    <div className="flex absolute right-0 right-3 bottom-0 items-center space-x-2 h-full text-xl">
                      <a href="#">
                        {' '}
                        <i className="uil-image" />
                      </a>
                      <a href="#">
                        {' '}
                        <i className="uil-video" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Load more */}
              <div
                className="flex justify-center mt-6"
                id="toggle"
                uk-toggle="target: #toggle ;animation: uk-animation-fade"
              >
                <a
                  href="#"
                  className="py-2 px-6 my-3 font-semibold dark:text-white bg-white dark:bg-gray-900 dark:bg-gray-800 rounded-full shadow-md"
                >
                  Load more ..
                </a>
              </div>
              {/* post 3 */}
              <div
                className="-mx-2 bg-white dark:bg-gray-900 rounded-md shadow lg:mx-0"
                id="toggle"
                hidden
              >
                {/* post header */}
                <div className="flex justify-between items-center py-3 px-4">
                  <div className="flex flex-1 items-center space-x-4">
                    <a href="#">
                      <div className="p-0.5 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-2.jpg"
                          className="w-8 h-8 bg-gray-200 rounded-full border border-white"
                        />
                      </div>
                    </a>
                    <span className="block font-semibold dark:text-gray-100 capitalize">
                      {' '}
                      Johnson smith{' '}
                    </span>
                  </div>
                  <div>
                    <a href="#">
                      {' '}
                      <i className="p-2 -mr-1 text-2xl hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition icon-feather-more-horizontal" />{' '}
                    </a>
                    <div
                      className="hidden p-2 mx-auto mt-12 w-56 text-base text-gray-500 dark:text-gray-100 bg-white dark:bg-gray-900 rounded-md border border-gray-100 dark:border-gray-700 shadow-md"
                      uk-drop="mode: hover;pos: top-right"
                    >
                      <ul className="space-y-1">
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-share-alt" /> Share
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-edit-alt" /> Edit Post
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-comment-slash" /> Disable
                            comments
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-favorite" /> Add favorites
                          </a>
                        </li>
                        <li>
                          <hr className="my-2 -mx-2 dark:border-gray-800" />
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 text-red-500 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-600 rounded-md"
                          >
                            <i className="mr-1 uil-trash-alt" /> Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-b dark:border-gray-700">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim laoreet dolore
                  magna aliquam erat volutpat
                </div>
                <div className="py-3 px-4 space-y-3">
                  <div className="flex space-x-4 lg:font-bold">
                    <a href="#" className="flex items-center space-x-2">
                      <div className="p-2 text-black rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width={22}
                          height={22}
                          className="dark:text-gray-100"
                        >
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                      </div>
                      <div> Like</div>
                    </a>
                    <a href="#" className="flex items-center space-x-2">
                      <div className="p-2 text-black rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width={22}
                          height={22}
                          className="dark:text-gray-100"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div> Comment</div>
                    </a>
                    <a
                      href="#"
                      className="flex flex-1 justify-end items-center space-x-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width={22}
                        height={22}
                        className="dark:text-gray-100"
                      >
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      <div> Share</div>
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <img
                        src="/assets/images/avatars/avatar-1.jpg"
                        alt="image polydogs"
                        className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                      />
                      <img
                        src="/assets/images/avatars/avatar-4.jpg"
                        alt="image polydogs"
                        className="-ml-2 w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                      />
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        alt="image polydogs"
                        className="-ml-2 w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                      />
                    </div>
                    <div className="dark:text-gray-100">
                      Liked <strong> Johnson</strong> and{' '}
                      <strong> 209 Others </strong>
                    </div>
                  </div>
                  <div className="pt-4 space-y-4 border-t dark:border-gray-600">
                    <div className="flex">
                      <div className="relative shrink-0 w-10 h-10 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-1.jpg"
                          alt="image polydogs"
                          className="absolute w-full h-full rounded-full"
                        />
                      </div>
                      <div className="relative py-2 px-3 ml-2 h-full text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 rounded-md  lg:mr-20 lg:ml-5">
                        <p className="leading-6">
                          In ut odio libero vulputate{' '}
                          <i className="i uil-heart" />{' '}
                          <i className="uil-grin-tongue-wink"> </i>{' '}
                        </p>
                        <div className="absolute top-3 -left-1 w-3 h-3 bg-gray-100 dark:bg-gray-800 rotate-45" />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="relative shrink-0 w-10 h-10 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-1.jpg"
                          alt="image polydogs"
                          className="absolute w-full h-full rounded-full"
                        />
                      </div>
                      <div className="relative py-2 px-3 ml-2 h-full text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 rounded-md  lg:mr-20 lg:ml-5">
                        <p className="leading-6">
                          Nam liber tempor cum soluta nobis eleifend option{' '}
                          <i className="uil-grin-tongue-wink-alt" />
                        </p>
                        <div className="absolute top-3 -left-1 w-3 h-3 bg-gray-100 dark:bg-gray-800 rotate-45" />
                      </div>
                    </div>
                  </div>
                  <div className="relative bg-gray-100 dark:bg-gray-800 rounded-full rounded-md">
                    <input
                      type="text"
                      placeholder="Add your Comment.."
                      className="max-h-10 bg-transparent shadow-none"
                    />
                    <div className="flex absolute right-0 right-3 bottom-0 items-center space-x-2 h-full text-xl">
                      <a href="#">
                        {' '}
                        <i className="uil-image" />
                      </a>
                      <a href="#">
                        {' '}
                        <i className="uil-video" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* post 4 */}
              <div
                className="-mx-2 bg-white dark:bg-gray-900 rounded-md shadow lg:mx-0"
                id="toggle"
                hidden
              >
                {/* post header */}
                <div className="flex justify-between items-center py-3 px-4">
                  <div className="flex flex-1 items-center space-x-4">
                    <a href="#">
                      <div className="p-0.5 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-2.jpg"
                          className="w-8 h-8 bg-gray-200 rounded-full border border-white"
                        />
                      </div>
                    </a>
                    <span className="block font-semibold dark:text-gray-100 capitalize">
                      {' '}
                      Johnson smith{' '}
                    </span>
                  </div>
                  <div>
                    <a href="#">
                      {' '}
                      <i className="p-2 -mr-1 text-2xl hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition icon-feather-more-horizontal" />{' '}
                    </a>
                    <div
                      className="hidden p-2 mx-auto mt-12 w-56 text-base text-gray-500 dark:text-gray-100 bg-white dark:bg-gray-900 rounded-md border border-gray-100 dark:border-gray-700 shadow-md"
                      uk-drop="mode: hover;pos: top-right"
                    >
                      <ul className="space-y-1">
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-share-alt" /> Share
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-edit-alt" /> Edit Post
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-comment-slash" /> Disable
                            comments
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
                          >
                            <i className="mr-1 uil-favorite" /> Add favorites
                          </a>
                        </li>
                        <li>
                          <hr className="my-2 -mx-2 dark:border-gray-800" />
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-2 px-3 text-red-500 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-600 rounded-md"
                          >
                            <i className="mr-1 uil-trash-alt" /> Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full">
                  <iframe
                    src="https://www.youtube.com/embed/pQN-pnXPaVg"
                    frameBorder={0}
                    uk-video="automute: true"
                    allowFullScreen
                    uk-responsive="true"
                    className="w-full h-40 lg:h-64"
                  />
                </div>
                <div className="py-3 px-4 space-y-3">
                  <div className="flex space-x-4 lg:font-bold">
                    <a href="#" className="flex items-center space-x-2">
                      <div className="p-2 text-black rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width={22}
                          height={22}
                          className="dark:text-gray-100"
                        >
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                      </div>
                      <div> Like</div>
                    </a>
                    <a href="#" className="flex items-center space-x-2">
                      <div className="p-2 text-black rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width={22}
                          height={22}
                          className="dark:text-gray-100"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div> Comment</div>
                    </a>
                    <a
                      href="#"
                      className="flex flex-1 justify-end items-center space-x-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width={22}
                        height={22}
                        className="dark:text-gray-100"
                      >
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      <div> Share</div>
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <img
                        src="/assets/images/avatars/avatar-1.jpg"
                        alt="image polydogs"
                        className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                      />
                      <img
                        src="/assets/images/avatars/avatar-4.jpg"
                        alt="image polydogs"
                        className="-ml-2 w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                      />
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        alt="image polydogs"
                        className="-ml-2 w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
                      />
                    </div>
                    <div className="dark:text-gray-100">
                      Liked <strong> Johnson</strong> and{' '}
                      <strong> 209 Others </strong>
                    </div>
                  </div>
                  <div className="pt-4 space-y-4 border-t dark:border-gray-600">
                    <div className="flex">
                      <div className="relative shrink-0 w-10 h-10 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-1.jpg"
                          alt="image polydogs"
                          className="absolute w-full h-full rounded-full"
                        />
                      </div>
                      <div className="relative py-2 px-3 ml-2 h-full text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 rounded-md  lg:mr-20 lg:ml-5">
                        <p className="leading-6">
                          In ut odio libero vulputate{' '}
                          <i className="i uil-heart" />{' '}
                          <i className="uil-grin-tongue-wink"> </i>{' '}
                        </p>
                        <div className="absolute top-3 -left-1 w-3 h-3 bg-gray-100 dark:bg-gray-800 rotate-45" />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="relative shrink-0 w-10 h-10 rounded-full">
                        <img
                          src="/assets/images/avatars/avatar-1.jpg"
                          alt="image polydogs"
                          className="absolute w-full h-full rounded-full"
                        />
                      </div>
                      <div className="relative py-2 px-3 ml-2 h-full text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 rounded-md  lg:mr-20 lg:ml-5">
                        <p className="leading-6">
                          Nam liber tempor cum soluta nobis eleifend option{' '}
                          <i className="uil-grin-tongue-wink-alt" />
                        </p>
                        <div className="absolute top-3 -left-1 w-3 h-3 bg-gray-100 dark:bg-gray-800 rotate-45" />
                      </div>
                    </div>
                  </div>
                  <div className="relative bg-gray-100 dark:bg-gray-800 rounded-full rounded-md">
                    <input
                      type="text"
                      placeholder="Add your Comment.."
                      className="max-h-10 bg-transparent shadow-none"
                    />
                    <div className="flex absolute right-0 right-3 bottom-0 items-center space-x-2 h-full text-xl">
                      <a href="#">
                        {' '}
                        <i className="uil-image" />
                      </a>
                      <a href="#">
                        {' '}
                        <i className="uil-video" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Load more */}
              <div className="flex justify-center mt-6" id="toggle" hidden>
                <a
                  href="#"
                  className="py-2 px-6 my-3 font-semibold dark:text-white bg-white dark:bg-gray-800 rounded-full shadow-md"
                >
                  Load more ..
                </a>
              </div>
            </div>
            {/* right sidebar */}
            <div className="lg:w-5/12">
              <div className="overflow-hidden bg-white dark:bg-gray-900 rounded-md shadow-md">
                <div className="flex justify-between items-baseline py-4 px-6 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800">
                  <h2 className="text-lg font-semibold">Who to follow</h2>
                  <a href="#"> Refresh</a>
                </div>
                <div className="px-4 dark:text-gray-100 divide-y divide-gray-300 dark:divide-gray-800 divide-opacity-50">
                  <div className="flex justify-between items-center py-3">
                    <div className="flex flex-1 items-center space-x-4">
                      <a href="profile.html">
                        <img
                          src="/assets/images/avatars/avatar-2.jpg"
                          className="w-10 h-10 bg-gray-200 rounded-full"
                        />
                      </a>
                      <div className="flex flex-col">
                        <span className="block font-semibold capitalize">
                          {' '}
                          Johnson smith{' '}
                        </span>
                        <span className="block text-sm capitalize">
                          {' '}
                          Australia{' '}
                        </span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="py-1 px-4 font-semibold hover:text-white hover:bg-pink-600 rounded-full border border-gray-200 hover:border-pink-600 dark:border-gray-800"
                    >
                      {' '}
                      Follow{' '}
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div className="flex flex-1 items-center space-x-4">
                      <a href="profile.html">
                        <img
                          src="/assets/images/avatars/avatar-1.jpg"
                          className="w-10 h-10 bg-gray-200 rounded-full"
                        />
                      </a>
                      <div className="flex flex-col">
                        <span className="block font-semibold capitalize">
                          {' '}
                          James Lewis{' '}
                        </span>
                        <span className="block text-sm capitalize">
                          {' '}
                          Istanbul{' '}
                        </span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="py-1 px-4 font-semibold hover:text-white hover:bg-pink-600 rounded-full border border-gray-200 hover:border-pink-600 dark:border-gray-800"
                    >
                      {' '}
                      Follow{' '}
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div className="flex flex-1 items-center space-x-4">
                      <a href="profile.html">
                        <img
                          src="/assets/images/avatars/avatar-5.jpg"
                          className="w-10 h-10 bg-gray-200 rounded-full"
                        />
                      </a>
                      <div className="flex flex-col">
                        <span className="block font-semibold capitalize">
                          {' '}
                          John Michael{' '}
                        </span>
                        <span className="block text-sm capitalize">
                          {' '}
                          New York{' '}
                        </span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="py-1 px-4 font-semibold hover:text-white hover:bg-pink-600 rounded-full border border-gray-200 hover:border-pink-600 dark:border-gray-800"
                    >
                      {' '}
                      Follow{' '}
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div className="flex flex-1 items-center space-x-4">
                      <a href="profile.html">
                        <img
                          src="/assets/images/avatars/avatar-7.jpg"
                          className="w-10 h-10 bg-gray-200 rounded-full"
                        />
                      </a>
                      <div className="flex flex-col">
                        <span className="block font-semibold capitalize">
                          {' '}
                          Monroe Parker{' '}
                        </span>
                        <span className="block text-sm capitalize">
                          {' '}
                          Yeman{' '}
                        </span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="py-1 px-4 font-semibold hover:text-white hover:bg-pink-600 rounded-full border border-gray-200 hover:border-pink-600 dark:border-gray-800"
                    >
                      {' '}
                      Follow{' '}
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="mt-5"
                uk-sticky="offset:28; bottom:true ; media @m"
              >
                <div className="overflow-hidden bg-white dark:bg-gray-900 rounded-md shadow-md">
                  <div className="flex justify-between items-baseline py-4 px-6 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                    <h2 className="text-lg font-semibold">Latest</h2>
                    <a href="explore.html"> See all</a>
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-3 uk-link-reset">
                    <div className="overflow-hidden relative max-w-full h-32 bg-red-500 rounded-lg uk-transition-toggle">
                      <a href="#story-modal" uk-toggle="true">
                        <img
                          src="/assets/images/post/img2.jpg"
                          className="object-cover absolute inset-0 w-full h-full"
                        />
                      </a>
                      <div className="flex absolute bottom-0 flex-1 justify-around items-center p-2 w-full text-white custom-overly1 uk-transition-slide-bottom-medium">
                        <a href="#">
                          {' '}
                          <i className="uil-heart" /> 150{' '}
                        </a>
                        <a href="#">
                          {' '}
                          <i className="uil-heart" /> 30{' '}
                        </a>
                      </div>
                    </div>
                    <div className="overflow-hidden relative max-w-full h-40 bg-red-500 rounded-lg uk-transition-toggle">
                      <a href="#story-modal" uk-toggle="true">
                        <img
                          src="/assets/images/post/img7.jpg"
                          className="object-cover absolute inset-0 w-full h-full"
                        />
                      </a>
                      <div className="flex absolute bottom-0 flex-1 justify-around items-center p-2 w-full text-white custom-overly1 uk-transition-slide-bottom-medium">
                        <a href="#">
                          {' '}
                          <i className="uil-heart" /> 150{' '}
                        </a>
                        <a href="#">
                          {' '}
                          <i className="uil-heart" /> 30{' '}
                        </a>
                      </div>
                    </div>
                    <div className="overflow-hidden relative -mt-8 max-w-full h-40 bg-red-500 rounded-lg uk-transition-toggle">
                      <a href="#story-modal" uk-toggle="true">
                        <img
                          src="/assets/images/post/img5.jpg"
                          className="object-cover absolute inset-0 w-full h-full"
                        />
                      </a>
                      <div className="flex absolute bottom-0  flex-1 justify-around items-center p-2 w-full text-white custom-overly1 uk-transition-slide-bottom-medium">
                        <a href="#">
                          {' '}
                          <i className="uil-heart" /> 150{' '}
                        </a>
                        <a href="#">
                          {' '}
                          <i className="uil-heart" /> 30{' '}
                        </a>
                      </div>
                    </div>
                    <div className="overflow-hidden relative max-w-full h-32 bg-red-500 rounded-lg uk-transition-toggle">
                      <a href="#story-modal" uk-toggle="true">
                        <img
                          src="/assets/images/post/img3.jpg"
                          className="object-cover absolute inset-0 w-full h-full"
                        />
                      </a>
                      <div className="flex absolute bottom-0  flex-1 justify-around items-center p-2 w-full text-white custom-overly1 uk-transition-slide-bottom-medium">
                        <a href="#">
                          {' '}
                          <i className="uil-heart" /> 150{' '}
                        </a>
                        <a href="#">
                          {' '}
                          <i className="uil-heart" /> 30{' '}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story modal */}
        <div
          id="story-modal"
          className="hidden uk-modal-container"
          uk-modal="true"
        >
          <div className="uk-modal-dialog story-modal">
            <button
              className="p-4 -mt-5 -mr-5 dark:text-white bg-white dark:bg-gray-600 rounded-full shadow-lg transition lg:-mt-9 lg:-mr-9 uk-modal-close-default"
              type="button"
              uk-close="true"
            />
            <div className="story-modal-media">
              <img
                src="/assets/images/post/img4.jpg"
                alt="image polydogs"
                className="object-cover inset-0 w-full h-full"
              />
            </div>
            <div className="flex-1 dark:text-gray-100 bg-white dark:bg-gray-900">
              {/* post header */}
              <div className="flex justify-between items-center py-3 px-5 border-b dark:border-gray-600">
                <div className="flex flex-1 items-center space-x-4">
                  <a href="#">
                    <div className="p-0.5 bg-gradient-to-tr from-yellow-600 to-pink-600 rounded-full">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        className="w-8 h-8 bg-gray-200 rounded-full border border-white"
                      />
                    </div>
                  </a>
                  <span className="block text-lg font-semibold">
                    {' '}
                    Johnson smith{' '}
                  </span>
                </div>
                <a href="#">
                  <i className="p-2 -mr-1 text-2xl rounded-full transition icon-feather-more-horizontal" />
                </a>
              </div>
              <div className="p-4 story-content" data-simplebar>
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.{' '}
                </p>
                <div className="py-4 ">
                  <div className="flex justify-around">
                    <a href="#" className="flex items-center space-x-3">
                      <div className="flex items-baseline font-bold">
                        {' '}
                        <i className="mr-1 uil-heart"> </i> Like
                      </div>
                    </a>
                    <a href="#" className="flex items-center space-x-3">
                      <div className="flex items-baseline font-bold">
                        {' '}
                        <i className="mr-1 uil-heart"> </i> Comment
                      </div>
                    </a>
                    <a href="#" className="flex items-center space-x-3">
                      <div className="flex items-baseline font-bold">
                        {' '}
                        <i className="mr-1 uil-heart"> </i> Share
                      </div>
                    </a>
                  </div>
                  <hr className="my-3 -mx-4" />
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <img
                        src="/assets/images/avatars/avatar-1.jpg"
                        alt="image polydogs"
                        className="w-6 h-6 rounded-full border-2 border-white"
                      />
                      <img
                        src="/assets/images/avatars/avatar-4.jpg"
                        alt="image polydogs"
                        className="-ml-2 w-6 h-6 rounded-full border-2 border-white"
                      />
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        alt="image polydogs"
                        className="-ml-2 w-6 h-6 rounded-full border-2 border-white"
                      />
                    </div>
                    <div>
                      Liked <strong> Johnson</strong> and{' '}
                      <strong> 209 Others </strong>
                    </div>
                  </div>
                </div>
                <div className="-mt-1 space-y-1">
                  <div className="flex flex-1 items-center space-x-2">
                    <img
                      src="/assets/images/avatars/avatar-2.jpg"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1 p-2">
                      consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod
                    </div>
                  </div>
                  <div className="flex flex-1 items-center space-x-2">
                    <img
                      src="/assets/images/avatars/avatar-4.jpg"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1 p-2">
                      consectetuer adipiscing elit
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 border-t dark:border-gray-600">
                <div className="relative bg-gray-200 dark:bg-gray-700 rounded-full rounded-md">
                  <input
                    type="text"
                    placeholder="Add your Comment.."
                    className="max-h-8 bg-transparent shadow-none"
                  />
                  <div className="flex absolute right-0 right-3 bottom-0 items-center space-x-2 h-full text-xl">
                    <a href="#">
                      {' '}
                      <i className="uil-image" />
                    </a>
                    <a href="#">
                      {' '}
                      <i className="uil-video" />
                    </a>
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

export default Feed;
