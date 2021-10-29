import React from 'react';
import { useHistory } from 'react-router';

const GoBack = ({ attr, children }) => {
	const history = useHistory()
	return (
		<button {...attr} onClick={history.goBack}>
			{children}
		</button>
	)
}

export default GoBack;