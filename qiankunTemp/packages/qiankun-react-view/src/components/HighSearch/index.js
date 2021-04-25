import React from 'react';
import {
  Form,
  Select,
  ConfigProvider,
  Button,
  Row,
  Col,
  Icon,
  Modal,
  Input,
  Popconfirm
} from 'antd';
import Tree from '../Tree'
import zhCN from 'antd/es/locale/zh_CN';
import { getValidateMessage } from '../Form/validateMessage';
import SForm from '../Form/SForm';
import getComponentByType from '../Form/components/FormComponentUitl';
import style from './index.less';

class XForm extends React.Component {
  state = {
    formItems: [],
    lastItem: {},
    exportData: [],
    method: 'AND',
    operator: 'EQUAL',
    rk: true,
    lk: true,
    visible: false,
    last: {
      equipType: undefined,
    }
  }

  componentWillMount () {
    this.refreshForm()
  }

  refreshForm = () => {
    const { formItems, data } = this.props;
    const [firstItem, ...rest] = formItems
      const { method, rk, lk, operator } = this.state;
      firstItem.method = method
      firstItem.rk = rk
      firstItem.lk = lk
      firstItem.operator = operator
      this.setState({
        realFormItems: [firstItem],
        formItems: rest.reduce((r, c) => {
          return [
            ...r,
            {
              ...c,
              rk,
              method,
              lk,
              operator
            }
          ]
        }, [])
      })
  }

  reloadForm = () => {
    const { reData, formItems } = this.props
    if(reData && reData.length > 0) {
      const reDataTemp = reData.reduce((r, c) => {
        return {
          ...r,
          [c.key]: c
        }
      }, {})
      const newRealFormItems = []
      const newFormItems = []
      formItems.forEach(item => {
        if(reDataTemp[item.key]) {
          const obj = {
            ...item,
            ...reDataTemp[item.key]
          }
          newRealFormItems.push(obj)
        }else {
          newFormItems.push(item)
        }
      })
      return { newFormItems, newRealFormItems }
    }
  }

  // componentWillReceiveProps(nextProps) {
    
  // }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   const { juge } = nextState
  //   if(juge) {
  //     return false
  //   }else {
  //     return true
  //   }
  // }

  renderItems = () => {
    const { getFieldDecorator, getFieldsValue } = this.props.form;
    const { reData } = this.props;
    let { realFormItems, formItems } = this.state
    if(reData && reData.length > 0) {
      realFormItems = this.reloadForm().newRealFormItems
      formItems = this.reloadForm().newFormItems
    }
    return realFormItems.reduce((r, c, i) => {
      c.props.onChange = () => {}
      return [
        ...r,
        <ConfigProvider locale={zhCN}>
          <div className={style.itemWrapper}>
            <Row gutter={8}>
              <Col span={2}>
                <Select
                  onChange={(v) => {
                    realFormItems[i].method = v
                    this.setState({
                      method: v,
                      realFormItems,
                      
                    })
                  }}
                  value={c.method}
                >
                  <Select.Option
                    value='AND'
                  >
                    且
                  </Select.Option>
                  <Select.Option
                    value='OR'
                  >
                    或
                  </Select.Option>
                </Select>
              </Col>
              <Col span={2}>
                <Select
                  value={c.lk}
                  onChange={(v) => {
                    realFormItems[i].lk = v
                    this.setState({
                      lk: v,
                      realFormItems,
                      
                    })
                  }}
                >
                  <Select.Option
                    value={true}
                  >
                    (
                  </Select.Option>
                  <Select.Option
                    value={false}
                  >
                    空
                  </Select.Option>
                </Select>
              </Col>
              <Col span={4}>
                <Select
                  style={{
                    marginRight: 8
                  }}
                  // disabled={c.key === 'changeReason' ? true : false}
                  value={c.label}
                  onChange={async value => {
                    // const lastItem = realFormItems.pop()
                    const temp = [...realFormItems]
                    const { lk, rk, method, operator } = this.state
                    const newRealFormItem = realFormItems.filter(item => item.key === c.key)[0]
                    const newRealFormItems = realFormItems.filter(item => item.key !== c.key)

                    const newFormItem = formItems.filter(item => item.key === value)[0]
                    const newFormItems = formItems.filter(item => item.key !== value)
                    temp.splice(i, 1, newFormItem)
                    this.setState({
                      realFormItems: temp,
                      formItems: [
                        ...newFormItems,
                        newRealFormItem
                      ]
                    })
                  }}
                >
                  {
                    formItems.reduce((r, c) => {
                      return [
                        ...r,
                        <Select.Option
                          value={c.key}
                        >
                          {c.label}
                        </Select.Option>
                      ]
                    }, [])
                  }
                </Select>
              </Col>
              <Col span={3}>
                <Select
                  value={c.operator}
                  onChange={(v) => {
                    realFormItems[i].operator = v
                    this.setState({
                      operator: v,
                      realFormItems,
                      
                    })
                  }}
                >
                  <Select.Option
                    value='EQUAL'
                  >
                    等于
                  </Select.Option>
                  <Select.Option
                    value='NOT_EQUAL'
                  >
                    不等于
                  </Select.Option>
                  <Select.Option
                    value='GT'
                  >
                    大于
                  </Select.Option>
                  <Select.Option
                    value='GTT'
                  >
                    大于等于
                  </Select.Option>
                  <Select.Option
                    value='LT'
                  >
                    小于
                  </Select.Option>
                  <Select.Option
                    value='LTE'
                  >
                    小于等于
                  </Select.Option>
                  <Select.Option
                    value='LIKE'
                  >
                    包含
                  </Select.Option>
                  <Select.Option
                    value='NOT_LIKE'
                  >
                    不包含
                  </Select.Option>
                </Select>
              </Col>
              <Col span={8}>
                {getFieldDecorator(c.key, c.options)(getComponentByType(c))}
              </Col>
              <Col span={2}>
                <Select
                  value={c.rk}
                  onChange={(v) => {
                    realFormItems[i].rk = v
                    this.setState({
                      rk: v,
                      realFormItems,
                      
                    })
                  }}
                >
                  <Select.Option
                    value={true}
                  >
                    )
                  </Select.Option>
                  <Select.Option
                    value={false}
                  >
                    空
                  </Select.Option>
                </Select>
              </Col>
            </Row>
            {
              i === 0 || c.key === 'changeReason' ? null : <Icon
                onClick={() => {
                  const item = realFormItems.splice(i, 1)
                  this.setState({
                    realFormItems,
                    formItems: [
                      ...formItems,
                      ...item
                    ]
                  })
                }}
                style={{
                  position: 'absolute',
                  left: '90%',
                  top: '10%',
                  fontSize: 25
                }}
                type="minus-circle"
              />
            }
          </div>

        </ConfigProvider>
      ]
    }, [])

  }

  handleAdd = () => {
    
    const { realFormItems, formItems } = this.state
    const [firstItem, ...rest] = formItems
    const { method, rk, lk, operator } = this.state;
    firstItem.method = method
    firstItem.rk = rk
    firstItem.lk = lk
    firstItem.operator = operator
    this.setState({
      realFormItems: [
        ...realFormItems,
        firstItem,
      ],
      formItems: rest
    })
  }

  reset = () => {
    this.props.form.resetFields()
  }

  handleSearch = () => {
    const { realFormItems } = this.state;
    const values = this.props.form.getFieldsValue()
    const { title, ...rest } = values
    const exportData = Object.keys(rest).reduce((r, c, i) => {
      const { method, rk, lk, operator } = realFormItems[i]
      r.push({method, rk, lk, operator, key: c, value: rest[c]})
      return r
    }, [])
    this.props.confirm(exportData)
  }

  hide = async () => {
    await this.reset()
    await this.refreshForm()
    await this.props.hide()
  }

  saveGlobal = () => {
    this.setState({
      visible: true,
      type: '1'
    })
  }

  save = () => {
    this.setState({
      visible: true,
      type: '0'
    })
    // const { reData } = this.props;
    // const { type } = this.state;
    // if(reData && reData.length > 0) {
    //   const { title, ...rest } = this.props.form.getFieldsValue()
    //   Object.keys(rest).forEach((c, i) => {
    //     reData[i].key = c
    //     reData[i].value = rest[c]
    //   })
    //   this.props.savePut(reData, '0')
    // }else {
    //   this.setState({
    //     visible: true,
    //     type: '0'
    //   })
    // }
  }

  handleSave = () => {
    const { realFormItems, type } = this.state;
    const { reData } = this.props
    this.props.form.validateFields(async(err, values) => {
      if(!err) {
        const { title, ...rest }  = values
        if(reData && reData.length > 0) {
          const temp = [...reData]
          Object.keys(rest).forEach((c, i) => {
            temp[i].key = c
            temp[i].value = rest[c]
          })
          await this.props.savePut(temp, title, type)
        }else {
          const exportData = Object.keys(rest).reduce((r, c, i) => {
            const { method, rk, lk, operator } = realFormItems[i]
            r.push({method, rk, lk, operator, key: c, value: values[c]})
            return r
          }, [])
          await this.props.save(exportData, title, type)
        }
        // await this.props.form.resetFields()
        await this.setState({
          visible: false
        })
        
      }
    })
  }

  renderTitleModal = () => {
    const { getFieldDecorator, getFieldsValue } = this.props.form;
    return (
      <Modal
        visible={this.state.visible}
        onOk={this.handleSave}
        onCancel={() => this.setState({visible: false})}
        title='查询标题'
        okText='确定'
        cancelText='取消'
        destroyOnClose
      >
        <Form key={`${this.props.reData.length}_key`}>
          <Form.Item
            label='查询标题'
            style={{
              display: 'flex'
            }}
          >
            {
              getFieldDecorator('title', {rules: [{ required: true }],})(<Input width='100%' placeholder='请输入查询标题' />)
            }
          </Form.Item>
        </Form>
      </Modal>
    )
  }

  renderFooter = () => {
    return (
      <>
        <Button onClick={this.hide}>取消</Button>
        <Button onClick={this.reset}>重置</Button>
        <Button type='primary' onClick={this.saveGlobal}>保存为全局</Button>
        <Button type='primary' onClick={this.save}>保存</Button>
        <Button type='primary' onClick={this.handleSearch}>查询</Button>
      </>
    )
  }

  render () {
    const { formItems } = this.state;
    const formLayout = {
      labelCol: { span: 12 },
      wrapperCol: { span: 10 },
    }
    return (
      <>
        <Modal
          visible={this.props.visible}
          onOk={this.handleOk}
          width='80%'
          title='高级查询'
          onCancel={this.props.hide}
          footer={this.renderFooter()}
          destroyOnClose
        >
          <Row>
            <Col span={4}>
              <Tree
                // showDel
                handleDel={this.props.handleDel}
                onSelect={(key, info) => {
                  this.props.onSelect(key, info)
                }}
                treeData={this.props.treeData}
              />
            </Col>
            <Col span={20}>
              <ConfigProvider locale={zhCN}>
                <Form {...formLayout}>
                  {
                    this.renderItems()
                  }
                </Form>
                <Row style={{marginTop: 12}}>
                  <Col
                    span={21}
                  >
                    {
                      formItems.length > 0 ? <Button onClick={this.handleAdd} style={{ width: '100%', marginBottom: 24 }}>+ 增加新的表单</Button> : null
                    }
                  </Col>
                </Row>
              </ConfigProvider>
            </Col>
          </Row>
        </Modal>
        {this.renderTitleModal()}
      </>
    )
  }
}

const XFormWrapperPage = Form.create({ validateMessages: getValidateMessage() })(XForm)
export default XFormWrapperPage
