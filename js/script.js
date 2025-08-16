// DOM Elements
const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');
const floatingCart = document.getElementById('floatingCart');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutForm = document.getElementById('checkoutForm');
const customizeModal = document.getElementById('customizeModal');
const closeCustomize = document.getElementById('closeCustomize');
const cancelCustomize = document.getElementById('cancelCustomize');
const saveCustomize = document.getElementById('saveCustomize');
const cartCount = document.querySelector('.cart-count');
const loadingOverlay = document.getElementById('loadingOverlay');

// Configurações
const DRIVE_API_KEY = 'AIzaSyBLZCkFO-APNRsnGJ6Jb5llkbzraejCxck';
const DRIVE_CLIENT_ID = '545456833601-lfljgnojnu49inmabnlba3f9he86nl4e.apps.googleusercontent.com';
const WHATSAPP_NUMBER = '5584996002433';
const DRIVE_FOLDER_ID = '1mXHIHacz3fgrhVT2LbbopFPbouXLNW8P';

const customizeSection = document.getElementById('customize');
const combosSection = document.getElementById('combos');
const snacksSection = document.getElementById('snacks');

// Elementos da nova seção de personalização
const selectedBaseEl = document.getElementById('selected-base');
const selectedToppingsEl = document.getElementById('selected-toppings');
const selectedFruitsEl = document.getElementById('selected-fruits');
const customTotalEl = document.getElementById('custom-total');
const addCustomToCartBtn = document.getElementById('addCustomToCart');

// Dados para as seções
const customizationOptions = {
    Copos: [
        { id: 'Cop300', name: 'Copo 300ml', price: 12 },
        { id: 'Cop400', name: 'Copo 400ml', price: 16 },
        { id: 'Cop500', name: 'Copo 500ml', price: 18 },
        { id: 'Roleta', name: 'Roleta', price: 40 },
    ],
    bases: [
        { id: 'base1', name: 'Açaí Tradicional', price: 0 },
        { id: 'base2', name: 'Ninho', price: 0 },
        { id: 'base3', name: 'Ninho trunfado', price: 0 },
        { id: 'base4', name: 'Chocomalte', price: 0 },
        { id: 'base5', name: 'Cupuaçu', price: 0 },
        { id: 'base6', name: 'Creme de Oreo', price: 0 },
        { id: 'base7', name: 'Creme de Morango', price: 0 },
    ],
    toppings: [
        { id: 'top1', name: 'Leite em pó', price: 0 },
        { id: 'top2', name: 'Farinha Láctea', price: 0 },
        { id: 'top3', name: 'Jujuba', price: 0 },
        { id: 'top4', name: 'M&M', price: 0 },
        { id: 'top5', name: 'ChocoPower', price: 0 },
        { id: 'top6', name: 'Granola', price: 0 },
        { id: 'top7', name: 'Paçoca', price: 0 },
        { id: 'top8', name: 'Machimelo', price: 0 },
        { id: 'top9', name: 'Coco', price: 0 },
        { id: 'top10', name: 'Amendoim', price: 0 },
        { id: 'top11', name: 'Gota de chocolate', price: 0 },
        { id: 'top12', name: 'Canudinho', price: 0 },
        { id: 'top13', name: 'Chocoball', price: 0 },
        { id: 'top14', name: 'Creme de avelã', price: 0 },
        { id: 'top15', name: 'Ovomaltine', price: 0 }
    ],
    fruits: [
        { id: 'fruit1', name: 'Banana', price: 0 },
        { id: 'fruit2', name: 'Morango', price: 0 },
        { id: 'fruit3', name: 'Kiwi', price: 0 },
        { id: 'fruit3', name: 'Ameixa', price: 0 },
        { id: 'fruit4', name: 'Cereja', price: 0 },
        { id: 'fruit5', name: 'Uva', price: 0 },
    ],
    adicionais: [
        { id: 'Adic1', name: 'Nutella', price: 3.5 },
        { id: 'Adic2', name: 'Oreo', price: 2 },
        { id: 'Adic3', name: 'kit Kat', price: 3 },
        { id: 'Adic4', name: 'Castanha', price: 2 },
        { id: 'Adic5', name: 'Creme de leitinho', price: 3 },
        { id: 'Adic6', name: 'Batom', price: 2 },
        { id: 'Adic6', name: 'Creme Cook', price: 3 },
        { id: 'Adic6', name: 'Ferreiro Rocher', price: 3 },
        { id: 'Adic6', name: 'Ouro Branco', price: 3 },
        { id: 'Adic6', name: 'Oreo', price: 3 },
    ],
    cobertura: [
        { id: 'cober1', name: 'Leite condensado', price: 0 },
        { id: 'cober2', name: 'Chocolate', price: 0 },
        { id: 'cober3', name: 'Morango', price: 0 },
        { id: 'cober4', name: 'Uva', price: 0 },
        { id: 'cober5', name: 'BlueBarry', price: 0 },
        { id: 'cober6', name: 'Tutti-fruitti', price: 0 },
        { id: 'cober7', name: 'Menta', price: 0 },
    ]
};

const combos = [
    {
        id: 'combo1',
        name: 'Combo Casal',
        price: 40,
        description: '2 VitaHits + 2 Salgados',
        image: './assets/produtos/COMBOHITS.png',
        items: {
            vitahits: 2,
            salgados: 2
        }
    }
];

const snacks = [
    {
        id: 'snack1',
        name: 'Coxinha de Frango',
        price: 6,
        description: 'Coxinha recheado com frango',
        image: './assets/produtos/COXINHA.jpg'
    },
    {
        id: 'snack2',
        name: 'Coxinha de carne',
        price: 6,
        description: 'Coxinha de carne de sol',
        image: './assets/produtos/COXINHA.jpg'
    },
    {
        id: 'snack3',
        name: 'Pastel de forno - frango',
        price: 6,
        description: 'Pastel assado recheado com frango',
        image: './assets/produtos/PASTELDEFORNO.jpg'
    },
    {
        id: 'snack4',
        name: 'Pastel de forno - carne',
        price: 6,
        description: 'Pastel assado recheado com carne de sol',
        image: './assets/produtos/PASTELDEFORNO.jpg'
    },
    {
        id: 'snack5',
        name: 'Empada de Frango',
        price: 6,
        description: 'Empada recheada com frango',
        image: './assets/produtos/EMPADA.jpg'
    },
    {
        id: 'snack6',
        name: 'Enroladinho',
        price: 6,
        description: 'Enrroladinho de queijo e presunto',
        image: './assets/produtos/ENROLADINHO.jpg'
    }
];

const restrictions = {
    Cop300: { // 300ml
        base: 2,
        topping: 3,
        fruit: 1,
        cobertura: 1
    },
    Cop400: { // 400ml
        base: 2,
        topping: 3,
        fruit: 2,
        cobertura: 1
    },
    Cop500: { // 500ml
        base: 2,
        topping: 5,
        fruit: 2,
        cobertura: 1
    },
    Roleta: { // 500ml
        base: 2,
        topping: 5,
        fruit: 2,
        cobertura: 1
    }
};

// Função auxiliar para mostrar mensagens de limite
function showLimitMessage(type, max) {
    const messages = {
        base: `Máximo de ${max} cremes selecionados!`,
        topping: `Máximo de ${max} acompanhamentos selecionados!`,
        fruit: `Máximo de ${max} frutas selecionadas!`,
        cobertura: `Máximo de ${max} coberturas selecionadas!`
    };

    alert(messages[type]);
}

// Cart Data
let cart = [];

// Estado da personalização
let customBase = [];
let customCopo = customizationOptions.Copos[0];
let customToppings = [];
let customFruits = [];
let customAdicionais = [];
let customCobertura = [];
let customQuantity = 1;
// Variáveis para acompanhamentos
// let currentProduct = null;
// let selectedCremes = [];
// let selectedCobertura = null;
// let selectedAcompanhamentos = [];
// let selectedAdicionais = [];
// let isAddingToCart = false; // Controle de estado

let currentProduct = null;
let selectedCremes = [];
let selectedCobertura = null;
let selectedFrutas = [];
let selectedAcompanhamentos = [];
let selectedAdicionais = [];


// User Management
let currentUser = null;


// Função para fechar o modal
function closeCustomizationModal() {
    document.getElementById('acompanhamentosModal').style.display = 'none';

    // Resetar seleções
    selectedCremes = [];
    selectedCobertura = null;
    selectedAcompanhamentos = [];
    selectedAdicionais = [];

    // Resetar inputs
    document.querySelectorAll('#acompanhamentosModal input').forEach(input => {
        input.checked = false;
    });
}


// Função para adicionar produto ao carrinho (atualizada)
function addCustomizedProductToCart() {
    // Validações específicas
    if (currentProduct.tipo === 'especial') {
        if (selectedCremes.length !== 2) {
            alert('Por favor, selecione exatamente 2 cremes!');
            return false;
        }

        if (selectedFrutas.length > currentProduct.maxFrutas) {
            alert(`Máximo de ${currentProduct.maxFrutas} frutas permitidas!`);
            return false;
        }
    }

    if (!selectedCobertura) {
        alert('Por favor, selecione uma cobertura!');
        return false;
    }

    if (currentProduct.tipo === 'especial' && selectedAcompanhamentos.length > currentProduct.maxAcompanhamentos) {
        alert(`Máximo de ${currentProduct.maxAcompanhamentos} acompanhamentos permitidos!`);
        return false;
    }

    // Montar descrição do produto
    let description = currentProduct.name;
    let finalPrice = currentProduct.basePrice;
    const parts = [];

    // Cremes
    if (selectedCremes.length > 0) {
        parts.push(`com ${selectedCremes.map(c => c.name).join(' e ')}`);
    }

    // Frutas
    if (selectedFrutas.length > 0) {
        parts.push(`frutas: ${selectedFrutas.map(f => f.name).join(', ')}`);
    }

    // Cobertura
    if (selectedCobertura) {
        parts.push(`cobertura: ${selectedCobertura.name}`);
        finalPrice += selectedCobertura.price;
    }

    // Acompanhamentos
    if (selectedAcompanhamentos.length > 0) {
        parts.push(`acompanhamentos: ${selectedAcompanhamentos.map(t => t.name).join(', ')}`);
        selectedAcompanhamentos.forEach(t => finalPrice += t.price);
    }

    // Adicionais
    if (selectedAdicionais.length > 0) {
        parts.push(`adicionais: ${selectedAdicionais.map(a => a.name).join(', ')}`);
        selectedAdicionais.forEach(a => finalPrice += a.price);
    }

    // Juntar todas as partes
    if (parts.length > 0) {
        description += ` | ${parts.join(' | ')}`;
    }

    // Adicionar UM ÚNICO item ao carrinho
    cart.push({
        product: description,
        price: finalPrice,
        quantity: currentProduct.quantity
    });

    return true;
}
// Eventos para o modal - Registrados apenas uma vez
document.getElementById('closeAcompanhamentos').addEventListener('click', closeCustomizationModal);
document.getElementById('cancelAcompanhamentos').addEventListener('click', closeCustomizationModal);

// Evento de confirmação do modal
document.getElementById('confirmAcompanhamentos').addEventListener('click', function () {
    const confirmButton = this;
    confirmButton.disabled = true;

    if (addCustomizedProductToCart()) {
        closeCustomizationModal();
        updateCart();
        cartModal.style.display = 'block';
    }

    setTimeout(() => {
        confirmButton.disabled = false;
        isAddingToCart = false;
    }, 1000);
});

// Função para preencher o modal - COMPLETA COM FRUTAS E COBERTURA
function fillCustomizationModal() {
    const container = document.getElementById('customizationSections');
    container.innerHTML = '';

    // Titulo dinâmico
    document.getElementById('modalTitle').textContent = `Personalize seu ${currentProduct.name}`;

    // Seção para cremes (apenas produtos especiais)
    if (currentProduct.tipo === 'especial') {
        container.innerHTML += `
            <div class="modal-section">
                <h3>Escolha 2 cremes</h3>
                <div class="options-grid" id="cremesOptions"></div>
            </div>
        `;

        // Preencher cremes
        customizationOptions.bases.forEach(creme => {
            const option = document.createElement('div');
            option.className = 'option-item';
            option.innerHTML = `
                <input type="checkbox" id="creme_${creme.id}" 
                       data-id="${creme.id}" data-price="${creme.price}">
                <label for="creme_${creme.id}">${creme.name}</label>
            `;
            document.getElementById('cremesOptions').appendChild(option);
        });
    }

    // Seção para frutas (apenas produtos especiais)
    if (currentProduct.tipo === 'especial') {
        container.innerHTML += `
            <div class="modal-section">
                <h3>Escolha até ${currentProduct.maxFrutas} frutas</h3>
                <div class="options-grid" id="frutasOptions"></div>
            </div>
        `;

        // Preencher frutas
        customizationOptions.fruits.forEach(fruta => {
            const option = document.createElement('div');
            option.className = 'option-item';
            option.innerHTML = `
                <input type="checkbox" id="fruta_${fruta.id}" 
                       data-id="${fruta.id}" data-price="${fruta.price}">
                <label for="fruta_${fruta.id}">${fruta.name}</label>
            `;
            document.getElementById('frutasOptions').appendChild(option);
        });
    }

    // Seção para cobertura (todos os produtos)
    container.innerHTML += `
        <div class="modal-section">
            <h3>Escolha ${currentProduct.maxCoberturas} cobertura</h3>
            <div class="options-grid" id="coberturasOptions"></div>
        </div>
    `;

    // Preencher coberturas
    customizationOptions.cobertura.forEach(cobertura => {
        const option = document.createElement('div');
        option.className = 'option-item';
        option.innerHTML = `
            <input type="radio" name="cobertura" id="cobertura_${cobertura.id}" 
                   data-id="${cobertura.id}" data-price="${cobertura.price}">
            <label for="cobertura_${cobertura.id}">${cobertura.name}</label>
        `;
        document.getElementById('coberturasOptions').appendChild(option);
    });

    // Seção para acompanhamentos (apenas produtos especiais)
    if (currentProduct.tipo === 'especial') {
        container.innerHTML += `
            <div class="modal-section">
                <h3>Escolha até ${currentProduct.maxAcompanhamentos} acompanhamentos</h3>
                <div class="options-grid" id="acompanhamentosOptions"></div>
            </div>
        `;

        // Preencher acompanhamentos
        customizationOptions.toppings.forEach(topping => {
            const option = document.createElement('div');
            option.className = 'option-item';
            option.innerHTML = `
                <input type="checkbox" id="topping_${topping.id}" 
                       data-id="${topping.id}" data-price="${topping.price}">
                <label for="topping_${topping.id}">${topping.name}</label>
            `;
            document.getElementById('acompanhamentosOptions').appendChild(option);
        });
    }

    // Seção para adicionais (todos os produtos)
    container.innerHTML += `
        <div class="modal-section">
            <h3>Adicionais</h3>
            <div class="options-grid" id="adicionaisOptions"></div>
        </div>
    `;

    // Preencher adicionais
    const adicionaisList = customizationOptions.adicionais;
    adicionaisList.forEach(adicional => {
        const option = document.createElement('div');
        option.className = 'option-item';
        option.innerHTML = `
            <input type="checkbox" id="adicional_${adicional.id}" 
                   data-id="${adicional.id}" data-price="${adicional.price}">
            <label for="adicional_${adicional.id}">${adicional.name} (+R$ ${adicional.price.toFixed(2)})</label>
        `;
        document.getElementById('adicionaisOptions').appendChild(option);
    });
}

// Preencher modal com as opções
function fillCustomizationModal() {
    const title = document.getElementById('modalTitle');
    const cremesSection = document.getElementById('cremesSection');
    const coberturasSection = document.getElementById('coberturasSection');
    const acompanhamentosSection = document.getElementById('acompanhamentosSection');
    const adicionaisSection = document.getElementById('adicionaisSection');

    // Resetar visibilidade
    cremesSection.style.display = 'none';
    coberturasSection.style.display = 'none';
    acompanhamentosSection.style.display = 'none';
    adicionaisSection.style.display = 'none';

    // Configurar baseado no tipo de produto
    if (currentProduct.tipo === 'especial') {
        title.textContent = `Personalize seu ${currentProduct.name}`;
        cremesSection.style.display = 'block';
        acompanhamentosSection.style.display = 'block';
        adicionaisSection.style.display = 'block';

        // Preencher cremes
        const cremesContainer = document.getElementById('cremesOptions');
        cremesContainer.innerHTML = '';
        customizationOptions.bases.forEach(creme => {
            const option = document.createElement('div');
            option.className = 'option-item';
            option.innerHTML = `
                <input type="checkbox" id="creme_${creme.id}" 
                       data-id="${creme.id}" data-price="${creme.price}">
                <label for="creme_${creme.id}">${creme.name}</label>
            `;
            cremesContainer.appendChild(option);
        });

        // Preencher acompanhamentos
        const acompanhamentosContainer = document.getElementById('acompanhamentosOptions');
        acompanhamentosContainer.innerHTML = '';
        customizationOptions.toppings.forEach(topping => {
            const option = document.createElement('div');
            option.className = 'option-item';
            option.innerHTML = `
                <input type="checkbox" id="topping_${topping.id}" 
                       data-id="${topping.id}" data-price="${topping.price}">
                <label for="topping_${topping.id}">${topping.name}</label>
            `;
            acompanhamentosContainer.appendChild(option);
        });

        // Atualizar limite de acompanhamentos
        document.getElementById('maxAcompanhamentos').textContent = currentProduct.maxAcompanhamentos;

    } else if (currentProduct.tipo === 'vitahits') {
        title.textContent = `Personalize seu VitaHits`;
        coberturasSection.style.display = 'block';
        adicionaisSection.style.display = 'block';

        // Preencher coberturas
        const coberturasContainer = document.getElementById('coberturasOptions');
        coberturasContainer.innerHTML = '';
        customizationOptions.cobertura.forEach(cobertura => {
            const option = document.createElement('div');
            option.className = 'option-item';
            option.innerHTML = `
                <input type="radio" name="cobertura" id="cobertura_${cobertura.id}" 
                       data-id="${cobertura.id}" data-price="${cobertura.price}">
                <label for="cobertura_${cobertura.id}">${cobertura.name}</label>
            `;
            coberturasContainer.appendChild(option);
        });
    }

    // Preencher adicionais (comuns a ambos)
    const adicionaisContainer = document.getElementById('adicionaisOptions');
    adicionaisContainer.innerHTML = ''; updateCustomizationMessage

    // Adicionais específicos para VitaHits
    const adicionaisEspecificos = currentProduct.tipo === 'vitahits' ?
        customizationOptions.adicionais.filter(adicional =>
            ['Creme de leitinho', 'Creme Cook', 'Nutella', 'Creme de avelã'].includes(adicional.name)
        ) :
        customizationOptions.adicionais;

    adicionaisEspecificos.forEach(adicional => {
        const option = document.createElement('div');
        option.className = 'option-item';
        option.innerHTML = `
            <input type="checkbox" id="adicional_${adicional.id}" 
                   data-id="${adicional.id}" data-price="${adicional.price}">
            <label for="adicional_${adicional.id}">${adicional.name} (+R$ ${adicional.price.toFixed(2)})</label>
        `;
        adicionaisContainer.appendChild(option);
    });

    updateCustomizationMessage();
}

// Atualizar mensagem de seleção
function updateCustomizationMessage() {
    const messageEl = document.getElementById('acompanhamentosMessage');

    if (currentProduct.tipo === 'especial') {
        messageEl.textContent =
            `Cremes: ${selectedCremes.length}/2 | ` +
            `Acompanhamentos: ${selectedAcompanhamentos.length}/${currentProduct.maxAcompanhamentos}`;
    } else if (currentProduct.tipo === 'vitahits') {
        messageEl.textContent = selectedCobertura ?
            `Cobertura selecionada: ${selectedCobertura.name}` :
            'Selecione uma cobertura';
    }
}


// Evento para seleção de opções (atualizado)
document.getElementById('acompanhamentosModal').addEventListener('change', function (e) {
    if (e.target.type === 'checkbox' || e.target.type === 'radio') {
        const id = e.target.dataset.id;
        const price = parseFloat(e.target.dataset.price);
        const isChecked = e.target.checked;
        const type = e.target.getAttribute('id').split('_')[0];

        if (type === 'creme') {
            const creme = customizationOptions.bases.find(c => c.id === id);
            if (isChecked) {
                if (selectedCremes.length < 2) {
                    selectedCremes.push(creme);
                } else {
                    e.target.checked = false;
                    alert('Máximo de 2 cremes permitidos!');
                }
            } else {
                const index = selectedCremes.findIndex(c => c.id === id);
                if (index !== -1) selectedCremes.splice(index, 1);
            }
        }
        else if (type === 'fruta') {
            const fruta = customizationOptions.fruits.find(f => f.id === id);
            if (isChecked) {
                if (selectedFrutas.length < currentProduct.maxFrutas) {
                    selectedFrutas.push(fruta);
                } else {
                    e.target.checked = false;
                    alert(`Máximo de ${currentProduct.maxFrutas} frutas permitidas!`);
                }
            } else {
                const index = selectedFrutas.findIndex(f => f.id === id);
                if (index !== -1) selectedFrutas.splice(index, 1);
            }
        }
        else if (type === 'cobertura') {
            const cobertura = customizationOptions.cobertura.find(c => c.id === id);
            if (isChecked) {
                selectedCobertura = cobertura;
            }
        }
        else if (type === 'topping') {
            const topping = customizationOptions.toppings.find(t => t.id === id);
            if (isChecked) {
                if (selectedAcompanhamentos.length < currentProduct.maxAcompanhamentos) {
                    selectedAcompanhamentos.push(topping);
                } else {
                    e.target.checked = false;
                    alert(`Máximo de ${currentProduct.maxAcompanhamentos} acompanhamentos permitidos!`);
                }
            } else {
                const index = selectedAcompanhamentos.findIndex(t => t.id === id);
                if (index !== -1) selectedAcompanhamentos.splice(index, 1);
            }
        }
        else if (type === 'adicional') {
            const adicional = customizationOptions.adicionais.find(a => a.id === id);
            if (isChecked) {
                selectedAdicionais.push(adicional);
            } else {
                const index = selectedAdicionais.findIndex(a => a.id === id);
                if (index !== -1) selectedAdicionais.splice(index, 1);
            }
        }
    }
});


// Eventos para o modal
document.getElementById('closeAcompanhamentos').addEventListener('click', function () {
    document.getElementById('acompanhamentosModal').style.display = 'none';
});

document.getElementById('cancelAcompanhamentos').addEventListener('click', function () {
    document.getElementById('acompanhamentosModal').style.display = 'none';
});

document.getElementById('confirmAcompanhamentos').addEventListener('click', function () {
    // Validações específicas para cada tipo de produto
    if (currentProduct.tipo === 'especial') {
        if (selectedCremes.length !== 2) {
            alert('Por favor, selecione exatamente 2 cremes!');
            return;
        }
    }
    else if (currentProduct.tipo === 'vitahits') {
        if (!selectedCobertura) {
            alert('Por favor, selecione uma cobertura!');
            return;
        }
    }

    // Montar descrição do produto
    let description = currentProduct.name;
    let finalPrice = currentProduct.basePrice;

    if (currentProduct.tipo === 'especial') {
        description += ` com ${selectedCremes.map(c => c.name).join(' e ')}`;

        if (selectedAcompanhamentos.length > 0) {
            description += `, acompanhado de ${selectedAcompanhamentos.map(t => t.name).join(', ')}`;
        }
    }
    else if (currentProduct.tipo === 'vitahits') {
        description += ` com cobertura de ${selectedCobertura.name}`;
    }

    // Adicionais
    if (selectedAdicionais.length > 0) {
        description += ` e adicionais: ${selectedAdicionais.map(a => a.name).join(', ')}`;
        selectedAdicionais.forEach(a => finalPrice += a.price);
    }

    // Calcular preço total
    if (currentProduct.tipo === 'especial') {
        selectedAcompanhamentos.forEach(t => finalPrice += t.price);
    }

    // Adicionar ao carrinho
    cart.push({
        product: description,
        price: finalPrice,
        quantity: currentProduct.quantity
    });

    // Fechar modal e atualizar carrinho
    document.getElementById('acompanhamentosModal').style.display = 'none';
    updateCart();
    cartModal.style.display = 'block';

    // Resetar seleções
    selectedCremes = [];
    selectedCobertura = null;
    selectedAcompanhamentos = [];
    selectedAdicionais = [];
});

// Evento de clique para adicionar produtos
document.addEventListener('click', function (e) {
    const button = e.target.closest('.add-to-cart');

    if (button) {
        e.preventDefault();
        e.stopImmediatePropagation();

        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));
        const tipo = button.getAttribute('data-tipo') || 'especial'; // Padrão para especial
        const quantity = parseInt(button.closest('.product-actions').querySelector('.quantity span').textContent);

        // Combo
        if (tipo === 'combo') {
            const vitahitsCount = parseInt(button.getAttribute('data-vitahits'));
            const salgadosCount = parseInt(button.getAttribute('data-salgados'));

            currentCombo = {
                name: product,
                basePrice: price,
                vitahits: vitahitsCount,
                salgados: salgadosCount,
                quantity: quantity
            };
            // Inicializar seleções
            comboVitahitsSelections = Array(vitahitsCount).fill().map(() => ({ cobertura: null }));
            comboSalgadosSelections = Array(salgadosCount).fill().map(() => ({ salgado: null }));
            comboAdicionais = [];

            fillComboModal();
            document.getElementById('comboModal').style.display = 'block';
            return;
        }

        // 1. Salgados são adicionados diretamente
        if (tipo === 'salgado') {
            cart.push({
                product: product,
                price: price,
                quantity: quantity
            });
            updateCart();
            cartModal.style.display = 'block';
            return;
        }

        // 2. Configurar produto atual para personalização
        let maxAcompanhamentos = 3;
        let maxFrutas = 2;
        let maxCoberturas = 1;

        // Obter restrições do produto
        const restrictionsDiv = button.closest('.product-card').querySelector('.restrictions');
        if (restrictionsDiv) {
            const restrictions = Array.from(restrictionsDiv.querySelectorAll('p'));

            restrictions.forEach(p => {
                if (p.textContent.includes('acompanhamentos')) {
                    maxAcompanhamentos = parseInt(p.textContent.match(/\d+/)[0]);
                }
                if (p.textContent.includes('frutas')) {
                    maxFrutas = parseInt(p.textContent.match(/\d+/)[0]);
                }
                if (p.textContent.includes('cobertura')) {
                    maxCoberturas = parseInt(p.textContent.match(/\d+/)[0]);
                }
            });
        }

        currentProduct = {
            name: product,
            basePrice: price,
            tipo: tipo,
            maxAcompanhamentos: maxAcompanhamentos,
            maxFrutas: maxFrutas,
            maxCoberturas: maxCoberturas,
            quantity: quantity
        };

        // Resetar seleções
        selectedCremes = [];
        selectedCobertura = null;
        selectedFrutas = [];
        selectedAcompanhamentos = [];
        selectedAdicionais = [];

        // Preencher e abrir modal
        fillCustomizationModal();
        document.getElementById('acompanhamentosModal').style.display = 'block';
    }
});

// Check for saved user on load
function checkSavedUser() {
    const savedUser = localStorage.getItem('foxAcaiUser');
    if (savedUser) {
        try {
            const user = JSON.parse(savedUser);
            if (user && user.email) {
                currentUser = user;
                updateUserUI();
                initializeGoogleSignIn(true); // Já está logado

                // Prefill checkout form
                if (document.getElementById('name')) {
                    document.getElementById('name').value = user.name || '';
                }
                return true;
            }
        } catch (e) {
            console.error('Error parsing user data:', e);
        }
        localStorage.removeItem('foxAcaiUser');
    }
    return false;
}

// Atualize a função calculateDeliveryFee
function calculateDeliveryFee(subtotal, deliveryLocation) {
    if (deliveryLocation === 'Ilha I' && subtotal < 26) {
        return 5;
    } else if (deliveryLocation === 'Ilha II' && subtotal < 36) {
        return 5; // Alterado de 7 para 5
    }
    return 0;
}

// Atualize a função updateCheckoutTotal para usar o novo cálculo
function updateCheckoutTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryLocation = document.getElementById('deliveryLocation').value;
    const deliveryFee = calculateDeliveryFee(subtotal, deliveryLocation);

    document.getElementById('checkoutSubtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById('checkoutDeliveryFee').textContent = `R$ ${deliveryFee.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `R$ ${(subtotal + deliveryFee).toFixed(2)}`;
}

// Handle Google Login
function handleGoogleLogin(response) {
    const decodeJwtResponse = (token) => {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        } catch (e) {
            console.error('Error decoding JWT:', e);
            return null;
        }
    };

    const userData = decodeJwtResponse(response.credential);

    if (userData) {
        const user = {
            id: userData.sub,
            name: userData.name || 'Usuário Google',
            email: userData.email,
            avatar: userData.picture || 'https://lh3.googleusercontent.com/a/default-user',
            token: response.credential
        };

        currentUser = user;
        localStorage.setItem('foxAcaiUser', JSON.stringify(user));
        updateUserUI();

        // Prefill checkout form
        if (document.getElementById('name')) {
            document.getElementById('name').value = user.name;
        }

        // Disable auto-select after successful login
        google.accounts.id.disableAutoSelect();
    } else {
        alert('Não foi possível obter informações do usuário. Tente novamente.');
    }
}

// Initialize Google Sign-In
function initializeGoogleSignIn(isLoggedIn = false) {
    if (typeof google !== 'undefined') {
        google.accounts.id.initialize({
            client_id: DRIVE_CLIENT_ID,
            callback: handleGoogleLogin,
            auto_select: isLoggedIn,
            ux_mode: 'popup'
        });

        if (!isLoggedIn) {
            google.accounts.id.prompt(notification => {
                if (notification.isNotDisplayed() || notification.isSkipped()) {
                    // Mostra o botão normal se o one-tap não for mostrado
                    document.getElementById('googleLoginContainer').style.display = 'block';
                }
            });
        }
    } else {
        setTimeout(() => initializeGoogleSignIn(isLoggedIn), 100);
    }
}

// Update UI based on login state
function updateUserUI() {
    const loginContainer = document.getElementById('googleLoginContainer');
    const userInfoContainer = document.getElementById('userInfoContainer');

    if (currentUser) {
        if (loginContainer) loginContainer.style.display = 'none';
        if (userInfoContainer) {
            userInfoContainer.style.display = 'flex';
            document.getElementById('userName').textContent = currentUser.name;
            document.getElementById('userAvatar').src = currentUser.avatar;
        }
    } else {
        if (loginContainer) loginContainer.style.display = 'block';
        if (userInfoContainer) userInfoContainer.style.display = 'none';
    }
}

// Logout function
function logout() {
    google.accounts.id.disableAutoSelect();
    currentUser = null;
    localStorage.removeItem('foxAcaiUser');
    updateUserUI();
    initializeGoogleSignIn();

    // Clear user data from form
    if (document.getElementById('name')) {
        document.getElementById('name').value = '';
    }
}
// Toast não-bloqueante
function createToast(message, duration = 2200) {
    const t = document.createElement('div');
    t.className = 'acai-toast';
    t.textContent = message;
    document.body.appendChild(t);
    // forçar reflow para enable transition
    requestAnimationFrame(() => t.classList.add('visible'));
    setTimeout(() => {
        t.classList.remove('visible');
        setTimeout(() => t.remove(), 300);
    }, duration);
}

// pequeno flash de negação
function flashItem(item) {
    if (!item) return;
    item.classList.add('deny');
    item.addEventListener('animationend', () => item.classList.remove('deny'), { once: true });
}

// Sincroniza classes no DOM com o estado atual (sempre execute depois de mudar customBase/customToppings/etc)
function syncOptionClasses() {
    document.querySelectorAll('.option-item').forEach(el => {
        const type = el.dataset.type;
        const id = el.dataset.id;
        el.classList.remove('selected', 'checked');

        if (type === 'copo') {
            if (customCopo && customCopo.id === id) el.classList.add('selected');
        } else if (type === 'base') {
            if (customBase.some(c => c.id === id)) el.classList.add('selected');
        } else if (type === 'topping') {
            if (customToppings.some(t => t.id === id)) el.classList.add('checked');
        } else if (type === 'fruit') {
            if (customFruits.some(f => f.id === id)) el.classList.add('selected');
        } else if (type === 'cobertura') {
            if (customCobertura.some(r => r.id === id)) el.classList.add('selected');
        } else if (type === 'adicional') {
            if (customAdicionais.some(a => a.id === id)) el.classList.add('selected');
        }
    });
}

// Aplica cortes (quando trocar copo) e faz toasts informando remoções
function trimSelectionsToRestriction(newRestriction) {
    let removed = false;
    if (customBase.length > newRestriction.base) {
        customBase = customBase.slice(0, newRestriction.base);
        removed = true;
    }
    if (customToppings.length > newRestriction.topping) {
        customToppings = customToppings.slice(0, newRestriction.topping);
        removed = true;
    }
    if (customFruits.length > newRestriction.fruit) {
        customFruits = customFruits.slice(0, newRestriction.fruit);
        removed = true;
    }
    if (customCobertura.length > newRestriction.cobertura) {
        customCobertura = customCobertura.slice(0, newRestriction.cobertura);
        removed = true;
    }
    if (removed) createToast('Algumas seleções foram removidas por trocar o copo (limite).');
}

// Função para renderizar a seção de personalização
function renderCustomizationSection() {
    const optionsContainer = customizeSection.querySelector('.customize-options');

    let html = `

    <div class="customize-header">
        <img src="./assets/logos/Logo-cabeca-hits.png" alt="Açaí Hits Logo">
        <h2>Instruções</h2>
        <div class="customize-header2">
            <div class="listagem-customizar">
                <p>Copo de 300ml</p>
                <ul>
                    <li>2 Cremes</li>
                    <li>1 Cobertura</li>
                    <li>1 Fruta</li>
                    <li>3 Acompanhamentos</li>
                </ul>
            </div>
            <div class="listagem-customizar">
                <p>Copo de 400ml</p>
                <ul>
                    <li>2 Cremes</li>
                    <li>1 Cobertura</li>
                    <li>2 Frutas</li>
                    <li>3 Acompanhamentos</li>
                </ul>
            </div>
            <div class="listagem-customizar">
                <p>Copo de 500ml</p>
                <ul>
                    <li>2 Cremes</li>
                    <li>1 Cobertura</li>
                    <li>2 Fruta</li>
                    <li>5 Acompanhamentos</li>
                </ul>
            </div>
            <div class="listagem-customizar">
                <p>Roleta</p>
                <ul>
                    <li>2 Cremes</li>
                    <li>1 Cobertura</li>
                    <li>2 Fruta</li>
                    <li>5 Acompanhamentos</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="customize-container">
        <!-- Coluna da Esquerda - Opções -->
        <div class="customize-options-column">
            <div class="option-group">
                <h3>Copos</h3>
                <div class="options-grid">
                    ${customizationOptions.Copos.map(option => `
                        <div class="option-item ${customCopo.id === option.id ? 'selected' : ''}" 
                             data-type="copo" data-id="${option.id}">
                            ${option.name} ${option.price > 0 ? `(+R$ ${option.price.toFixed(2)})` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="option-group">
                <h3>Cremes</h3>
                <div class="options-grid">
                    ${customizationOptions.bases.map(option => `
                        <div class="option-item ${customBase.some(c => c.id === option.id) ? 'selected' : ''}"
                             data-type="base" data-id="${option.id}">
                            ${option.name}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="option-group">
                <h3>Acompanhamentos</h3>
                <div class="options-grid">
                    ${customizationOptions.toppings.map(option => `
                        <div class="option-item ${customToppings.some(t => t.id === option.id) ? 'checked' : ''}" 
                             data-type="topping" data-id="${option.id}">
                            ${option.name}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="option-group">
                <h3>Frutas</h3>
                <div class="options-grid">
                    ${customizationOptions.fruits.map(option => `
                        <div class="option-item ${customFruits.some(f => f.id === option.id) ? 'selected' : ''}" 
                             data-type="fruit" data-id="${option.id}">
                            ${option.name}
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="option-group">
                <h3>Cobertura</h3>
                <div class="options-grid">
                    ${customizationOptions.cobertura.map(option => `
                        <div class="option-item ${customCobertura.some(r => r.id === option.id) ? 'selected' : ''}" 
                             data-type="cobertura" data-id="${option.id}">
                            ${option.name}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="option-group">
                <h3>Adicionais</h3>
                <div class="options-grid">
                    ${customizationOptions.adicionais.map(option => `
                        <div class="option-item ${customAdicionais.some(a => a.id === option.id) ? 'selected' : ''}" 
                             data-type="adicional" data-id="${option.id}">
                            ${option.name} (+R$ ${option.price.toFixed(2)})
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <!-- Coluna da Direita - Resumo e Preço -->
        <div class="customize-summary">
            <h3>Seu Açaí Personalizado</h3>
            <div class="summary-content">
                <div class="summary-item">
                    <span class="item-name">Copo:</span>
                    <span id="selected-copo">${customCopo.name}</span>
                </div>
                <div class="summary-item">
                    <span class="item-name">Creme:</span>
                    <span id="selected-base">${customBase.length > 0 ? customBase.map(c => c.name).join(', \n') : '-'}</span>
                </div>
                <div class="summary-item">
                    <span class="item-name">Coberturas:</span>
                    <span id="selected-toppings">${customToppings.length > 0 ? customToppings.map(t => t.name).join(', \n') : '-'}</span>
                </div>
                <div class="summary-item">
                    <span class="item-name">Frutas:</span>
                    <span id="selected-fruits">${customFruits.length > 0 ? customFruits.map(f => f.name).join(', ') : '-'}</span>
                </div>
                <div class="summary-item">
                    <span class="item-name">Cobertura:</span>
                    <span id="selected-cobertura">${customCobertura.length > 0 ? customCobertura.map(r => r.name).join(', ') : '-'}</span>
                </div>
                <div class="summary-item">
                    <span class="item-name">Adicionais:</span>
                    <span id="selected-adicionais">${customAdicionais.length > 0 ? customAdicionais.map(a => a.name).join(', ') : '-'}</span>
                </div>
                <div class="summary-total">
                    <span>Total:</span>
                    <span id="custom-total">R$ ${calculateCustomTotal().toFixed(2)}</span>
                </div>
            </div>
            <div class="quantity-control">
                <button class="decrement">-</button>
                <span>${customQuantity}</span>
                <button class="increment">+</button>
            </div>
            <button id="addCustomToCart" class="btn">
                <i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho
            </button>
        </div>
    </div>`;

    optionsContainer.innerHTML = html;

    // Adiciona eventos aos botões
    document.getElementById('addCustomToCart').addEventListener('click', addCustomToCart);

    // Atualiza eventos de seleção
    document.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', handleOptionSelection);
    });

    // Eventos de quantidade
    document.querySelector('.quantity-control .increment').addEventListener('click', () => {
        customQuantity++;
        document.querySelector('.quantity-control span').textContent = customQuantity;
        updateCustomSummary();
    });

    document.querySelector('.quantity-control .decrement').addEventListener('click', () => {
        if (customQuantity > 1) {
            customQuantity--;
            document.querySelector('.quantity-control span').textContent = customQuantity;
            updateCustomSummary();
        }
    });
}

// Calcular total do açaí personalizado
function calculateCustomTotal() {
    let total = customCopo.price; // Começa com o preço do copo

    // Adiciona preços dos componentes
    customBase.forEach(c => total += c.price);
    customToppings.forEach(t => total += t.price);
    customFruits.forEach(f => total += f.price);
    customCobertura.forEach(r => total += r.price);
    customAdicionais.forEach(a => total += a.price);

    return total * customQuantity;
}

// Atualizar resumo da personalização
function updateCustomSummary() {
    if (document.getElementById('selected-copo')) {
        document.getElementById('selected-copo').textContent = customCopo.name;
    }
    if (document.getElementById('selected-base')) {
        document.getElementById('selected-base').textContent =
            customBase.length > 0 ? customBase.map(c => c.name).join(', ') : '-';
    }
    if (document.getElementById('selected-toppings')) {
        document.getElementById('selected-toppings').textContent =
            customToppings.length > 0 ? customToppings.map(t => t.name).join(', ') : '-';
    }
    if (document.getElementById('selected-fruits')) {
        document.getElementById('selected-fruits').textContent =
            customFruits.length > 0 ? customFruits.map(f => f.name).join(', ') : '-';
    }
    if (document.getElementById('selected-cobertura')) {
        document.getElementById('selected-cobertura').textContent =
            customCobertura.length > 0 ? customCobertura.map(r => r.name).join(', ') : '-';
    }
    if (document.getElementById('selected-adicionais')) {
        document.getElementById('selected-adicionais').textContent =
            customAdicionais.length > 0 ? customAdicionais.map(a => a.name).join(', ') : '-';
    }
    if (document.getElementById('custom-total')) {
        document.getElementById('custom-total').textContent =
            `R$ ${calculateCustomTotal().toFixed(2)}`;
    }
}

// Manipular seleção de opções
function handleOptionSelection(e) {
    const optionItem = e.currentTarget || e.target.closest('.option-item');
    if (!optionItem) return;
    const type = optionItem.dataset.type;
    const id = optionItem.dataset.id;

    // Obter restrições do copo atual
    const restriction = restrictions[customCopo.id];

    // Descobrir se a ação é adicionar (se ainda não está marcado)
    const currentlyMarked = optionItem.classList.contains('selected') || optionItem.classList.contains('checked');
    const isAdding = !currentlyMarked;

    // Validações: se estiver tentando adicionar e já atingiu limite, bloqueia e mostra mensagem
    if (isAdding) {
        if (type === 'base' && customBase.length >= restriction.base) {
            showLimitMessage('base', restriction.base);
            flashItem(optionItem);
            return;
        }
        if (type === 'topping' && customToppings.length >= restriction.topping) {
            showLimitMessage('topping', restriction.topping);
            flashItem(optionItem);
            return;
        }
        if (type === 'fruit' && customFruits.length >= restriction.fruit) {
            showLimitMessage('fruit', restriction.fruit);
            flashItem(optionItem);
            return;
        }
        if (type === 'cobertura' && customCobertura.length >= restriction.cobertura) {
            showLimitMessage('cobertura', restriction.cobertura);
            flashItem(optionItem);
            return;
        }
    }

    // Atualiza estado primeiro, depois DOM via syncOptionClasses()
    if (type === 'copo') {
        // troca de copo (único)
        customCopo = customizationOptions.Copos.find(c => c.id === id);
        // Ajusta as seleções caso excedam as novas restrições
        const newR = restrictions[customCopo.id];
        trimSelectionsToRestriction(newR);
    } else if (type === 'base') {
        const itemObj = customizationOptions.bases.find(c => c.id === id);
        const idx = customBase.findIndex(c => c.id === id);
        if (idx !== -1) customBase.splice(idx, 1);
        else customBase.push(itemObj);
    } else if (type === 'topping') {
        const itemObj = customizationOptions.toppings.find(t => t.id === id);
        const idx = customToppings.findIndex(t => t.id === id);
        if (idx !== -1) customToppings.splice(idx, 1);
        else customToppings.push(itemObj);
    } else if (type === 'fruit') {
        const itemObj = customizationOptions.fruits.find(f => f.id === id);
        const idx = customFruits.findIndex(f => f.id === id);
        if (idx !== -1) customFruits.splice(idx, 1);
        else customFruits.push(itemObj);
    } else if (type === 'adicional') {
        const itemObj = customizationOptions.adicionais.find(a => a.id === id);
        const idx = customAdicionais.findIndex(a => a.id === id);
        if (idx !== -1) customAdicionais.splice(idx, 1);
        else customAdicionais.push(itemObj);
    } else if (type === 'cobertura') {
        const itemObj = customizationOptions.cobertura.find(r => r.id === id);
        const idx = customCobertura.findIndex(r => r.id === id);
        if (idx !== -1) customCobertura.splice(idx, 1);
        else customCobertura.push(itemObj);
    }

    // Sincroniza as classes com o estado atualizado e atualiza resumo
    syncOptionClasses();
    updateCustomSummary();
}

// Adicionar açaí personalizado ao carrinho
function addCustomToCart() {
    // Calcular preço total
    const totalPrice = calculateCustomTotal();

    // Criar descrição completa
    let description = `Açaí Personalizado (${customCopo.name})`;

    if (customBase.length > 0) {
        description += ` com ${customBase.map(c => c.name).join(', ')}`;
    }

    if (customFruits.length > 0) {
        description += ` e ${customFruits.map(f => f.name).join(', ')}`;
    }

    if (customToppings.length > 0) {
        description += ` | Acompanhamento: <br> ${customToppings.map(t => t.name).join(', ')}`;
    }
    if (customCobertura.length > 0) {
        description += `\n | Cobertura: ${customCobertura.map(r => r.name).join(', ')}`;
    }

    if (customCobertura.length > 0) {
        description += `\n | Extra: ${customCobertura.map(c => c.name).join(', ')}`;
    }

    if (customAdicionais.length > 0) {
        description += `\n | Adicionais: ${customAdicionais.map(a => a.name).join(', ')}`;
    }


    // Adicionar ao carrinho
    cart.push({
        product: description,
        price: totalPrice / customQuantity, // Preço unitário
        quantity: customQuantity
    });


    // Atualizar carrinho e mostrar
    updateCart();
    cartModal.style.display = 'block';

    alert('Açaí personalizado adicionado ao carrinho!');
}

// Função para renderizar combos atualizada
function renderCombos() {
    const container = combosSection.querySelector('.products-container');

    container.innerHTML = combos.map(combo => `
        <div class="product-card">
            <div class="product-img">
                <img src="${combo.image}" alt="${combo.name}">
            </div>
            <div class="product-info">
                <h3>${combo.name}</h3>
                <div class="price">R$ ${combo.price.toFixed(2)}</div>
                <div class="description">${combo.description}</div>
                <div class="product-actions">
                    <div class="quantity">
                        <button class="decrement">-</button>
                        <span>1</span>
                        <button class="increment">+</button>
                    </div>
                    <button class="add-to-cart" 
                            data-product="${combo.name}" 
                            data-price="${combo.price}"
                            data-tipo="combo"
                            data-vitahits="${combo.items.vitahits}"
                            data-salgados="${combo.items.salgados}">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Modal para personalização de combos
const comboModalHTML = `
<div id="comboModal" class="modal">
    <div class="modal-content">
        <span class="close" id="closeCombo">&times;</span>
        <h2>Personalize seu Combo</h2>
        
        <div id="comboVitahitsContainer"></div>
        
        <div id="comboSalgadosContainer"></div>
        
        <div class="modal-section">
            <h3>Adicionais Gerais</h3>
            <div class="options-grid" id="comboAdicionaisOptions"></div>
        </div>
        
        <div class="modal-buttons">
            <button id="cancelCombo">Cancelar</button>
            <button id="confirmCombo">Confirmar</button>
        </div>
    </div>
</div>
`;
document.body.insertAdjacentHTML('beforeend', comboModalHTML);
let currentCombo = null;
let comboVitahitsSelections = [];
let comboSalgadosSelections = [];
let comboAdicionais = [];



// Função para preencher o modal de combo
function fillComboModal() {
    document.getElementById('comboVitahitsContainer').innerHTML = '';
    document.getElementById('comboSalgadosContainer').innerHTML = '';

    // Seção para VitaHits
    for (let i = 1; i <= currentCombo.vitahits; i++) {
        const vitahitsSection = document.createElement('div');
        vitahitsSection.className = 'modal-section';
        vitahitsSection.innerHTML = `
            <h3>VitaHits ${i} - Escolha a cobertura</h3>
            <div class="options-grid" id="vitahitsCobertura${i}"></div>
        `;
        document.getElementById('comboVitahitsContainer').appendChild(vitahitsSection);

        // Preencher opções de cobertura
        const container = document.getElementById(`vitahitsCobertura${i}`);
        customizationOptions.cobertura.forEach(cobertura => {
            const option = document.createElement('div');
            option.className = 'option-item';
            option.innerHTML = `
                <input type="radio" name="vitahits${i}_cobertura" 
                       id="vitahits${i}_cobertura_${cobertura.id}" 
                       data-vitahits-index="${i - 1}"
                       data-id="${cobertura.id}">
                <label for="vitahits${i}_cobertura_${cobertura.id}">${cobertura.name}</label>
            `;
            container.appendChild(option);
        });
    }

    // Seção para Salgados
    for (let i = 1; i <= currentCombo.salgados; i++) {
        const salgadosSection = document.createElement('div');
        salgadosSection.className = 'modal-section';
        salgadosSection.innerHTML = `
            <h3>Salgado ${i} - Escolha o tipo</h3>
            <div class="options-grid" id="salgadosOptions${i}"></div>
        `;
        document.getElementById('comboSalgadosContainer').appendChild(salgadosSection);

        // Preencher opções de salgados
        const container = document.getElementById(`salgadosOptions${i}`);
        snacks.forEach(snack => {
            const option = document.createElement('div');
            option.className = 'option-item';
            option.innerHTML = `
                <input type="radio" name="salgado${i}" 
                       id="salgado${i}_${snack.id}" 
                       data-salgado-index="${i - 1}"
                       data-id="${snack.id}">
                <label for="salgado${i}_${snack.id}">${snack.name}</label>
            `;
            container.appendChild(option);
        });
    }

    // Seção de adicionais
    const adicionaisContainer = document.getElementById('comboAdicionaisOptions');
    adicionaisContainer.innerHTML = '';
    customizationOptions.adicionais.forEach(adicional => {
        const option = document.createElement('div');
        option.className = 'option-item';
        option.innerHTML = `
            <input type="checkbox" id="combo_adicional_${adicional.id}" 
                   data-id="${adicional.id}" data-price="${adicional.price}">
            <label for="combo_adicional_${adicional.id}">${adicional.name} (+R$ ${adicional.price.toFixed(2)})</label>
        `;
        adicionaisContainer.appendChild(option);
    });
}

// Eventos para o modal de combo
document.getElementById('closeCombo').addEventListener('click', closeComboModal);
document.getElementById('cancelCombo').addEventListener('click', closeComboModal);

document.getElementById('confirmCombo').addEventListener('click', function () {
    // Verificar se todas as seleções foram feitas
    const allVitahitsSelected = comboVitahitsSelections.every(v => v.cobertura !== null);
    const allSalgadosSelected = comboSalgadosSelections.every(s => s.salgado !== null);

    if (!allVitahitsSelected || !allSalgadosSelected) {
        alert('Por favor, selecione todas as opções para o combo!');
        return;
    }

    // Construir descrição do combo
    let description = `${currentCombo.name}: `;
    let finalPrice = currentCombo.basePrice;

    // Adicionar VitaHits
    comboVitahitsSelections.forEach((v, i) => {
        description += `\n- VitaHits ${i + 1}: ${v.cobertura.name}`;
    });

    // Adicionar Salgados
    comboSalgadosSelections.forEach((s, i) => {
        description += `\n- Salgado ${i + 1}: ${s.salgado.name}`;
        // Se o salgado tiver descrição, adicionar
        if (s.salgado.description) {
            description += ` (${s.salgado.description})`;
        }
    });

    // Adicionais
    if (comboAdicionais.length > 0) {
        description += `\n- Adicionais: ${comboAdicionais.map(a => a.name).join(', ')}`;
        comboAdicionais.forEach(a => finalPrice += a.price);
    }

    // Adicionar ao carrinho
    cart.push({
        product: description,
        price: finalPrice,
        quantity: currentCombo.quantity
    });

    closeComboModal();
    updateCart();
    cartModal.style.display = 'block';
});

// Eventos de seleção no modal de combo
document.getElementById('comboModal').addEventListener('change', function (e) {
    const target = e.target;

    // Seleção de cobertura para VitaHits
    if (target.name.startsWith('vitahits') && target.type === 'radio') {
        const vitahitsIndex = parseInt(target.dataset.vitahitsIndex);
        const coberturaId = target.dataset.id;
        const cobertura = customizationOptions.cobertura.find(c => c.id === coberturaId);

        comboVitahitsSelections[vitahitsIndex] = {
            ...comboVitahitsSelections[vitahitsIndex],
            cobertura: cobertura
        };
    }

    // Seleção de salgados
    if (target.name.startsWith('salgado') && target.type === 'radio') {
        const salgadoIndex = parseInt(target.dataset.salgadoIndex);
        const salgadoId = target.dataset.id;
        const salgado = snacks.find(s => s.id === salgadoId);

        comboSalgadosSelections[salgadoIndex] = {
            ...comboSalgadosSelections[salgadoIndex],
            salgado: salgado
        };
    }

    // Seleção de adicionais
    if (target.id.startsWith('combo_adicional') && target.type === 'checkbox') {
        const adicionalId = target.dataset.id;
        const adicional = customizationOptions.adicionais.find(a => a.id === adicionalId);

        if (target.checked) {
            comboAdicionais.push(adicional);
        } else {
            const index = comboAdicionais.findIndex(a => a.id === adicionalId);
            if (index !== -1) comboAdicionais.splice(index, 1);
        }
    }
});

function closeComboModal() {
    document.getElementById('comboModal').style.display = 'none';
    currentCombo = null;
    comboVitahitsSelections = [];
    comboSalgadosSelections = [];
    comboAdicionais = [];
}

// Função para renderizar salgados
function renderSnacks() {
    const container = snacksSection.querySelector('.products-container');

    container.innerHTML = snacks.map(snack => `
        <div class="product-card">
            <div class="product-img">
                <img src="${snack.image}" alt="${snack.name}">
            </div>
            <div class="product-info">
                <h3>${snack.name}</h3>
                <div class="price">R$ ${snack.price.toFixed(2)}</div>
                <div class="description">${snack.description}</div>
                <div class="product-actions">
                    <div class="quantity">
                        <button class="decrement">-</button>
                        <span>1</span>
                        <button class="increment">+</button>
                    </div>
                    <button class="add-to-cart" 
                        data-product="${snack.name}" 
                        data-price="${snack.price}"
                        data-tipo="salgado">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Função para salvar personalização (modal)
function saveCustomization() {
    const selectedBase = document.querySelector('input[name="base"]:checked');
    const selectedToppings = [...document.querySelectorAll('input[name="topping"]:checked')];
    const selectedFruits = [...document.querySelectorAll('input[name="fruit"]:checked')];
    const selectedCobertura = [...document.querySelectorAll('input[name="Cpbertura"]:checked')];

    // Calcular preço adicional
    let extraPrice = 0;
    extraPrice += parseFloat(selectedBase.dataset.price);
    selectedToppings.forEach(t => extraPrice += parseFloat(t.dataset.price));
    selectedFruits.forEach(f => extraPrice += parseFloat(f.dataset.price));
    selectedCobertura.forEach(r => extraPrice += parseFloat(r.dataset.price));

    // Aqui você pode salvar essas informações no item do carrinho
    alert(`Personalização salva! Adicional: R$ ${extraPrice.toFixed(2)}`);
    customizeModal.style.display = 'none';
}

// Update Cart
function updateCart() {
    // Update cart count
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

    // Update cart items
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><p>Seu carrinho está vazio</p></div>';
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="item-info">
                    <div class="item-name">${item.product}</div>
                    <div class="item-price">R$ ${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <div class="item-actions">
                    <button class="decrement" data-index="${index}">-</button>
                    <span class="item-quantity">${item.quantity}</span>
                    <button class="increment" data-index="${index}">+</button>
                    <button class="remove-item" data-index="${index}"><i class="fas fa-trash"></i></button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}

async function generatePDF(orderDetails) {
    const { jsPDF } = window.jspdf;
    
    // Configuração do documento
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    // Margens
    const margin = 15;
    const pageWidth = doc.internal.pageSize.getWidth();
    const maxWidth = pageWidth - 2 * margin;
    let y = margin;

    // Cores do tema
    const primaryColor = [111, 38, 205]; // Roxo
    const secondaryColor = [255, 153, 0]; // Laranja

    // Função para carregar imagem como base64
    const loadImage = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = url;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                const dataURL = canvas.toDataURL('image/png');
                resolve(dataURL);
            };
            img.onerror = () => resolve(null);
        });
    };

    // Carregar a logo
    const logoData = await loadImage('./assets/logos/Logo-cabeca-hits.png');

    // Cabeçalho com logo
    if (logoData) {
        const logoWidth = 40;
        const logoHeight = (logoWidth * 150) / 300;
        const logoX = (pageWidth - logoWidth) / 2;
        doc.addImage(logoData, 'PNG', logoX, y, logoWidth, logoHeight);
        y += logoHeight + 10;
    } else {
        doc.setFontSize(20);
        doc.setTextColor(...primaryColor);
        doc.setFont('helvetica', 'bold');
        doc.text('AÇAÍ HITS', pageWidth / 2, y + 10, { align: 'center' });
        y += 20;
    }

    // Título
    doc.setFontSize(18);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('COMPROVANTE DE PEDIDO', pageWidth / 2, y, { align: 'center' });
    y += 15;

    // Informações da empresa
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Açaí Hits - Sabor e Qualidade', pageWidth / 2, y, { align: 'center' });
    y += 5;
    doc.text('WhatsApp: (84) 99600-2433', pageWidth / 2, y, { align: 'center' });
    y += 10;

    // Divisor
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 15;

    // Informações do cliente
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.text('DADOS DO CLIENTE', margin, y);
    y += 8;

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Data: ${new Date().toLocaleString('pt-BR')}`, margin, y);
    y += 7;

    doc.text(`Cliente: ${orderDetails.name}`, margin, y);
    y += 7;

    const addressLines = doc.splitTextToSize(`Endereço: ${orderDetails.address}`, maxWidth);
    addressLines.forEach(line => {
        doc.text(line, margin, y);
        y += 7;
    });

    doc.text(`Local: ${orderDetails.deliveryLocation}`, margin, y);
    y += 7;

    doc.text(`Pagamento: ${orderDetails.paymentMethod}`, margin, y);
    y += 15;

    // ITENS DO PEDIDO - VERSÃO REESCRITA
    // ITENS DO PEDIDO - VERSÃO ATUALIZADA
doc.setFontSize(12);
doc.setFont('helvetica', 'bold');
doc.text('ITENS DO PEDIDO', margin, y);
y += 10;

orderDetails.items.forEach(item => {
    // 1. Linha principal (quantidade + nome do produto)
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    
    // Extrai o nome base do produto (antes da primeira vírgula ou |)
    const productName = item.product.split(/[,|]/)[0].trim();
    doc.text(`${item.quantity}x ${productName}`, margin, y);
    y += 6;
    
    // 2. Processa os complementos
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    // Verifica se há complementos (após a primeira vírgula ou |)
    if (item.product.includes(',') || item.product.includes('|')) {
        // Pega toda a parte após o nome do produto
        const complements = item.product.substring(item.product.indexOf(/[,|]/) + 1).trim();
        
        // Divide os complementos considerando vírgulas ou pontos e vírgula
        const complementList = complements.split(/[,;]/).map(c => c.trim()).filter(c => c);
        
        // Adiciona cada complemento com bullet point
        complementList.forEach(complement => {
            doc.text(` • ${complement}`, margin + 5, y);
            y += 5;
        });
    }
    
    // Espaço entre itens
    y += 8;
});

    // Divisor
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 15;

    // Totais
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('RESUMO DO PEDIDO', margin, y);
    y += 15;

    doc.setFontSize(11);
    doc.text('Subtotal:', pageWidth - margin - 60, y, { align: 'right' });
    doc.text(`R$ ${orderDetails.subtotal.toFixed(2)}`, pageWidth - margin - 5, y, { align: 'right' });
    y += 8;

    doc.text('Taxa de entrega:', pageWidth - margin - 60, y, { align: 'right' });
    doc.text(`R$ ${orderDetails.deliveryFee.toFixed(2)}`, pageWidth - margin - 5, y, { align: 'right' });
    y += 8;

    // Linha do total
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);
    doc.line(pageWidth - margin - 70, y, pageWidth - margin, y);
    y += 2;

    doc.setFontSize(13);
    doc.setTextColor(...primaryColor);
    doc.text('TOTAL:', pageWidth - margin - 60, y + 5, { align: 'right' });
    doc.text(`R$ ${orderDetails.total.toFixed(2)}`, pageWidth - margin - 5, y + 5, { align: 'right' });
    y += 15;

    // Mensagem final
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Obrigado por escolher o Açaí Hits!', pageWidth / 2, y, { align: 'center' });
    y += 5;
    doc.text('Seu pedido será preparado com todo carinho.', pageWidth / 2, y, { align: 'center' });
    y += 5;
    doc.text('WhatsApp: (84) 99600-2433', pageWidth / 2, y, { align: 'center' });

    return doc.output('blob');
}
// Upload para o Google Drive
async function uploadToDrive(pdfBlob, fileName) {
    return new Promise((resolve) => {
        const tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: DRIVE_CLIENT_ID,
            scope: 'https://www.googleapis.com/auth/drive.file',
            callback: async (tokenResponse) => {
                const accessToken = tokenResponse.access_token;

                const metadata = {
                    name: fileName,
                    mimeType: 'application/pdf',
                    parents: [DRIVE_FOLDER_ID]
                };

                const formData = new FormData();
                formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
                formData.append('file', pdfBlob);

                try {
                    const response = await fetch(
                        `https://www.googleapis.com/upload/drive/v3/files?key=${DRIVE_API_KEY}&uploadType=multipart`,
                        {
                            method: 'POST',
                            headers: { 'Authorization': `Bearer ${accessToken}` },
                            body: formData
                        }
                    );

                    const file = await response.json();
                    resolve(`https://drive.google.com/file/d/${file.id}/view`);
                } catch (error) {
                    console.error('Erro no upload:', error);
                    resolve(null);
                }
            }
        });

        tokenClient.requestAccessToken();
    });
}

// Event Delegation for Dynamic Elements
document.addEventListener('click', function (e) {
    // Mobile Menu Toggle
    if (e.target === menuBtn || e.target.closest('#menuBtn')) {
        navbar.classList.toggle('active');
    }

    // Floating Cart Click
    if (e.target === floatingCart || e.target.closest('#floatingCart')) {
        cartModal.style.display = 'block';
    }

    // Close Cart Modal
    if (e.target === closeCart || e.target.closest('#closeCart')) {
        cartModal.style.display = 'none';
    }

    // Open Checkout Modal
    if (e.target === checkoutBtn || e.target.closest('#checkoutBtn')) {
        cartModal.style.display = 'none';
        checkoutModal.style.display = 'block';
    }

    // Close Checkout Modal
    if (e.target === closeCheckout || e.target.closest('#closeCheckout')) {
        checkoutModal.style.display = 'none';
    }

    // Close Customize Modal
    if (e.target === closeCustomize || e.target.closest('#closeCustomize')) {
        customizeModal.style.display = 'none';
    }

    // Cancel Customization
    if (e.target === cancelCustomize || e.target.closest('#cancelCustomize')) {
        customizeModal.style.display = 'none';
    }

    // Save Customization
    if (e.target === saveCustomize || e.target.closest('#saveCustomize')) {
        customizeModal.style.display = 'none';
        alert('Personalização salva com sucesso!');
    }

    // Logout Button
    if (e.target.id === 'logoutBtn' || e.target.closest('#logoutBtn')) {
        logout();
    }

    // Product Quantity Increment
    if (e.target.classList.contains('increment') && !e.target.hasAttribute('data-index')) {
        const button = e.target.classList.contains('increment') ? e.target : e.target.closest('.increment');
        const quantityElement = button.parentElement.querySelector('span');
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
    }

    // Product Quantity Decrement
    if (e.target.classList.contains('decrement') && !e.target.hasAttribute('data-index')) {
        const button = e.target.classList.contains('decrement') ? e.target : e.target.closest('.decrement');
        const quantityElement = button.parentElement.querySelector('span');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = quantity - 1;
        }
    }

    // Add to Cart (Modificado para abrir modal de acompanhamentos)
    if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
        const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));
        const quantity = parseInt(button.parentElement.querySelector('.quantity span').textContent);

        // Obter máximo de acompanhamentos do produto
        const restrictionsDiv = button.closest('.product-card').querySelector('.restrictions');
        const acompanhamentosText = restrictionsDiv.querySelector('p:last-child').textContent;
        const maxAcompanhamentos = parseInt(acompanhamentosText.match(/\d+/)[0]);

        // Armazenar produto atual
        currentProduct = {
            name: product,
            basePrice: price,
            maxAcompanhamentos: maxAcompanhamentos,
            quantity: quantity
        };

        // Resetar seleções
        currentAcompanhamentos = [];

        // Preencher e abrir modal
        fillAcompanhamentosModal();
        document.getElementById('acompanhamentosModal').style.display = 'block';
    }

    // Cart Item Increment
    if (e.target.classList.contains('increment') && e.target.hasAttribute('data-index')) {
        const index = parseInt(e.target.getAttribute('data-index'));
        cart[index].quantity++;
        updateCart();
    }

    // Cart Item Decrement
    if (e.target.classList.contains('decrement') && e.target.hasAttribute('data-index')) {
        const index = parseInt(e.target.getAttribute('data-index'));
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
            updateCart();
        }
    }

    // Remove Item from Cart
    if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
        const button = e.target.classList.contains('remove-item') ? e.target : e.target.closest('.remove-item');
        const index = parseInt(button.getAttribute('data-index'));
        cart.splice(index, 1);
        updateCart();
    }
});

// Preencher modal de acompanhamentos
function fillAcompanhamentosModal() {
    const container = document.getElementById('acompanhamentosOptions');
    container.innerHTML = '';

    customizationOptions.toppings.forEach(topping => {
        const option = document.createElement('div');
        option.className = 'option-item';
        option.dataset.id = topping.id;
        option.innerHTML = `
            <input type="checkbox" id="topping_${topping.id}" data-id="${topping.id}" data-price="${topping.price}">
            <label for="topping_${topping.id}">${topping.name} ${topping.price > 0 ? `(+R$ ${topping.price.toFixed(2)})` : ''}</label>
        `;
        container.appendChild(option);
    });

    updateAcompanhamentosMessage();
}

// Atualizar mensagem de acompanhamentos
function updateAcompanhamentosMessage() {
    const messageEl = document.getElementById('acompanhamentosMessage');
    messageEl.textContent = `Selecionados: ${currentAcompanhamentos.length} de ${currentProduct.maxAcompanhamentos}`;
}

// Evento para seleção de acompanhamentos
document.getElementById('acompanhamentosOptions').addEventListener('change', function (e) {
    if (e.target.type === 'checkbox') {
        const toppingId = e.target.dataset.id;
        const topping = customizationOptions.toppings.find(t => t.id === toppingId);

        if (e.target.checked) {
            if (currentAcompanhamentos.length < currentProduct.maxAcompanhamentos) {
                currentAcompanhamentos.push(topping);
            } else {
                e.target.checked = false;
                alert(`Máximo de ${currentProduct.maxAcompanhamentos} acompanhamentos permitidos!`);
            }
        } else {
            const index = currentAcompanhamentos.findIndex(t => t.id === toppingId);
            if (index !== -1) {
                currentAcompanhamentos.splice(index, 1);
            }
        }

        updateAcompanhamentosMessage();
    }
});

// Finalizar pedido - Modificado para usar dados do usuário logado
checkoutForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loadingOverlay.style.display = 'flex';

    try {
        // Se não estiver logado, verifica se tem dados salvos
        if (!currentUser) {
            checkSavedUser();
        }

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const deliveryLocation = document.getElementById('deliveryLocation').value;
        const deliveryFee = calculateDeliveryFee(subtotal, deliveryLocation);

        const orderDetails = {
            name: currentUser ? currentUser.name : document.getElementById('name').value,
            address: document.getElementById('address').value,
            deliveryLocation: document.getElementById('deliveryLocation').value,
            paymentMethod: document.getElementById('paymentMethod').value,
            notes: document.getElementById('notes').value,
            items: [...cart],
            subtotal: subtotal,
            deliveryFee: deliveryFee,
            total: subtotal + deliveryFee,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            userEmail: currentUser ? currentUser.email : null
        };

        // Validação dos campos obrigatórios
        if (!orderDetails.name || !orderDetails.address || !orderDetails.deliveryLocation || !orderDetails.paymentMethod) {
            throw new Error('Por favor, preencha todos os campos obrigatórios');
        }

        // Gerar PDF
        const pdfBlob = await generatePDF(orderDetails);
        const fileName = `Pedido_${orderDetails.name.replace(/ /g, '_')}_${Date.now()}.pdf`;

        // Upload para o Drive
        const pdfLink = await uploadToDrive(pdfBlob, fileName);

        // Mensagem para WhatsApp
                let message = `*NOVO PEDIDO AÇAÍ HITS*%0A%0A` +
            `*Cliente:* ${orderDetails.name}%0A` +
            `*Endereço:* ${orderDetails.address}%0A` +
            `*Local:* ${orderDetails.deliveryLocation}%0A` +
            `*Pagamento:* ${orderDetails.paymentMethod}%0A` +
            `*Subtotal:* R$ ${orderDetails.subtotal.toFixed(2)}%0A` +
            `*Taxa de entrega:* R$ ${orderDetails.deliveryFee.toFixed(2)}%0A` +
            `*Total:* R$ ${orderDetails.total.toFixed(2)}%0A%0A` +
            `*Itens:*%0A%0A`;

        // Processar cada item do pedido para WhatsApp
        orderDetails.items.forEach(item => {
            // Parte principal (quantidade + nome)
            message += `*${item.quantity}x ${item.product.split('|')[0].trim()}*%0A`;
            
            // Processar complementos (se houver)
            if (item.product.includes('|')) {
                const parts = item.product.split('|').slice(1).map(p => p.trim());
                
                parts.forEach(part => {
                    // Adicionais
                    if (part.includes('adicionais:')) {
                        const [title, items] = part.split(':').map(s => s.trim());
                        message += `_${title}:_%0A`;
                        
                        items.split(';').forEach(additional => {
                            if (additional.trim()) {
                                message += `• ${additional.trim()}%0A`;
                            }
                        });
                    } 
                    // Outros complementos
                    else {
                        part.split(';').forEach(complement => {
                            if (complement.trim()) {
                                message += `- ${complement.trim()}%0A`;
                            }
                        });
                    }
                });
            }
            
            message += `_Valor: R$ ${(item.price * item.quantity).toFixed(2)}_%0A%0A`;
        });

        if (pdfLink) {
            message += `%0A*COMPROVANTE:* ${pdfLink}`;
        }
        // Limpar e redirecionar
        cart = [];
        updateCart();
        checkoutForm.reset();
        checkoutModal.style.display = 'none';

        window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    } catch (error) {
        alert(error.message || 'Erro ao processar pedido. Tente novamente.');
        console.error(error);
    } finally {
        loadingOverlay.style.display = 'none';
    }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Carrega APIs
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    const jsPDFScript = document.createElement('script');
    jsPDFScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    document.head.appendChild(jsPDFScript);

    // Verifica se já está logado
    const isLoggedIn = checkSavedUser();

    // Inicializa o Google Sign-In
    initializeGoogleSignIn(isLoggedIn);

    // Renderizar seções
    renderCustomizationSection(); // Nova função para a seção de personalização
    renderCombos();
    renderSnacks();

    // Atualizar carrinho
    updateCart();

    // Adicionar evento de logout
    document.getElementById('logoutBtn')?.addEventListener('click', logout);

    // ADICIONE AQUI ↓
    // Atualizar total quando mudar a ilha de entrega
    document.getElementById('deliveryLocation').addEventListener('change', updateCheckoutTotal);

    // ADICIONE TAMBÉM AQUI ↓
    // Atualizar total quando o modal de checkout for aberto
    checkoutBtn.addEventListener('click', updateCheckoutTotal);
});

// Função global para o callback do Google
window.handleGoogleLogin = handleGoogleLogin;

// Fechar modal de acompanhamentos
document.getElementById('closeAcompanhamentos').addEventListener('click', function () {
    document.getElementById('acompanhamentosModal').style.display = 'none';
});

// Cancelar acompanhamentos
document.getElementById('cancelAcompanhamentos').addEventListener('click', function () {
    document.getElementById('acompanhamentosModal').style.display = 'none';
});

// Confirmar acompanhamentos
document.getElementById('confirmAcompanhamentos').addEventListener('click', function () {
    const productName = currentProduct.name;
    let finalPrice = currentProduct.basePrice;

    // Calcular preço adicional
    currentAcompanhamentos.forEach(topping => {
        finalPrice += topping.price;
    });

    // Montar descrição do produto
    let description = productName;
    if (currentAcompanhamentos.length > 0) {
        description += ` com ${currentAcompanhamentos.map(t => t.name).join(', ')}`;
    }

    // Adicionar ao carrinho
    cart.push({
        product: description,
        price: finalPrice,
        quantity: currentProduct.quantity
    });

    // Atualizar e fechar
    updateCart();
    document.getElementById('acompanhamentosModal').style.display = 'none';
    cartModal.style.display = 'block';
});