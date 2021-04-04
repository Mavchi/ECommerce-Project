import React from 'react'
import cx from 'classnames'
import { Link as RouterLink } from 'react-router-dom'

import {
	Link
} from '@material-ui/core'

import { nav, nav__logo, nav__logoText, nav__menu, nav__menuItem} from './Menu.module.scss'

const Menu = () => {
	return (
		<React.Fragment>
			<section position="static" color="default" elevation={0} className={nav}>
				<div className={nav__logo}>
					<span className={nav__logoText}>
						{'E-Commerce Project'}
					</span>
				</div>
				<nav className={nav__menu}>
					<Link component={RouterLink} variant="button" color="textPrimary" to="/shop/" className={nav__menuItem}>
						{"Shop"}
					</Link>
					<Link component={RouterLink} variant="button" color="textPrimary" to="/about/" className={nav__menuItem}>
						{"About"}
					</Link>
					<Link component={RouterLink} variant="button" color="textPrimary" to="/contact/" className={nav__menuItem}>
						{"Contact"}
					</Link>
				</nav>
			</section>
		</React.Fragment>
	)
}

export default Menu
