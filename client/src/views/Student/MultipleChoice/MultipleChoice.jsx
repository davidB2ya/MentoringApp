import { useEffect, useState } from 'react'
import Styles from './MultipleChoice.module.css'
import Card from '../../../components/Card/Card'
import Select from 'react-select'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MultipleChoice = () => {
  // const [value, setValue] = useState(null)
  
  // const onDropdownCange = value => {
  //   setValue(value)
  // }
  
  const [data, setData] = useState([])
  const save = []
  // console.log(save)
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

  //function to transform API data from string to array
  function debugDat (data) {
    const interes = data.map(interest => {
      interest.interestsMentor.map((oneInterest, index) => {
        save.push({ value: oneInterest, label: oneInterest })
      })
    })
  }

  debugDat(data)

  // console.log(save)
  // const handleChange = (selectedOption) => {

  // }

  const maxOptions = 3;
  
  const [selectedOption, setSelectedOption] = useState([]);
  
  const handleTypeSelect = e => {
      setSelectedOption(e);
  };

  const sendSelect = []

  selectedOption.map(option => {sendSelect.push(option.value)});
  // console.log(sendSelect)

  const auth = useSelector(state => state.auth)
  // console.log(auth)

  const { user }= auth

  const navigate = useNavigate() 

  const handleUpdateInterest = () => {
    const userinterestsStudent = sendSelect
    // console.log(userinterestsStudent)
    const idStudent = user.id
    // console.log(idStudent)
    axios
    .post(`http://localhost:3001/api/studentsPerfil-control-update/${idStudent}`, { interestsStudent:userinterestsStudent})
    navigate('/thanks-student')
  }

  return (
    <div className={Styles.contenedor}>
      <div className={Styles.heder}>
        <p>Bienvenido Estudiante. Por favor Completa la siguiente información para avanzar en la plataforma</p>
      </div>

      <Card
        container={
          <>
            <h3>Intereses generales</h3>
            <p>Elige máximo tres intereses</p>

            <Select
              name="interest"
              options={selectedOption.length === maxOptions ? [] : save}
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

export default MultipleChoice
