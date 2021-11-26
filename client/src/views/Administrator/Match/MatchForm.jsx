import { useState } from 'react'
import Styles from './matchform.css'
import Card from '../../../components/Card/Card'
import Select from 'react-select'
import axios from 'axios'

const MatchForm = () => {
  let cohort = 0
  let program = ""
  const [students, setStudents] = useState([])
  const [mentors, setMentors] = useState([])
  const [chosenProgram, setChosenProgram] = useState(false)

  const handleTypeSelect = e => {
    cohort= e.label
    console.log(cohort)
  };

  const handleSelectPrograms = i => {
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

  const getValuesFinal = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/match/students', {
        cohorte: cohort,
        program: program
      })
      console.log(res)
      if (res.status === 200) {
        setStudents(res.data)
      }
    } catch (err) {
      console.log(err)
    }
    try {
      const resp = await axios.get('http://localhost:3001/api/match/mentor', {
        cohorte: cohort,
        program: program
      })
      if (resp.status === 200) {
        setChosenProgram(true)
        setMentors(resp.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  // const match = []
  // const listMatches = []
  // let resultInterest = 0
  // let resultAge = 0
  // let commitment = 0
  // let achievement = 0
  // let flexibility = 0
  // let communication = 0
  // let gender = 0
  // let total = 0

  // function Match () {
  //   for (let est = 0; est < students.length; est++) {
  //     for (let m = 0; m < mentors.length; m++) {
  //       while (mentors[m].studentAssignment.length < mentors[m].numeStudents) {
  //         // Interests the student and mentor
  //         for (let i = 0; i < 2; i++) {
  //           if (students[est].interestsStudent[i].includes(mentors[m].interestsMentor)) {
  //             if (resultInterest === 0) {
  //               resultInterest = 5
  //             } else {
  //               resultInterest = resultInterest + 10
  //             }
  //           }
  //         }
  //         // Actual age the student and mentor
  //         if (students[est].actualAge === mentors[m].actualAge) {
  //           resultAge = 25
  //         }else if (students[est].actualAge + 5 >= mentors[m].actualAge & students[est].actualAge - 5 <= mentors[m].actualAge){
  //           resultAge = 15
  //         }
  //         // Commitment the student and mentor
  //         if(students[est].commitment === 3 & mentors[m].commitment === 1){
  //           commitment = 10
  //         }else if (students[est].commitment === 2 || students[est].commitment === 1 & mentors[m].commitment === 2){
  //           commitment = 10
  //         }
  //         // Achievement Orientation the student and mentor
  //         if(students[est].achievementOrientation === 3 & mentors[m].achievementOrientation === 1){
  //           achievement = 10
  //         }else if (students[est].achievementOrientation === 2 || students[est].achievementOrientation === 1 & mentors[m].achievementOrientation === 2){
  //           achievement = 10
  //         } 
  //         // Flexibility the student and mentor
  //         if(students[est].flexibility === 3 & mentors[m].flexibility === 1){
  //           flexibility = 10
  //         }else if (students[est].flexibility === 2 || students[est].flexibility === 1 & mentors[m].flexibility === 2){
  //           flexibility = 10
  //         } 
  //         // Communication the student and mentor
  //         if(students[est].assertiveCommunication === 3 & mentors[m].assertiveCommunication === 1){
  //           communication = 10
  //         }else if (students[est].assertiveCommunication === 2 || students[est].assertiveCommunication === 1 & mentors[m].assertiveCommunication === 2){
  //           communication = 10
  //         } 
  //         // Gender preference 
  //         if(students[est].studentsGenderPrefer === mentors[m].gender){
  //           gender = 10
  //         }
  //         total = resultInterest + resultAge + commitment + achievement + flexibility + communication + gender
  //         console.log(total)
  //       }
        
  //     }
  //     listMatches.push(match)
  //   }
  //   return listMatches
  // }


  const ListStudentMentor = () => {
    return(
      <div>
          <div>
            <h2>Lista de Estudiantes</h2>
            {students.map(e => {
              return (
                <tr >
                    <td>{e.user_id.name}</td>
                    <td>{e.user_id.lastName}</td>
                </tr>
              )
            })}
          </div>
          <div>
            <h2>Lista de Mentores</h2>
            {mentors.map(e => {
              return (
                <tr >
                    <td>{e.user_id.name}</td>
                    <td>{e.user_id.lastName}</td>
                </tr>
              )
            })}
          </div>
          {/* <button onClick={Match()}>Hacer Match</button> */}
          
      </div>
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
