import React, { useState } from 'react';
import cl from './DropDown.module.scss';

const DropDown = ({ droppedElement, children, className, activeClassName }) => {
	const [isDropDowned, setIsDropDowned] = useState(false)
	return (
		<div onClick={() => setIsDropDowned(!isDropDowned)} className={isDropDowned ? [cl._drop, className, activeClassName].join(' ') : [cl._drop, className].join(' ')}>
			{children}
			<div className={cl._drop_children}>
				{droppedElement}
			</div>
		</div>
	)
}

export default DropDown;