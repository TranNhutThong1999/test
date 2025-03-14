import React from 'react';
import Image from 'next/image';
import Ranking from './Ranking';
import ScheduleIcon from '@/styles/icons/ScheduleIcon';
import LockIcon from '@/styles/icons/LockIcon';

const h2 = 'text-[#15AA7A] font-bold text-lg pt-2';

const Content = () => {
	return (
		<>
			<div className=" flex flex-col gap-4">
				<div>
					<span className="bg-blue-100 inline text-[#0F4F9E]  text-xs font-medium px-2 py-1 rounded-[8px]">
						Quản Lý Sản Xuất
					</span>
				</div>
				<h1 className="font-raleway font-extrabold text-[36px] leading-[100%] tracking-normal align-middle capitalize">
					Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
				</h1>

				<div className="flex items-center justify-between text-gray-500 text-sm mt-[24px]">
					<div className="flex items-center gap-3">
						<div className="size-[64px] rounded-full flex justify-center items-center">
							<Image
								src="/user_logo.png"
								alt="Logo"
								className=""
								width={32}
								height={32}
							/>
						</div>
						<div>
							<p className="text-xs font-medium text-[#667F93]">
								Tác giả
							</p>
							<p className="font-bold text-base text-[#33404A]">
								FOSO Creator
							</p>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<div className="flex items-center gap-3 text-[#667F93]">
							<ScheduleIcon />
							<span>
								Cập nhật vào: <span>17/11/2022</span>
							</span>
						</div>

						<div className="h-5 w-px bg-gray-300"></div>

						<div className="flex items-center gap-3 text-[#667F93]">
							<LockIcon />
							<span>10 phút đọc</span>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-6 flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<Image
						src="https://s3-alpha-sig.figma.com/img/3c2e/9e54/043c2dc1df0b9a516b94427df3ad144d?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rxh899ADJSUF~~t3ZdaWzAqmzybf5zxaRhB7E-XaqONn2pmeWMorM6~27b0PafR5SK7p-TNzo~CeFrz1Nvz7iLp5EdEgXetXYs7MURu6Zvo3cmUZxwpHdk5byAoGxc8eNwqVUDQQ~96yo4nQyUFXz1MAw2CeT0w1Bx6UsDkv8eviM~cbD-D3VUivLRPabeHCnOVX27R1NthYY1X5wi-~nivnJhKCVkvyUm1lJunqI9UQGv3qKcHt3~n6VYHaUNGXPPyqxkgCyBtoVEb8zONqj9vd4agc5qb~bC4ZaJ~ccAISqyp~e5pZMMQ1OQ46sz6oVP1O7M45ilQWCO0nisj8Tg__"
						alt="Logo"
						className="rounded-[10px] w-auto h-auto"
						width={0}
						height={0}
						sizes="100vw"
					/>
					<div className="text-base text-[#667F93] text-center">
						Quy trình 5s là gì?
					</div>
				</div>
				<div className="flex items-start gap-3  p-4 rounded-lg mt-[36px]">
					<p className="font-raleway text-[#33404A] font-medium italic text-[20px] leading-[24px] tracking-[0%] text-center">
						Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S
						là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của
						FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình
						này cũng như yếu tố tạo nên thành công của quy trình bạn
						nhé.
					</p>
				</div>
				<div className="mt-4 space-y-5 font-medium text-base leading-[150%] tracking-normal">
					<h2 className={h2}>1. Quy trình 5S là gì?</h2>

					<p>
						Quy trình 5S được biết đến là mô hình quản trị tinh gọn
						trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ
						sở hoa anh đào Nhật Bản.
					</p>

					<p>
						Quy trình 5S hiện nay đang được rất nhiều nước trên thế
						giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy
						trình này bao gồm 5 chữ S đầu trong tiếng Nhật:
					</p>

					<ul className="mt-4 list-disc marker:text-[#15AA7A] pl-6 ">
						<li>
							<span className="text-[#15AA7A] font-semibold">
								Seiri
							</span>{' '}
							(Ngăn nắp)
						</li>
						<li>
							<span className="text-[#15AA7A] font-semibold">
								Seiso
							</span>{' '}
							(Sạch sẽ)
						</li>
						<li>
							<span className="text-[#15AA7A] font-semibold">
								Seiton
							</span>{' '}
							(Trật tự)
						</li>
						<li>
							<span className="text-[#15AA7A] font-semibold">
								Shitsuke
							</span>{' '}
							(Kỷ luật)
						</li>
						<li>
							<span className="text-[#15AA7A] font-semibold">
								Seiketsu
							</span>{' '}
							(Tiêu chuẩn hóa)
						</li>
					</ul>

					<h2 className={h2}>2. Lợi ích quy trình 5S đem lại</h2>

					<p>
						Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể
						hiện cho mỗi bước của quy trình với mục đích cải tiến
						môi trường làm việc của doanh nghiệp.
					</p>

					<p>
						Khi doanh nghiệp áp dụng quy trình vào trong tổ chức,
						doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo
						nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn,
						các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
						dễ dàng tìm kiếm khi cần thiết.
					</p>

					<p>
						Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo
						ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp
						phần vào tạo nên một văn hóa doanh nghiệp tích cực.{' '}
					</p>
					<div className="flex flex-col gap-2">
						<Image
							src="https://s3-alpha-sig.figma.com/img/4563/6b8c/cab8950d8e2e5b6260cc5f935988f9e3?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OTnZE7VMlSIg-wXa9LEoV0IXE4v-T4x~ce8NQu90gPQ8blXuedq7lF30qrNgTuLchBxwM4u3wGZXJ~Yu9RyRH6XJ3rhE5983GSd9Mo6~RPFxcIKHI98JwrSDJvbyhC-W4sIEJas-5YggcHoqQg26n~XqvvqxkY5VQ3gBphu84BZo5eOwPekaamIZhkxcciPx9aJ9jEAu1uk7Y9x55dv7Z11IvjkkquRaD7C9nStMAAziKJqRFA7saPyfcHDIEatZXNDJrkCpgYeyaDxXrvdO5VzSn2cSefRl5-YI7mkAaJZVIO5hu3CQO5rMucKng113U2U1l1JU3nefeURFiXPj-A__"
							alt="Logo"
							className="rounded-[10px] w-auto h-auto"
							width={0}
							height={0}
							sizes="100vw"
						/>
						<div className=" text-[#667F93] text-center">
							Tại sao doanh nghiệp cần quy trình 5S?
						</div>
					</div>
					<h2 className={h2}>
						3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
					</h2>

					<p>
						Có thể nói quy trình được áp dụng rộng rãi tại các doanh
						nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này
						càng chứng minh rõ nét tính hiệu quả của quy trình đem
						lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy
						trình:
					</p>

					<ul className="space-y-5 ">
						{[
							{
								title: '3.1 Cải thiện rõ nét môi trường làm việc',
								content:
									'Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.',
							},
							{
								title: '3.2 Tiết kiệm thời gian đáng kể',
								content:
									'Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.',
							},
							{
								title: '3.3 Tăng năng suất làm việc',
								content:
									'Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.',
							},
							{
								title: '3.4 Tiết kiệm chi phí',
								content:
									'Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.',
							},
							{
								title: '3.5 Tăng chất lượng sản phẩm',
								content:
									'5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.',
							},
						].map((item, index) => (
							<li key={index}>
								<h3 className="text-green-500 font-semibold">
									{item.title}
								</h3>
								<p>{item.content}</p>
							</li>
						))}
					</ul>
					<div className="flex flex-col gap-2">
						<Image
							src="https://s3-alpha-sig.figma.com/img/aca4/ad52/0d964d5a355eb835e1850fadc975c3ec?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oPfROj-WHokHNo9paHIv~o0kdruzEFg0VT1HhloRjxXRmrkKpfRn963p7ZjXsWrA4PuQZZtsOuYMYpqKgWVZFahz20h-mbyflQ2UvI9AJ4nIaf11EKSsVHW~UnP-yh4Vub107nNHvyjcBMHyIgumQKnlRyolFk68g2-SrNHHvPHbg-R5DrMLTEDdO4JsZB19U7~IVC-5kN8IA20mNiAVMV5UquZDvGcOc2rysbgdMso56Oq1zohBooy7Qsabga3Pl6gUkikiy746ZZRm1rGZjeM4Mo1Mmyk70F4i28gk2p8j-sQ5byj1-rC4zJIEwaSL5W2CGIUb4HplyaZEpXN4Cg__"
							alt="Logo"
							className="rounded-[10px] w-auto h-auto"
							width={0}
							height={0}
							sizes="100vw"
						/>
						<div className=" text-[#667F93] text-center">
							Quy trình 5s gồm các bước
						</div>
					</div>
					<h2 className={h2}>4. Quy trình 5S gồm các bước</h2>

					<p>
						5S là một phương pháp quản lý tổ chức, sắp xếp và tăng
						cường hiệu quả làm việc trong một tổ chức hoặc doanh
						nghiệp. 5S bao gồm năm bước cơ bản sau:
					</p>

					<ul className="space-y-5">
						{[
							{
								title: '4.1 Seiri (Ngăn nắp)',
								content:
									'Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.',
							},
							{
								title: '4.2 Seiton (Sắp xếp)',
								content:
									'Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.',
							},
							{
								title: '4.3 Seiso (Vệ sinh)',
								content:
									'Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.',
							},
							{
								title: '4.4 Seiketsu (Tiêu chuẩn hóa)',
								content:
									'Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.',
							},
							{
								title: '4.5 Shitsuke (Kỷ luật)',
								content:
									'Đây cũng là bước cuối cùng trong quy trình 5S. Bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi mỗi nhân viên có một thói quen kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức thực thi và tuân thủ theo quy trình.',
							},
						].map((item, index) => (
							<li key={index}>
								<h3 className="text-green-500 font-semibold">
									{item.title}
								</h3>
								<p>{item.content}</p>
							</li>
						))}
					</ul>
					<div className="flex flex-col gap-2">
						<Image
							src="https://s3-alpha-sig.figma.com/img/3012/23da/92e5913dc28eee4002bbae19871f9c95?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l0qKXLYRBJCa4TYPlej7BFCw0yU-ewY9qbeHDyLynpAPNiIuovpn9ru~fa8ztTNMfgNuRAj0Fhn0l0o2DkxkHx-YjFtqEcpQIrEj02lbqw9nnD5QYGbjbRDuNwVg40EZ2GvUV3byoNZRDnXSBw4gSKf5~zsLQ-kik0usE2O-CCWqaEcK9TCFm2b6E720cNwBuJZJSvzJ9gS-cX7lQEjG1bkuxZ60LM0oSJeQdnkMxKo4WjddtW9qgYpRQ1QxCSHBalsm2pioAheuYZNDBqe3-J~0JVToXy3FV6J-uTiiVF-7RsF1pKtLqfd0219cN9MF8bNnz0uTh6LwdSduB-XVlw__"
							alt="Logo"
							className="rounded-[10px] w-auto h-auto"
							width={0}
							height={0}
							sizes="100vw"
						/>
						<div className=" text-[#667F93] text-center">
							Các bước thực hiện quy trình 5s
						</div>
					</div>
					<h2 className={h2}>5. Quy trình được thực hiện như sau:</h2>

					<p>
						Có thể nói quy trình được áp dụng rộng rãi tại các doanh
						nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này
						càng chứng minh rõ nét tính hiệu quả của quy trình đem
						lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy
						trình:
					</p>

					<ul className=" space-y-5 ">
						{[
							{
								title: '5.1 Giai đoạn chuẩn bị',
								content:
									'Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S hiệu quả hơn.',
							},
							{
								title: '5.2 Triển khai rộng rãi',
								content:
									'Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.',
							},
							{
								title: '5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp',
								content:
									'Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.',
							},
							{
								title: '5.4 Sàng lọc, sắp xếp và đánh giá',
								content:
									'Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.',
							},
							{
								title: '5.5 Đánh giá',
								content:
									'Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.',
							},
						].map((item, index) => (
							<li key={index}>
								<h3 className="text-green-700 font-semibold">
									{item.title}
								</h3>
								<p>{item.content}</p>
							</li>
						))}
					</ul>
					<h2 className={h2}>6. Quy trình 5S có giống với Kaizen?</h2>

					<p>
						Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với
						Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm
						khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với
						nhau.
					</p>

					<div className="space-y-5 border-l-[3px] border-green-600 pl-9 py-2">
						<p className=" italic text-xl ">
							Về Kaizen, thì đây được xem là một triết lý cải tiến
							liên tục trong doanh nghiệp. Phương pháp này nhằm
							tạo ra sự thay đổi tích cực, mang tính liên tục và
							bền vững.
						</p>
					</div>
					<div className="space-y-5 border-l-[3px] border-green-600 pl-9 py-2">
						<p className="  italic text-xl">
							Còn đối với quy tắc 5S, đây là một phương pháp quản
							lý và cải tiến trong sản xuất. 5S tập trung vào việc
							sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật
							trong môi trường làm việc.
						</p>
					</div>

					<p>
						Tuy nhiên, quy trình 5S được xem là một phần của Kaizen.
						Và quy tắc này đóng vai trò quan trọng trong việc tạo ra
						môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường
						được sử dụng làm bước đầu tiên trong quá trình cải tiến
						liên tục của phương pháp Kaizen để tạo ra một nền tảng
						vững chắc cho các hoạt động cải tiến tiếp theo.
					</p>
					<h2 className={h2}>7. Đối tượng nào nên áp dụng 5S?</h2>

					<p>
						Quy trình 5S được xem là phương pháp quản lý được áp
						dụng rộng rãi ở nhiều ngành công nghiệp và các loại
						doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt
						cho các doanh nghiệp sản xuất, các cơ quan hành chính,
						các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.
					</p>

					<p>
						Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt
						động phức tạp, các trang thiết bị và vật dụng phải được
						quản lý và sử dụng hiệu quả.
					</p>
					<div className="flex flex-col gap-2">
						<Image
							src="https://s3-alpha-sig.figma.com/img/dba1/89ad/0c990ce2db7276da34630a0782d968e4?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uLIsmAVtMaRl8JExkC6Hf6AbTL~yPxR8anVO1W8mAt2YQ0gX97uW6P3mai-qipM1LRlgK7bngh19MP5qUbNlRYt2gs4ZOtVfOgF1fn0cocsyesSavO0~RXMYTf5PB4AEnuectTbVzFCW8Og2hW2j8vZouqzCmz1aKFPF8ZhBx~9LLm9BqaHccPj1Zc-EJNvs0pFVTuLttKLrHYCNNN9rRlUQuXr4y0flCg25DFsX~PlojXWDCXNHC~TJaknOy8yI5sHg8TsyqVcAbJgHIruZOFFKt6t1JV6CEstN5HSshEs2a5nhylfyUJUfA~qTNleSGC4qMDdTslx2zlj2wbSb5w__"
							alt="Logo"
							className="rounded-[10px] w-auto h-auto"
							width={0}
							height={0}
							sizes="100vw"
						/>
						<div className="text-base text-[#667F93] text-center">
							Các yếu tố tạo nên thành công cho quy trình 5S
						</div>
					</div>

					<h2 className={h2}>
						8. Các yếu tố tạo nên thành công cho quy trình 5S
					</h2>

					<p>
						Những nhân tố quyết định đến quá trình thành công của
						quy trình nhằm cải tiến môi trường làm việc của doanh
						nghiệp đó là từ phía:
					</p>

					<ul className="list-disc pl-6 space-y-2">
						<li>
							Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào
							doanh nghiệp. Bởi đây yếu tố quan trọng nhất để
							quyết định doanh nghiệp có áp dụng quy tắc này hay
							không.
						</li>
						<li>
							ChChương trình, kế hoạch thực hiện quy trình: Sau
							khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận
							đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S. 
						</li>
						<li>
							Sự tự nguyện tham gia của toàn thể nhân viên: Doanh
							nghiệp cần huy động và khuyến khích nhân viên tự
							nguyện thực hiện vì lợi ích chung của tổ chức, của
							doanh nghiệp.
						</li>
					</ul>

					<p>
						Đồng thời, trên đây là các yếu tố tạo nên sự thành công
						nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt
						trước khi bắt tay vào triển khai quy trình 5S vào doanh
						nghiệp của mình. Và với những thông tin bổ ích như trên,
						FOSO mong rằng phần nào giúp được doanh nghiệp của bạn
						phát triển, cải tiến vượt bậc trong tương lai.
					</p>
				</div>
			</div>
			<Ranking />
		</>
	);
};

export default Content;
