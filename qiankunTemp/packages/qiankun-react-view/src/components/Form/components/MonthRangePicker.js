import React from 'react';
import moment from 'moment'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import { DatePicker } from 'antd';
const { RangePicker} = DatePicker;
class ControlledRangePicker extends React.Component {
  state = {
    mode: ['month', 'month'],
  };

  handlePanelChange = (value, mode) => {
    this.setState({
      mode: [mode[0] === 'date' ? 'month' : mode[0], mode[1] === 'date' ? 'month' : mode[1]],
    });
    this.props.onChange(value)
  };

  handleChange = value => {
    this.props.onChange(value)
  };

  init = initialValue => {
    this.handleChange(initialValue)
    return initialValue
  }

  render() {
    const { time, initialValue } = this.props;
    const { mode } = this.state;
    return (
      <RangePicker
        placeholder={['开始月份', '结束月份']}
        defaultPickerValue={[
          moment(new Date(), 'YYYY-MM').set('month', 0),
          moment(new Date(), 'YYYY-MM').set('month', 11),
        ]}
        format="YYYY-MM"
        value={
          time[0] === 'init' ?
          this.init(initialValue) :
          time
        }
        mode={mode}
        onChange={this.handleChange}
        onPanelChange={this.handlePanelChange}
      />
    );
  }
}
export default ControlledRangePicker