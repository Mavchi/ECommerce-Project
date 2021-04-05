import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import { Link } from 'react-router-dom'


const useStyles = makeStyles({
	root: {},
	media: {
		height: "250px",
	},
})

const ProductCard = ({ product }) => {
	const classes = useStyles()
	console.log(product.thumbnail.default)

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card className={classes.root}>
				<Link to={`/${product.uri}/`}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image={product.thumbnail.default}
							title={product.name}
						/>
					</CardActionArea>
				</Link>
				<CardContent>
					<Typography align="center" variant="h5" component="h2">
						{product.name}
					</Typography>
					<Typography align="center" variant="body1" component="h5">
						{product.price + " €"}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}

const Products = ({ products }) => {
	const classes = useStyles()

	return (
		<Container component="main" className={classes.cardGrid}>
			<Grid container spacing={4}>
				{products.map(product => <ProductCard key={product.id} product={product} />)}
			</Grid>
		</Container>
	)
}

export default Products