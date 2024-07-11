import React from 'react'
import { Link } from 'react-router-dom'

function Product(props) {

    const { product } = props

    return (
        <Link to={`/products/${product.id}`}>
            <div className='product-item'>
                <div>{product.name}</div>
                <div>{product.price}</div>
            </div>
        </Link>
    )
}

export default Product