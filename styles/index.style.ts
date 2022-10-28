import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
	container: {
		[theme.fn.largerThan('xs')]: {
			padding: theme.spacing.xs
		},
		[theme.fn.largerThan('sm')]: {
			padding: theme.spacing.sm
		},
		[theme.fn.largerThan('md')]: {
			padding: theme.spacing.md
		},
		[theme.fn.largerThan('lg')]: {
			padding: theme.spacing.lg
		},
		[theme.fn.largerThan('xl')]: {
			padding: theme.spacing.xl
		}
	},
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 2
	},

	content: {
		maxWidth: 480,
		marginRight: theme.spacing.xl * 3,

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			marginRight: 0
		}
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 48,
		lineHeight: 1.2,
		fontWeight: 900,

		[theme.fn.smallerThan('xs')]: {
			fontSize: 28
		}
	},

	control: {
		[theme.fn.smallerThan('xs')]: {
			flex: 1
		}
	},

	image: {
		flex: 1,

		[theme.fn.smallerThan('md')]: {
			display: 'none'
		}
	},

	highlight: {
		position: 'relative',
		backgroundColor: theme.fn.variant({
			variant: 'light',
			color: theme.primaryColor
		}).background,
		borderRadius: theme.radius.sm,
		padding: '4px 12px'
	}
}))
