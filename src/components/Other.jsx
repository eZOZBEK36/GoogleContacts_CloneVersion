import React, { useState } from 'react';

const Other = (props) => {
	const [color, setColor] = useState('#000');
	const [left, setLeft] = useState(0);
	const [top, setTop] = useState(0);
	const [blur, setBlur] = useState(0);
	const [spread, setSpread] = useState(0);
	const [shadowColor, setShadowColor] = useState('#000')
	const [topRight, setTopRight] = useState(0);
	const [topLeft, setTopLeft] = useState(0);
	const [bottomLeft, setBottomLeft] = useState(0);
	const [bottomRight, setBottomRight] = useState(0);
	return (
		<div className="boxshadov">
			<input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
			<input type="range" value={left} onChange={(e) => setLeft(e.target.value)} />
			<input type="range" value={top} onChange={(e) => setTop(e.target.value)} />
			<input type="range" value={blur} onChange={(e) => setBlur(e.target.value)} />
			<input type="range" value={spread} onChange={(e) => setSpread(e.target.value)} />
			<input type="color" value={shadowColor} onChange={(e) => setShadowColor(e.target.value)} />
			<div>
				<input type="range" value={topLeft} onChange={(e) => setTopLeft(e.target.value)} />
				<input type="range" value={topRight} onChange={(e) => setTopRight(e.target.value)} />
				<input type="range" value={bottomRight} onChange={(e) => setBottomRight(e.target.value)} />
				<input type="range" value={bottomLeft} onChange={(e) => setBottomLeft(e.target.value)} />
			</div>
			<div
				className="boxshadovblock"
				style={
					{
						backgroundColor: '#000',
						boxShadow: `${left}px ${top}px ${blur}px ${spread}px ${shadowColor}`,
						borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
					}
				}></div>
		</div>
	)
}

export default Other;