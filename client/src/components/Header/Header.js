import React from 'react'
import {Link as RouterLink} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
	'@global': {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: 'none',
		},
		AppBar: {
			padding: theme.spacing(1, 1.5),
		},
		toolBar: {},
		link: {},
	},
}))

const Header = () => {
	const classes = useStyles()

	return (
		<React.Fragment>
			<AppBar position="static" color="default" elevation={0} className={classes.AppBar}>
					<nav>
						<Link component={RouterLink} variant="button" color="textPrimary" to="/login/" className={classes.link}>
							{"Log in "}
						</Link>
						<Link component={RouterLink} variant="button" color="textPrimary" to="/signup/" className={classes.link}>
							{"Sign Up "}
						</Link>
						<Link component={RouterLink} variant="button" color="textPrimary" to="/cart/" className={classes.link}>
							{"Cart"}
						</Link>
					</nav>
			</AppBar>
		</React.Fragment>
	)
}

export default Header