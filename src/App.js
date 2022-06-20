
import { Tabs } from 'antd';

// views
import Todos from './views/Todos';
import Albums from './views/Albums';
import Photos from './views/Photos';

const { TabPane } = Tabs;

function App() {

  const onChange = (key) => {
    console.log('onChange: ', key);
  };

  return (
    <div className="App">
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Todos" key="1">
          <Todos />
        </TabPane>
        <TabPane tab="Albums" key="2">
          <Albums />
        </TabPane>
        <TabPane tab="Photos" key="3">
          <Photos />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
