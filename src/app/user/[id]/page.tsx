'use client';

import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import Cart from '../../../components/cart/cart';
import { useDispatch, useSelector } from 'react-redux';
import {
	decrement,
	fetchPosts,
	increment,
} from '@/redux/features/counterSlice';

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

const invoices = [
	{
		invoice: 'INV001',
		paymentStatus: 'Paid',
		totalAmount: '$250.00',
		paymentMethod: 'Credit Card',
	},
	{
		invoice: 'INV002',
		paymentStatus: 'Pending',
		totalAmount: '$150.00',
		paymentMethod: 'PayPal',
	},
	{
		invoice: 'INV003',
		paymentStatus: 'Unpaid',
		totalAmount: '$350.00',
		paymentMethod: 'Bank Transfer',
	},
	{
		invoice: 'INV004',
		paymentStatus: 'Paid',
		totalAmount: '$450.00',
		paymentMethod: 'Credit Card',
	},
	{
		invoice: 'INV005',
		paymentStatus: 'Paid',
		totalAmount: '$550.00',
		paymentMethod: 'PayPal',
	},
	{
		invoice: 'INV006',
		paymentStatus: 'Pending',
		totalAmount: '$200.00',
		paymentMethod: 'Bank Transfer',
	},
	{
		invoice: 'INV007',
		paymentStatus: 'Unpaid',
		totalAmount: '$300.00',
		paymentMethod: 'Credit Card',
	},
];

const page = () => {
	const params = useParams();
	const id = params.id; // Lấy `id` từ URL

	const count = useSelector((state: any) => state.counter);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts() as any); // ✅ Gọi API khi load trang
	}, [dispatch]);


	return (
		<>
			<h1>User của người dùng: {id}</h1>
			;
			<Cart />
			<div className="mt-4 space-x-4">
				<button
					onClick={() => dispatch(increment())}
					className="px-4 py-2 bg-blue-500 text-white rounded"
				>
					+
				</button>
				<button
					onClick={() => dispatch(decrement())}
					className="px-4 py-2 bg-red-500 text-white rounded"
				>
					-
				</button>
			</div>
			<Table>
				<TableCaption>A list of your recent invoices.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Invoice</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Method</TableHead>
						<TableHead className="text-right">Amount</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{invoices.map((invoice) => (
						<TableRow key={invoice.invoice}>
							<TableCell className="font-medium">
								{invoice.invoice}
							</TableCell>
							<TableCell>{invoice.paymentStatus}</TableCell>
							<TableCell>{invoice.paymentMethod}</TableCell>
							<TableCell className="text-right">
								{invoice.totalAmount}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total</TableCell>
						<TableCell className="text-right">$2,500.00</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</>
	);
};

export default page;
