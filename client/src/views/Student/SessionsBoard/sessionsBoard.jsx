import React from 'react'
import SchedulledSession from '../../../components/schedulledSessionCard/schedulledSessionCard'
import styles from '../SessionsBoard/sessionsBoard.module.css'

const sessionsBoard = () => {
    return (
        <div className={styles.board}>
            <SchedulledSession></SchedulledSession>
        </div>
    )
}

export default sessionsBoard
