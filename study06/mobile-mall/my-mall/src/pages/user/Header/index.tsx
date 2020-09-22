import { Card } from 'antd-mobile';
import React, { useEffect } from 'react';
import css from './index.less';

interface UserHeaderProps {
    name: string;
    icon: string;
}
const UserHeader: React.FC<UserHeaderProps> = ({ name, icon }) => {

    useEffect(() => {
        console.log(666, css.header);

    }, []);

    return (
        <header className={css.main}>
            <Card className={css.header}>
                <Card.Header title={name}  thumb={icon} extra={<span>this is extra</span>} />
                <Card.Body>
                    <div>This is content of `Card`</div>
                </Card.Body>
                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
            </Card>
        </header>
    );
}

export default UserHeader;
