/* eslint-disable */
import React, { Component } from 'react';
import rdom from 'react-dom'
import { Input, Icon, Select } from 'antd';
import styles from './InputChoose.less';

export default class OptionCheckBox extends Component {

  static defaultProps = {
  };

  state = {
    isClear: false
  }

  componentDidMount() {
    const { value } = this.props;
    this.setState({
      value,
    })
  }

  componentDidUpdate() {
    // const { value } = this.props;
    // this.setState({
    //   value,
    // })
  }

  deleteChoose = (item, index) => {
    let { value: rows, disabled } = this.props;
    if (!disabled) {
      rows.label.splice(index, 1)
      rows.value.splice(index, 1)
      rows.orgNo && rows.orgNo.splice(index, 1)
      if (!rows.label.length) {
        rows.label = ""
      }
      setTimeout(() => {
        if (rows.label && rows.label.length > 0 && rows.value && rows.value.length > 0) {
          this.triggerChange(rows);
        } else {
          this.triggerChange();
        }
      })
    }
  }

  clearAll = (e) => {
    this.triggerChange();
  }

  triggerChange = changedValue => {
    const { onChange, value, clearAll } = this.props;
    if (clearAll) {
      clearAll()
    }
    if (onChange) {
      onChange(changedValue);
    }
  };

  handleScroll = (e) => {
    // const ele = rdom.findDOMNode(this);
    // if (e.nativeEvent.deltaY <= 0) {
    //   /* scrolling up */
    //   if(ele.scrollTop <= 0) {
    //     e.preventDefault();
    //     // e.nativeEvent.scrollTo(0, ele.scrollTop)
    //     // console.log(ele.scrollLeft)
    //     // console.log('scrolling up')
    //     ele.scrollLeft = ele.scrollLeft - 50
    //   }
    // } 
    // else
    // {
    //   /* scrolling down */
    //   if(ele.scrollTop + ele.clientHeight >= ele.scrollHeight) {
    //     e.preventDefault();
    //     // e.nativeEvent.scrollTo(0, ele.scrollTop)
    //     // console.log('scrolling down')
    //     ele.scrollLeft = ele.scrollLeft + 50
    //   }
    // }
  }
  renderContent = () => {
    const { onClick = function () { }, value, multiple, disabled, ...rest } = this.props;
    if (multiple) {
      if (value && value.label.length) {
        return (
          <div
            className={styles.contentBox}
            onWheel={(e) => { this.handleScroll(e) }}
          >
            {value.label.length && value.label.map((item, index) => {
              return (
                <div className={styles.sbLi} onClick={(e) => { e.stopPropagation(); this.deleteChoose(item, index) }}>
                  <span>{item}</span>
                  {disabled ? "" : <span className={styles.close}><Icon type="close" /></span>}
                </div>
              )
            })}
          </div>
        )
      }
      // }
    } else {
      return <div className="content">{value}</div>
    }
  }
  render() {
    const { onClick = function () { }, value, multiple, allowClear, disabled, ...rest } = this.props;


    return (
      <div className={`${disabled ? 'InputChooseDisable' : ''} InputChooseWrap`} onClick={() => {
        if (disabled) {
          return;
        }
        onClick(value)
      }}>
        <div className={`${styles.sbwrap}`}>
          <div className={`${value ? 'InputChooseValue' : ''} InputChoose`}>
            {this.renderContent()}
            {!allowClear &&
              <div className="InputChoose_close" onClick={(e) => { e.stopPropagation(); this.clearAll(e) }}><Icon type="close-circle" /></div>
            }
          </div>
          <div className="ant-input-group-addon" style={{
            position: 'relative',
            display: 'flex',
            lineHeight: "inherit",
            textAlign: "center",
            padding: "0 24px 0 9px",
            height: 'inherit'
          }}>
            <Icon type="search"
              style={{
                position: 'absolute',
                top: '50%',
                transform: 'translate(0, -50%)',
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}


