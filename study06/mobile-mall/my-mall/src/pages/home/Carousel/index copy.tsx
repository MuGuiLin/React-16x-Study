import React from 'react';
import { Link } from 'umi';
import styles from './index.less';
import { WingBlank, Carousel } from 'antd-mobile';

export default () => {
  const banner = [
    {
      src: 'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
      alt: '女装',
    },
    {
      src: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg',
      alt: '男装',
    },
    {
      src: '//gw.alicdn.com/imgextra/i2/193/O1CN011QYq3d1DIR21KZdje_!!193-0-lubanu.jpg',
      alt: '鞋',
    },
    {
      src: '//img.alicdn.com/imgextra/i1/158/O1CN012x8yNc1D2PAaNb7lG_!!158-0-luban.jpg',
      alt: '包',
    },
  ];

  let slideIndex: any = 0;
  let imgHeight = 176;

  const beforeChange = (from, to) => {
    console.log(`slide from ${from} to ${to}`);
  };

  const afterChange = (index) => {
    console.log(index)
    slideIndex = index;
  };

  const imgOnLoad = () => {
    // fire window resize event to change height
    window.dispatchEvent(new Event('resize'));
    imgHeight = 'auto';
  };

  return (
    <WingBlank>
      <Carousel className="space-carousel"
        frameOverflow="visible"
        cellSpacing={10}
        slideWidth={0.8}
        autoplay
        infinite
        beforeChange={beforeChange}
        afterChange={afterChange}
      >
        {banner.map(({ src, alt }, index) => (
          <a
            key={index}
            href="http://www.alipay.com"
            style={{
              display: 'block',
              position: 'relative',
              top: slideIndex === index ? -10 : 0,
              height: imgHeight,
              boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src={src}
              alt={alt}
              style={{ width: '100%', height: '100%', verticalAlign: 'top' }}
              onLoad={imgOnLoad}
            />
          </a>
        ))}
      </Carousel>
    </WingBlank>
  );
};