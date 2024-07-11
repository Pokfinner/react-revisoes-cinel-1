import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'

function ProductDetailsPage() {

    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        // chamar uma API e renderizar os produtos obtidos
        axios
            .get(`https://my-products-json-app.adaptable.app/products/${productId}`)
            .then(response => {
                setProduct(response.data)
            })

    }, [])

    // DELETE
    const eliminateProduct = () => {
        axios
            .delete(`https://my-products-json-app.adaptable.app/products/${productId}`)
            .then(response => {
                if (response.status == 200) {
                    navigate(`/products`)
                }
            })
    }

    return (

        <div className='product-details-page'>

            <div>
                <Link to={`/products`}>Return</Link>
            </div>

            Product Details Page for the product with ID {productId}!

            {!product ?
                <div>Loading...</div> :
                <div className='product-item'>
                    <div>
                        Product Name: {product.name}
                    </div>
                    <div>
                        Product Category: {product.category}
                    </div>
                    <div>
                        Product Price: {product.price}
                    </div>
                    <div>
                        Product Stock: {product.stock}
                    </div>
                    <div>
                        Product Brand: {product.brand}
                    </div>
                    <div>
                        Product Rating: {product.rating}
                    </div>
                </div>
            }

            <button style={{ backgroundColor: "darkred" }} onClick={eliminateProduct}> Eliminar Produto </button>
            <button style={{ backgroundColor: "darkgreen" }} onClick={() => navigate(`/products/${productId}/edit`)}> Editar Produto </button>

        </div>
    )

}

export default ProductDetailsPage