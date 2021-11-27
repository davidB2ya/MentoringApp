import './formmentor.css'

import Card from '../../../src/components/Card/Card'
import Select from 'react-select'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


function FormMentor() {

  const [data, setData] = useState([])
  const save = []

  //function to transform API data from string to array
  function debugDat(data) {

    data.forEach(interest => {
      interest.interestsMentor.forEach((oneInterest, index) => {
        save.push({ value: oneInterest, label: oneInterest })
      })
    })
  }

  debugDat(data)

  const interest = [
    { value: "IA", label: "IA" },
    { value: "Diseño", label: "Diseño" },
    { value: "Frontend", label: "Frontend" },
    { value: "Backend", label: "Backend" },
    { value: "Marketing", label: "Marketing" },

  ]

  // const handleChange = (selectedOption) => {

  // }

  const maxOptions = 3;

  const [selectedOption, setSelectedOption] = useState([]);

  const handleTypeSelect = e => {
    setSelectedOption(e);
  };

  const sendSelect = []

  selectedOption.map(option => { sendSelect.push(option.value) });
  // console.log(sendSelect)

  const auth = useSelector(state => state.auth)
  // console.log(auth)

  const { user } = auth

  const navigate = useNavigate()

  const handleUpdateInterest = () => {
    const userinterestsMentor = sendSelect
    // console.log(userinterestsStudent)
    const idMentor = user.id
    // console.log(idStudent)
    axios
      .post(`http://localhost:3001//api/formControl/${idMentor}`, { gender: userinterestsMentor, academic_level: userinterestsMentor, ActualJobPosition: userinterestsMentor, Company: userinterestsMentor, sons: userinterestsMentor, interestsMentor: userinterestsMentor, numeStudents: userinterestsMentor, studentAssignment: userinterestsMentor })
    navigate('/thanks-student')
  }



  return (

    <div className='container-Q'>
      <div className='containerList'>

        <p>Estudios</p>
        <input></input>
        <p>Cargo actual</p>
        <input></input>
        <p>Empresa en donde trabajas</p>
        <input></input>
        <p>Edad</p>
        <input></input>
        <p>Género</p>
        <input></input>
        <p>Hijos</p>
        <input></input>
        <p>Intereses</p>
        <input></input>
        <p>Cantidad de estudiantes que quieres en el proceso</p>
        <input></input>
      </div>

      <Card
        container={
          <>
            <h3>Intereses generales</h3>
            <p>Elige máximo tres intereses</p>

            <Select
              name="interest"
              options={selectedOption.length === maxOptions ? [] : interest}
              isMulti
              onChange={handleTypeSelect}

              noOptionsMessage={() => {
                return selectedOption.length === maxOptions
                  ? 'You have reached the max options value'
                  : 'No options available';
              }}
            />


            <br />
          </>
        }
        bottom={<button onClick={handleUpdateInterest}>Finalizar</button>}
      />


    </div>
  )
}

export default FormMentor
