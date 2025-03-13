import React from 'react';
import Image from 'next/image';
import DropdownIcon from '@/components/ui/svg/DropdownIcon';
import FlatIcon from '@/components/ui/svg/FlagIcon';
import LoadMoreIcon from '@/components/ui/svg/LoadMoreIcon';

const Page = () => {
	return (
		<div className="flex justify-center text-sm text-[#25272A] bg-[#F9FBFC]">
			<nav className="flex items-center justify-center px-6 py-3 rounded-[40px] bg-white shadow-sm w-[1280px]">
				<div className="flex items-center gap-[64px]">
					<div className="flex items-center space-x-2">
						<Image
							src="/FOSO_Logo_Final_1-1400x579.png"
							alt="Logo"
							width={134}
							height={55}
							priority
						/>
					</div>

					<ul className="flex gap-[8px] font-medium">
						<li className="hover:text-black p-[8px]">
							<a href="#">Về Chúng tôi</a>
						</li>

						<li className="relative group">
							<button className="flex items-center hover:text-black p-[8px] gap-[8px]">
								Giải pháp
								<DropdownIcon />
							</button>
							<ul className="absolute left-0 pt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
								<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
									Giải pháp 1
								</li>
								<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
									Giải pháp 2
								</li>
								<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
									Giải pháp 3
								</li>
							</ul>
						</li>

						<li className="relative group">
							<button className="flex items-center font-bold p-[8px] gap-[8px] hover:text-black">
								<div className="flex-col gap-1">
									Tài nguyên
									<span className="w-2 h-2 bg-green-500 rounded-full ml-1"></span>
								</div>
								<DropdownIcon />
							</button>
							<ul className="absolute left-0 pt-2  w-48  bg-white shadow-lg rounded-lg hidden group-hover:block">
								<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
									Tài nguyên 1
								</li>
								<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
									Tài nguyên 2
								</li>
							</ul>
						</li>

						<li className="hover:text-black p-[8px]">
							<a href="#">Liên hệ</a>
						</li>
					</ul>

					<div className="flex items-center gap-[8px]">
						<button className="flex items-center bg-gray-200 px-3 py-2 rounded-full">
							<FlatIcon />
							<span className="mx-2">VI</span>
							<DropdownIcon />
						</button>

						<button className="text-[#052B1E] font-bold bg-[#1AD598] px-4 py-2 rounded-full flex gap-[12px] items-center hover:bg-green-600">
							Trở Thành Khách Hàng
							<LoadMoreIcon />
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Page;
