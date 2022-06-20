import React from 'react';

import { Table, Tag } from 'antd';

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
  {
    title: 'Status',
    dataIndex: 'completed',
    key: 'completed',
    render:(_, { completed }) => (
      <>
        <Tag color={completed ? "geekblue" : "volcano"} key={completed}>
          {completed.toString()}
        </Tag>
      </>
    )
  },
];

function Todos() {
  const { dataSource } = useDataTable('https://jsonplaceholder.typicode.com/todos');

  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default Todos