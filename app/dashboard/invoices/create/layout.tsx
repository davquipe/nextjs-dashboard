import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Create Invoice',
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
