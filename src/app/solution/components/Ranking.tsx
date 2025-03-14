import React from 'react';
import Image from 'next/image';

const Ranking = () => {
	return (
		<div className="bg-white py-6 rounded-3xl shadow-lg w-full text-center mt-[48px]">
			<h2 className="text-xl font-extrabold">
				Bạn thấy bài viết như thế nào?
			</h2>
			<p>4 phản hồi</p>
			<div className="mt-6 flex justify-center">
				<div className="flex gap-[32px]">
					{[
						{
							imgUrl: 'https://s3-alpha-sig.figma.com/img/ee50/301f/f1a1efe576767cd2abd3f1ae0f0968d0?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mEQI~ApNA8oYwneAm2y5zjbs~tlm9-97GSUOFHocM1x4LkawbHnmzMv62Bymrm8VA6bprkXTnCAOD9Abac6vkWypqfQ0wHg6uw7MkJoV2VA6C5cAyRBw6TiHhamAQxuYh6-0p84lZByUzHc7MQcgSij-1MtzU5vyr4FbvbQowzM0jCZ6ENHO44i7PWAZxYDYOBmsijFKIeyHepbbGgiCMYcWGrZe2jZTgb6NG4P-bkDEl99tZRKGom9~ZCIGwJoEvcmXbl2-2EB5JnOtipGmCIaQ5nX2Vy4~KWkIedMF5eLzlWoWhRXJKELViGsR5ZrucuvmragvoU53u3WbaIkWrg__',
							name: 'Hưu ích',
							value: 1,
							checked: true,
						},
						{
							imgUrl: 'https://s3-alpha-sig.figma.com/img/8dd0/bb94/6873e6d01c186237ce9e867f4db87168?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O~XxRQR1RH-fISSVVnW9vWKZh65HtTQOEoGRzXJC7-tkmgSOAttFoohb4EPCS5J0JmpXNjjvo45rJ1Nu7y-8Q0PbJsCHjP-xQ4RpmLTaB8FjdfJ~d~i--F4y8T0Sl2Nt6~gmTQFGlOPl68T5WlYzxSPJt-mNBL~u~yclXCwMsnUSyT-oh8S~y5~LeEw8LpBzCusH2Zo07Q03ywWoyAhRJZFX3vsTcgt-BvFuDPPJz3qRe0OSQAHfH7FITwsDDxfTI1PEwwleVkjAvWgtMFFR6jWzoO47SIedIBKG8ceTeNIvWAwiYcUcJ34xSsHqguPdSBlqL3JN~3pATX5CLupUQQ__',
							name: 'Thú vị',
							value: 0,
						},
						{
							imgUrl: 'https://s3-alpha-sig.figma.com/img/6359/0589/63ca4b772094d9c6031efc6bf4a7a699?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pyc83K7YNbZgDNLDgYMl9OTBZpXCQQXiPuLgqXwiwvJfs-5VSgGS1zcqM2yBLgbgVI-fIBGqZ-mpFA~5Dl7Mryvurbg8MM2pkoXnoTWsOD882rm~dppuVRVkjgYnzZCffQqxIXK8HI7GNhop4A6WjeTKKQm8HH16hr2eL1sPqovX~zzvf7bvMj3zgMZJOSY06E5D6nR82QZc5We426Jpgv5L93NU7j26DHr9bCpZ-C6ZBTgtfUD5MoXS75jSN~5xksN55w9p7Z0KqUKazV0dyntAHzvO~K6kOhsqQwjNl6O5X6WDne2ucVR2cOxyZ6~kHpo5JxMuOS7YWjTmjUcLdg__',
							name: 'Bất ngờ',
							value: 1,
						},
						{
							imgUrl: 'https://s3-alpha-sig.figma.com/img/9cd5/2a6b/24541573171b226839813ae404dbb33f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ve2gWymeB7vNPd9ZpGiAnrW0pJS9RmGzAdIRjTaZgveB5N5I7HcDVrQLUAj~Cj85w32ccscmPVKj42W07ZzG8K4VLQPMC00RVLpbJnvT3F0YTsGx1hcQ3u1OnQ2tCqo6cEo05vCaI7tXdk52D5ApBnSbuyDetsQb~2kcZ5xi8tVURWHxfAzGjjaYJp-Q9fEjo0fBSWqL~6w9mpgPxzmqS1aeBjgFtxsvU5cdoJT3yZuSUVUyUXbDQSO6uJID~zvwxbcRbgSwUaN77HRNzOeAn5UPpe70m8UyxIaOABwGq10VTt2he6fEuaZZAFDt-D-mYW3-moj8hEICDgKCRjliNQ__',
							name: 'Nhàm chán',
							value: 0,
						},
						{
							imgUrl: 'https://s3-alpha-sig.figma.com/img/bfa0/942b/f7f046553c59f188f173a9212d302f46?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E4Bdr6pV3~e7JIdl2tzmHdU3bCMj8~ZFCg63wkFYhGnXuTgkc3gR9Yh2ALrnZY0pjudIAP96wvMYjI-jJqSdwiwxl7DJrn7ftw0EGQDURuJr-MTAwg4Ukl-YZNMaLvZjUj2sS~E73MYahx~KfxgVsJn0KXhS4XtZccveLSE3ILNbLeP3fX5pQA7P~DoJ-GySxOqIni3G1EIc6BXVW31tC6VDGH~HnSakWU4j4iduBoK6po91INJzDZOzNkTK9VEGrLsA5i92Db0zOl95VqwV4D~TNXqW2K0Zjoex4enQdFNictF~bYrC2ZQ4z7TmP52QIr~T0FQ2q0KDee~QoJ6hoA__',
							name: 'Yêu thích',
							value: 2,
						},
						{
							imgUrl: 'https://s3-alpha-sig.figma.com/img/510b/ffe2/3aaae74a2b244607f17e41010dfa21d4?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YpwPTtzkIeSjZTuseSpvQAi~WZFWK90M0-XTYTYG~EwevIyhusD~wo4GgxTJ3ue2BW1Bny343HLbtLIMEbWizhyHnsCpO-NJS0DaRPCKisWEQvtxoQGs9QB-MDFFhc2TcRp~HnpnMB3ZWdfoL1to8tgFB0OOPoLvrKgFiXjdRTPCXbpVTBARuJyMELx2MmZi5w9mAsqvl3LQjVV3xUQExwrfMUTIzS2Df3oyDOiOZxsHLTH0ur3Wx6GvLK3w~u3Ug~Hnw9JRdYi0c0WYLtgrwW22i-gc10nhd2EVXJJ563owuxXoabPFU5rMA1HiNPHlduXDSn9h~9fZtvjb0ciFQA__',
							name: 'Tức giận',
							value: 0,
						},
					].map((item) => (
						<div
							key={item.name}
							className={`text-sm  rounded-sm gap-1 py-1 px-[21px] flex flex-col items-center ${
								item?.checked
									? 'border-green-500 border-2 '
									: 'hover:cursor-pointer'
							}`}
						>
							<Image
								src={item.imgUrl}
								alt="Logo"
								width={48}
								height={48}
							/>
							<span className="text-green-600 font-bold font-base">
								{item.value}
							</span>
							<p className="text-green-600">{item.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Ranking;
