import React from 'react';
import LockIcon from '@/components/ui/svg/LockIcon';
import ScheduleIcon from '@/components/ui/svg/ScheduleIcon';
import VectorRight from '@/components/ui/svg/VectorRight';
import Image from 'next/image';

const Card = () => {
	return (
		<div className=" bg-white overflow-hidden">
			<Image
				src="https://s3-alpha-sig.figma.com/img/fb49/59c7/3f1f17145ea689bd38538129e6319827?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R-f8XekEVKJvlW7Im7nHLy-KhUp~Hknh3V61muhhQW8~TcvDMYp3deJqMVWyg8KgKPMoJ4NV1wLJB0TX48dei7ng9ThEPi1eBK6GZJaYVYsfVkX1K~SuMLLF3HCqayaqfjW1SHB3ofege4FApP-Bb19ogENRegk0uM64ElU2klir0CC1BUHQK1hxOZFzk5W7rqWdIEpohxzQwJWhS4VemDuutxnBJiNIGK~XfvJwIa9h5g3cnwR0mJXGYtZqwb6A-ArUSNuspIcOA8rsSKDrTG0GVmeh~9TPuun2yAA9KxHE3wljrqSoWLOYl3IpnWqR2ad90Xp8~-wze38OuWk7Mg__"
				alt="BOM là gì?"
				width={505}
				height={475}
				className="rounded-2xl"
			/>
			<div className="p-4 mt-[8px]">
				<span className="bg-blue-100 text-[#0F4F9E] text-xs font-medium px-2 py-1 rounded-[8px]">
					Quản Lý Sản Xuất
				</span>

				<h3 className="mt-3 text-[24px] font-bold text-[#33404A]">
					Tại sao BOM quan trọng trong quản lý sản xuất?
				</h3>

				<div className="flex gap-[12px] items-center text-gray-500 text-sm mt-2">
					<span className=" flex gap-[12px] items-center">
						<ScheduleIcon /> 17/11/2022
					</span>
					|
					<span className="flex gap-[12px] items-center">
						<LockIcon /> 10 phút đọc
					</span>
				</div>

				<a
					href="#"
					className="mt-3 text-[#667F93] flex gap-[31px] font-semibold items-center "
				>
					Khám phá thêm <VectorRight />
				</a>
			</div>
		</div>
	);
};

export default Card;
