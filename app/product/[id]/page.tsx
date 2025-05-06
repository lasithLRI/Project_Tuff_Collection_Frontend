import { use } from "react";

export default function ProductPage({params}: {params: Promise<{ id: string }>}) {
  const { id } = use(params);
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col text-2xl">
      <p>Product page</p>
      <p>Product ID: {id}</p>
    </div>
  );
}