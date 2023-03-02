import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BorderTopOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useContext, useState } from 'react';
import ListItem from './List/ListItem'
import { NoteContext } from '../Contex';


const { Header, Sider, Content } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { noteText } = useContext(NoteContext);


  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <BorderTopOutlined />,
              label: noteText,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout" style={{ backgroundColor: "#ffa940" }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <ListItem />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;