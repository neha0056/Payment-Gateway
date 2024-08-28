function detectCardType() {
    var cardNumberInput = document.getElementById('cardNumber');
    var cardIcon = document.getElementById('cardIcon');

    var cardNumber = cardNumberInput.value.replace(/\s/g, ''); // Remove whitespaces

    // Regex to check if the card number starts with specific digits
    var visaRegex = /^4/;
    var mastercardRegex = /^5/;
    var amexRegex = /^3[47]/;
    var rupayRegex = /^6/;

    // Remove existing classes
    cardIcon.className = '';

    if (visaRegex.test(cardNumber)) {
        cardIcon.classList.add('visa-icon');
    } else if (mastercardRegex.test(cardNumber)) {
        cardIcon.classList.add('mastercard-icon');
    } else if (amexRegex.test(cardNumber)) {
        cardIcon.classList.add('amex-icon');
    } else if (rupayRegex.test(cardNumber)) {
        cardIcon.classList.add('rupay-icon');
    }
}
