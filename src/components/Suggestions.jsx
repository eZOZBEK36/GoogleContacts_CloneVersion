import React from 'react';
import DropDown from '../UI/DropDown/DropDown';

const Suggestions = (props) => {
	return (
		<div>
			<DropDown className="_dropdown" activeClassName="_active" droppedElement={
				<p>DropDown Element</p>
			}>
				<svg width="20" height="20" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path></svg>
			</DropDown>
			<DropDown className="_dropdown" activeClassName="_active" droppedElement={
				<p>DropDown2 Element</p>
			}>
				<svg width="20" height="20" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path></svg>
			</DropDown>
		</div>
	)
}

export default Suggestions;