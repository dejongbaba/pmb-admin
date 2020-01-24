import React from 'react';
import {useTransactionMetrics} from "../effects/effects";

const withData = (component) => (props) => {
    const RenderComponent = component;
    const [loading, metrics] = useTransactionMetrics();
    return <RenderComponent loading={loading} {...metrics} {...props} />;
};

export default withData;