import React from 'react';

interface IProps {
	className?: string;
}
const FacebookIcon = (props: IProps = {}) => {
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
				d="M30 15.0001H27C24.2386 15.0001 22 17.2387 22 20.0001V22.0001H18V26.0001H22V33.0001H26V26.0001H30V22.0001H26V20.0001C26 19.4478 26.4477 19.0001 27 19.0001H30V15.0001Z"
				fill="#15AA7A"
			/>
		</svg>
	);
};

export default FacebookIcon;
