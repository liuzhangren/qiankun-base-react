import React from 'react';

import { connect } from 'dva';
import {
  Collapse,
} from 'qiankun-react-view';
import Table from '@/components/Alink/SingleTable'
import styles from './index.less'


class MainSubTable extends React.Component {
  render() {
    const { mainTable, subTable } = this.props;
    return (
      <div className={styles.MainSubTable}>
        {this.props.children}
      </div>
    )
  }
}


export default MainSubTable
