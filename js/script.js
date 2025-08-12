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
    ],
    bases: [
        { id: 'base1', name: 'Açaí Tradicional', price: 0 },
        { id: 'base2', name: 'Ninho', price: 0 },
        { id: 'base3', name: 'Ninho trunfado', price: 0 },
        { id: 'base4', name: 'Chocomalte', price: 0 },
        { id: 'base5', name: 'Cupuaçu', price: 0 },
    ],
    toppings: [
        { id: 'top1', name: 'Leite em pó', price: 0 },
        { id: 'top2', name: 'Farinha Láctea', price: 0 },
        { id: 'top3', name: 'Flocos de Arroz', price: 0 },
        { id: 'top4', name: 'M&M', price: 0 },
        { id: 'top5', name: 'ChocoPower', price: 0 },
        { id: 'top6', name: 'Granola', price: 0 },
        { id: 'top7', name: 'Paçoca', price: 0 },
        { id: 'top8', name: 'Granulado', price: 0 },
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
        { id: 'fruit3', name: 'Kiwi', price: 0 }
    ],
    adicionais: [
        { id: 'Adic1', name: 'Nutella', price: 3.5 },
        { id: 'Adic2', name: 'Oreo', price: 2 },
        { id: 'Adic3', name: 'kit Kat', price: 3 },
        { id: 'Adic4', name: 'Castanha', price: 2 },
        { id: 'Adic5', name: 'Creme de leitinho', price: 3 },
        { id: 'Adic6', name: 'Batom', price: 2 }
    ],
    cobertura: [
        { id: 'cober1', name: 'Leite condensado', price: 0 },
        { id: 'cober2', name: 'Chocolate', price: 0 },
        { id: 'cober3', name: 'Morango', price: 0 },
        { id: 'cober4', name: 'Uva', price: 0 },
    ]
};

const combos = [
    {
        id: 'combo1',
        name: 'Combo Família',
        price: 45,
        description: '2 Açaís 500ml + 2 Salgados',
        image: './assets/produtos/COMBO1.jpg'
    },
    {
        id: 'combo2',
        name: 'Combo Casal',
        price: 30,
        description: '2 Açaís 400ml + 1 Salgado',
        image: './assets/produtos/COMBO1.jpg'
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
        name: 'Pastel de forno',
        price: 6,
        description: 'Pastel assado recheado com frango',
        image: './assets/produtos/PASTELDEFORNO.jpg'
    },
    {
        id: 'snack4',
        name: 'Empada de Frango',
        price: 6,
        description: 'Empada recheada com frango',
        image: './assets/produtos/EMPADA.jpg'
    },
    {
        id: 'snack5',
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

// User Management
let currentUser = null;

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

function calculateDeliveryFee(subtotal, deliveryLocation) {
    if (deliveryLocation === 'Ilha I' && subtotal < 26) {
        return 5;
    } else if (deliveryLocation === 'Ilha II' && subtotal < 36) {
        return 7;
    }
    return 0;
}
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

// Função para renderizar combos
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
                    <button class="add-to-cart" data-product="${combo.name}" data-price="${combo.price}">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
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
                    <button class="add-to-cart" data-product="${snack.name}" data-price="${snack.price}">
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

    // Configuração para comprovante (58mm de largura)
    const width = 58; // mm
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [width, 300] // Largura fixa de 58mm, altura inicial estimada
    });

    // Configurações gerais
    doc.setFont('helvetica');
    doc.setTextColor(0, 0, 0); // Preto
    const margin = 2; // Margem mínima
    let y = margin;

    // Fonte menor para caber no comprovante
    const fontSizeSmall = 6;
    const fontSizeNormal = 7;
    const fontSizeTitle = 8;

    // Cabeçalho
    doc.setFontSize(fontSizeTitle);
    doc.setTextColor(111, 38, 205); // Roxo
    doc.text('AÇAÍ HITS- COMPROVANTE', width / 2, y, { align: 'center' });
    y += 5;

    // Linha divisória
    doc.setLineWidth(0.2);
    doc.line(margin, y, width - margin, y);
    y += 3;

    // Informações do cliente
    doc.setFontSize(fontSizeNormal);
    doc.setTextColor(0, 0, 0); // Preto

    doc.text(`Data: ${new Date().toLocaleString('pt-BR')}`, margin, y);
    y += 4;

    doc.text(`Cliente: ${orderDetails.name}`, margin, y);
    y += 4;

    // Quebra endereço se necessário
    const addressLines = doc.splitTextToSize(`Endereço: ${orderDetails.address}`, width - 2 * margin);
    addressLines.forEach(line => {
        doc.text(line, margin, y);
        y += 4;
    });

    doc.text(`Local: ${orderDetails.deliveryLocation}`, margin, y);
    y += 4;

    doc.text(`Pagamento: ${orderDetails.paymentMethod}`, margin, y);
    y += 4;

    if (currentUser) {
        doc.text(`Usuário: ${currentUser.email}`, margin, y);
        y += 4;
    }

    // Linha divisória
    doc.line(margin, y, width - margin, y);
    y += 4;

    // Itens do pedido
    doc.setFontSize(fontSizeTitle);
    doc.text('ITENS DO PEDIDO', width / 2, y, { align: 'center' });
    y += 5;

    doc.setFontSize(fontSizeSmall);
    orderDetails.items.forEach(item => {
        // Limpar formatação HTML
        const cleanProduct = item.product.replace(/<br>/g, ' ');
        
        // Criar descrição compacta
        const descText = `- ${cleanProduct} (${item.quantity}x)`;
        const priceText = `R$ ${(item.price * item.quantity).toFixed(2)}`;
        
        // Quebrar texto se necessário
        const lines = doc.splitTextToSize(descText, width - 15 - margin); // Reserva espaço para preço
        
        lines.forEach(line => {
            doc.text(line, margin, y);
            y += 3;
        });
        
        // Preço alinhado à direita
        doc.text(priceText, width - margin, y - 3, { align: 'right' });
        
        y += 2; // Espaço entre itens
    });

    // Linha divisória
    y += 2;
    doc.line(margin, y, width - margin, y);
    y += 4;

    // Totais
    doc.setFontSize(fontSizeNormal);
    doc.text(`Subtotal: R$ ${orderDetails.subtotal.toFixed(2)}`, width - margin, y, { align: 'right' });
    y += 4;
    
    doc.text(`Taxa entrega: R$ ${orderDetails.deliveryFee.toFixed(2)}`, width - margin, y, { align: 'right' });
    y += 4;
    
    doc.setFontSize(fontSizeTitle);
    doc.text(`TOTAL: R$ ${orderDetails.total.toFixed(2)}`, width - margin, y, { align: 'right' });
    y += 8;

    // Rodapé
    doc.setFontSize(fontSizeSmall);
    doc.text('Obrigado pela preferência!', width / 2, y, { align: 'center' });

    // Ajustar altura final do documento
    const pageHeight = doc.internal.pageSize.getHeight();
    if (y > pageHeight - 10) {
        doc.addPage([width, y + 10]); // Adiciona nova página se necessário
    }

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

    // Add to Cart
    if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
        const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));
        const quantity = parseInt(button.parentElement.querySelector('.quantity span').textContent);

        // Verifica se o produto já está no carrinho
        const existingItem = cart.find(item => item.product === product);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                product,
                price,
                quantity
            });
        }

        updateCart();
        cartModal.style.display = 'block';
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
        let message = `*NOVO PEDIDO FOX AÇAÍ*%0A%0A` +
            `*Cliente:* ${orderDetails.name}%0A` +
            `*Endereço:* ${orderDetails.address}%0A` +
            `*Local:* ${orderDetails.deliveryLocation}%0A` +
            `*Pagamento:* ${orderDetails.paymentMethod}%0A` +
            `*Subtotal:* R$ ${orderDetails.subtotal.toFixed(2)}%0A` +
            `*Taxa de entrega:* R$ ${orderDetails.deliveryFee.toFixed(2)}%0A` + // Nova linha
            `*Total:* R$ ${orderDetails.total.toFixed(2)}%0A%0A`

        if (currentUser && currentUser.email) {
            message += `*Email:* ${currentUser.email}%0A`;
        }

        message += `*Total:* R$ ${orderDetails.total.toFixed(2)}%0A%0A` +
            `*Itens:*%0A`;

        orderDetails.items.forEach(item => {
            message += `- ${item.product} (${item.quantity}x): R$ ${(item.price * item.quantity).toFixed(2)}%0A`;
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
});

// Função global para o callback do Google
window.handleGoogleLogin = handleGoogleLogin;