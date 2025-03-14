import Card from '@/components/card';
import Menu from '@/components/menu';

import Content from './components/Content';
import ContentRight from './components/ContentRight';
import Breadcrumb from '@/components/breadcrumb';

const Page = () => {
	return (
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
				<div className="col-span-1"></div>

				<div className="grid grid-cols-10 col-span-10 col-start-2 gap-[48px]">
					<div className="col-span-7">
						<Content />
					</div>
					<div className="col-span-3 ">
						<ContentRight />
					</div>
					<div className="space-y-6 col-span-10 mt-5 ">
						<div className="font-extrabold text-[36px] leading-[200%]">
							Bài viết liên quan
						</div>
						<div className="grid grid-cols-3 gap-8 !ml-0 ">
							<Card key={1} />
							<Card key={2} />
							<Card key={3} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
