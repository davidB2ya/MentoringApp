import {useEffect, useState} from 'react'
import Styles from'./MultipleChoice.module.css'
import Card from '../../../components/Card/Card';
import Select from'react-select'
import axios from 'axios';



const MultipleChoice = () => {
    const[value,setValue]=useState(null)
    const onDropdownCange= (value)=>{
      setValue(value)
    }
    const[data, setData]=useState([]);
    const save=[]
  // const [dataselec, setDataselect]=useState([]);
    /*const petitionGet=async()=>{
        await axios.get("http://localhost:3001/api/profile-edit")
         .then(response=>{
             console.log(response.data)
           
         })   
         
       }*/

       
       useEffect(() => {
        axios({
       url: "http://localhost:3001/api/profile-edit",
        })
       .then((response) => {
         setData(response.data);
        /* console.log(response.data);   */
       })
       .catch((error) => {
         console.log(error);
       });
      }, [setData]);
       
     //function to transform API data from string to array
      function debugDat(entry){
        entry.map((e)=>{
                            
          e.interestsMentor.map((a)=>{
            return(save.push(a) 
            )
          })
            //
             
     })}

     debugDat(data)
      
      console.log(save)
      
      
    return ( 
       <div className={Styles.contenedor}>

           <div className={Styles.heder}>
               <p>Completa la siguiente información para avanzar en la plataforma.</p>
           </div>
           
                <Card  container={

                    <>
                        <h3>Intereses generales</h3>
                        <p>Elige máximo tres intereses</p>
                        <Select
                        value={value}
                         options={save}
                         onChange={onDropdownCange}
                        
                    />
                        
                        <br/> 
                    </>} 
                
                bottom={  <button>Finalizar</button>}
                />
           
           
        </div>
       
     );
} 
 
export default MultipleChoice;