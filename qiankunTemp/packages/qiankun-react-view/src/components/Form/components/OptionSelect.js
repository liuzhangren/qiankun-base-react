/* eslint-disable */
import React, { Component } from 'react';
import { Select } from 'antd';


const { Option } = Select;

export default class OptionSelect extends Component {
  static defaultProps = {
    options: []
  };

  focus () {
    this.dom.focus()
  }

  render () {
    const { options, value, mode, keys = 'dictCode', label = 'dictName', placeholder, inverseDict, ...restProps } = this.props;
    return (
      <Select
        {...restProps}
        style={{ minWidth: 60 }}
        mode={mode || 'single'}
        value={value}
        ref={(dom) => {
          this.dom = dom
        }}

        onChange={val => {
          const { onChange, onBlur } = this.props;
          if (onChange) {
            onChange(val);
          }
        }}
        onSearch={val => {
          const { onSearch, onBlur } = this.props;
          if (onSearch) {
            onSearch(val);
          }
        }}

        placeholder={placeholder ? placeholder : '请选择'}
      >

        {options.map(opt => {
          if (opt) {
            if(inverseDict) {
              // console.log('view -->>', opt, keys, label)
              return (
                <Option
                  key={opt[label]}
                  value={opt[label]}
                  disabled={opt.isEffective === '0'}
                >
                  {opt.isEffective === '0' ? `${opt[keys]}(无效)` : opt[keys]}
                </Option>
              )
            }else {
              return (
                <Option
                  key={opt[keys]}
                  value={opt[keys]}
                  disabled={opt.isEffective === '0'}
                >
                  {opt.isEffective === '0' ? `${opt[label]}(无效)` : opt[label]}
                </Option>
              )
            }
            
          }
        })}

      </Select>
    );
  }

}
