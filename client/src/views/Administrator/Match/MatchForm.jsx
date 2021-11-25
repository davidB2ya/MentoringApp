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

  //function to transform API data from string to array
  function debugDat (data) {
    data.map(interest => {
      interest.interestsMentor.map((oneInterest, index) => {
        return save.push({ name: oneInterest, id: index })
      })
    })
  }

  debugDat(data)

  // console.log(save)

  let interestsSelected = useRef();
  
  

  const getValues = function(interestsSelected){
    
    const values = interestsSelected.current?.state.selectedValues
    // const values = [{name: "sebastian"},{name: "sebastian1"},{name: "sebastian2"}]
    
    
    return values
  }

  const getValuesFinal = () => {
    const finalValues = getValues(interestsSelected)
    let interestsArray = []
    if (finalValues > 0){
      finalValues.forEach(interest => interestsArray.push(interest.name));
    }
    console.log(interestsArray)
  }

  //const finalInterest = getValues.getSelectedItems()

  // console.log(getValues(interestsSelected))

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

            <Multiselect
              options={save} // Options to display in the dropdown
              selectionLimit={3}
              selectedValues={save.selectedValue} // Preselected value to persist in dropdown
              ref={interestsSelected}
              onSelect={() => {}} // Function will trigger on select event
              // onRemove={this.onRemove} // Function will trigger on remove event
              displayValue='name' // Property name to display in the dropdown options
            />

          {console.log()}
            <br />
          </>
        }
        bottom={<button onClick={getValuesFinal()}>Ejecutar match</button>}
      />
    </div>
  )
}

export default MatchForm;
