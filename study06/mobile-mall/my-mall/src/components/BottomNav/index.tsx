import React, { PureComponent } from 'react';
import { history } from 'umi';
import { TabBar } from 'antd-mobile';

const menu = [
    {
        title: '首页',
        link: '/',
        icon: 'shouye'
    },
    {
        title: '分类',
        link: '/type',
        icon: 'icon-'
    },
    {
        title: '购物车',
        link: '/cart',
        icon: '3'
    },
    {
        title: '我的',
        link: '/user',
        icon: 'wode'
    },
];

interface ButtomNavProps {
    pathname: string;
}
class BottomNav extends PureComponent<ButtomNavProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: '/',
        }
    };

    render() {
        const { pathname } = this.props
        return (
            <div>
                BottomNav
                <TabBar tintColor="red">
                    {menu.map(({ title, link, icon }) => (
                        <TabBar.Item icon={<i className={'iconfont icon-' + icon}></i>}
                            selectedIcon={<i className={'red iconfont icon-' + icon}></i>}
                            title={title}
                            key={link}
                            selected={link === pathname}
                            onPress={() => {
                                history.push(link)
                            }}>
                        </TabBar.Item>
                    ))}
                </TabBar>
            </div>
        );
    }
};

export default BottomNav;