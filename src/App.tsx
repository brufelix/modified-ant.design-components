import React from 'react'
import { Layout } from 'antd'
import Menu from './components/Menu'
import './App.less'

const { Header, Content, Footer, Sider } = Layout

const App = () => (
  <>
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider trigger={null}>
          <Menu />
        </Sider>
        <Content>
          Content
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </>
)

export default App