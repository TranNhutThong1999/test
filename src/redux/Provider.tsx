'use client'; // Redux cần chạy trong Client Component

import { store } from './store';
import { Provider } from 'react-redux';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
	return <Provider store={store}>{children}</Provider>;
}
