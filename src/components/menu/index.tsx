'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import DropdownIcon from '@/styles/icons/DropdownIcon';
import LoadMoreIcon from '@/styles/icons/LoadMoreIcon';
import FlagIcon from '@/styles/icons/FlagIcon';
import { FiMenu, FiX } from 'react-icons/fi';

const Menu = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = (): void => {
		setIsOpen(!isOpen);
	};
	const handleClickHome = (): void => {
		router.push('/');
	};

	return (
		<div className="flex justify-center p-[24px] text-sm text-[#25272A] sticky top-0 bg-[#F9FBFC] z-10">
			<nav className="flex items-center justify-center px-6 py-3 rounded-[40px] bg-white shadow-sm max-w-[1280px]">
				<div className="flex items-center  md:gap-[64px]">
					<div className="flex items-center space-x-2 flex-1">
						<Image
							src="/FOSO_Logo_Final_1-1400x579.png"
							alt="Logo"
							width={134}
							height={55}
						/>
					</div>
					<button
						className="md:hidden mx-5"
						onClick={toggleMenu}
						aria-label="Toggle Menu"
					>
						{isOpen ? <FiX /> : <FiMenu />}
					</button>

					<div
						className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-50 ${
							isOpen ? 'block' : 'hidden'
						} md:hidden`}
					>
						<button onClick={toggleMenu} className="text-2xl mb-4">
							<FiX />
						</button>

						<ul className="flex flex-col md:hidden mt-[10px] gap-[8px] font-medium">
							<li className="hover:text-black p-[8px]">
								<a href="#">Về Chúng tôi</a>
							</li>

							<li className="relative group">
								<button className="flex items-center hover:text-black p-[8px] gap-[8px]">
									<div className="flex-col">
										Giải pháp
										<div className="flex justify-center ">
											<div className="size-1 "></div>
										</div>
									</div>
									<div className="pb-1">
										<DropdownIcon />
									</div>
								</button>
								<ul className="absolute -right-[100px] top-0 z-10 pt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
									<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
										Giải pháp 1
									</li>
								</ul>
							</li>

							<li className="relative group">
								<button className="inline-flex items-center font-bold p-[8px] gap-[8px] hover:text-black">
									<div className="flex-col">
										Tài nguyên
										<div className="flex justify-center mt-1">
											<div className="size-1.5 bg-[#1AD598] border-none rounded-full ml-1"></div>
										</div>
									</div>
									<div className="pb-2.5">
										<DropdownIcon />
									</div>
								</button>

								<ul className="absolute -right-[100px] top-0 pt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
									<li className="relative group/submenu">
										<button
											onClick={handleClickHome}
											className="w-full text-left inline-flex items-center px-4 py-2 hover:bg-gray-100  justify-between"
										>
											Blog
											<DropdownIcon />
										</button>

										<ul className="absolute -right-[100px]  top-0 mt-0 w-40 bg-white shadow-lg rounded-md hidden group-hover/submenu:block">
											<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
												<Link href="/solution">
													Quản lý sản xuất
												</Link>
											</li>
										</ul>
									</li>
								</ul>
							</li>

							<li className="hover:text-black p-[8px]">
								<a href="#">Liên hệ</a>
							</li>
						</ul>
					</div>

					<ul className="hidden md:flex mt-[10px] gap-[8px] font-medium">
						<li className="hover:text-black p-[8px]">
							<a href="#">Về Chúng tôi</a>
						</li>

						<li className="relative group">
							<button className="flex items-center hover:text-black p-[8px] gap-[8px]">
								<div className="flex-col">
									Giải pháp
									<div className="flex justify-center ">
										<div className="size-1 "></div>
									</div>
								</div>
								<div className="pb-1">
									<DropdownIcon />
								</div>
							</button>
							<ul className="absolute left-0 pt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
								<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
									Giải pháp 1
								</li>
							</ul>
						</li>

						<li className="relative group">
							<button className="flex items-center font-bold p-[8px] gap-[8px] hover:text-black">
								<div className="flex-col">
									Tài nguyên
									<div className="flex justify-center mt-1">
										<div className="size-1.5 bg-[#1AD598] border-none rounded-full ml-1"></div>
									</div>
								</div>
								<div className="pb-2.5">
									<DropdownIcon />
								</div>
							</button>

							<ul className="absolute left-0 pt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
								<li className="relative group/submenu">
									<button
										onClick={handleClickHome}
										className="w-full text-left items-center px-4 py-2 hover:bg-gray-100 flex justify-between"
									>
										Blog
										<DropdownIcon />
									</button>

									<ul className="absolute left-full top-0 mt-0 w-40 bg-white shadow-lg rounded-md hidden group-hover/submenu:block">
										<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
											<Link href="/solution">
												Quản lý sản xuất
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</li>

						<li className="hover:text-black p-[8px]">
							<a href="#">Liên hệ</a>
						</li>
					</ul>

					<div className="flex items-center gap-[8px]">
						<button className="flex items-center bg-gray-200 px-3 py-2 rounded-full">
							<FlagIcon className="w-5 h-5" />
							<span className="mx-2">VI</span>
							<DropdownIcon />
						</button>

						<button className="text-[#052B1E] font-bold bg-[#1AD598] px-4 py-2 rounded-full flex gap-[12px] items-center hover:bg-green-600">
							<span className=" hidden lg:block">
								Trở Thành Khách Hàng
							</span>
							<LoadMoreIcon />
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Menu;
