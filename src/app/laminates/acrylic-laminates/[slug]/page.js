import { notFound } from "next/navigation";
import { ACRYLIC_PRODUCTS } from "../data/AcyrlicData"
import ProductDescription from "./components/ProductDescription";

export default async function ProductPage({params}){
    const {slug} = await params
    const product = ACRYLIC_PRODUCTS.find(pro=>slug===pro.slug);
    if (!product){
        return notFound();
    }
    return(
        <ProductDescription product={product} />
    )
}