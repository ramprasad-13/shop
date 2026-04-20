document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Get Form Values
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobilenumber').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const message = document.getElementById('message').value;

    // 2. Format the message (Using %0A for new lines)
    const whatsappNumber = "919866252649"; // Added country code 91 for India
    
    const text = `*New Inquiry - Shree Vijay Hosiery*%0A%0A` +
                 `*Name:* ${name}%0A` +
                 `*Mobile:* ${mobile}%0A` +
                 `*Email:* ${email}%0A` +
                 `*Address:* ${address}%0A` +
                 `*Requirements:* ${message}`;

    // 3. Create the WhatsApp URL
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    // 4. Open in a new tab
    window.open(url, '_blank').focus();
});
