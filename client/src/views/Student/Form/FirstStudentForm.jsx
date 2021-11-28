import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'
import '../Form/FirstStudentForm.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'

const baseUrl = 'https://fathomless-bastion-33135.herokuapp.com'
const FirstStudentForm = () => {
	
	const [list, setList] = useState([]);

	const [filledOut, setFillOut] = useState(false);

	// console.log(setFillOut)

	let { id } = useParams();

	// const initialState = []

	const idUser = useSelector(state => state.auth.user.id)

	// console.log(idUser)

	useEffect(() => {
		if(idUser){
	  	axios({
				url: `http://localhost:3001/api/formSession/${idUser}/${id}`,
	  	})
			.then((res) => {
		  	// setList(response.data);
				if(res.data[0].FilledOut === true)
				setFillOut(true)
			})
			.catch((error) => {
		  	console.log(error);
			});
		}
	}, [idUser, id]);




	useEffect(() => {
	  axios({
			url: `${baseUrl}/api/formStudent/${id}`,
	  })
		.then((response) => {
		  setList(response.data);

			// console.log(response.data);
		})
		.catch((error) => {
		  console.log(error);
		});
	}, [list, id]);


	// useEffect(() => {
	// 	if(idUser){
	//   	axios({
	// 			url: `http://localhost:3001/api/formSession/${idUser}/${id}`,
	//   	})
	// 		.then((res) => {
	// 	  	// setList(response.data);
	// 			if(res.data[0].FilledOut === true)
	// 			setFillOut(true)
	// 		})
	// 		.catch((error) => {
	// 	  	console.log(error);
	// 		});
	// 	}
	// }, [idUser, id]);

	// console.log(list)

	const initialState = list.map((question) => question.id)

	// console.log(initialState)

	const initialAnswer = {}

	// console.log(initialAnswer)

	function pushObject(){
		initialState.forEach(e =>  initialAnswer[e] = "")
	}

	pushObject()


	
	//  console.log(initialState)
	
	// console.log(initialAnswer)

	
	const [answerState, setAnswerState] = useState(initialAnswer)

	
	const getValues = (e) => {
		e.preventDefault();
		const { name, value } = e.target
		
		setAnswerState({...answerState, [name]: value})
		
		// 
	}

	// console.log("esta son las respuestas")
	// console.log(answerState)

	const auth = useSelector(state => state.auth)

	const navigate = useNavigate() 

	const handleSubmit = async e => {
		
		e.preventDefault();

		

		try{
			const {user} = auth
			for(const answer in answerState){
				const finalAnswer = {
					idSession : id,
					idUser : user.id,
					idQuestion : answer,
					answer : answerState[answer]
				}
	
					await axios.post(`${baseUrl}/api/answerBank`,{
					idSession: finalAnswer.idSession,
					idUser: finalAnswer.idUser,
					idQuestion: finalAnswer.idQuestion,
					answer: finalAnswer.answer
				})
				try{
					await axios.post('http://localhost:3001/api/new/formSession',{
						idSession: id,
						idStudent: idUser,
						FilledOut: true,
					})
					navigate('/student-sessions')
				}
				catch (err) {
      		err.response.data.error &&
					console.log(err.response.data.error)
    		}
			}
			
			
		}
		catch (err) {
      err.response.data.error &&
			console.log(err.response.data.error)
    }
		// console.log("se envio los resultados:" )
		
		
		// console.log(answerState)
		
	}


	 

	

 	

	const pruebaArray = [
		{
			question:1
		
		},
		{
			question:2
		
		},
		{
			question:3
		
		},
		{
			question:4
		
		}
	]
	
    return (
        <div>
           
			<p className="do">Las siguientes preguntas te ayudaran a ti a tu mentor en el desarrollo de la sesión.</p>
			<form onSubmit={handleSubmit} className="advice">
				{filledOut ? pruebaArray.map((itemPrueba)=>(
					<p>{itemPrueba.question}</p>
					)) : list.map((item) => (
					<div className="mb-3" key={item.id}>
						<label className="form-label">{item.question}</label>
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
						<textarea 
						onChange={getValues} 
						name={item.id} 
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
						required
						></textarea>
					</div>
					))}
			<button type="submit">ENVIAR</button>
			</form>
        </div>
    )
}

export default FirstStudentForm