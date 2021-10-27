import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomLink = ({children, to, divClassName, linkActiveClassName}) => {
	return (
		<div className={divClassName}>
			<NavLink activeClassName={linkActiveClassName} to={to}>
				{children}
			</NavLink>
		</div>
	)
}

export default CustomLink;