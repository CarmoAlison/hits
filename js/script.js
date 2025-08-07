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

// Dados para as seções
const customizationOptions = {
    bases: [
        { id: 'base1', name: 'Açaí Tradicional', price: 0 },
        { id: 'base2', name: 'Açaí com Banana', price: 2 },
        { id: 'base3', name: 'Açaí com Leite Ninho', price: 3 }
    ],
    toppings: [
        { id: 'top1', name: 'Granola', price: 1.5 },
        { id: 'top2', name: 'Paçoca', price: 2 },
        { id: 'top3', name: 'Leite Condensado', price: 2.5 }
    ],
    fruits: [
        { id: 'fruit1', name: 'Banana', price: 1 },
        { id: 'fruit2', name: 'Morango', price: 2 },
        { id: 'fruit3', name: 'Kiwi', price: 2.5 }
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
// Função para renderizar as opções de personalização
function renderCustomizationOptions() {
    const optionsContainer = customizeSection.querySelector('.customize-options');
    
    let html = `
    <div class="option-group">
        <h3>Base do Açaí</h3>
        ${customizationOptions.bases.map(option => `
            <label>
                <input type="radio" name="base" value="${option.id}" data-price="${option.price}" 
                       ${option.id === 'base1' ? 'checked' : ''}>
                ${option.name} ${option.price > 0 ? `(+R$ ${option.price.toFixed(2)})` : ''}
            </label>
        `).join('')}
    </div>
    
    <div class="option-group">
        <h3>Coberturas</h3>
        ${customizationOptions.toppings.map(option => `
            <label>
                <input type="checkbox" name="topping" value="${option.id}" data-price="${option.price}">
                ${option.name} (+R$ ${option.price.toFixed(2)})
            </label>
        `).join('')}
    </div>
    
    <div class="option-group">
        <h3>Frutas</h3>
        ${customizationOptions.fruits.map(option => `
            <label>
                <input type="checkbox" name="fruit" value="${option.id}" data-price="${option.price}">
                ${option.name} (+R$ ${option.price.toFixed(2)})
            </label>
        `).join('')}
    </div>
    
    <button id="saveCustomization" class="btn">Salvar Personalização</button>`;
    
    optionsContainer.innerHTML = html;
    
    // Adiciona evento ao botão de salvar
    document.getElementById('saveCustomization').addEventListener('click', saveCustomization);
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

// Função para salvar personalização
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
    renderCustomizationOptions();
    renderCombos();
    renderSnacks();
    
    // Atualizar carrinho
    updateCart();
    
    // Adicionar evento de logout
    document.getElementById('logoutBtn')?.addEventListener('click', logout);
});

// Função global para o callback do Google
window.handleGoogleLogin = handleGoogleLogin;