import React, { useState } from 'react'
import { Layout, Input } from 'antd'
import CreateTrip from '../CreateTrip'
import Menu from '../Menu'
import Card from '../Card'

const styleTitleMain: React.CSSProperties = {
    fontSize: '54px',
    fontWeight: 400,
    color: 'black'
}

const styleSubTitle: React.CSSProperties = {
    width: '90%', marginTop: 20,
    textAlign: 'start', fontSize: 28
}

const styleContent: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
}

const styleSearch: React.CSSProperties = {
    width: 400,
    top: 5,
    borderRadius: 5,
    boxShadow: '0 2px 3px #9E9E9E'
}

const styleContainerCard: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '92%',
    height: 'auto'
}

const styleContainerItemMenu: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
    marginTop: 10,
    border: 'none'
}

function Content(): JSX.Element {
    const [bool, setBool] = useState(false)
    const { Content } = Layout
    const { Search } = Input

    function handleClickSearch(): void {
        setBool(true)
        setTimeout(() => {
            setBool(false)
        }, 3000)
    }

    return (
        <>
            <Content style={styleContent}>
                <h1 style={styleTitleMain} >Viagens</h1>
                <Search style={styleSearch} size="large"
                    enterButton loading={bool}
                    onSearch={() => handleClickSearch()}
                    placeholder="Pesquise por voos, hotéis, e muito mais"
                />
                <Menu styleMenu={styleContainerItemMenu} />
                <CreateTrip />
                <div style={styleSubTitle}>
                    Possíveis viagens
                </div>
                <div style={styleContainerCard} >
                    <Card name="Rio De Janeiro" />
                    <Card name="Salvador" />
                    <Card name="Fortaleza" />
                </div>
                <div style={styleSubTitle}>
                    Destinos mais visitados
                </div>
                <div style={styleContainerCard} >
                    <Card name="Quixadá" />
                    <Card name="São Paulo" />
                    <Card name="Recife" />
                </div>
            </Content>
        </>
    )
}

export default Content