/* eslint-disable */
import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col, Progress } from 'antd';

export default class OptionCheckBox extends Component {
  static defaultProps = {
    value: 0
  };
  state = {
    inputValue: 0
  }
  componentDidMount() {

  }
  componentDidUpdate() { }

  // formatter = (value) => {
  //   const { tipFormatter } = this.props
  //   console.log('value', value)
  //   return tipFormatter ? `${value}${tipFormatter}` : value;
  // }

  render() {
    const { tipFormatter } = this.props
    return (
      <Row>
        <Col span={12}>
          <Progress percent={this.props.value} showInfo={false} />
          {/* <Slider
            {...this.props}
            tipFormatter={this.formatter}
          /> */}
        </Col>
        <Col span={4}>
          <InputNumber
            parser={(value) => /^\d+$/.test(value) ? value : 0}
            {...this.props}
          />
        </Col>
        <Col span={1}>{tipFormatter}</Col>
      </Row>
    );
  }
}

