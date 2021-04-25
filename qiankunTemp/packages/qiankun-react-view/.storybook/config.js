import { configure } from '@storybook/react';
import 'antd/dist/antd.less'
import 'ant-design-pro/dist/ant-design-pro.css';
import '../src/components/Form/components/yearPicker.less';
function loadStories() {
  require('../src/stories/index');
}

configure(loadStories, module);
