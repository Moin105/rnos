// import React from 'react'
// import './filtermodal.css'
// function Filtermodal() {
//     return (
//         <div>
//             <div className='filter-modal'>
//                      </div>
//         </div>

//     )
// }

// export default Filtermodal
import { Tabs } from 'antd';
import Button from '../Components/Buttons/Button';
import Heading from '../Components/Headings/Heading';
import Input from '../Components/Input/Input';
import './filtermodal.css'
const { TabPane } = Tabs;

ReactDOM.render(
  <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Item" key="1">
             <Heading/>
             <Input/>
             <Input/>
             <Input/>
             <Input/>
             <Button/>
      </TabPane>
      <TabPane tab="Experience" key="2">
              <Heading/>
              <Input/>
             <Input/>
             <Input/>
             <Input/>
             <Button/>
      </TabPane>
   
    </Tabs>
  </div>,
  mountNode,
);