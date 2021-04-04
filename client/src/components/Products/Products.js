import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
    root: {
        maxWidth: "250px",
    },
    media: {
        height: "250px",
    },
})

const ProductCard = ({ product }) => {
    const classes = useStyles()
    console.log(product.thumbnail.default)

    return (
        
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={product.thumbnail.default}
                    title={product.name}
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                </Typography>
            </CardContent>
        </Card>
    )
}

const Products = ({ products }) => {
    return (
        <main>
            {products.map(product => <ProductCard key={product.id} product={product} />)}
        </main>
    )
}

export default Products