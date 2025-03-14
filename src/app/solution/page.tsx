import Card from '@/components/card';
import Menu from '@/components/menu';

import Breadcrumb from '@/components/breadcrumb';
import BearIcon from '@/styles/icons/BearIcon';
import FacebookIcon from '@/styles/icons/FacebookIcon';
import InIcon from '@/styles/icons/InIcon';
import XIcon from '@/styles/icons/XIcon';
import ZaloIcon from '@/styles/icons/ZaloIcon';
import Content from './components/Content';
import ContentRight from './components/ContentRight';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Foso - Quy trình 5S',
	description: 'Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết',
	keywords: ['application', 'software', 'Foso', 'blog', '5S'],
	authors: [{ name: 'Foso' }],
	openGraph: {
		title: 'Foso - Quy trình 5S',
		description: 'Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết',
		images: ['/FOSO_Logo_Final_1-1400x579.png'],
		type: 'website',
	},
	icons: {
		icon: '/favicon.ico',
	},
};

const Page = () => {
	return (
		<>
			<div className="bg-[#F9FBFC] font-raleway pb-5">
				<Menu />
				<div className="grid grid-cols-12 min-w-screen mt-2">
					<div className="col-start-2 col-span-10 ">
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
								{
									name: 'Quản lý sản xuất',
									key: 'solution',
									path: '/solution',
								},
							]}
						/>
					</div>
				</div>

				<div className="grid grid-cols-12 min-h-screen mt-[52px]">
					<div className="col-span-1 flex justify-center  ">
						<div className=" text-center space-x-2 fixed">
							<div className="font-extrabold text-base mb-2">
								Chia sẻ
							</div>
							<div className="flex flex-col gap-2 justify-center">
								<a className="hover:cursor-pointer">
									<ZaloIcon />
								</a>
								<a className="hover:cursor-pointer">
									<FacebookIcon />
								</a>
								<a className="hover:cursor-pointer">
									<XIcon />
								</a>
								<a className="hover:cursor-pointer">
									<InIcon />
								</a>
								<a className="hover:cursor-pointer">
									<BearIcon />
								</a>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-10 col-span-10 col-start-2 gap-[48px]">
						<div className=" sm:col-span-10 lg:col-span-7  sm:order-2 lg:order-1">
							<Content />
						</div>
						<div className=" sm:col-span-10 lg:col-span-3 sm:order-1 lg:order-2">
							<ContentRight />
						</div>
						<div className="space-y-6 col-span-10 mt-5 order-3">
							<div className="font-extrabold text-[36px] leading-[200%]">
								Bài viết liên quan
							</div>
							<div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 !ml-0 ">
								<Card key={1} />
								<Card key={2} />
								<Card key={3} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
