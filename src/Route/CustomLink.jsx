import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomLink = ({ children, to, divClassName, linkActiveClassName, exact }) => {
	return (
		<div className={divClassName}>
			<NavLink exact activeClassName={linkActiveClassName} to={to}>
				{children}
			</NavLink>
		</div>
	)
}
export default CustomLink;