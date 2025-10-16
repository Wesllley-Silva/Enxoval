// ======= CHAVE DO LOCAL STORAGE =======
const STORAGE_KEY = 'enxoval_status';
let enxovalData = [];

// ======= LISTA COMPLETA DO ENXOVAL =======
const LISTA_ORIGINAL = [
    // 🍼 Quarto e Decoração
    { nome: "Berço", quantidade: 1, comprado: 0, categoria: "Quarto e Decoração" },
    { nome: "Berço portátil", quantidade: 1, comprado: 0, categoria: "Quarto e Decoração" },
    { nome: "Cesto", quantidade: 1, comprado: 0, categoria: "Quarto e Decoração" },
    { nome: "Cobertor", quantidade: 2, comprado: 0, categoria: "Quarto e Decoração" },
    { nome: "Colchão", quantidade: 1, comprado: 0, categoria: "Quarto e Decoração" },
    { nome: "Cômoda", quantidade: 1, comprado: 0, categoria: "Quarto e Decoração" },
    { nome: "Cortinado", quantidade: 2, comprado: 0, categoria: "Quarto e Decoração" },
    { nome: "Edredom", quantidade: 2, comprado: 0, categoria: "Quarto e Decoração" },
    { nome: "Fronhas", quantidade: 4, comprado: 0, categoria: "Quarto e Decoração" },
    { nome: "Kit berço", quantidade: 1, comprado: 0, categoria: "Quarto e Decoração" },
    { nome: "Kit de potes com abajur", quantidade: 1, comprado: 0, categoria: "Quarto e Decoração" },
    { nome: "Ninho", quantidade: 1, comprado: 0, categoria: "Quarto e Decoração" },
    { nome: "Roupeiro", quantidade: 1, comprado: 0, categoria: "Quarto e Decoração" },
    { nome: "Saco de dormir", quantidade: 1, comprado: 0, categoria: "Quarto e Decoração" },
    { nome: "Travesseiro", quantidade: 2, comprado: 0, categoria: "Quarto e Decoração" },

    // 🧼 Higiene e Cuidados
    { nome: "Aspirador nasal", quantidade: 1, comprado: 0, categoria: "Higiene e Cuidados" },
    { nome: "Banheira", quantidade: 1, comprado: 0, categoria: "Higiene e Cuidados" },
    { nome: "Fita adesiva", quantidade: 1, comprado: 0, categoria: "Higiene e Cuidados" },
    { nome: "Kit higiênico", quantidade: 1, comprado: 0, categoria: "Higiene e Cuidados" },
    { nome: "Kit manicure", quantidade: 1, comprado: 0, categoria: "Higiene e Cuidados" },
    { nome: "Lenço umedecido", quantidade: 6, comprado: 0, categoria: "Higiene e Cuidados" },
    { nome: "Pente e escova", quantidade: 1, comprado: 0, categoria: "Higiene e Cuidados" },
    { nome: "Saboneteira", quantidade: 1, comprado: 0, categoria: "Higiene e Cuidados" },
    { nome: "Suporte para banheira", quantidade: 1, comprado: 0, categoria: "Higiene e Cuidados" },
    { nome: "Toalha de banho com capuz", quantidade: 4, comprado: 0, categoria: "Higiene e Cuidados" },
    { nome: "Toalha fralda", quantidade: 4, comprado: 0, categoria: "Higiene e Cuidados" },

    // 👕 Roupas e Enxoval Básico
    { nome: "Bodys manga curta", quantidade: 8, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Bodys manga longa", quantidade: 5, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Calças", quantidade: 10, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Casaco de lã", quantidade: 2, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Casaco de malha", quantidade: 2, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Conjunto 3 peças (calça/blusa/colete)", quantidade: 5, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Cueiro", quantidade: 6, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Faixa umbilical", quantidade: 6, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Fralda (tecido)", quantidade: 10, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Kit lençol (lençol, virol, fronha)", quantidade: 4, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Luvas", quantidade: 3, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Macacão curto", quantidade: 6, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Macacão longo", quantidade: 6, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Mantas", quantidade: 4, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Meias", quantidade: 5, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Saída de maternidade", quantidade: 1, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Sapatinhos", quantidade: 3, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Toucas", quantidade: 3, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Toalhinha de boca", quantidade: 9, comprado: 0, categoria: "Roupas e Enxoval Básico" },
    { nome: "Vira manta", quantidade: 2, comprado: 0, categoria: "Roupas e Enxoval Básico" },

    // 🍽️ Alimentação e Amamentação
    { nome: "Almofada de amamentação", quantidade: 1, comprado: 0, categoria: "Alimentação e Amamentação" },
    { nome: "Bomba de tirar leite", quantidade: 1, comprado: 0, categoria: "Alimentação e Amamentação" },
    { nome: "Escova de mamadeira", quantidade: 1, comprado: 0, categoria: "Alimentação e Amamentação" },
    { nome: "Jogo de mamadeira", quantidade: 1, comprado: 0, categoria: "Alimentação e Amamentação" },
    { nome: "Protetor de seio", quantidade: 2, comprado: 0, categoria: "Alimentação e Amamentação" },

    // 🚗 Passeio e Acessórios
    { nome: "Babadores", quantidade: 4, comprado: 0, categoria: "Passeio e Acessórios" },
    { nome: "Bebê conforto", quantidade: 1, comprado: 0, categoria: "Passeio e Acessórios" },
    { nome: "Carrinho", quantidade: 1, comprado: 0, categoria: "Passeio e Acessórios" },
    { nome: "Chupeta", quantidade: 2, comprado: 0, categoria: "Passeio e Acessórios" },
    { nome: "Kit bolsa", quantidade: 1, comprado: 0, categoria: "Passeio e Acessórios" },
    { nome: "Naninha", quantidade: 2, comprado: 0, categoria: "Passeio e Acessórios" },
    { nome: "Prendedor de bico", quantidade: 1, comprado: 0, categoria: "Passeio e Acessórios" },
];

// ======= FUNÇÃO DE ORDENAÇÃO =======
function ordenarDados(data) {
    const collator = new Intl.Collator('pt', { sensitivity: 'base' });
    data.sort((a, b) => {
        const catCompare = collator.compare(a.categoria, b.categoria);
        if (catCompare !== 0) return catCompare;
        return collator.compare(a.nome, b.nome);
    });
}

// ======= LOCAL STORAGE =======
function carregarDados() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) enxovalData = JSON.parse(savedData);
    else enxovalData = LISTA_ORIGINAL.map(item => ({ ...item }));
    ordenarDados(enxovalData);
}

function salvarDados() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(enxovalData));
}

// ======= PROGRESSO =======
function calcularProgresso() {
    let totalItens = 0;
    let itensComprados = 0;

    enxovalData.forEach(item => {
        totalItens += item.quantidade;
        itensComprados += item.comprado;
    });

    const falta = totalItens - itensComprados;
    const porcentagem = totalItens > 0 ? ((itensComprados / totalItens) * 100).toFixed(0) : 0;

    const progressoElement = document.getElementById('progresso-texto');
    const barra = document.getElementById('barra-preenchida');

    if (progressoElement) {
        progressoElement.textContent =
            falta === 0
                ? `🎉 ENXOVAL COMPLETO! (${itensComprados} itens comprados)`
                : `✅ ${itensComprados} de ${totalItens} itens comprados. Falta ${falta} (${porcentagem}% concluído).`;
    }

    if (barra) barra.style.width = `${porcentagem}%`;
}

// ======= BOTÕES =======
function adicionarCompra(index) {
    const item = enxovalData[index];
    if (item.comprado < item.quantidade) {
        item.comprado++;
        salvarDados();
        renderizarLista();
    }
}

function removerCompra(index) {
    const item = enxovalData[index];
    if (item.comprado > 0) {
        item.comprado--;
        salvarDados();
        renderizarLista();
    }
}

// ======= RENDERIZAÇÃO =======
function renderizarLista() {
    const listaUL = document.getElementById('lista-enxoval');
    listaUL.innerHTML = '';

    const categorias = enxovalData.reduce((acc, item, index) => {
        const categoria = item.categoria || 'Outros';
        if (!acc[categoria]) acc[categoria] = [];
        acc[categoria].push({ ...item, index });
        return acc;
    }, {});

    Object.keys(categorias).forEach(categoria => {
        const header = document.createElement('h2');
        header.classList.add('categoria-header');
        header.textContent = categoria;
        listaUL.appendChild(header);

        categorias[categoria].forEach(({ nome, quantidade, comprado, index }) => {
            const li = document.createElement('li');
            const isCompleted = comprado >= quantidade;

            li.classList.add('item-lista');
            if (isCompleted) li.classList.add('concluido');
            else if (comprado > 0) li.classList.add('parcial');

            li.innerHTML = `
                <div class="item-info">
                    <span class="item-name">${nome}</span>
                </div>
                <div class="botoes-compra">
                    <span class="quantidade-display">
                        ${comprado}/${quantidade}
                        ${isCompleted ? '<span class="check-icon-concluido">✔️</span>' : ''}
                    </span>
                    <button class="btn-remove" onclick="removerCompra(${index})" ${comprado === 0 ? 'disabled' : ''}>-</button>
                    <button class="btn-add" onclick="adicionarCompra(${index})" ${isCompleted ? 'disabled' : ''}>+</button>
                </div>
            `;

            listaUL.appendChild(li);
        });
    });

    calcularProgresso();
}

// ======= INICIALIZAÇÃO =======
document.addEventListener('DOMContentLoaded', () => {
    carregarDados();
    renderizarLista();
});
