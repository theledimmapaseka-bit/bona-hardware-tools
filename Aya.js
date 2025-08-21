function validateOrderForm() {
    const productName = document.getElementById('product-name').value;
    const quantity = document.getElementById('quantity').value;
    const customerName = document.getElementById('customer-name').value;
    const email = document.getElementById('Email').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const productSelect = document.getElementById('product-select').value;

    if (!productName || !quantity || !customerName || !email || !contact || !address || productSelect === "") {
        alert("Please fill in all required fields!");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

   
    if (contact.length < 10 || !/^\d+$/.test(contact)) {
        alert("Please enter a valid contact number (at least 10 digits)!");
        return false;
    }

    return true;
}


function calculatePrice() {
    const productSelect = document.getElementById('product-select').value;
    const quantity = document.getElementById('quantity').value;
    
    if (!productSelect || !quantity) return 0;
    
  
    const prices = {
        "SPADES": 150,
        "CHEMICAL ITEMS": 300,
        "ALUMINIUM DOORS": 2500,
        "PVOT DOORS": 1800,
        "CIVIL ITEMS": 500,
        "ELECTRICAL ITEMS": 200
    };
    
    const pricePerUnit = prices[productSelect] || 0;
    return pricePerUnit * quantity;
}

function showConfirmation() {
    if (validateOrderForm()) {
        const estimatedPrice = calculatePrice();
        const customerName = document.getElementById('customer-name').value;
        const product = document.getElementById('product-select').value;
        
        alert(`Thank you, ${customerName}! Your order for ${product} has been received.\nEstimated total: R${estimatedPrice}\nWe'll contact you shortly to confirm.`);
        
       
        
        return true;
    }
    return false;
}


document.addEventListener('DOMContentLoaded', function() {
   
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 
            showConfirmation();
        });
    }
    
    
});