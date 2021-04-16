import React from 'react';

import { Table } from 'antd';

const columns = [
    {
        title: 'Date',
        dataIndex: 'date',
    },
    {
        title: 'Electricity Cost',
        dataIndex: 'cost',
        sorter: {
            compare: (a,b) => a.cost - b.cost,
            multiple: 3,
        },
        render:(val)=>val.toLocaleString()
    },
    {
        title: 'Electricity Usage',
        dataIndex: 'usage',
        sorter: {
            compare: (a,b) => a.usage - b.usage,
            multiple: 2,
        },
        render:(val)=>val.toLocaleString()
    },
    {
        title: 'Natural Gas Cost',
        dataIndex: 'n_cost',
        sorter: {
            compare: (a,b) => a.n_cost - b.n_cost,
            multiple: 1,
        },
        render:(val)=>val.toLocaleString()
    },
    {
        title: 'Natural Gas Usage',
        dataIndex: 'n_usage',
        sorter: {
            compare: (a,b) => a.n_usage - b.n_usage,
            multiple: 1,
        },
        render:(val)=>val.toLocaleString()
    },
    {
        title: 'Water Cost',
        dataIndex: 'w_cost',
        sorter: {
            compare: (a,b) => a.w_cost - b.w_cost,
            multiple: 1,
        },
        render:(val)=>val.toLocaleString()
    },
];

const data = [
    {
        key: '1',
        date: 'Location A',
        cost: 123456,
        usage: 213566,
        n_cost: 212332,
        n_usage: 2133,
        w_cost: 2133,
    },
    {
        key: '2',
        date: 'Location A',
        cost: 123456,
        usage: 213566,
        n_cost: 212332,
        n_usage: 2133,
        w_cost: 2133,
    },
    {
        key: '3',
        date: 'Location A',
        cost: 123456,
        usage: 213566,
        n_cost: 212332,
        n_usage: 2133,
        w_cost: 2133,
    },
    {
        key: '4',
        date: 'Location A',
        cost: 123456,
        usage: 213566,
        n_cost: 212332,
        n_usage: 2133,
        w_cost: 2133,
    },
];
export default function TableComponent(params) {
    return <Table pagination={false} columns={columns} dataSource={data} />
};
