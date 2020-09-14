import React from 'react'
import { Layout } from 'antd'
import Menu from './components/Menu'
import Content from './components/Content'
import Header from './components/Header/'
import './App.less'

const styleFooter: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  paddingLeft: 20,
  borderTop: 'solid 1px #52DF9A',
  marginTop: 10
}

function App(): JSX.Element {

  const { Footer } = Layout

  return (
    <>
      <Layout style={{ height: "auto" }}>
        <Header />
        <Layout style={{ display: 'flex', flexDirection: 'row' }} >
          <Menu styleMenu={{ width: '10%' }}/>
          <Content />
        </Layout>
        <Footer style={styleFooter} >
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
}

export default App