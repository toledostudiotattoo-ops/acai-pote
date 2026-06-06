"use client";

import { useState } from "react";

export default function Checkout() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  // TESTE FIXO
  const produto = "Açaí";
  const preco = 20;

  const total = preco * quantidade;

  const enviarWhatsApp = () => {
    const mensagem = encodeURIComponent(
`Olá! Gostaria de fazer um pedido.

Produto: ${produto}
Valor Unitário: R$ ${preco.toFixed(2)}
Quantidade: ${quantidade}

Total: R$ ${total.toFixed(2)}

Nome: ${nome}
Telefone: ${telefone}
Endereço: ${endereco}
Número: ${numero}
Bairro: ${bairro}

Pagamento: PIX`
    );

    window.open(
      `https://wa.me/5531971267579?text=${mensagem}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold mb-6">
          Finalizar Pedido
        </h1>

        <div className="bg-purple-100 p-4 rounded-xl mb-6">
          <h2 className="text-2xl font-bold">
            {produto}
          </h2>

          <p className="text-lg mt-2">
            Valor Unitário: R$ {preco.toFixed(2)}
          </p>

          <p className="text-2xl font-bold text-green-700 mt-3">
            Total: R$ {total.toFixed(2)}
          </p>
        </div>

        <div className="mb-6">
          <label className="block font-bold mb-2">
            Quantidade
          </label>

          <input
            type="number"
            min="1"
            value={quantidade}
            onChange={(e) =>
              setQuantidade(Number(e.target.value) || 1)
            }
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <input
          type="text"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          placeholder="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          placeholder="Bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          type="button"
          onClick={enviarWhatsApp}
          className="w-full bg-green-600 text-white py-4 rounded-xl font-bold"
        >
          Enviar Pedido pelo WhatsApp
        </button>

      </div>
    </main>
  );
}