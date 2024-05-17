import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";

async function getData() {
  const res = await fetch('https://dummyjson.com/products')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Home() {
  const data = await getData()

  return (
    <main>
      <Hero/>
      <Products data={data?.products}/>
      <Footer/>
    </main>
  );
}
