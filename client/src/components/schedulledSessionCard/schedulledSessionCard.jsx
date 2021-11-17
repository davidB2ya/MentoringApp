import React from 'react'
import styles from '../schedulledSessionCard/schedulledSessionCard.module.css'


const schedulledSessionCard = () => {
    return (
        <div>
            <div className={styles.card}>
                <h3 className={styles.title}>
                Sesión 1
                </h3>
                <h4 className={styles.subtitles} >
                    El encuentro con tu mentor será el día
                </h4>
                <p>12-Noviembre / 2021</p>
                <h4 className={styles.subtitles}>Hora de inicio</h4>
                <p>17:30</p>
                <h4 className={styles.subtitles}>Link de la sesión</h4>
                <a href="https://us02web.zoom.us/j/89970425043?pwd=UUxGdERFa3BSbHU5OG5qYVdWeEtOQT09">https://us02web.zoom.us/j/89970425043?pwd=UUxGdERFa3BSbHU5OG5qYVdWeEtOQT09</a>
                <p>¡ Recuerda  debes diligenciar el formulario de la sesión antes de asistir a esta !</p>
                <button>Ir al formulario de la sesión</button> 
            </div>
        </div>
    )
}

export default schedulledSessionCard


