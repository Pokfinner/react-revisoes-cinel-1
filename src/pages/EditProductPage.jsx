import axios from "axios"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { v4 } from 'uuid';

function EditProductPage() {

    const navigate = useNavigate()

    const { productId } = useParams()

    const [product, setProduct] = useState({
        id: "",
        name: "",
        category: "",
        price: "",
        stock: "",
        brand: "",
        rating: ""
    })

    const handleChange = (e) => {

        // e.target.name // isto obtém o valor que eu estou a editar.
        setProduct(
            {
                ...product,
                [e.target.name]: e.target.value
            }
        )

    }

    useEffect(() => {

        // chamar uma API e renderizar os produtos obtidos
        axios
            .get(`https://my-products-json-app.adaptable.app/products/${productId}`)
            .then(response => {
                setProduct(response.data)
            })

    }, [])

    const handleSubmit = (e) => {

        e.preventDefault()

        // chamar uma API e inserir os dados do novo produto
        axios
            .put(`https://my-products-json-app.adaptable.app/products/${productId}`,
                product
            )
            .then(response => {
                if (response.status == 200) {
                    navigate(`/products/${productId}`)
                }
                else throw `Erro ao inserir produto.`
            })

    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <h1>Editar Produto</h1>

                <div className="form-group">

                    <div className="form-control">
                        <label htmlFor="name">Name:</label>
                        <input name="name" type="text" value={product.name} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-control">
                        <label htmlFor="category">Category:</label>
                        <input name="category" type="text" value={product.category} onChange={handleChange} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="price">Price:</label>
                        <input name="price" type="number" step="any" value={product.price} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-control">
                        <label htmlFor="stock">Stock:</label>
                        <input name="stock" type="number" value={product.stock} onChange={handleChange} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="brand">Brand:</label>
                        <input name="brand" type="text" value={product.brand} onChange={handleChange} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="rating">Rating:</label>
                        <input name="rating" type="number" value={product.rating} onChange={handleChange} />
                    </div>
                </div>

                <input type="submit" value={`Guardar Alterações`} />
            </form >

        </>
    )

}

export default EditProductPage