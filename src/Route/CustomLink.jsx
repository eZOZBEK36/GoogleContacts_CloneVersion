import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

const CustomLink = ({ children, to, activeClass }) => {
	let match = useRouteMatch({
		path: to,
		exact: activeClass
	});
	return (
		<div className={match ? "_router-link _active" : "_router-link"}>
			{match && ""}
			<Link to={to}>{children}</Link>
		</div>
	)
}

export default CustomLink;