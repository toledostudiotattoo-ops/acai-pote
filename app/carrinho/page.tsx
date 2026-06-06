export default function Carrinho() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold mb-6">
          Meu Carrinho
        </h1>

        <div className="border-b pb-4 mb-4">
          <h2 className="font-bold">
            2 Açaís 500ml
          </h2>

          <p>Quantidade: 1</p>

          <p className="font-bold text-purple-700">
            R$ 30,00
          </p>
        </div>

        <div className="border-b pb-4 mb-4">
          <h2 className="font-bold">
            Complementos
          </h2>

          <p>Nutella (+ R$ 5,00)</p>
          <p>Morango (+ R$ 3,00)</p>
        </div>

        <div className="bg-green-100 p-4 rounded-xl mb-6">
          <p>🚚 Entrega Grátis</p>

          <p className="font-bold text-2xl mt-2">
            Total: R$ 38,00
          </p>
        </div>

        <a
          href="/checkout"
          className="block text-center bg-purple-700 text-white py-4 rounded-xl font-bold"
        >
          Finalizar Compra
        </a>

      </div>
    </main>
  );
}