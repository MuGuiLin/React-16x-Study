import React, { PureComponent } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

class Banner extends PureComponent {
  state = {
    data: [{}, {}, {}],
    imgHeight: 260,
  };

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
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
        ],
      });
    }, 100);
  };

  render() {
    return (
      <Carousel autoplay={true} infinite beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)} afterChange={index => console.log('slide to', index)}>
        {this.state.data.map((o, index) => (
          <a key={index} href="http://www.alipay.com" style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
            <img
              src={o.src}
              alt={o.alt}
              style={{ width: '100%', height: '180px', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>

    );
  }
};

export default Banner;

