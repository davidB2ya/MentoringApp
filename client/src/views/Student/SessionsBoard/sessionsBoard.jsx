import React from 'react'
import SchedulledSession from '../../../components/schedulledSessionCard/schedulledSessionCard'
import Styles from './sessionsBoard.module.css'

const sessionsBoard = ({}) => {
    return (
        <div className={Styles.board}>
            <SchedulledSession></SchedulledSession>
        </div>
    )
}

export default sessionsBoard
