import React from 'react'

function useDataTable(endPoint, page = 1, limit = 20) {
  const [dataSource, setDataSource] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${endPoint}?_page=${page}&_limit=${limit}`);
      const data = await res.json();
      const newData = data.map(item => ({
        key: item.id,
        ...item
      }))
      setDataSource(newData);
    }
    fetchData();
  }, [endPoint, limit, page])

  return {
    dataSource
  }
}

export default useDataTable