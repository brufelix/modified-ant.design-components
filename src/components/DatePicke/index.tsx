import React, { FC } from 'react'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'
import './DatePicke.css'

const Calendar: FC = () =>
    <>
        <DatePicker placeholder="Selecionar Data..." />
    </>

export default Calendar