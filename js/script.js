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
    ]
};

const combos = [
    {
        id: 'combo1',
        name: 'Combo Família',
        price: 45,
        description: '2 Açaís 500ml + 2 Salgados',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
        id: 'combo2',
        name: 'Combo Casal',
        price: 30,
        description: '2 Açaís 400ml + 1 Salgado',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    }
];

const snacks = [
    {
        id: 'snack1',
        name: 'Tapioca',
        price: 8,
        description: 'Tapioca recheada com queijo e presunto',
        image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
        id: 'snack2',
        name: 'Pão de Queijo',
        price: 5,
        description: 'Pão de queijo caseiro',
        image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    }
];

// Cart Data
let cart = [];

// Estado da personalização
let customBase = customizationOptions.bases[0];
let customCopo = customizationOptions.Copos[0];
let customToppings = [];
let customFruits = [];
let customAdicionais = [];
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

// Handle Google Login
function handleGoogleLogin(response) {
    const decodeJwtResponse = (token) => {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
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

// Função para renderizar a seção de personalização
function renderCustomizationSection() {
    const optionsContainer = customizeSection.querySelector('.customize-options');
    
    let html = `
    <div class="customize-container">
        <!-- Coluna da Esquerda - Opções -->
        <div class="customize-options-column">
            <div class="option-group">
                <h3>Copos</h3>
                <div class="options-grid">
                    ${customizationOptions.Copos.map(option => `
                        <div class="option-item ${customCopo.id === option.id ? 'selected' : ''}" 
                             data-type="copo" data-id="${option.id}">
                            <input type="radio" name="copo" value="${option.id}" 
                                   ${customCopo.id === option.id ? 'checked' : ''}>
                            ${option.name} ${option.price > 0 ? `(+R$ ${option.price.toFixed(2)})` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="option-group">
                <h3>Cremes</h3>
                <div class="options-grid">
                    ${customizationOptions.bases.map(option => `
                        <div class="option-item ${customBase.id === option.id ? 'selected' : ''}" 
                             data-type="base" data-id="${option.id}">
                            <input type="radio" name="base" value="${option.id}" 
                                   ${customBase.id === option.id ? 'checked' : ''}>
                            ${option.name}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="option-group">
                <h3>Coberturas</h3>
                <div class="options-grid">
                    ${customizationOptions.toppings.map(option => `
                        <div class="option-item ${customToppings.some(t => t.id === option.id) ? 'selected' : ''}" 
                             data-type="topping" data-id="${option.id}">
                            <input type="checkbox" name="topping" value="${option.id}" 
                                   ${customToppings.some(t => t.id === option.id) ? 'checked' : ''}>
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
                            <input type="checkbox" name="fruit" value="${option.id}" 
                                   ${customFruits.some(f => f.id === option.id) ? 'checked' : ''}>
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
                            <input type="checkbox" name="adicional" value="${option.id}">
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
                    <span id="selected-base">${customBase.name}</span>
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
    let total = customBase.price;
    customToppings.forEach(t => total += t.price);
    customFruits.forEach(f => total += f.price);
    customAdicionais.forEach(a => total += a.price);
    return total * customQuantity;
}

// Atualizar resumo da personalização
function updateCustomSummary() {
    if (document.getElementById('selected-copo')) {
        document.getElementById('selected-copo').textContent = customCopo.name;
    }
    if (document.getElementById('selected-base')) {
        document.getElementById('selected-base').textContent = customBase.name;
    }
    if (document.getElementById('selected-toppings')) {
        document.getElementById('selected-toppings').textContent = 
            customToppings.length > 0 ? customToppings.map(t => t.name).join(', ') : '-';
    }
    if (document.getElementById('selected-fruits')) {
        document.getElementById('selected-fruits').textContent = 
            customFruits.length > 0 ? customFruits.map(f => f.name).join(', ') : '-';
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

// Copo de 300ml
//  Dois cremes
//  Três acompanhamento
//  Uma Fruta
//  Uma cobertura
// Copo de 400ml
//  Dois cremes
//  Três acompanhamento
//  Duas Fruta
//  Uma cobertura
// Copo de 500ml
//  Dois cremes
//  Cinco acompanhamento
//  Duas Fruta
//  Uma cobertura
// Manipular seleção de opções
function handleOptionSelection(e) {
    const optionItem = e.currentTarget;
    const type = optionItem.dataset.type;
    const id = optionItem.dataset.id;
    
    if (type === 'copo' || type === 'base') {
        // Seleção única (radio)
        document.querySelectorAll(`.option-item[data-type="${type}"]`).forEach(item => {
            item.classList.remove('selected');
        });
        optionItem.classList.add('selected');
        
        if (type === 'copo') {
            customBase = customizationOptions.Copos.find(c => c.id === id);
        } else {
            customBase = customizationOptions.bases.find(b => b.id === id);
        }
    } else {
        // Seleção múltipla (checkbox)
        optionItem.classList.toggle('selected');
        
        if (type === 'topping') {
            const topping = customizationOptions.toppings.find(t => t.id === id);
            const index = customToppings.findIndex(t => t.id === id);
            
            if (index !== -1) {
                customToppings.splice(index, 1);
            } else {
                customToppings.push(topping);
            }
        } else if (type === 'fruit') {
            const fruit = customizationOptions.fruits.find(f => f.id === id);
            const index = customFruits.findIndex(f => f.id === id);
            
            if (index !== -1) {
                customFruits.splice(index, 1);
            } else {
                customFruits.push(fruit);
            }
        } else if (type === 'adicional') {
            const adicional = customizationOptions.adicionais.find(a => a.id === id);
            const index = customAdicionais.findIndex(a => a.id === id);
            
            if (index !== -1) {
                customAdicionais.splice(index, 1);
            } else {
                customAdicionais.push(adicional);
            }
        }
    }
    
    updateCustomSummary();
}

// Adicionar açaí personalizado ao carrinho
function addCustomToCart() {
    // Calcular preço total
    const totalPrice = calculateCustomTotal();
    
    // Criar descrição do produto
    let description = `Açaí Personalizado (${customBase.name})`;
    
    if (customToppings.length > 0) {
        description += ` com ${customToppings.map(t => t.name).join(', ')}`;
    }
    
    if (customFruits.length > 0) {
        description += ` e ${customFruits.map(f => f.name).join(', ')}`;
    }
    
    if (customAdicionais.length > 0) {
        description += ` + ${customAdicionais.map(a => a.name).join(', ')}`;
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
    
    // Calcular preço adicional
    let extraPrice = 0;
    extraPrice += parseFloat(selectedBase.dataset.price);
    selectedToppings.forEach(t => extraPrice += parseFloat(t.dataset.price));
    selectedFruits.forEach(f => extraPrice += parseFloat(f.dataset.price));
    
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

// Gerar PDF
async function generatePDF(orderDetails) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configurações
    doc.setFont('helvetica');
    doc.setTextColor(40, 40, 40);
    
    // Cabeçalho
    doc.setFontSize(18);
    doc.setTextColor(111, 38, 205);
    doc.text('FOX AÇAÍ - COMPROVANTE', 105, 20, { align: 'center' });
    
    // Informações do cliente
    doc.setFontSize(12);
    doc.text(`Data: ${new Date().toLocaleString('pt-BR')}`, 20, 30);
    doc.text(`Cliente: ${orderDetails.name}`, 20, 40);
    doc.text(`Endereço: ${orderDetails.address}`, 20, 50);
    doc.text(`Entrega: ${orderDetails.deliveryLocation}`, 20, 60);
    doc.text(`Pagamento: ${orderDetails.paymentMethod}`, 20, 70);
    if (currentUser) {
        doc.text(`Usuário: ${currentUser.email}`, 20, 80);
    }
    
    // Itens
    doc.setFontSize(14);
    doc.text('ITENS DO PEDIDO', 20, 90);
    
    let y = 100;
    orderDetails.items.forEach(item => {
        doc.setFontSize(12);
        doc.text(`- ${item.product} (${item.quantity}x)`, 25, y);
        doc.text(`R$ ${(item.price * item.quantity).toFixed(2)}`, 180, y, { align: 'right' });
        y += 10;
    });
    
    // Total
    doc.setFontSize(14);
    doc.text(`TOTAL: R$ ${orderDetails.total.toFixed(2)}`, 180, y + 20, { align: 'right' });
    
    // Rodapé
    doc.setFontSize(10);
    doc.text('Obrigado pela preferência!', 105, 280, { align: 'center' });
    
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
document.addEventListener('click', function(e) {
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
        
        const orderDetails = {
            name: currentUser ? currentUser.name : document.getElementById('name').value,
            address: document.getElementById('address').value,
            deliveryLocation: document.getElementById('deliveryLocation').value,
            paymentMethod: document.getElementById('paymentMethod').value,
            notes: document.getElementById('notes').value,
            items: [...cart],
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
                     `*Pagamento:* ${orderDetails.paymentMethod}%0A`;
        
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