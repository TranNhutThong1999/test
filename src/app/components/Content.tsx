import Card from '@/components/card';
import React from 'react';
import Image from 'next/image';
import LoadMoreIcon2 from '@/styles/icons/LoadMoreIcon2';

const Content = () => {
	return (
		<div className="col-span-4 lg:col-span-3  order-2 lg:order-1">
			<div className="font-extrabold text-[36px] leading-[200%] mb-[24px]">
				Tất cả bài viết
			</div>
			<div className="grid py-4 sm:py-0 grid-cols-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-3xl ">
				<div className="col-span-2 sm:col-span-1 flex items-center justify-center">
					<div className="max-w-[350px] px-4 ">
						<h2 className=" font-bold text-xl  sm:text-3xl lg:text-4xl ">
							Gia nhập cộng đồng <br />
							<span className="text-white">
								FMRP – Kết nối, chia sẻ, cùng phát triển!
							</span>
						</h2>
						<button className="mt-4 flex items-center gap-2 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-blue-600 transition">
							Tham Gia Ngay
							<LoadMoreIcon2 />
						</button>
					</div>
				</div>
				<div className="hidden sm:block col-span-1 ">
					<Image
						src="/group.png"
						alt="Logo"
						width={472}
						height={400}
					/>
				</div>
			</div>
			<div className="mt-[48px] grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[48px]">
				<Card key={1} />
				<Card key={2} />
				<Card key={3} />
				<Card key={4} />
				<Card key={5} />
				<Card key={6} />
			</div>
		</div>
	);
};

export default Content;
