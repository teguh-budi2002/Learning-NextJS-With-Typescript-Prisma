import Head from "next/head";
import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      {data.products.map((prod: any) => (
        <ul key={prod.id}>
          <li>{prod.title}</li>
          <li>{prod.description}</li>
          <li>{prod.price}</li>
        </ul>
      ))}
    </div>
  );
}

type Product = {
  products: [
    {
      id: Number;
      title: String;
      description: String;
      price: Number;
      discountPercentage: Number;
      rating: Number;
      stock: Number;
      brand: String;
      category: String;
      thumbnail: String;
      images: [];
    }
  ];
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data: Product[] = await res.json();

  return {
    props: { data },
  };
};
