'use client'
import RootStyleRegistry from './emotion'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en-US">
			<body>
				<RootStyleRegistry>{children}</RootStyleRegistry>
			</body>
		</html>
	)
}
