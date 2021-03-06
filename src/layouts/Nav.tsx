import { Fragment } from 'react';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

import ConnectButton from '@/components/Wallet/ConnectButton';
import Identicon from '@/components/Wallet/Identicon';
import { classNames } from '@/utils';

const user = {
  name: 'IPFS User',
  email: 'ipfs@blockchain.eth',
  imageUrl: '/favicon-32x32.png',
};
const navigation = [
  // { name: 'Dashboard', href: '/', current: true },
  { name: 'Feed', href: '/feed', current: false },
  // { name: 'Profile', href: '/profile', current: false },
  { name: 'Explore', href: '/explore', current: false },
  // { name: 'Messages', href: '/messages', current: false },
  // { name: 'Settings', href: '/settings', current: false },
  { name: 'Trending', href: '/trending', current: false },
  { name: 'Marketplace', href: '/marketplace', current: false },
];

export default function Nav() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useSession();
  const token: any = data?.token;

  const handleSignOut = async () => {
    const signout = await signOut({ redirect: true });
    console.log(signout);
  };

  const userNavigation = [
    {
      name: 'Profile',
      href: '/profile',
      onClick: () => console.log('Profile'),
    },
    {
      name: 'Messages',
      href: '/messages',
      onClick: () => console.log('Messages'),
    },
    {
      name: 'Settings',
      href: '/settings',
      onClick: () => console.log('Settings'),
    },
  ];

  const onOpen = () => console.log('onOpen disclosure');
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="shrink-0">
                  <Link href="/">
                    <a id="home">
                      <img
                        className="w-24 h-32"
                        src="/assets/images/logo.svg"
                        alt="Polydogs Network"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          id={item.name}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center ml-4 md:ml-6">
                  <button
                    type="button"
                    className="p-1 text-gray-400 hover:text-white bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <ConnectButton
                        accountId={token?.sub}
                        handleOpenModal={onOpen}
                        DrawerMenu={Menu.Button}
                      />
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 py-1 mt-2 w-48 bg-white rounded-md focus:outline-none ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link href={item.href}>
                                <a
                                  id={item.name}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                        <Menu.Item key="Sign out">
                          {({ active }) => (
                            <a
                              id="Sign out"
                              href="#signout"
                              onClick={() => handleSignOut()}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="flex -mr-2 md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <span className="w-10 h-10 rounded-full">
                    <Identicon accountId={token && token?.sub} iconSize={36} />
                  </span>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="shrink-0 p-1 ml-auto text-gray-400 hover:text-white bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="px-2 mt-3 space-y-1">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={() => item.onClick()}
                    className="block py-2 px-3 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 rounded-md"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
