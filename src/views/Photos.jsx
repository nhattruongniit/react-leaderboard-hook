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
    title: 'Avatar',
    dataIndex: 'thumbnailUrl',
    key: 'thumbnailUrl',
    render: (_, {thumbnailUrl }) => (
      <>
        <img src={thumbnailUrl} alt="" width={50} />
      </>
    )
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
];

function Photos() {
  const { dataSource } = useDataTable('https://jsonplaceholder.typicode.com/photos');

  return (
    <Table dataSource={dataSource} columns={columns} pagination={false} />
  )
}

export default Photos