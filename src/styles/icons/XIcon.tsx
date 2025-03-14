import React from 'react';

interface IProps {
	className?: string;
}
const XIcon = (props: IProps = {}) => {
	return (
		<svg
			width={48}
			height={48}
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect
				x={0.5}
				y={0.500092}
				width={47}
				height={47}
				rx={15.5}
				stroke="#15AA7A"
			/>
			<path
				d="M30.3263 13.904H33.6998L26.3297 22.3275L35 33.79H28.2112L22.894 26.838L16.8099 33.79H13.4344L21.3174 24.7801L13 13.904H19.9611L24.7674 20.2583L30.3263 13.904ZM29.1423 31.7708H31.0116L18.9454 15.8171H16.9395L29.1423 31.7708Z"
				fill="#15AA7A"
			/>
		</svg>
	);
};

export default XIcon;
