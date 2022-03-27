// import { useEffect, useState } from 'react';

// import { useEthers, useBlockMeta, useBlockNumber } from '@usedappify/core';

import { Dashboard } from '@/layouts/Dashboard';
import { Meta } from '@/layouts/Meta';

const Marketplace = () => {
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
          title="Marketplace - Polydogs Network"
          description="A decentralized social network to connect dog breeders/owners/lovers and more..."
        />
      }
    >
      <div className="max-w-none">
        <div>
          <h1 className="mb-2 text-lg font-extrabold tracking-tight leading-none text-gray-900 lg:text-2xl">
            Marketplace
          </h1>
          <div
            className="flex relative justify-between py-4 -mx-5 space-x-3 lg:m-0 uk-sticky dark-tabs"
            uk-sticky="cls-active: bg-gray-100 bg-opacity-95"
            style={{}}
          >
            <div className="flex overflow-x-scroll pl-5 space-x-3 lg:overflow-hidden lg:pl-0">
              <a
                href="#"
                className="inline-block py-2 px-4 font-bold bg-white rounded shadow"
              >
                {' '}
                On Sale
              </a>
              <a
                href="#"
                className="inline-block py-2 px-4 font-bold bg-white rounded shadow"
              >
                {' '}
                New Puppies
              </a>
              <a
                href="#"
                className="inline-block py-2 px-4 font-bold bg-white rounded shadow"
              >
                {' '}
                For Adoption{' '}
              </a>
              <a
                href="#"
                className="inline-block py-2 px-4 font-bold bg-white rounded shadow"
              >
                {' '}
                Best Apartment Dogs{' '}
              </a>
              <a
                href="#"
                className="inline-block py-2 px-4 font-bold bg-white rounded shadow"
              >
                {' '}
                Allergy Friendly Dogs
              </a>
              <a
                href="#"
                className="inline-block py-2 px-4 font-bold bg-white rounded shadow"
              >
                {' '}
                Best Family Dogs{' '}
              </a>
            </div>
            <a
              href="#"
              uk-toggle="target: #offcanvas-create"
              className="flex items-center py-2 px-4 font-bold text-white hover:text-white bg-pink-500 hover:bg-pink-600 rounded shadow lg:block"
            >
              {' '}
              <i className="mr-1 -mb-1 uil-plus" /> Create Listing{' '}
            </a>
          </div>
          <div className="relative mt-4" uk-slider="finite: true">
            <div className="pb-3 uk-slider-container">
              <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">
                <li>
                  <a href="#" uk-toggle="target: #offcanvas-preview">
                    <div className="market-list">
                      <div className="item-media">
                        {' '}
                        <img
                          src="/assets/images/product/1.jpg"
                          alt="image polydogs"
                        />
                      </div>
                      <div className="item-inner">
                        <div className="item-price"> 200$ </div>
                        <div className="item-title"> Dog 1 </div>
                        <div className="item-statistic">
                          <span>
                            {' '}
                            <span className="count">4</span> likes{' '}
                          </span>
                          <span>
                            {' '}
                            <span className="count">106</span> views{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" uk-toggle="target: #offcanvas-preview">
                    <div className="market-list">
                      <div className="item-media">
                        {' '}
                        <img
                          src="/assets/images/product/13.jpg"
                          alt="image polydogs"
                        />
                      </div>
                      <div className="item-inner">
                        <div className="item-price"> 120$ </div>
                        <div className="item-title"> Dog 2 </div>
                        <div className="item-statistic">
                          <span>
                            {' '}
                            <span className="count">2</span> likes{' '}
                          </span>
                          <span>
                            {' '}
                            <span className="count">286</span> views{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" uk-toggle="target: #offcanvas-preview">
                    <div className="market-list">
                      <div className="item-media">
                        {' '}
                        <img
                          src="/assets/images/product/2.jpg"
                          alt="image polydogs"
                        />
                      </div>
                      <div className="item-inner">
                        <div className="item-price"> 230$ </div>
                        <div className="item-title"> Dog 3 </div>
                        <div className="item-statistic">
                          <span>
                            {' '}
                            <span className="count">16</span> likes{' '}
                          </span>
                          <span>
                            {' '}
                            <span className="count">202</span> views{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" uk-toggle="target: #offcanvas-preview">
                    <div className="market-list">
                      <div className="item-media">
                        {' '}
                        <img
                          src="/assets/images/product/16.jpg"
                          alt="image polydogs"
                        />
                      </div>
                      <div className="item-inner">
                        <div className="item-price"> 600$ </div>
                        <div className="item-title"> Dog 4 </div>
                        <div className="item-statistic">
                          <span>
                            {' '}
                            <span className="count">12</span> likes{' '}
                          </span>
                          <span>
                            {' '}
                            <span className="count">160</span> views{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" uk-toggle="target: #offcanvas-preview">
                    <div className="market-list">
                      <div className="item-media">
                        {' '}
                        <img
                          src="/assets/images/product/17.jpg"
                          alt="image polydogs"
                        />
                      </div>
                      <div className="item-inner">
                        <div className="item-price"> 300$ </div>
                        <div className="item-title"> Dog 5 </div>
                        <div className="item-statistic">
                          <span>
                            {' '}
                            <span className="count">9</span> likes{' '}
                          </span>
                          <span>
                            {' '}
                            <span className="count">136</span> views{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" uk-toggle="target: #offcanvas-preview">
                    <div className="market-list">
                      <div className="item-media">
                        {' '}
                        <img
                          src="/assets/images/product/15.jpg"
                          alt="image polydogs"
                        />
                      </div>
                      <div className="item-inner">
                        <div className="item-price"> 200$ </div>
                        <div className="item-title"> Dog 6 </div>
                        <div className="item-statistic">
                          <span>
                            {' '}
                            <span className="count">2</span> likes{' '}
                          </span>
                          <span>
                            {' '}
                            <span className="count">286</span> views{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <a
                className="flex absolute bottom-1/2 -left-5 z-10 justify-center items-center p-2 mb-8 w-11 h-11 text-2xl dark:text-white bg-white dark:bg-gray-800 rounded-full shadow"
                href="#"
                uk-slider-item="previous"
              >
                {' '}
                <i className="icon-feather-chevron-left" />{' '}
              </a>
              <a
                className="flex absolute -right-5 bottom-1/2 z-10 justify-center items-center p-2 mb-8 w-11 h-11 text-2xl dark:text-white bg-white dark:bg-gray-800 rounded-full shadow"
                href="#"
                uk-slider-item="next"
              >
                {' '}
                <i className="icon-feather-chevron-right" />
              </a>
            </div>
          </div>
          <div className="flex justify-between mt-6 mb-4">
            <h1 className="text-lg font-extrabold tracking-tight leading-none text-gray-900 lg:text-2xl">
              {' '}
              Breed{' '}
            </h1>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500"
            >
              {' '}
              See all
            </a>
          </div>
          <div className="relative" uk-slider="finite: true">
            <div className="pb-3 uk-slider-container">
              <ul className="uk-slider-items uk-child-width-1-6@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">
                <li>
                  <a href="#">
                    <div
                      className="group-catagroy-card"
                      data-src="/assets/images/product/11.jpg"
                      uk-img="true"
                    >
                      <div className="group-catagroy-card-content">
                        <h4> Dog 1 </h4>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div
                      className="group-catagroy-card"
                      data-src="/assets/images/product/1.jpg"
                      uk-img="true"
                    >
                      <div className="group-catagroy-card-content">
                        <h4> Dog 2 </h4>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div
                      className="group-catagroy-card"
                      data-src="/assets/images/product/7.jpg"
                      uk-img="true"
                    >
                      <div className="group-catagroy-card-content">
                        <h4> Dog 3 </h4>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div
                      className="group-catagroy-card"
                      data-src="/assets/images/product/4.jpg"
                      uk-img="true"
                    >
                      <div className="group-catagroy-card-content">
                        <h4> Dog 4 </h4>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div
                      className="group-catagroy-card"
                      data-src="/assets/images/product/13.jpg"
                      uk-img="true"
                    >
                      <div className="group-catagroy-card-content">
                        <h4> Dog 5 </h4>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div
                      className="group-catagroy-card"
                      data-src="/assets/images/product/15.jpg"
                      uk-img="true"
                    >
                      <div className="group-catagroy-card-content">
                        <h4> Dog 6 </h4>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div
                      className="group-catagroy-card"
                      data-src="/assets/images/product/3.jpg"
                      uk-img="true"
                    >
                      <div className="group-catagroy-card-content">
                        <h4> Dog 7 </h4>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <a
                className="flex absolute bottom-1/2 -left-5 z-10 justify-center items-center p-2 -mb-3 w-11 h-11 text-2xl dark:text-white bg-white dark:bg-gray-800 rounded-full shadow"
                href="#"
                uk-slider-item="previous"
              >
                {' '}
                <i className="icon-feather-chevron-left" />{' '}
              </a>
              <a
                className="flex absolute -right-5 bottom-1/2 z-10 justify-center items-center p-2 -mb-3 w-11 h-11 text-2xl dark:text-white bg-white dark:bg-gray-800 rounded-full shadow"
                href="#"
                uk-slider-item="next"
              >
                {' '}
                <i className="icon-feather-chevron-right" />
              </a>
            </div>
          </div>
          <hr className="my-3 my-sm-2" />
          <div className="flex justify-between mt-6 mb-4">
            <h1 className="text-lg font-extrabold tracking-tight leading-none text-gray-900 lg:text-2xl">
              {' '}
              Collections{' '}
            </h1>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500"
            >
              {' '}
              See all
            </a>
          </div>
          <div className="relative" uk-slider="finite: true">
            <div className="pb-3 uk-slider-container">
              <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">
                <li>
                  <a href="#" uk-toggle="target: #offcanvas-preview">
                    <div className="market-list">
                      <div className="item-media">
                        <img
                          src="/assets/images/product/12.jpg"
                          alt="image polydogs"
                        />
                      </div>
                      <div className="item-inner">
                        <div className="item-price"> 200$ </div>
                        <div className="item-title"> Dog 1 </div>
                        <div className="item-statistic">
                          <span>
                            {' '}
                            <span className="count">24</span> likes{' '}
                          </span>
                          <span>
                            {' '}
                            <span className="count">286</span> views{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" uk-toggle="target: #offcanvas-preview">
                    <div className="market-list">
                      <div className="item-media">
                        <img
                          src="/assets/images/product/15.jpg"
                          alt="image polydogs"
                        />
                      </div>
                      <div className="item-inner">
                        <div className="item-price"> 170$ </div>
                        <div className="item-title"> Dog 2 </div>
                        <div className="item-statistic">
                          <span>
                            {' '}
                            <span className="count">7</span> likes{' '}
                          </span>
                          <span>
                            {' '}
                            <span className="count">286</span> views{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" uk-toggle="target: #offcanvas-preview">
                    <div className="market-list">
                      <div className="item-media">
                        <img
                          src="/assets/images/product/4.jpg"
                          alt="image polydogs"
                        />
                      </div>
                      <div className="item-inner">
                        <div className="item-price"> 220$ </div>
                        <div className="item-title"> Dog 3 </div>
                        <div className="item-statistic">
                          <span>
                            {' '}
                            <span className="count">12</span> likes{' '}
                          </span>
                          <span>
                            {' '}
                            <span className="count">386</span> views{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" uk-toggle="target: #offcanvas-preview">
                    <div className="market-list">
                      <div className="item-media">
                        <img
                          src="/assets/images/product/14.jpg"
                          alt="image polydogs"
                        />
                      </div>
                      <div className="item-inner">
                        <div className="item-price"> 200$ </div>
                        <div className="item-title"> Dog 4 </div>
                        <div className="item-statistic">
                          <span>
                            {' '}
                            <span className="count">2</span> likes{' '}
                          </span>
                          <span>
                            {' '}
                            <span className="count">286</span> views{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" uk-toggle="target: #offcanvas-preview">
                    <div className="market-list">
                      <div className="item-media">
                        <img
                          src="/assets/images/product/11.jpg"
                          alt="image polydogs"
                        />
                      </div>
                      <div className="item-inner">
                        <div className="item-price"> 420$ </div>
                        <div className="item-title"> Dog 5 </div>
                        <div className="item-statistic">
                          <span>
                            {' '}
                            <span className="count">2</span> likes{' '}
                          </span>
                          <span>
                            {' '}
                            <span className="count">286</span> views{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" uk-toggle="target: #offcanvas-preview">
                    <div className="market-list">
                      <div className="item-media">
                        <img
                          src="/assets/images/product/9.jpg"
                          alt="image polydogs"
                        />
                      </div>
                      <div className="item-inner">
                        <div className="item-price"> 200$ </div>
                        <div className="item-title">
                          {' '}
                          Dog 6{' '}
                        </div>
                        <div className="item-statistic">
                          <span>
                            {' '}
                            <span className="count">2</span> likes{' '}
                          </span>
                          <span>
                            {' '}
                            <span className="count">286</span> views{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <a
                className="flex absolute bottom-1/2 -left-5 z-10 justify-center items-center p-2 mb-8 w-11 h-11 text-2xl dark:text-white bg-white dark:bg-gray-800 rounded-full shadow"
                href="#"
                uk-slider-item="previous"
              >
                {' '}
                <i className="icon-feather-chevron-left" />{' '}
              </a>
              <a
                className="flex absolute -right-5 bottom-1/2 z-10 justify-center items-center p-2 mb-8 w-11 h-11 text-2xl dark:text-white bg-white dark:bg-gray-800 rounded-full shadow"
                href="#"
                uk-slider-item="next"
              >
                {' '}
                <i className="icon-feather-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Marketplace;
