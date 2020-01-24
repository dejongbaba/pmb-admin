import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const useTransactionMetrics = () => {

    const [loading, setLoading] = useState(true);
    const [metrics, setMetrics] = useState([]);
    useEffect(() => {
        axios.get('http://5.101.143.78:6689/api/v1/transactions/metrics').then(res => {
            setLoading(false);
            setMetrics(res.data.data);
        }).catch(err => {
            console.log('error');
            setLoading(false);
        });
    }, []);
    return [loading, metrics]
}