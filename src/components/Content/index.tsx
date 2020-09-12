import React from 'react'
import { Layout, Input, Menu, Button } from 'antd'
import { MdFlight, MdCameraAlt, MdLocationOn, MdAdd } from 'react-icons/md'
import { FaBed, FaHotel } from 'react-icons/fa'
import Card from '../Card'

const styleH1: React.CSSProperties = {
    fontSize: '54px',
    fontWeight: 400,
    color: 'black'
}

const styleItem: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: 80,
    width: '100%',
    fontSize: '13px',
    fontWeight: "bold",
    marginTop: 20
}

function Content(): JSX.Element {
    const { Content } = Layout
    const { Search } = Input
    return (
        <>
            <Content
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                <h1 style={styleH1} >Viagens</h1>
                <Search size="large" style={{
                    width: 400,
                    height: 70,
                    top: 5,
                    borderRadius: 20,
                    boxShadow: '0 1px 10px #9E9E9E'
                }}
                    placeholder="Pesquise por voos, hotéis, e muito mais" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Menu defaultSelectedKeys={['1']} mode="inline"
                        style={{ display: 'flex', flexDirection: 'row', width: 'auto' }}>
                        <Menu.Item key="2" style={styleItem} icon={<MdCameraAlt size="20px"
                            style={{ marginRight: 5, color: "#00B894" }} />}>
                            O que fazer
                        </Menu.Item>
                        <Menu.Item key="3" style={styleItem} icon={<MdFlight size="20px"
                            style={{ marginRight: 5, color: "#00B894" }} />}>
                            Voos
                        </Menu.Item>
                        <Menu.Item key="4" style={styleItem} icon={<FaBed size="20px"
                            style={{ marginRight: 5, color: "#00B894" }} />}>
                            Hotéis
                        </Menu.Item>
                        <Menu.Item key="5" style={styleItem} icon={<FaHotel size="20px"
                            style={{ marginRight: 5, color: "#00B894" }} />}>
                            Aluguéis
                        </Menu.Item>
                    </Menu>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: 'auto',
                    width: '90%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: 'solid 1px #00B894',
                    borderRadius: '5px',
                    padding: 10
                }} >
                    <div style={{
                        display: 'flex', flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <MdLocationOn size={40} style={{ color: '#00B894', marginRight: 10 }} />
                        <div>
                            <span style={{ fontSize: 25 }}>Qual é o próximo destino?</span><br />
                            <span style={{ fontSize: 15 }}>Comece a planejar sua próxima viagem com uma ajudinha do Google</span>
                        </div>
                    </div>
                    <Button style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        fontSize: 15,
                        margin: 10
                    }} type="primary" icon={<MdAdd size={30} style={{ marginRight: 10 }} />}  >
                        Criar uma viagem?
                    </Button>
                </div>
                <div style={{
                    width: '90%', marginTop: 20,
                    textAlign: 'start', fontSize: 28
                }}>
                    Possíveis viagens
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '92%',
                    height: 'auto'
                }} >
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div style={{
                    width: '90%', marginTop: 20,
                    textAlign: 'start', fontSize: 28
                }}>
                    Destinos mais visitados
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '92%',
                    height: 'auto'
                }} >
                    <Card />
                    <Card />
                    <Card />
                </div>
            </Content>
        </>
    )
}

export default Content