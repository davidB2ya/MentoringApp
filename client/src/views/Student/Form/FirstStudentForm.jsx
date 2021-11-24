import React, { useState, useEffect} from "react";
import { useParams } from "react-router";
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
import '../Form/FirstStudentForm.css';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'


const FirstStudentForm = () => {
	
	const [list, setList] = useState([]);

	let { id } = useParams();

	useEffect(() => {
	  Axios({
		url: `http://localhost:3001/api/formStudent/${id}`,
	  })
		.then((response) => {
		  setList(response.data);
		  console.log(response.data);
		})
		.catch((error) => {
		  console.log(error);
		});
	}, [setList]);

	 const auth = useSelector(state => state.auth)

 	function postAnswer () {
		const {user} = auth
		// console.log(user.id)
		const answer = {
			idSession : id,
			idUser : user.id,
			idQuestion : "hola",
			answer : "answer"
		}
		// Axios.post(`http://localhost:3001/api/answerBank`)
	}

	const [answerState, setAnswerState] = useState()
	const firstArrayAnswer = []
	const finalArrayAnswer= []
	const getValues = (e) => {
		e.preventDefault();
		const { name, value } = e.target
		
		firstArrayAnswer.push({[name]: value})

		

		

		console.log(firstArrayAnswer)
	}
		// setAnswerState(e.target.value)}

	
	function handleSubmit(e){
		// console.log( firstArrayAnswer )
		e.preventDefault();
		
		if(firstArrayAnswer.length > 0){
				
			for(let answer = 0; answer < firstArrayAnswer.length; answer++) {
	 
				const elementPush = firstArrayAnswer[ answer ]

				const element = Object.keys(firstArrayAnswer[answer]);

		
				console.log(element)
				 
				if (!finalArrayAnswer.includes(firstArrayAnswer[answer])) {
					finalArrayAnswer.push(elementPush);
				}
			}
		}
		
	}

	const answer = []
	
	// console.log(resRef.current.value)

    return (
        <div>
           
			<p className="do">Las siguientes preguntas te ayudaran a ti a tu mentor en el desarrollo de la sesión.</p>
			<form onSubmit={handleSubmit} className="advice">
				{list.map((item) => (
				<div class="mb-3" key={item.id}>
					<label for="exampleFormControlTextarea1" class="form-label">{item.question}</label>
					<br></br>
					<p>{item.question1}</p>
					<p>{item.question2}</p>
					<p>{item.question3}</p>
					<p>{item.question4}</p>
					<p>{item.question5}</p>
					<p>{item.question6}</p>
					<p>{item.question7}</p>
					<p>{item.question8}</p>
					<p>{item.question9}</p>
					<p>{item.question10}</p>
					<p>{item.question11}</p>
					<p>{item.question12}</p>
					<p>{item.question13}</p>
					<textarea onChange={getValues} name={item.id}  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
				))}
			<button type="submit">ENVIAR</button>
			</form>
        </div>
    )
}

export default FirstStudentForm