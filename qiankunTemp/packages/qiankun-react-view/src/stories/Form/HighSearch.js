import HighSearch from '../../components/HighSearch';
import React from 'react';
import { Button } from 'antd';

export default class Page extends React.Component {
  state = {
    visible: false
  }

  handleClick = () => {
    this.setState({
      visible: true
    })
  }
  
  hide = () => {
    this.setState({
      visible: false
    })
  }

  render () {
    return (
      <>
        <Button onClick={this.handleClick}>高级查询</Button>
        <HighSearch
          visible={this.state.visible}
          hide={this.hide}
          confirm={(data) => console.log(data)}
          handleDel={item => console.log(item)}
          onSelect={(selectedKeys, info) => console.log(selectedKeys, info)}
          save={(data, name, type) => console.log(data, name, type)}
          // data={[
          //   {
          //     key: "equipType",
          //     lk: false,
          //     method: "OR",
          //     operator: "EQUAL",
          //     rk: false,
          //     value: "3123"
          //   },
          //   {
          //     key: 'applyPerson',
          //     value: '张三',
          //     lk: false,
          //     method: "AND",
          //     operator: "EQUAL",
          //     rk: false,
          //   }
          // ]}
          formItems={[
            {
              label: '设备类型',
              key: 'equipType',
              componentType: 'input',
              props: {
                // disabled: true
              },
              options: {
                // rules: [{ required: true }],
              },
            },
            {
              label: '申请人员',
              key: 'applyPerson',
              componentType: 'input',
              props: {
              },
              // options: {
              //   rules: [{ required: true }],
              // },
            },
            {
              label: '设备类别',
              key: 'equipCategory',
              componentType: 'input',
              props: {
                // disabled: true
              },
              options: {
                // rules: [{ required: true }],
              },
            },
          ]}
        />
      </>
    )
  }

}