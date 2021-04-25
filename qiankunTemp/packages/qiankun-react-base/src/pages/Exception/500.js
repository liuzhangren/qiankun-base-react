import React from 'react';
import {Link} from 'umi';
import Exception from '@/components/Exception';

export default class Exception500 extends React.Component {
  state = {};
  render() {
    return (
      <Exception
        type="500"
        desc="请求有误"
        linkElement={Link}
        backText={
          <Link replace={true} to="/login">返回</Link>
        }
      />
    );
  }
}
