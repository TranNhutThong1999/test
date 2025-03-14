'use client';
import DropdownIcon from '@/styles/icons/DropdownIcon';
import React, { useState } from 'react';

const ContentRight = () => {
	const [open, setOpen] = useState<boolean>(true);

	const handleClick = (): void => {
		setOpen(!open);
	};

	return (
		<div className="space-y-6">
			<div
				className="flex items-center justify-between  hover:cursor-pointer"
				onClick={handleClick}
			>
				<div className="flex-col font-extrabold text-[24px]">
					Nội dung bài viết
					<div className="flex justify-center ">
						<div className="size-1 "></div>
					</div>
				</div>
				<div className="pb-1">
					<DropdownIcon className={open ? 'rotate-180' : ''} />
				</div>
			</div>
			<div>
				{open ? (
					<ol className="list-none space-y-3">
						{[
							{
								title: '1. Quy trình 5S là gì?',
								bold: true,
							},
							{
								title: '2. Lợi ích quy trình 5S đem lại',
							},
							{
								title: '3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?',
								subpoints: [
									'3.1 Cải thiện rõ nét môi trường làm việc',
									'3.2 Tiết kiệm thời gian đáng kể',
									'3.3 Tăng năng suất làm việc',
									'3.4 Tiết kiệm chi phí',
									'3.5 Tăng chất lượng sản phẩm',
								],
							},
							{
								title: '4. Quy trình 5S gồm các bước:',
								subpoints: [
									'4.1 Seiri (Ngăn nắp)',
									'4.2 Seiton (Sắp xếp)',
									'4.3 Seiso (Vệ sinh)',
									'4.4 Seiketsu (Tiêu chuẩn hóa)',
									'4.5 Shitsuke (Kỷ luật)',
								],
							},
							{
								title: '5. Quy trình được thực hiện như sau:',
								subpoints: [
									'5.1 Giai đoạn chuẩn bị',
									'5.2 Triển khai rộng rãi',
									'5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp',
									'5.4 Sàng lọc, sắp xếp và đánh giá',
									'5.5 Đánh giá',
								],
							},
							{
								title: '6. Quy trình 5S có giống với Kaizen?',
							},
							{
								title: '7. Đối tượng nào nên áp dụng 5S?',
							},
							{
								title: '8. Các yếu tố tạo nên thành công cho quy trình 5S',
							},
						].map((section, index) => (
							<li key={index} className="font-medium">
								<span
									className={
										section.bold
											? 'text-green-600 font-bold'
											: ''
									}
								>
									{section.title}
								</span>
								{section.subpoints && (
									<ol className="ml-6 space-y-3">
										{section.subpoints.map(
											(subpoint, subIndex) => (
												<li key={subIndex}>
													{subpoint}
												</li>
											)
										)}
									</ol>
								)}
							</li>
						))}
					</ol>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default ContentRight;
