'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import noCode from '@/assets/images/no-code.png';
import infinity from '@/assets/images/Infinity.png';
import frontEnd from '@/assets/images/Front-End.png';
import backEnd from '@/assets/images/Back-End.png';
import db from '@/assets/images/DB.png';
import app from '@/assets/images/App.png';
import cloud from '@/assets/images/Cloud.png';
import sustainable from '@/assets/images/Sustainable.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import { FaArrowDown } from 'react-icons/fa';

const Services = ({ dictionary }: { dictionary: any }) => {
  return (
    <>
      <Swiper
        direction={'vertical'}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        speed={800}
        modules={[Pagination, Mousewheel]}
        className="services-slider"
      >
        <SwiperSlide>
          <div className="slide-1-content">
            <div className="slide-1-top-circle"></div>
            <div className="slide-1-center">
              <h2 className="slide-1-title">Get Started</h2>
              <h1 className="slide-1-subtitle">Our Offerings</h1>
              <p className="slide-1-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod
              </p>
              <div className="slide-1-arrow">
                <FaArrowDown size={48} />
              </div>
            </div>
            <div className="slide-1-bottom-circle"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-2-content">
            <div className="slide-2-center">
              <h2 className="slide-2-title">There is no impossible code.</h2>
              <p className="slide-2-text">
                We simply don't say its impossible, we dig in issues together,
                and seek best solutions. From simple method, A to Z, for
                client's prosperity.
              </p>
              <div className="slide-2-img">
                <img src={noCode.src} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-3-content">
            <div className="slide-3-center">
              <h2 className="slide-3-title">Always be on same page</h2>
              <p className="slide-3-text">
                While developing, most major issuett is conversation between
                clients and developers
              </p>
              <hr className="slide-3-hr" />
              <p className="slide-3-text">
                Without be on same page takes lots of timing and resources
              </p>
              <hr className="slide-3-hr" />
              <p className="slide-3-text">
                With open mindset, we simply approach cliant's idea, to be on
                same page
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-4-content">
            <div className="slide-4-center">
              <h2 className="slide-4-title">Simple Ideas</h2>
              <h1 className="slide-4-subtitle">Better Solutions</h1>
              <p className="slide-4-text">
                With simple ideas, we make User experience much more richer than
                others. Not from fixed templates, we expend one by one.
              </p>
              <img src={infinity.src} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-5-content">
            <div className="slide-5-center">
              <h2 className="slide-5-title">Tech Specs</h2>
              <p className="slide-5-text">
                <strong> We develop all kinds of Web, Mobile Apps</strong>{' '}
                <br /> * Web is optimized with chrome browser!
              </p>
            </div>
            <div className="slide-5-boxes">
              <div className="slide-5-box">
                <img src={frontEnd.src} />
                <div className="slide-5-title-box">Front-End</div>
                <div className="slide-5-text-list">Vue.js </div>
                <div className="slide-5-text-list">jQuery</div>
                <div className="slide-5-text-list">React.js</div>
              </div>
              <div className="slide-5-box">
                <img src={backEnd.src} />
                <div className="slide-5-title-box">Back-End</div>
                <div className="slide-5-text-list">Core-PHP</div>
                <div className="slide-5-text-list">Node.js</div>
                <div className="slide-5-text-list"> Laravel</div>
              </div>
              <div className="slide-5-box">
                <img src={db.src} />
                <div className="slide-5-title-box">DB</div>
                <div className="slide-5-text-list">Maria DB </div>
                <div className="slide-5-text-list">MySQL</div>
                <div className="slide-5-text-list">PostgreSQL</div>
              </div>
              <div className="slide-5-box">
                <img src={app.src} />
                <div className="slide-5-title-box">App</div>
                <div className="slide-5-text-list">Flutter </div>
                <div className="slide-5-text-list">React Native</div>
                <div className="slide-5-text-list">Object-C</div>
              </div>
              <div className="slide-5-box">
                <img src={cloud.src} />
                <div className="slide-5-title-box">Cloud</div>
                <div className="slide-5-text-list">Google </div>
                <div className="slide-5-text-list">AWS</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="slide-6-content">
            <div className="slide-6-center">
              <h2 className="slide-6-title">Sustainable</h2>
              <p className="slide-6-text">
                It's not end if you make web or app only
              </p>
              <hr className="slide-6-hr" />
              <p className="slide-6-text">
                We provide sustainable solutions for our clients. That includes
                marketing, Brand identity
              </p>
              <img src={sustainable.src} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Services;
