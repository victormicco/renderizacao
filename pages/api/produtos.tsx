export default function handler(req: any, res: any) {
  res.status(200).json([
    { id: 1, nome: "Caneta", preco: 5.6 },
    { id: 2, nome: "Caderno", preco: 15.6 },
    { id: 3, nome: "Borracha", preco: 3.4 },
    { id: 4, nome: "Tesoura", preco: 22.32 },
  ]);
}
