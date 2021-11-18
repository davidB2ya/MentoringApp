import {useState} from 'react'
import Styles from'./MultipleChoice.module.css'
import Card from '../../../components/Card/Card';
import Select from 'react-select';

const MultipleChoice = () => {

    const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

    
    return ( 
       <div>

           <div className={Styles.heder}>
               <p>Completa la siguiente información para avanzar en la plataforma.</p>
           </div>
           
            <Card container={

                <>
                    <h3>Intereses generales</h3>
                    <p>Elige máximo tres intereses</p>
                    <Select
       
       
        
      />
    
  
                </>}
                bottom={ <button>Finalizar</button>}
            />

           
        </div>
       
     );
} 
 
export default MultipleChoice;