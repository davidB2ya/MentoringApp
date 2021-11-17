import React from 'react'
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
// import Styles from '../Form/FirstForm.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const FirstStudentForm = () => {
    return (
        <div>
            <Navbar/>
			<div >
				<p className="advice">Las siguientes preguntas te ayudaran a ti a tu mentor en el desarrollo de la sesión.</p>
				<div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
					<br></br>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
					<br></br>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
					<br></br>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
					<br></br>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
					<br></br>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
					<br></br>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
					<br></br>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
					<br></br>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
					<br></br>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
					<br></br>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
				
				{/* <select class="form-select" multiple aria-label="multiple select example">
					<option selected>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select> */}
				</div>
			</div>
			 <Footer/>
        </div>
    )
}

export default FirstStudentForm
