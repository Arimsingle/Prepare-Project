import ProductCard from "./ProductCard"
const ProductList = () => {
    return (
        <div>
            <div>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <style jsx global>{`
                body {
                margin: 0;
                }
            `}</style>
        </div>
    )
}
export default ProductList;