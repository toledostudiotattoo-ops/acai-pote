import Image from "next/image";

const produtos = [
  {
    id: 1,
    nome: "2 Açaís 300ml",
    preco: 20,
    imagem: "/produtos/acai-garrafa.jpg",
  },
  {
    id: 2,
    nome: "2 Açaís 500ml",
    preco: 30,
    imagem: "/produtos/acai-morango.jpg",
  },
  {
    id: 3,
    nome: "2 Açaís 700ml",
    preco: 65,
    imagem: "/produtos/acai-premium.jpg",
  },
  {
    id: 4,
    nome: "1 Açaí 1 Litro",
    preco: 60,
    imagem: "/produtos/acai-premium.jpg",
  },
];

export default function Catalogo() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center mb-10">
        Catálogo Açaí no Pote
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <Image
              src={produto.imagem}
              alt={produto.nome}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">
                {produto.nome}
              </h2>

              <p className="text-3xl font-bold text-purple-700 mt-4">
                R$ {produto.preco.toFixed(2)}
              </p>

              <a
                href={`/checkout?produto=${encodeURIComponent(produto.nome)}&preco=${produto.preco}`}
                className="block text-center mt-4 bg-purple-700 text-white py-3 rounded-xl"
              >
                Comprar
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}