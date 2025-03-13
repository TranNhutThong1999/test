import Menu from '@/components/menu/menu';
import React from 'react';
import Image from 'next/image';
import LoadMoreIcon2 from '@/components/ui/svg/LoadMoreIcon2';
import Card from '@/components/card';
import LookingIcon from '@/components/ui/svg/LookingIcon';
import VectorRight from '@/components/ui/svg/VectorRight';

const categories = [
	{
		name: 'Tất cả',
		value: 108,
	},
	{
		name: 'Thiết Kế Website',
		value: 36,
	},
	{
		name: 'Thiết Kế App Mobile',
		value: 13,
	},
	{
		name: 'Quản Lý Sản Xuất',
		value: 25,
	},
	{
		name: 'Quản Lý Bán Hàng',
		value: 22,
	},
	{
		name: 'Báo Chí Nói Về FOSO',
		value: 7,
	},
	{
		name: 'Tin Tức FOSO',
		value: 5,
	},
];
export default function Home() {
	return (
		<div className="bg-[#F9FBFC] pb-5">
			<Menu />
			<div className="flex justify-around">
				<div className="flex justify-center items-center">
					<Image
						src="/schedule.png"
						alt="Logo"
						width={195}
						height={158}
					/>
				</div>
				<div className="">
					<div className="flex justify-center items-center py-4 pt-[48px] pb-[64px] ">
						<nav className="text-gray-500 text-sm">
							<a href="#" className="hover:text-gray-700">
								Trang chủ
							</a>
							<span> &gt; </span>
							<a href="#" className="hover:text-gray-700">
								Tài nguyên
							</a>
							<span> &gt; </span>
							<span className="font-semibold text-black">
								Blog
							</span>
						</nav>
					</div>
					<div className="text-center text-[64px]  font-normal leading-[100px]">
						Blog{' '}
						<span className=" font-bold bg-gradient-to-r from-[#5CBF94] to-[#79C6A5] text-transparent bg-clip-text">
							FOSO
						</span>{' '}
						–
						<br />
						Cập Nhật Tin Tức{' '}
						<div className="relative inline-block ">
							<span className="absolute inset-x-0 bottom-[13] h-6 bg-[#A3EAC4] rounded-lg mx-1"></span>
							<span className="relative font-bold">Mới Nhất</span>
						</div>
					</div>
					<div className="flex justify-center mb-[16px]">
						Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản
						xuất ngay!
					</div>
				</div>
				<div className="flex justify-center items-center">
					<Image src="/pen.png" alt="Logo" width={282} height={268} />
				</div>
			</div>
			<div className="grid grid-cols-12 min-h-screen mt-[96px]">
				<div className="grid grid-cols-4 col-span-10 col-start-2  gap-[32px]">
					<div className="col-span-3">
						<div className="font-extrabold text-[36px] leading-[200%] mb-[24px]">
							Tất cả bài viết
						</div>
						<div className="grid grid-cols-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-3xl ">
							<div className="col-span-1 flex items-center justify-center">
								<div className="w-[350px]">
									<h2 className=" font-bold text-[36px] leading-[100%]">
										Gia nhập cộng đồng <br />
										<span className="text-white">
											FMRP – Kết nối, chia sẻ, cùng phát
											triển!
										</span>
									</h2>
									<button className="mt-4 flex items-center gap-2 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-blue-600 transition">
										Tham Gia Ngay
										<LoadMoreIcon2 />
									</button>
								</div>
							</div>
							<div className="col-span-1">
								<Image
									src="/group.png"
									alt="Logo"
									width={472}
									height={400}
								/>
							</div>
						</div>
						<div className="mt-[48px] grid grid-cols-2 gap-x-[32px] gap-y-[48px]">
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
						</div>
					</div>
					<div className="col-span-1">
						<div className="font-extrabold text-[36px] leading-[200%] mb-[24px]">
							Tìm kiếm
						</div>
						<div className="w-full max-w-xl mx-auto text-[16px] ">
							<div className="relative bg-white px-2 py-3 rounded-2xl shadow-xl flex items-center">
								<input
									type="text"
									placeholder="Tìm kiếm bài viết"
									className="w-full text-gray-400 placeholder-[#ACB3C7] text-lg focus:outline-none pl-5"
								/>
								<button className="bg-[#15AA7A] rounded-lg p-3.5">
									<LookingIcon />
								</button>
							</div>
						</div>
						<div className="font-extrabold text-[36px] leading-[200%] mb-[24px] mt-[32px]">
							Danh mục
						</div>
						<div className=" ">
							<ul className="divide-y divide-gray-100 text-gray-700 text-[18px]">
								{categories.map((category) => (
									<li className="flex justify-between py-4 font-medium">
										<span>{category.name}</span>{' '}
										<span className="text-[#667F93]">
											{category.value}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-around space-x-4 text-gray-600 mt-[72px] text-base font-semibold">
				<a
					href="#"
					className="flex items-center space-x-1 text-[#B3C5D4] hover:text-gray-700"
				>
					<span className="flex gap-3 items-center">
						<VectorRight className="rotate-180 text-[#B3C5D4]" />{' '}
						Trang trước
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
		</div>
	);
}
