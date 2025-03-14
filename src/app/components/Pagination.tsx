import React from 'react';
import VectorRight from '@/styles/icons/VectorRight';

const pagination = () => {
	return (
		<div className="flex items-center justify-around space-x-4 text-gray-600 mt-[72px] text-base font-semibold">
			<a
				href="#"
				className="flex items-center space-x-1 text-[#B3C5D4] hover:text-gray-700"
			>
				<span className="flex gap-3 items-center">
					<VectorRight className="rotate-180 text-[#B3C5D4]" /> Trang
					trước
				</span>
			</a>

			<div className="flex items-center ">
				<span className="px-[17px] py-2 bg-[#D1F7EA] text-[#052B1E] rounded-[10px]">
					1
				</span>
				<a
					href="#"
					className="px-[17px] py-2 text-[#809FB8] hover:text-gray-800 rounded-[10px]"
				>
					2
				</a>
				<a
					href="#"
					className="px-[17px] py-2 text-[#809FB8] hover:text-gray-800 rounded-[10px]"
				>
					3
				</a>
				<span className="px-3 py-1">...</span>
				<a
					href="#"
					className="px-[17px] py-2 text-[#809FB8] hover:text-gray-800 rounded-[10px]"
				>
					8
				</a>
				<a
					href="#"
					className="px-[17px] py-2 text-[#809FB8] hover:text-gray-800 rounded-[10px]"
				>
					9
				</a>
				<a
					href="#"
					className="px-[17px] py-2 text-[#809FB8] hover:text-gray-800 rounded-[10px]"
				>
					10
				</a>
			</div>

			<a
				href="#"
				className="flex items-center space-x-1 text-gray-500 hover:text-gray-700"
			>
				<span className="flex gap-3 items-center">
					Trang kế tiếp <VectorRight />
				</span>
			</a>
		</div>
	);
};

export default pagination;
