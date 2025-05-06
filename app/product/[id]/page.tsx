interface ProductPageProps {
    params: {
      id: string;
    };
  }
  
  export default async function ProductPage(props: Readonly<ProductPageProps>) {

    const params = await props.params;

    const { id } = params;
  
    return (
      <div className="w-screen h-screen flex justify-center items-center flex-col text-2xl">
        <p>Product page</p>
        <p>Product ID: {id}</p>
      </div>
    );
  }