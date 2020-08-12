import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Home, Delete, AccountBalanceRounded, SchoolRounded, ImportContactsRounded, GTranslateRounded, BrightnessHighRounded, AccessAlarm, ThreeDRotation } from '@material-ui/icons';

class index extends Component {
    render() {
        return (
            <section className="page-box">
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" disabled>Disabled</Button>
                <Button variant="contained" color="#dedede" href="#contained-buttons">Link</Button>
                <Button variant="contained" color="primary" startIcon={<Home />}>首页</Button>

                <AccessAlarm />
                <ThreeDRotation />
                <Home />
                
                <Icon >add_circle</Icon>
                <Icon component={AccountBalanceRounded} color="primary">add_circle</Icon>
                <Icon component={SchoolRounded} color="secondary">add_circle</Icon>
                <Icon component={ImportContactsRounded} style={{ color: 'green' }}>add_circle</Icon>
                <Icon component={GTranslateRounded} fontSize="small">add_circle</Icon>
                <Icon component={BrightnessHighRounded} style={{ fontSize: 30 }}>add_circle</Icon>
            </section>
        );
    }
}

export default index;
