import React from 'react'
import Search from '../components/Search/Search'
import Categories from '../components/Categories/Categories'
import SortBy from '../components/SortBy/SortBy'
import Products from '../components/Products/Products'

const products = [
    {
    thumbnail: {
        default: 'https://source.unsplash.com/random',
        hover: 'https://source.unsplash.com/random',
    },
    name: 'ASdf dasd',
    uri: 'ASdf-dasd',
    id: 0,
    price: 19.34,
    description: 'ASD alsdmalsm ödasmölaskm ldkasm dlkasmldsakmdlkasmdldaskm laskdm laskdmlasm dlsakm dlaskm dlas kmdlaskdmlaskdmaslkdm',
    categories: ['Featured', 'asdasd'],
    },
    {
    thumbnail: {
        default: 'https://source.unsplash.com/random',
        hover: 'https://source.unsplash.com/random',
    },
    name: 'Lodk da',
    uri: 'Lodk-da',
    id: 1,
    price: 9.89,
    description: 'ASD alsdmalsm ödasmölaskm ldkasm dlkasmldsakmdlkasmdldaskm laskdm laskdmlasm dlsakm dlaskm dlas kmdlaskdmlaskdmaslkdm',
    categories: ['Featured', 'asdasd'],
    },
    {
    thumbnail: {
        default: 'https://source.unsplash.com/random',
        hover: 'https://source.unsplash.com/random',
    },
    name: 'Lksdajl ldasd',
    uri: 'Lksdajl-ldasd',
    id: 2,
    price: 14.99,
    description: 'ASD alsdmalsm ödasmölaskm ldkasm dlkasmldsakmdlkasmdldaskm laskdm laskdmlasm dlsakm dlaskm dlas kmdlaskdmlaskdmaslkdm',
    categories: ['Featured', 'asdasd'],
    },
]

const Shop = () => {
    return (
        <React.Fragment>
            <Search />
            <Categories />
            <SortBy />
            <Products products={products}/>
        </React.Fragment>
    )
}

export default Shop