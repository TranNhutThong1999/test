import LookingIcon from '@/styles/icons/LookingIcon';

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

const ContentRight = () => {
	return (
		<div className="sm:col-span-4 lg:col-span-1 sm:order-1 lg:order-2">
			<div className="font-extrabold text-[36px] leading-[200%] mb-[24px]">
				Tìm kiếm
			</div>
			<div className="w-full mx-auto text-[16px] ">
				<div className="relative bg-white px-2 py-3 rounded-2xl shadow-xl flex items-center">
					<input
						type="text"
						autoFocus
						placeholder="Tìm kiếm bài viết"
						className="w-full text-gray-400 placeholder-[#ACB3C7] text-lg focus:outline-none pl-5"
					/>
					<button className="bg-[#15AA7A] rounded-lg p-3.5">
						<LookingIcon />
					</button>
				</div>
			</div>
			<div className="font-extrabold text-[36px] leading-[200%] mb-[16px] mt-[32px]">
				Danh mục
			</div>
			<div>
				<ul className="divide-y divide-gray-100 text-gray-700 text-[18px]">
					{categories.map((category) => (
						<li
							key={category.name}
							className="flex justify-between py-4 font-medium"
						>
							<span>{category.name}</span>{' '}
							<span className="text-[#667F93]">
								{category.value}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContentRight;
