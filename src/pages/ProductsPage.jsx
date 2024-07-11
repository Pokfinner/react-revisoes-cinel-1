import Product from '../components/Product'
import { useState, useEffect } from 'react'
import axios from 'axios'

function ProductsPage() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        // chamar uma API e renderizar os produtos obtidos
        axios
            .get("https://my-products-json-app.adaptable.app/products/")
            .then(response => {

                const obtainedProducts = response.data

                setProducts(obtainedProducts)
            })


    }, [])

    return (


        <div className='products-page'>

            {!products.length ?
                <>Loading...</> :
                products.map(product => <Product key={product.id} product={product} />)
            }

        </div>
    )

}

export default ProductsPage