import { notFound } from "next/navigation";
import { ACRYLIC_PRODUCTS } from "../data/AcyrlicData"
import ProductDescription from "./components/ProductDescription";

const BASE_URL = "https://hexalam.com";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = ACRYLIC_PRODUCTS.find(
    (pro) => slug === pro.slug
  );

  if (!product) {
    return {};
  }

  const productUrl = `${BASE_URL}/laminates/acrylic-laminates/${slug}`;

  return {
    title: product.title,
    description:
      product.metaDescription ||
      `Explore ${product.title} from Hexa Lam premium acrylic laminates collection.`,

    alternates: {
      canonical: productUrl,
    },

    openGraph: {
      title: product.title,
      description:
        product.metaDescription ||
        `Premium ${product.title} acrylic laminate by Hexa Lam.`,
      url: productUrl,
      siteName: "Hexa Lam",
      type: "website",
      images: product.img
        ? [
            {
              url: product.img,
              width: 1200,
              height: 630,
              alt: product.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.metaDescription,
    },
  };
}


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