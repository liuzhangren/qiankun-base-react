import React from 'react';
import {
  LinkQueryForm,
} from 'qiankun-react-view';
import {
  Button,
  message,
  Divider,
  Icon,
} from 'antd';
import { connect } from 'dva';
import LinkTree from '@/components/Alink/Tree'
import SingleTableWrap from '@/components/Alink/SingleTable/SingleTableWrap'
import MenuForm from '@/components/Resource/MenuForm';
import SingleTable from '@/components/Alink/SingleTable'
import { RowDelete, RowsDelete, AddRow, TableModal, EditRow } from '@/components/Alink/Table/Table'
import LayoutTreeTable, { LayoutTree, LayoutTable } from '@/components/Alink/LayoutTreeTable'


@connect(({ device, dict, loading }) => ({
  device,
  loading,
  dict,
}))

class EquipeBus extends React.Component {
  state = {
    nodeData: { dictName: '' },
    selectedKey: [],
    selected: false,
    type: 'ADD',
  }

  componentDidMount() {

  }

  async treeSelect(selectedKeys, info) {
    if (selectedKeys.length > 0) {
      if (selectedKeys[0] === 'root') {
        this.setState({
          selected: false,
        })
        this.tb.clearAllData()
      } else {
        this.setState({
          selected: true,
          selectedKey: selectedKeys,
          nodeData: info.node.props.dataRef,
        }, () => {
          this.tb.refresh({ pid: selectedKeys[0], limit: 9999, page: 1 }, '', true)
        })
      }
    } else {
      this.setState({
        selected: false,
        selectedKey: [],
      })
    }
  }

  render() {
    const { selected, selectedKey, nodeData } = this.state
    const { dispatch } = this.props;
    // const formItems = this.getFormItems();
    return (
      <LayoutTreeTable>
        <LayoutTree>
          <LinkTree
            ref={ref => { this.LinkTree = ref }}
            select={(selectedKeys, info) => this.treeSelect(selectedKeys, info)}
            showLine
            link="/get/v1/resource-tree"
            childrenProps="children"
            nameProps="title"
            keyProps="key"
            beforeSetData={data => {
              const replaceKey = value => value.reduce((r, c) => {
                const { list, resourceName, id } = c
                c.children = list
                c.title = resourceName
                c.key = id
                if (c.list.length > 0) {
                  replaceKey(c.list)
                }
                return [
                  ...r,
                  c,
                ]
              }, [])
              return replaceKey(data)
            }}
          />
        </LayoutTree>
        <LayoutTable>
          <SingleTableWrap>
            <LinkQueryForm
              formItems={[
                {
                  key: 'resourceName',
                  label: '????????????',
                  componentType: 'input',
                },
              ]}
              verifySuccess={value => {
                if (selected) {
                  this.tb.refresh({ ...value, pid: selectedKey[0] }, '', true)
                }
              }}
            />
            <SingleTable
              link="/get/v1/presources"
              rowDelLink="/delete/v1/presource"
              rowAddLink="/post/v1/presource"
              rowEditLink="/put/v1/presource"
              rowsDelLink="/delete/v1/presources"
              showPagination={false}
              fontSort
              sortLink="/v1/resource-sort"
              ref={tb => { this.tb = tb }}
              headerButton={[
                <AddRow
                  modal={this.menuModal}
                  beforeShow={() => {
                    if (!selected) {
                      message.warn('????????????????????????????????????!')
                      return false
                    }
                    return true
                  }}
                >
                  ??????
                </AddRow>,
              ]}
              batchButton={[
                <RowsDelete
                  table={this.tb}
                  authrizetype="delete"
                  onCallback={() => { console.log('????????????????????????') }}>????????????</RowsDelete>,
              ]}

              columns={[
                {
                  dataIndex: 'resourceName',
                  title: '??????',
                  width: 150,
                },
                {
                  dataIndex: 'resourceType',
                  title: '??????',
                  width: 100,
                  render: type => {
                    let result = '';
                    if (type === '0') {
                      result = '??????'
                    } else if (type === '1') {
                      result = '??????'
                    } else {
                      result = '??????'
                    }
                    return result;
                  },
                },
                {
                  dataIndex: 'icon',
                  title: '??????',
                  width: 100,
                  render: data => <Icon type={data} />,
                },
                {
                  dataIndex: 'url',
                  title: '??????',
                },
                {
                  dataIndex: 'operation',
                  title: '??????',

                  fixed: 'right',
                  width: 80,
                  render: (text, record) => (
                    <div>
                      <EditRow record={record} type="UPDATE" authrizetype="edit" modal={this.menuModal}>??????</EditRow>
                      <Divider type="vertical" />
                      <RowDelete table={this.tb} record={record} authrizetype="delete" onCallback={() => { console.log('????????????????????????') }}>??????</RowDelete>
                    </div>
                  ),
                },
              ]}
            />

            <TableModal
              ref={menuModal => { this.menuModal = menuModal; }}
              width={700}
              title="????????????????????????"
              table={this.tb}
              okText="??????"
              bodyStyle={{ padding: 24 }}
              onOk={(type, record) => {
                let data = '';
                const { selectedKey } = this.state;
                this.form.validateFields((err, values) => {
                  if (!err) {
                    if (type === 'UPDATE') {
                      data = { ...record, ...values, pid: selectedKey[0] }
                    } else {
                      data = { ...record, ...values, pid: selectedKey[0] }
                    }
                  }
                });
                return data;
              }}
              onShow={(record, type) => {
                setTimeout(() => {
                  this.form.setFieldsValue({
                    ...record,
                    pcode: nodeData.dictName || '',
                  });
                }, 300);
                this.setState({ type })
              }}
            >
              {/* <SForm
                formItems={formItems}
                ref={form => { this.form = form }}
              /> */}
              <MenuForm
                onFormLoad={form => {
                  this.form = form
                }}
                type={this.state.type}
              />
            </TableModal>
          </SingleTableWrap>
        </LayoutTable>
      </LayoutTreeTable>
    )
  }
}

export default EquipeBus
