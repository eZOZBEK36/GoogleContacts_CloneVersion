import React from 'react';

const Contacts = ({ contact, setContact }) => {
	const setFavourite = (id) => {
		setContact(
			contact.map((con, i) => {
				if (con.id === id) {
					con.isFavourite = !con.isFavourite
				}
				return con;
			})
		)
	};
	return (
		<div className="contacts">
			<div className="contacts__wrapper">
				<div className="contacts__container">
					<div className="contacts__header header-contacts">
						<div className="header-contacts__item">Имя</div>
						<div className="header-contacts__item">Эл. почта</div>
						<div className="header-contacts__item">Номер телефона</div>
						<div className="header-contacts__item">Должность и компания</div>
						{/* <div className="header-contacts__item">Группы</div> */}
						<div className="header-contacts__item">
							<svg width="20" height="20" viewBox="0 0 24 24">
								<path fill="none" d="M0 0h24v24H0V0z"></path>
								<path fill="#444444" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
							</svg>
						</div>
					</div>
					<div className="contacts__body">
						<div className="contacts__favourites fav-contacts">
							<div className="fav-contacts__title">
								Помеченные контакты ()
							</div>
							<div className="fav-contacts__items">
								{
									contact.map((con, i) => {
										if (con.isFavourite === true) {
											return (
												<div key={con.id} className="list-contacts__item list-item _list-item">
													<div className="list-item__name">
														<div className="list-item__drag">
															<svg width="20" height="20" viewBox="0 0 24 24">
																<path fill="none" d="M0 0h24v24H0V0z"></path>
																<path fill="#5f6368" d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
															</svg>
														</div>
														<div className="list-item__logo">
															<div>
																<input type="checkbox" id={"check" + i} />
																<label htmlFor={"check" + i}>
																	<svg width="24" height="24" viewBox="0 0 24 24">
																		<path fill="none" d="M0 0h24v24H0V0z"></path>
																		<path fill="#5f6368" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
																	</svg>
																	<svg width="24" height="24" viewBox="0 0 24 24">
																		<path fill="none" d="M0 0h24v24H0z"></path>
																		<path fill="#1a73e8" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
																	</svg>
																</label>
															</div>
															<span>
																{con.firstName[0]}
															</span>
														</div>
														<span>{con.firstName + ' ' + con.lastName}</span>
													</div>
													<div className="list-item__mail">
														<span>{con.mail}</span>
													</div>
													<div className="list-item__phoneNumber">
														<span>+{con.phoneNumber}</span>
													</div>
													<div className="list-item__company">
														<span>{con.company}</span>
													</div>
													<div className="list-item__actions">
														<button onClick={() => setFavourite(con.id)} className={con.isFavourite ? "list-item__favourite _favourited" : "list-item__favourite"}>
															{
																con.isFavourite
																	? <svg width="20" height="20" viewBox="0 0 24 24">
																		<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
																	</svg>
																	: <svg width="20" height="20" viewBox="0 0 24 20">
																		<path fill="none" d="M0 0h24v24H0V0z"></path>
																		<path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
																	</svg>
															}
														</button>
														<button onClick={() => { }}>
															<svg width="20" height="20" viewBox="0 0 24 20">
																<path d="M0 0h24v24H0V0z" fill="none"></path>
																<path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L3 16.82V21h4.18L20.41 7.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path>
															</svg>
														</button>
														<button>
															<svg width="20" height="20" viewBox="0 0 24 20">
																<path fill="none" d="M0 0h24v24H0V0z"></path>
																<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
															</svg>
														</button>
													</div>
												</div>
											)
										}
										return true
									})
								}
							</div>
						</div>
						<div className="contacts__list list-contacts">
							<div className="list-contacts__title">
								КОНТАКТЫ ({contact.length})
							</div>
							<div className="list-contacts__items">
								{
									contact.map((con, i) => {
										return (
											<div key={con.id} className="list-contacts__item list-item _list-item">
												<div className="list-item__name">
													<div className="list-item__drag">
														<svg width="20" height="20" viewBox="0 0 24 24">
															<path fill="none" d="M0 0h24v24H0V0z"></path>
															<path fill="#5f6368" d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
														</svg>
													</div>
													<div className="list-item__logo">
														<div>
															<input type="checkbox" id={"check" + i} />
															<label htmlFor={"check" + i}>
																<svg width="24" height="24" viewBox="0 0 24 24">
																	<path fill="none" d="M0 0h24v24H0V0z"></path>
																	<path fill="#5f6368" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
																</svg>
																<svg width="24" height="24" viewBox="0 0 24 24">
																	<path fill="none" d="M0 0h24v24H0z"></path>
																	<path fill="#1a73e8" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
																</svg>
															</label>
														</div>
														<span>
															{con.firstName[0]}
														</span>
													</div>
													<span>{con.firstName + ' ' + con.lastName}</span>
												</div>
												<div className="list-item__mail">
													<span>{con.mail}</span>
												</div>
												<div className="list-item__phoneNumber">
													<span>+{con.phoneNumber}</span>
												</div>
												<div className="list-item__company">
													<span>{con.company}</span>
												</div>
												<div className="list-item__actions">
													<button onClick={() => setFavourite(con.id)} className={con.isFavourite ? "list-item__favourite _favourited" : "list-item__favourite"}>
														{
															con.isFavourite
																? <svg width="20" height="20" viewBox="0 0 24 24">
																	<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
																</svg>
																: <svg width="20" height="20" viewBox="0 0 24 20">
																	<path fill="none" d="M0 0h24v24H0V0z"></path>
																	<path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
																</svg>
														}
													</button>
													<button onClick={() => { }}>
														<svg width="20" height="20" viewBox="0 0 24 20">
															<path d="M0 0h24v24H0V0z" fill="none"></path>
															<path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L3 16.82V21h4.18L20.41 7.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path>
														</svg>
													</button>
													<button>
														<svg width="20" height="20" viewBox="0 0 24 20">
															<path fill="none" d="M0 0h24v24H0V0z"></path>
															<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
														</svg>
													</button>
												</div>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts;