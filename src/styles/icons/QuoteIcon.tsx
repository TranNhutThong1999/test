import React from 'react';

interface IProps {
	className?: string;
}
const QuoteIcon = (props: IProps = {}) => {
	return (
		<svg
			width={48}
			height={31}
			viewBox="0 0 48 31"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M0.941125 22.4561C0.941125 20.0881 1.51713 17.7841 2.66913 15.5441C3.82113 13.2401 5.26113 11.1601 6.98913 9.30412C8.78113 7.38412 10.7651 5.72012 12.9411 4.31212C15.1811 2.84012 17.3571 1.68812 19.4691 0.856121L22.2531 4.88812C19.8851 6.68012 18.0931 8.28012 16.8771 9.68812C15.7251 11.0961 15.1491 12.5041 15.1491 13.9121C15.1491 16.1521 16.9411 18.5841 20.5251 21.2081C20.5251 22.7441 20.2371 24.1201 19.6611 25.3361C19.0851 26.5521 18.2851 27.5761 17.2611 28.4081C16.3011 29.2401 15.1811 29.8801 13.9011 30.3281C12.6851 30.7761 11.4051 31.0001 10.0611 31.0001C7.43713 31.0001 5.26113 30.2961 3.53313 28.8881C1.80513 27.4801 0.941125 25.3361 0.941125 22.4561ZM26.3811 22.4561C26.3811 20.0881 26.9571 17.7841 28.1091 15.5441C29.2611 13.2401 30.7011 11.1601 32.4291 9.30412C34.2211 7.38412 36.2051 5.72012 38.3811 4.31212C40.6211 2.84012 42.7971 1.68812 44.9091 0.856121L47.5971 4.88812C45.2931 6.68012 43.5331 8.28012 42.3171 9.68812C41.1651 11.0961 40.5891 12.5041 40.5891 13.9121C40.5891 16.1521 42.3811 18.5841 45.9651 21.2081C45.9651 22.7441 45.6771 24.1201 45.1011 25.3361C44.5251 26.5521 43.7251 27.5761 42.7011 28.4081C41.7411 29.2401 40.6211 29.8801 39.3411 30.3281C38.0611 30.7761 36.7491 31.0001 35.4051 31.0001C32.8451 31.0001 30.7011 30.2961 28.9731 28.8881C27.2451 27.4801 26.3811 25.3361 26.3811 22.4561Z"
				fill="#15AA7A"
			/>
		</svg>
	);
};

export default QuoteIcon;
