import React from 'react';

const LockIcon = (props) => {
	return (
		<svg
			width={20}
			height={21}
			viewBox="0 0 20 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M10 0.660156C8.07164 0.660156 6.18657 1.23198 4.58319 2.30333C2.97982 3.37467 1.73013 4.89741 0.992179 6.67899C0.254225 8.46057 0.061142 10.421 0.437348 12.3123C0.813554 14.2036 1.74215 15.9409 3.10571 17.3044C4.46928 18.668 6.20656 19.5966 8.09787 19.9728C9.98919 20.349 11.9496 20.1559 13.7312 19.418C15.5127 18.68 17.0355 17.4303 18.1068 15.827C19.1782 14.2236 19.75 12.3385 19.75 10.4102C19.7473 7.82513 18.7192 5.34677 16.8913 3.51888C15.0634 1.69099 12.585 0.662886 10 0.660156ZM10 18.6602C8.36831 18.6602 6.77326 18.1763 5.41655 17.2698C4.05984 16.3633 3.00242 15.0748 2.378 13.5673C1.75358 12.0598 1.5902 10.401 1.90853 8.80066C2.22685 7.20032 3.01259 5.73031 4.16637 4.57653C5.32016 3.42274 6.79017 2.63701 8.39051 2.31868C9.99085 2.00035 11.6497 2.16373 13.1571 2.78815C14.6646 3.41257 15.9531 4.47 16.8596 5.8267C17.7661 7.18341 18.25 8.77846 18.25 10.4102C18.2475 12.5974 17.3775 14.6944 15.8309 16.241C14.2843 17.7877 12.1873 18.6577 10 18.6602ZM16 10.4102C16 10.6091 15.921 10.7998 15.7803 10.9405C15.6397 11.0811 15.4489 11.1602 15.25 11.1602H10C9.80109 11.1602 9.61033 11.0811 9.46967 10.9405C9.32902 10.7998 9.25 10.6091 9.25 10.4102V5.16016C9.25 4.96124 9.32902 4.77048 9.46967 4.62983C9.61033 4.48917 9.80109 4.41016 10 4.41016C10.1989 4.41016 10.3897 4.48917 10.5303 4.62983C10.671 4.77048 10.75 4.96124 10.75 5.16016V9.66016H15.25C15.4489 9.66016 15.6397 9.73917 15.7803 9.87983C15.921 10.0205 16 10.2112 16 10.4102Z"
				fill="#667F93"
			/>
		</svg>
	);
};

export default LockIcon;
