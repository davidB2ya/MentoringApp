import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
// import '../Form/FirstStudentForm.css';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const FirstStudentInform = () => {
 
	const [list, setList] = useState([]);

	let { id } = useParams();

	useEffect(() => {
	Axios({
		url: `http://localhost:3001/api/sessionReport/${id}`,
	})
		.then((response) => {
		setList(response.data);
		console.log(response.data);
		})
		.catch((error) => {
		console.log(error);
		});
	}, [setList]);

	return (
		<div>
			
			<p className="do">Las siguientes preguntas te ayudaran a ti a tu mentor en el desarrollo de la sesión.</p>
			<div className="advice">
				{list.map((item) => (
				<div class="mb-3" key={item.id}>
					<label for="exampleFormControlTextarea1" class="form-label">{item.question}</label>
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
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
				))}
			</div>
		
        </div>
    )
}

export default FirstStudentInform
