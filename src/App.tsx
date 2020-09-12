import React from 'react'
import { Layout } from 'antd'
import Menu from './components/Menu'
import Content from './components/Content'
import './App.less'

const { Header, Footer } = Layout

const App = () => (
  <>
    <Layout style={{ height: "auto" }}>
      <Header style={{
        fontSize: "2em", height: 64, backgroundColor: "#52DF9A",
        borderBottom: 'solid 4px #00B894'
      }}>Governo estado do Ceará</Header>
      <Layout style={{ display: 'flex', flexDirection: 'row' }} >
        <Menu />
        <Content />
      </Layout>
      <Footer style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingLeft: 20
      }} >
        <a href="/">Enviar Feedback</a>
        <a href="/">Participar de estudos com usuário</a>
        <a href="/">Privacidade</a>
        <a href="/">Termos</a>
        <a href="/">Central de Ajuda</a>
        <a href="/">Sobre a Google</a>
      </Footer>
    </Layout>
  </>
)

export default App