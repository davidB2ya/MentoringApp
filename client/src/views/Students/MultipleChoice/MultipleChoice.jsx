import React from 'react'
import Styles from'./MultipleChoice.module.css'
import Card from '../../../components/Card/Card';

const MultipleChoice = () => {
    return ( 
       <div>

           <div className={Styles.heder}>
               <p>Completa la siguiente información para avanzar en la plataforma.</p>
           </div>
           
            <Card container={

                <>
                    <h3>Intereses generales</h3>
                    <p>Elige máximo tres intereses</p>
                </>}
                bottom={ <button>Finalizar</button>}
            />

           
        </div>
       
     );
}
 
export default MultipleChoice;