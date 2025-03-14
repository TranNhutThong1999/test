import LoadMoreIcon2 from '@/styles/icons/LoadMoreIcon2';
import Image from 'next/image';

const Promotion = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[32px]">
			<div className=" py-[61px] flex flex-col justify-around overflow-hidden rounded-[20px] mt-[32px] bg-[linear-gradient(36.82deg,#013DA0_2.16%,#0142A9_12.83%,#0148B3_23.51%,#024EBC_34.18%,#0254C5_44.85%,#025ACE_55.53%,#0261D7_66.2%,#0267E1_76.87%,#036EEA_87.55%,#0375F3_98.22%)]">
				<div className="flex justify-end relative h-[262px]">
					<Image
						src="https://s3-alpha-sig.figma.com/img/2b1d/069a/49b440eeb8a39d570cab95aa2cf616fb?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UbxhgJts2u4U8sPEZY18pGAbZ1lLQHRRQSFkwA~wkrmwZuXUOxyOoKKWwFHum1v192Wv7YHzluAUk3fulNbPe5Sz366XzjJH8gmMKlrkiCUaVRAD-NLoQQPjzK1dm9IJf6NQOLlULMCodxJs1aF~rQVIYxTYAFJr64Yag2jQLzZcuZTBlJg0AyrNw0D7KZtEgpyPCNXrzt6BbKTzcWFpLjezciRV~29lN7XgWalu7DohjF~74w0NEYmzW0KbPhtcQMfxbRXCXoOzTt8qGNsIff2IdYaomTTDaZTJr7pq4JVCrqSjz9GI6GvkPnUu2Rv0eCXarwBzyi8N-FKTTozIoQ__"
						alt="Logo"
						width={425}
						height={262}
						className="left-[calc(20%)] absolute"
					/>
				</div>
				<div className="relative px-[18px] flex mt-[38px] items-center mb-[57px]">
					<Image
						src="/Rectangle.png"
						alt="Logo"
						width={136}
						height={136}
					/>

					<Image
						src="/Frame1171276019.png"
						alt="Logo"
						width={318}
						height={87}
						className="absolute right-3"
					/>
				</div>
				<div className="px-[24px]">
					<button className="w-full flex justify-between items-center gap-2 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-blue-600 transition">
						Tham Gia Ngay
						<LoadMoreIcon2 />
					</button>
				</div>
			</div>
			<div className=" mt-[32px] lg:mt-0 py-[61px] overflow-hidden rounded-[20px] bg-[linear-gradient(36.82deg,#013DA0_2.16%,#0142A9_12.83%,#0148B3_23.51%,#024EBC_34.18%,#0254C5_44.85%,#025ACE_55.53%,#0261D7_66.2%,#0267E1_76.87%,#036EEA_87.55%,#0375F3_98.22%)]">
				<Image
					src="/Group1.png"
					alt="Logo"
					className=" w-full h-auto"
					width={0}
					height={0}
					sizes="100vw"
				/>
				<p className="font-bold text-xl text-white p-[24px]">
					Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát
					triển!
				</p>
				<div className="px-[24px]">
					<button className="w-full flex justify-between items-center gap-2 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-blue-600 transition">
						Tham Gia Ngay
						<LoadMoreIcon2 />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Promotion;
