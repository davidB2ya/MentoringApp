import React from 'react'
import '../Student/FirstStudentForm.css'

const FirstStudentForm = () => {
    return (
        <div>
            <h1 className="barnav">BARNAV</h1>
            <div className="col-lg-6 content-right" id="start">
				<div id="wizard_container">
					<div id="top-wizard">
							<div id="progressbar"></div>
						</div>
						<form id="wrapped" method="POST"/>
							<input id="website" name="website" type="text" value=""/>
							<div id="middle-wizard">
								<div className="step">
									<h3 className="main_question"><strong>1/5</strong>Please fill with your details</h3>
									<div className="form-group">
										<input type="text" name="firstname" className="form-control required" placeholder="First Name"/>
									</div>
									<div className="form-group">
										<input type="text" name="lastname" className="form-control required" placeholder="Last Name"/>
									</div>
									<div className="form-group">
										<input type="email" name="email" className="form-control required" placeholder="Your Email"/>
									</div>
									<div className="form-group">
										<div className="styled-select clearfix">
											<select className="wide required" name="country">
												<option value="">Your Country</option>
												<option value="Europe">Europe</option>
												<option value="Asia">Asia</option>
												<option value="North America">North America</option>
												<option value="South America">South America</option>
												<option value="Oceania">Oceania</option>                             
											</select>
										</div>
									</div>
									<div className="row">
										<div className="col-3">
											<div className="form-group">
												<input type="text" name="age" className="form-control" placeholder="Age"/>
											</div>
										</div>
										<div className="col-9">
											<div className="form-group radio_input">
												<label className="container_radio">Male
													<input type="radio" name="gender" value="Male" className="required"/>
													<span className="checkmark"></span>
												</label>
												<label className="container_radio">Female
													<input type="radio" name="gender" value="Female" className="required"/>
													<span className="checkmark"></span>
												</label>
											</div>
										</div>
									</div>
									<div className="form-group terms">
										<label className="container_check">Please accept our <a href="#" data-toggle="modal" data-target="#terms-txt">Terms and conditions</a>
											<input type="checkbox" name="terms" value="Yes" className="required"/>
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
                            </div>
                            </div>
             </div>    
            <h1 className="footer">FOOTER</h1>
        </div>
    )
}

export default FirstStudentForm
