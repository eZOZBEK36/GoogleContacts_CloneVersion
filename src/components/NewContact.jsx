import React, { useState } from 'react';
import CustomLink from '../Route/CustomLink';

const NewContact = ({ contact, setContact }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [company, setCompany] = useState('');
	const [position, setPosition] = useState('');
	const [mail, setMail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');


	const addNewContact = () => {
		let newContact = {
			id: null,
			firstName: firstName,
			lastName: lastName,
			company: company,
			position: position,
			mail: mail,
			phoneNumber: phoneNumber
		}
		if (contact.length) {
			newContact.id = contact[contact.length - 1].id + 1;
		} else {
			newContact.id = 1;
		}
		if (firstName.length && lastName.length && company.length && position.length && mail.length && phoneNumber.length) {
			setContact([...contact, newContact])
		} else {
			alert('Fill all the gaps!!!')
		}
	}
	return (
		<div className="newcontact">
			<CustomLink to="/contacts">
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
				</svg>
			</CustomLink>
			<div className="newcontact__wrapper">
				<div className="newcontact__container">
					<div className="newcontact__header header-newcontact">
						<div className="header-newcontact__profileimage">
							<div className="header-newcontact__selectimage">
								<button>
									<svg width="24" height="24" viewBox="0 0 24 24">
										<path d="M0 0h24v24H0z" fill="none"></path>
										<path d="M20 10h-2V7h-3V5h3V2h2v3h3v2h-3v3zm-4 3c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm4-1v7H4V7h9V3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-7h-2z"></path>
									</svg>
								</button>
							</div>
							<div className="header-newcontact__groupset">
								<div>
									<svg width="20" height="20" viewBox="0 0 24 24">
										<path fill="none" d="M0 0h24v24H0V0z"></path>
										<path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path>
									</svg>
								</div>
							</div>
							<div className="header-newcontact__send">
								<button onClick={addNewContact} type="button">
									{
										firstName.length && lastName.length && company.length && position.length && mail.length && phoneNumber.length
											?
											<CustomLink to="/contacts">
												Сохранить
											</CustomLink>
											: <>Сохранить</>
									}
								</button>
							</div>
						</div>
					</div>
					<div className="newcontact__form form-newcontact">
						<div className="form-newcontact__names">
							<div className="form-newcontact__firstname">
								<label htmlFor="firstname">
									<svg width="20" height="20" viewBox="0 0 24 24">
										<path d="M0 0h24v24H0V0z" fill="none"></path>
										<path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
									</svg>
								</label>
								<input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstname" />
								<div>Имя</div>
							</div>
							<div className="form-newcontact__lastname">
								<input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="lastname" />
								<div htmlFor="lastname">Фамилия</div>
							</div>
						</div>
						<div className="form-newcontact__position">
							<div className="form-newcontact__company">
								<label htmlFor="company">
									<svg width="20" height="20" viewBox="0 0 24 24" >
										<path fill="none" d="M0 0h24v24H0V0z"></path>
										<path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
									</svg>
								</label>
								<input value={company} onChange={(e) => setCompany(e.target.value)} type="text" id="company" />
								<div>Компания</div>
							</div>
							<div className="form-newcontact__position">
								<input value={position} onChange={(e) => setPosition(e.target.value)} type="text" id="position" />
								<div>Должность</div>
							</div>
						</div>
						<div className="form-newcontact__mail">
							<div className="form-newcontact__mail">
								<label htmlFor="mail">
									<svg width="20" height="20" viewBox="0 0 24 24" >
										<path d="M0 0h24v24H0V0z" fill="none"></path>
										<path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
									</svg>
								</label>
								<input value={mail} onChange={(e) => setMail(e.target.value)} type="text" id="company" />
								<div>Эл. почта</div>
							</div>
						</div>
						<div className="form-newcontact__phoneNumber">
							<div className="form-newcontact__phoneNumber">
								<label htmlFor="phoneNumber">
									<svg width="20" height="20" viewBox="0 0 24 24">
										<path fill="none" d="M0 0h24v24H0V0z"></path>
										<path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"></path>
									</svg>
								</label>
								<input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="number" id="company" />
								<div>Телефон</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewContact;