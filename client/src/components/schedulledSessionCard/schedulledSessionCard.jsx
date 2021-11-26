import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import styles from '../schedulledSessionCard/schedulledSessionCard.module.css'



const schedulledSessionCard = ({numSession, startDate, endDate, id }) => {
    return (
            <>
                <div className={styles.whitebox}>
                        <h3 className={styles.title}>
                        {`Sesión ${numSession} ha sido habilitada`} 
                        </h3>
                        <h4 className={styles.subtitles} >
                            Rango de fechas para agendar tu sesión de mentoria
                        </h4>
                        <h4 className={styles.subtitles}>Fecha inicial</h4>
                        <p className={styles.info}>{startDate}</p>
                        <h4 className={styles.subtitles}>Fecha final</h4>
                        <p className={styles.info}>{endDate}</p>
                    <Link to={`/calendar/${id}`} className={styles.btn}>Agendar sesión</Link> 
                    <p className={styles.note}>*Al dar click en el botón podrás escoger la fecha de tu sesión de mentoria</p>
                    {/* <div className={styles.green}>
                  </div>  */}
                </div>
                
            </>
    )
}

export default schedulledSessionCard


