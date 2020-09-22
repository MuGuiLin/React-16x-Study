import React, { useState, useEffect } from 'react';
import { WingBlank, Card, Grid } from "antd-mobile";
import { getRecommend } from '@/services/home';
import { Link } from 'umi';
import css from './index.less'


interface RecommendProps {

};
const Recommend: React.FC<RecommendProps> = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        // 为了获取最新数据，所以每次都直接获取后端数据，不保存在Redux中
        getRecommend().then((res) => {
            console.log(res);
            setList(res.list.data);
        })
    }, []);

    const onde = ({ id, title, img }) => {
        return (
            <Link to={'/product/' + id}>
                <h4 className="oneRow">{title}</h4>
                <img src={img} alt="" />
            </Link>
        );
    };

    return (
        <>
            <WingBlank size="lg" className={css.main}>
                <Card full>
                    <Card.Header title="最新推荐" thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg" extra={<a href="#">More</a>} />
                    <Card.Body>
                        <Grid data={list.slice(0, 6)} columnNum="3" renderItem={data => onde({ ...data })}></Grid>
                    </Card.Body>
                    <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
            </WingBlank>

            <WingBlank size="lg" className={css.main2}>
                <Card full>
                    <Card.Header title="猜你喜欢" thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg" extra={<a href="#">Love</a>} />
                    <Card.Body>
                        <Grid data={list.slice(6)} columnNum="2" renderItem={data => onde({ ...data })}></Grid>
                    </Card.Body>
                    <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
            </WingBlank>
        </>
    );
}

export default Recommend;
