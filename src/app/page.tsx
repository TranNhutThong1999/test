import Menu from '@/components/menu';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Content from './components/Content';
import ContentRight from './components/ContentRight';
import Pagination from './components/Pagination';
import Breadcrumb from '@/components/breadcrumb';

export default function Home() {
	return (
		<>
			<Head>
				<title>Foso - Blog</title>
				<meta name="description" content="Foso - Blog" />
				<meta
					name="keywords"
					content="application, software, Foso, blog"
				/>
				<meta name="author" content="Foso" />
				<meta property="og:title" content="Foso - Blog" />
				<meta property="og:description" content="Foso - Blog" />
				<meta
					property="og:image"
					content="/FOSO_Logo_Final_1-1400x579.png"
				/>
				<meta property="og:type" content="website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
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
							<Breadcrumb
								data={[
									{
										name: 'Trang chủ',
										key: 'home',
										path: '/home',
									},
									{
										name: 'Tài nguyên',
										key: 'resourse',
										path: '/resourse',
									},
									{
										name: 'Blog',
										key: 'blog',
										path: '/',
									},
								]}
							/>
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
								<span className="absolute inset-x-0 bottom-[13px] h-6 bg-[#A3EAC4] rounded-lg mx-1"></span>
								<span className="relative font-bold">
									Mới Nhất
								</span>
							</div>
						</div>
						<div className="flex justify-center mb-[16px]">
							Cùng FOSO khám phá kiến thức, xu hướng công nghệ và
							sản xuất ngay!
						</div>
					</div>
					<div className="flex justify-center items-center">
						<Image
							src="/pen.png"
							alt="Logo"
							width={282}
							height={268}
						/>
					</div>
				</div>
				<div className="grid grid-cols-12 min-h-screen mt-[96px]">
					<div className="grid grid-cols-4 col-span-10 col-start-2  gap-[32px]">
						<Content />
						<ContentRight />
					</div>
				</div>
				<Pagination />
			</div>
		</>
	);
}
