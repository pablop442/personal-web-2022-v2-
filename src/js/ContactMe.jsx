import React, { useRef } from 'react';
import "./contactMe.css";
import { SiBuymeacoffee } from "react-icons/si";
import emailjs from "@emailjs/browser";

function ContactMe() {
    const form = useRef();
  
	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs.sendForm(
				"service_avp2d8b",
				"contact_form",
				form.current,
				"user_vwa6qQRrtOQw91nLDPSkH"
			)
			.then((result) => {
				console.log("SENT", result.text);
                alert("Thank you for your interest! I will contact you as soon as possible.")
                
			})
			.catch((error) => console.log("AN ERROR HAS OCURRED", error.text));

    
	};



	return (
		<>
			<div
				className="modal fade "
				id="contact"
				tabIndex="-1"
				aria-labelledby="enrollLabel"
				aria-hidden="true">
				<div className="modal-dialog ">
					<div className="modal-content contact-modal">
						<div className="modal-header">
							<h3 className="modal-title" id="enrollLabel">
								Let's get in touch! <SiBuymeacoffee />
							</h3>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<p className="lead">
								Fill out this form and I will get back to you.
							</p>
							<form onSubmit={handleSubmit} ref={form}>
								<div className="mb-3">
									<label
										htmlFor="first-name"
										className="col-form-label">
										First Name:
									</label>
									<input
										type="text"
										className="form-control"
										id="first-name"
										name="user_name"
										
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="last-name"
										className="col-form-label">
										Last Name:
									</label>
									<input
										type="text"
										className="form-control"
										id="last-name"
										name="user_last_name"
										
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="email"
										className="col-form-label">
										* Email:
									</label>
									<input
										type="email"
										className="form-control"
										id="email"
										name="user_email"
										required
										
									
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="phone"
										className="col-form-label"
										type="tel"
										>
										Phone:
									</label>
									<input
										type="tel"
										className="form-control"
										id="phone"
										
										name="user_phone"
										
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="message"
										className="col-form-label">
										Tell me how can I help you:
									</label>
									<textarea
										type="text"
										className="form-control"
										id="message"
										name="message"
									
									/>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-bs-dismiss="modal"
										id="modal-close-btn">
										Close
									</button>
									<button
										type="submit"
										className="btn btn-primary"
										id="modal-submit-btn"
                                        // data-bs-dismiss="modal"
                                        >
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactMe