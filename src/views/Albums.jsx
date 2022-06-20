import React from 'react';

import { Table } from 'antd';

// hooks
import useDataTable from '../hooks/useDataTable';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
];

function Albums() {
  const { dataSource } = useDataTable('https://jsonplaceholder.typicode.com/albums');

  return (
    <Table dataSource={dataSource} columns={columns} pagination={false} />
  )
}

export default Albums