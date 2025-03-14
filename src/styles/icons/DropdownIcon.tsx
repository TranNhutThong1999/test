import React from 'react';
interface IProps {
	className?: string;
}
const DropdownIcon = (props: IProps = {}) => {
	return (
		<svg
			width={11}
			height={7}
			viewBox="0 0 11 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M10.854 1.05876L5.85403 6.05876C5.80759 6.10524 5.75245 6.14212 5.69175 6.16729C5.63105 6.19245 5.56599 6.2054 5.50028 6.2054C5.43457 6.2054 5.36951 6.19245 5.30881 6.16729C5.24811 6.14212 5.19296 6.10524 5.14653 6.05876L0.146528 1.05876C0.0527077 0.964935 0 0.837687 0 0.705005C0 0.572323 0.0527077 0.445075 0.146528 0.351255C0.240348 0.257435 0.367596 0.204727 0.500278 0.204727C0.63296 0.204727 0.760208 0.257435 0.854028 0.351255L5.50028 4.99813L10.1465 0.351255C10.193 0.3048 10.2481 0.26795 10.3088 0.242808C10.3695 0.217667 10.4346 0.204727 10.5003 0.204727C10.566 0.204727 10.631 0.217667 10.6917 0.242808C10.7524 0.26795 10.8076 0.3048 10.854 0.351255C10.9005 0.39771 10.9373 0.45286 10.9625 0.513557C10.9876 0.574253 11.0006 0.639308 11.0006 0.705005C11.0006 0.770703 10.9876 0.835757 10.9625 0.896453C10.9373 0.95715 10.9005 1.0123 10.854 1.05876Z"
				fill="#25272A"
			/>
		</svg>
	);
};

export default DropdownIcon;
