import { useState } from 'react'
import Styles from './matchform.css'
import Card from '../../../components/Card/Card'
import Select from 'react-select'
import axios from 'axios'



const MatchForm = () => {
  
  

  

  const cohorte= [ 
      { 
        value: 1, 
        label: 1
        
        
      },
      { 
        value: 2, 
        label: 2
        
    },
    { 

        value: 3, 
        label: 3
        
    },
    { 
        value: 4, 
        label: 4
        
    }

  ]

  const programs= [ 
    { 
        value: "Programate" ,
        label: "Programate"
    },
    { 
        value: "administración de empresas" ,
        label: "administración de empresas"
  }
  ]
  const [cohort, setCohort] = useState(0)
  const [program, setProgram] = useState('')
  console.log(program)
  console.log(cohort)
  const [chosenProgram, setChosenProgram] = useState(false)
  const handleTypeSelect = e => {
    const cohortChoice=e.label
    // console.log (cohortChoice)
    setCohort(cohortChoice)
    // console.log(cohort)
};
const handleSelectPrograms = i => {
    setProgram(i.label)
    // console.log(program)
}
const getValuesFinal=async() => {
    // console.log("la corte es"+cohort)
    // console.log("el programa es"+program)
    try {
        const res=await axios.get ('http://localhost:3001/api/match/students',{
            cohorte: cohort,
            program: program
        })
        console.log (res)
        if(res.status===200){
            setChosenProgram(true) 
            console.log("se cambio a true")
        }
    }
    catch (err) {
        console.log (err)
      }
   
}

const ListStudentMentor=()=>{
    return (
        <p>Soy la lista de estudiantes</p>
    )
}
const ProgramAndCohort=()=>{
    return (
        <div className={Styles.contenedor}>
          <div className={Styles.heder}>
            
          </div>
    
          <Card
            container={
              <>
                <h3>Elige la cohorte para realizar el Match
                </h3>
                <p>Elige la cohorte</p>
    
                <Select
                    name="cohorte"
                    
    
                  options={cohorte} // Options to display in the dropdown
                  onChange={handleTypeSelect}
    
                />
                 
                <p>Elige el programa</p>
    
                <Select
                  name="programs"
                options={programs} // Options to display in the dropdown
                  onChange={handleSelectPrograms}
                />
    
    
            
                <br />
              </>
            }
            bottom={<button onClick={getValuesFinal}></button>}
          />
          
        </div>
      )   
}

  return (
      <>
      {chosenProgram ? <ListStudentMentor/> : <ProgramAndCohort/>}
      </>
  )
  
}



export default MatchForm;
