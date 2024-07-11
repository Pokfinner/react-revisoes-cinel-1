import { Link } from "react-router-dom"

function Navbar(props) {



    return (
        <nav>

            <Link to="/">
                Home
            </Link>

            <Link to="/new-product">
                New Product
            </Link>

            <Link to="/products">
                Products
            </Link>

        </nav>
    )

}

export default Navbar