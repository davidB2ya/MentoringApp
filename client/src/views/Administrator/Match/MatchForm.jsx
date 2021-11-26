import { useEffect, useRef, useState } from 'react'
import Styles from './matchform.css'
import Card from '../../../components/Card/Card'
// import Select from 'react-select'
import axios from 'axios'
import Multiselect from 'multiselect-react-dropdown'

const MatchForm = () => {
  // const [value, setValue] = useState(null)
  // const onDropdownCange = value => {
  //   setValue(value)
  // }
  const [data, setData] = useState([])
  const save = []
  // const [dataselec, setDataselect]=useState([]);
  /*const petitionGet=async()=>{
        await axios.get("http://localhost:3001/api/profile-edit")
         .then(response=>{
             console.log(response.data)
           
         })   
         
       }*/

  useEffect(() => {
    axios({
      url: 'http://localhost:3001/api/profile-edit'
    })
      .then(response => {
        setData(response.data)
        //  console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [setData])

  const handleTypeSelect = e => {
    // const cohortChoice = e.value
    // console.log (cohortChoice)
    // setCohort(e.label);
    cohort= e.label
    console.log(cohort)
  };

  const handleSelectPrograms = i => {
    // setProgram(i.label);
    program= i.label
    console.log(program)
  };

  const cohorte = [
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

  const programs = [
    {
      value: 'Programate',
      label: 'Programate'
    },
    {
      value: 'administración de empresas',
      label: 'administración de empresas'
    }
  ]

  

  // console.log(program)
  // console.log(cohort)

  
  
  const getValuesFinal = async () => {
    // console.log("la corte es"+cohort)
    // console.log("el programa es"+program)
    try {
      const res = await axios.get('http://localhost:3001/api/match/students', {
        cohorte: cohort,
        program: program
      })
      console.log(res)
      if (res.status === 200) {
        // setChosenProgram(true)
        setStudents(res.data)
        // console.log('se cambio a true')
      }
    } catch (err) {
      console.log(err)
    }
    try {
      const resp = await axios.get('http://localhost:3001/api/match/mentor', {
        cohorte: cohort,
        program: program
      })

      // console.log(cohort)
      // console.log(program)
      // console.log(resp)
      if (resp.status === 200) {
        setChosenProgram(true)
        setMentors(resp.data)
        // console.log('se cambio a true')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const match = []
  const listMatches = []
  let resultInterest = 0
  
  function Match () {
    for (let est = 0; est < students.length; est++) {
      for (let m = 0; m < mentors.length; m++) {
        while (mentors[m].studentAssignment.length < mentors[m].numeStudents) {
          for (let i = 0; i < 2; i++) {
            if (
              students[est].interestsStudent[i].includes(
                mentors[m]
              )
            ) {
              if (resultInterest === 0) {
                resultInterest = 5
              } else {
                resultInterest = resultInterest + 10
              }
            }
          }
        }
        match.push(resultInterest)
      }
      listMatches.push(match)
    }
    return listMatches
  }
  console.log(students)


  const ListStudentMentor = () => {
    return(
      <Card students={students}>
         
          <p>Aquí van los estudiantes</p>
         
            {students.map(e => {
              return (
                <tr >
                    <td>{e.user_id.name}</td>
                    <td>{e.user_id.lastName}</td>
                </tr>
                
              )
            })}
          
          
          <div>
            
          <h3>Lista de mentores</h3>
          {mentors.map(e => {
              return (
                <tr >
                    <td>{e.user_id.name}</td>
                    <td>{e.user_id.lastName}</td>
                </tr>
              )
            })}
            
            
           
            
                    
              </div>
          <button onClick={Match()}>Hacer Match</button>
          
      </Card>
    )
  }
  const ProgramAndCohort = () => {
   
    return (
      <div className={Styles.contenedor}>
        <div className={Styles.heder}></div>

        <Card
          container={
            <>
              <h3>Elige la cohorte para realizar el Match</h3>
              <p>Elige la cohorte</p>

              <Select
                name='cohorte'
                options={cohorte} // Options to display in the dropdown
                onChange={handleTypeSelect}
              />

              <p>Elige el programa</p>

              <Select
                name='programs'
                options={programs} // Options to display in the dropdown
                onChange={handleSelectPrograms}
              />

              <br />
            </>
          }
          bottom={<button onClick={getValuesFinal}>Aceptar</button>}
        />
      </div>
    )
  }

  return <>{chosenProgram ? <ListStudentMentor /> : <ProgramAndCohort />}</>
}

export default MatchForm
