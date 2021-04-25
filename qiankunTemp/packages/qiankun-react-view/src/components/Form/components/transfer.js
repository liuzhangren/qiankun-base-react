import React, { Component } from 'react';
import { Transfer, Switch } from 'antd';

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    // disabled: i % 3 < 1,
  });
}

const oriTargetKeys = mockData.filter(item => item.key).map(item => item.key);

export default class OptionCheckBox extends Component {
  static defaultProps = {
    value: 0
  };
  state = {
    targetKeys: [],
    selectedKeys: [],
    disabled: false,
  }
  componentDidMount() {

  }
  componentDidUpdate() { }

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys }, () => {
      this.props.handleChange(nextTargetKeys)
    });
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });
  };

  // handleScroll = (direction, e) => {
  //   console.log('direction:', direction);
  //   console.log('target:', e.target);
  // };

  // handleDisable = disabled => {
  //   this.setState({ disabled });
  // };

  render() {
    const { targetKeys, selectedKeys, disabled } = this.state;
    const { dataSource } = this.props
    console.log('thisaaa', this.props)
    return (
      <div>
        <Transfer
          {...this.props}
          dataSource={dataSource}
          titles={['未选择', '已选择']}
          // targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          // onScroll={this.handleScroll}
          render={item => item.title}
        />
        {/* <Switch
          unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={disabled}
          onChange={this.handleDisable}
          style={{ marginTop: 16 }}
        /> */}
      </div>
    );
  }
}

