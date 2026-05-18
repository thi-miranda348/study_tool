
const PricingData = {
    basic: { basePrice: 3.2 },
    pro: { basePrice: 5.0 },
    enterprise: { basePrice: 9.9 }
};

const DISCOUNT_RATE = 0.20;

// APP STATE
const State = {
    employees: 10,
    isAnnual: false
};

// DOM ELEMENTS
const DOM = {
    // Controls
    slider: document.getElementById('employee-slider'),
    employeeCountDisplay: document.getElementById('employee-count'),
    btnMonthly: document.getElementById('btn-monthly'),
    btnAnnual: document.getElementById('btn-annual'),
    toggleBg: document.getElementById('toggle-bg'),
    
    // Cards
    cards: {
        basic: document.getElementById('card-basic'),
        pro: document.getElementById('card-pro'),
        enterprise: document.getElementById('card-enterprise')
    },
    
    // Price Displays
    prices: {
        basic: document.getElementById('price-basic'),
        pro: document.getElementById('price-pro'),
        enterprise: document.getElementById('price-enterprise')
    },

    // Capacity Text in Cards (e.g. "For 10 employees")
    capacityDisplays: document.querySelectorAll('.emp-cap')
};

// 4. INITIALIZATION
function init() {
    bindEvents();
    render(); // Initial render on page load
}

// EVENT LISTENERS
function bindEvents() {
    // Slider Drag Event
    DOM.slider.addEventListener('input', (e) => {
        State.employees = parseInt(e.target.value);
        render();
    });

    // Billing Toggle Events
    DOM.btnMonthly.addEventListener('click', () => {
        if(State.isAnnual) {
            State.isAnnual = false;
            updateToggleUI();
            render();
        }
    });

    DOM.btnAnnual.addEventListener('click', () => {
        if(!State.isAnnual) {
            State.isAnnual = true;
            updateToggleUI();
            render();
        }
    });
}

// 6. UI UPDATERS
function updateToggleUI() {
    if (State.isAnnual) {
        DOM.btnAnnual.classList.add('active');
        DOM.btnMonthly.classList.remove('active');
        DOM.toggleBg.classList.add('is-annual');
    } else {
        DOM.btnMonthly.classList.add('active');
        DOM.btnAnnual.classList.remove('active');
        DOM.toggleBg.classList.remove('is-annual');
    }
}

function updateHighlights() {
    // Remove active class from all cards
    Object.values(DOM.cards).forEach(card => card.classList.remove('active-plan'));

    // Business Logic: Recommend plan based on company size
    if (State.employees < 15) {
        DOM.cards.basic.classList.add('active-plan');
    } else if (State.employees >= 15 && State.employees <= 35) {
        DOM.cards.pro.classList.add('active-plan');
    } else {
        DOM.cards.enterprise.classList.add('active-plan');
    }
}

// 7. CORE CALCULATION & RENDER LOOP
function render() {
    // Update Slider Value Text
    DOM.employeeCountDisplay.innerText = State.employees;
    
    // Update the "For X employees" text inside each card
    DOM.capacityDisplays.forEach(display => {
        display.innerText = State.employees;
    });

    // Calculate & Inject Prices
    Object.keys(PricingData).forEach(tier => {
        let cost = PricingData[tier].basePrice * State.employees;
        
        // Apply 20% discount if annual
        if (State.isAnnual) {
            cost = cost - (cost * DISCOUNT_RATE);
        }

        // Round to nearest whole number and update DOM
        DOM.prices[tier].innerText = Math.round(cost);
    });

    // Re-evaluate which card to highlight
    updateHighlights();
}

// Boot up the app
init();