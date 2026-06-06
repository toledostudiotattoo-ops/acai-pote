import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-50 flex flex-col items-center justify-center p-8">
      <Image
        src="/logo.png"
        alt="Açaí no Pote"
        width={300}
        height={300}
        priority
      />

      <h1 className="text-5xl font-bold mt-6 text-purple-900">
        🍇 Açaí no Pote
      </h1>

      <p className="mt-4 text-xl text-center">
        O melhor açaí da região
      </p>

      <div className="mt-6 text-center space-y-2">
        <p>✅ Entrega Grátis</p>
        <p>✅ Pagamento via PIX</p>
        <p>✅ Atendimento pelo WhatsApp</p>
      </div>

      <a
        href="/catalogo"
        className="mt-8 bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-bold transition"
      >
        Ver Catálogo
      </a>
    </main>
  );
}