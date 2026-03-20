import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

let produtos = [
    {
        id: 1,
        nome: "Glock 17",
        tipo: "Pistola",
        funcionamento: "Gbb",
        pais: "Áustria",
        preco: 1200
    },
    {
        id: 2,
        nome: "M4A1",
        tipo: "Rifle",
        funcionamento: "Elétrica",
        pais: "EUA",
        preco: 2500
    }
];

function validarProduto(nome, tipo, funcionamento, pais, preco){
    const tiposValidos = ["Pistola", "Rifle", "Escopeta", "Sniper"];
    const funcoesValidas = ["Gbb", "Elétrica", "Spring"];

    if (!nome || !tipo || !funcionamento || !pais || !preco){
        return "Todos os campos são obrigatórios";
    }

    if (nome.length < 3){
        return "Nome deve ter no mínimo 3 caracteres";
    }

    if (preco <= 0){
        return "Preço deve ser maior que 0";
    }

    if (!tiposValidos.includes(tipo)){
        return "Tipo inválido";
    }

    if (!funcoesValidas.includes(funcionamento)){
        return "Funcionamento inválido";
    }

    return null;
}

app.get('/', (req,res) => {
    res.send("Página inicial")
});

app.get('/produtos', (req, res) => {
    let resultado = [...produtos];

    const {nome, tipo, funcionamento, pais, ordem} = req.query;

    if (nome){
        resultado = resultado.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    if (tipo){
        resultado = resultado.filter(p => p.tipo === tipo);
    }

    if (funcionamento){
        resultado = resultado.filter(p => p.funcionamento === funcionamento);
    }

    if (pais){
        resultado = resultado.filter(p => p.pais === pais);
    }

    if (ordem === "Crescente"){
        resultado.sort((a, b) => a.preco - b.preco);
    }

    if (ordem === "Decrescente"){
        resultado.sort((a, b) => b.preco - a.preco);
    }

    res.json(resultado);
});

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto){
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json(produto);
});

app.post('/produtos', (req, res) => {
    const { nome, tipo, funcionamento, pais, preco } = req.body;

    const erro = validarProduto(nome, tipo, funcionamento, pais, preco);

    if (erro){
        return res.status(400).json({ erro });
    }

    const novo = {
        id: produtos.length + 1,
        nome,
        tipo,
        funcionamento,
        pais,
        preco
    };

    produtos.push(novo);

    res.status(201).json(novo);
});

app.post('/produtos/pistola', (req, res) => {
     const { nome, funcionamento, pais, preco } = req.body;

    const tipo = "Pistola";

    const erro = validarProduto(nome, tipo, funcionamento, pais, preco);
    if (erro) return res.status(400).json({ erro });

    const novo = {
        id: produtos.length + 1,
        nome,
        tipo,
        funcionamento,
        pais,
        preco
    };

    produtos.push(novo);
    res.status(201).json(novo);
});

app.post('/produtos/rifle', (req, res) => {
     const {nome, funcionamento, pais, preco} = req.body;

    const tipo = "Rifle";

    const erro = validarProduto(nome, tipo, funcionamento, pais, preco);
    if (erro) return res.status(400).json({ erro });

    const novo = {
        id: produtos.length + 1,
        nome,
        tipo,
        funcionamento,
        pais,
        preco
    };

    produtos.push(novo);
    res.status(201).json(novo);
});

app.post('/produtos/sniper', (req, res) => {
     const {nome, funcionamento, pais, preco} = req.body;

    const tipo = "Sniper";

    const erro = validarProduto(nome, tipo, funcionamento, pais, preco);
    if (erro) return res.status(400).json({ erro });

    const novo = {
        id: produtos.length + 1,
        nome,
        tipo,
        funcionamento,
        pais,
        preco
    };

    produtos.push(novo);
    res.status(201).json(novo);
});

app.post('/produtos/escopeta', (req, res) => {
     const {nome, funcionamento, pais, preco} = req.body;

    const tipo = "Escopeta";

    const erro = validarProduto(nome, tipo, funcionamento, pais, preco);
    if (erro) return res.status(400).json({ erro });

    const novo = {
        id: produtos.length + 1,
        nome,
        tipo,
        funcionamento,
        pais,
        preco
    };

    produtos.push(novo);
    res.status(201).json(novo);
});

app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = produtos.findIndex(p => p.id === id);

    if (index === -1){
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    const removido = produtos.splice(index, 1);

    res.json(removido[0]);
});

app.listen(PORT, () => {
    console.log(`🚀 http://localhost:${PORT}`);
});