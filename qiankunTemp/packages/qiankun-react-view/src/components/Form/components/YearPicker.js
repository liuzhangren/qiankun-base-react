import React, { Component } from 'react';
import { DatePicker } from 'antd';
import styles from './yearPicker.less';
class YearPicker extends Component {
  state = {
    isOpen: false,
  }

  render() {
    return (     
      <DatePicker
        mode="year"
        placeholder="请选择年份"
        dropdownClassName={styles.year}
        style={{ width: '100%' }}
        onPanelChange={(e) => {
          this.props.onChange(e)
          this.setState({
            value: e,
            isOpen: false
          })
        }}
        onOpenChange={(e) => {
          this.setState({
            isOpen: e
          })
        }}
        open={this.state.isOpen}
        format="YYYY"
        value={this.state.value}
        // 清除重置
        onChange={(value) => this.setState({ value: null })}
      />
    )
  }
}

export default YearPicker;
