import { useEffect, useState } from 'react'
import Styles from './MultipleChoice.module.css'
import Card from '../../../components/Card/Card'
import Select from 'react-select'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const baseUrl = 'https://fathomless-bastion-33135.herokuapp.com'

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
        await axios.get(`${baseUrl}/api/profile-edit`)
         .then(response=>{
             console.log(response.data)
           
         })   
         
       }*/

  useEffect(() => {
    axios({
      url: `${baseUrl}/api/profile-edit`
    })
      .then(response => {
        setData(response.data)
        //  console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [setData])

  

  // console.log(uniqueInterest);

  //function to transform API data from string to array
  function debugDat (data) {
    
    data.forEach(interest => {
      interest.interestsMentor.forEach((oneInterest, index) => {
        save.push({ value: oneInterest, label: oneInterest })
      })})
  }

  debugDat(data)

  


  function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject  = {};

    for(var i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
  }


  const uniqueInterest = removeDuplicates(save, "value");

  // console.log("intereses")
  // console.log(save)
  // console.log("intereses unicos")
  // console.log(uniqueInterest)


  // const saveUnique = () => {
  //   for(let i = 0; i < save.length; i++){


  //     const interest = save[i];

  //     if (!uniqueInterest.includes(save[i])) {
  //       uniqueInterest.push(interest);
  //     }
  //   }
  // }

  // saveUnique()

  // console.log(uniqueInterest)
  
  // const handleChange = (selectedOption) => {

  // }

  const maxOptions = 3;
  
  const [selectedOption, setSelectedOption] = useState([]);
  
  const handleTypeSelect = e => {
      setSelectedOption(e);
  };

  // console.log(selectedOption)

  const sendSelect = selectedOption.map(option => (option.value));
  
  // const [notallInterest, setNotallInterest] = useState(true);

  // function allInterest (){
  //   if(sendSelect.length == 3){
  //     setNotallInterest(!notallInterest)
  //   }
  // }

  // allInterest()

  const auth = useSelector(state => state.auth)
  // console.log(auth)

  const { user }= auth

  const navigate = useNavigate() 

  const handleUpdateInterest = () => {
    if(sendSelect.length === 3){
      const userinterestsStudent = sendSelect
      // console.log(userinterestsStudent)
      const idStudent = user.id
      // console.log(idStudent)
      axios
      .post(`${baseUrl}/api/studentsPerfil-control-update/${idStudent}`, { interestsStudent:userinterestsStudent})
      navigate('/thanks-student')
    }else{
      alert('Please select 3 interest')
    }
    
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
              options={selectedOption.length === maxOptions ? [] : uniqueInterest}
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
