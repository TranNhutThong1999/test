import React from 'react';

interface IProps {
	className?: string;
}
const FlagIcon = (props: IProps = {}) => {
	return (
		<svg
			width={25}
			height={25}
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clipPath="url(#clip0_37_353)">
				<path
					d="M12.5 24.705C19.1274 24.705 24.5 19.3324 24.5 12.705C24.5 6.07758 19.1274 0.705002 12.5 0.705002C5.87258 0.705002 0.5 6.07758 0.5 12.705C0.5 19.3324 5.87258 24.705 12.5 24.705Z"
					fill="#D80027"
				/>
				<path
					d="M12.4995 6.96587L13.7946 10.9516H17.9855L14.595 13.4149L15.89 17.4007L12.4995 14.9373L9.10908 17.4007L10.4041 13.4149L7.01367 10.9516H11.2045L12.4995 6.96587Z"
					fill="#FFDA44"
				/>
			</g>
			<defs>
				<clipPath id="clip0_37_353">
					<rect
						width={24}
						height={24}
						fill="white"
						transform="translate(0.5 0.705002)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default FlagIcon;
