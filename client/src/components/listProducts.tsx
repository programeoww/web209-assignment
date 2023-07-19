import { Link } from "react-router-dom";
import IProduct from "../interfaces/product";

function ListProducts({products = [], limit = 5, type = "row"} : {products: IProduct[], limit?: number, type?: "row" | "slider"}) {
    return (
        type === "row" && (
            <div className="flex flex-wrap -m-3">
                {
                    products.slice(0, limit).map((product, index) => (
                        <div className="w-1/5 p-3" key={index}>
                            <Link to={`/product/${product._id!}`} className="block shadow p-2 hover:shadow-lg duration-150 cursor-pointer h-full">
                                <div className="relative pt-[100%] overflow-hidden mb-4 rounded-2xl">
                                    <img className="absolute top-0 mx-auto h-full right-0 left-0 bottom-0 object-contain" src={product.image as string} alt={`${product.name} cover image`} />
                                </div>
                                <p className="uppercase font-bold text-primary text-xs">{product.author}</p>
                                <h4 className="capitalize font-bold">{product.name}</h4>
                                <p className="text-primary font-bold text-xl my-2">${product.price}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        )
    );
}

export default ListProducts;