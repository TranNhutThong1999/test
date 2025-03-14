'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
//
interface IBreadcrumbProps {
	data: Array<{ name: string; key: string; path: string }>;
}
const Breadcrumb = ({ data }: IBreadcrumbProps) => {
	const pathname = usePathname();
	return (
		<nav className="text-gray-500 text-sm">
			{data?.map((item, index) =>
				pathname != item.path ? (
					<>
						<Link
							key={item.key}
							href={item.path}
							className="hover:text-gray-700 hover:cursor-pointer"
						>
							{item?.name}
						</Link>
						{index < data.length - 1 && <span> &gt; </span>}
					</>
				) : (
					<span key={item.key} className="font-semibold text-black">
						{item?.name}
					</span>
				)
			)}
		</nav>
	);
};

export default Breadcrumb;
