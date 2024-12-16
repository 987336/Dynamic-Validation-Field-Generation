// Validation function map with regex patterns
const validationRules = {
    emailID: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Email regex
    mobilePhoneID: /^\d{10}$/, // Mobile phone regex (10 digits)
    aadharID: /^\d{12}$/, // Aadhar number regex (12 digits)
    postalCodeID: /^[0-9]{5}$/, // Postal code regex (5 digits)
    urlID: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, // URL regex
    usernameID: /^[a-zA-Z0-9_]{3,16}$/, // Username regex (alphanumeric, 3-16 characters)
    passwordID: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/, // Password regex (8-20 characters, with numbers, lowercase, uppercase)
    creditCardID: /^4[0-9]{12}(?:[0-9]{3})?$/, // Visa credit card regex
    ssnID: /^\d{3}-\d{2}-\d{4}$/, // SSN regex (US Social Security Number)
    driverLicenseID: /^[A-Z0-9]{1,15}$/, // Driver's license regex (1-15 alphanumeric)
    zipCodeID: /^[0-9]{5}(?:-[0-9]{4})?$/, // US ZIP code regex (5 or 9 digits)
    isbnID: /^(97(8|9))?\d{9}(\d|X)$/, // ISBN-10 or ISBN-13 regex
    dateOfBirthID: /^\d{4}-\d{2}-\d{2}$/, // Date (YYYY-MM-DD) regåçex
    vehicleRegistrationID: /^[A-Z0-9]{2,10}$/, // Vehicle registration number regex
    panCardID: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, // PAN card number (India)
    passportNumberID: /^[A-Z]{1}[0-9]{7}$/, // Passport number regex (1 letter followed by 7 digits)
    voterID: /^[A-Z]{3}[0-9]{7}$/, // Voter ID regex (India)
    pinCodeID: /^[0-9]{6}$/, // Indian PIN code regex (6 digits)
    time24HourID: /^([01]\d|2[0-3]):([0-5]\d)$/, // Time in 24-hour format regex (HH:MM)
    hexColorID: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, // Hex color code regex
    ipAddressID: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, // IPv4 address regex
    macAddressID: /^([0-9A-Fa-f]{2}:){5}([0-9A-Fa-f]{2})$/, // MAC address regex
    latLongID: /^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/, // Latitude and longitude regex
    currencyID: /^\d+(\.\d{1,2})?$/, // Currency regex (2 decimal places)
    youtubeVideoID: /^(https?:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/, // YouTube video URL regex
    twitterHandleID: /^@[A-Za-z0-9_]{1,15}$/, // Twitter handle regex
    instagramHandleID: /^@[A-Za-z0-9_.]{1,30}$/, // Instagram handle regex
    searchQueryID: /^[a-zA-Z0-9\s]*$/, // Search query (alphanumeric and spaces)
    addressID: /^[A-Za-z0-9\s,.-]+$/, // Address (alphanumeric, spaces, commas, periods, dashes)
    confirmationPasswordID: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/, // Confirmation password regex (same as password)
    strongPasswordID: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // Strong password with special chars
    fileUploadID: /.*\.(jpg|jpeg|png|gif|pdf|doc|docx|xls|xlsx)$/i, // File upload regex (image and document formats)
    vehicleNumberID: /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/, // Vehicle registration format
    couponCodeID: /^[A-Z0-9]{5,10}$/, // Coupon code (5-10 alphanumeric)
    codeID: /^[A-Z0-9]{6}$/, // General code (6 characters)
    referenceID: /^[0-9A-F]{8}-[0-9A-F]{4}-[1-9A-F]{4}-[1-9A-F]{4}-[0-9A-F]{12}$/, // UUID
};

// Function to validate inputs based on their ID
function validateInputById(inputId) {
    const inputElement = document.getElementById(inputId);
    const errorMessage = inputElement.nextElementSibling; // Error message div next to input field

    if (validationRules[inputId]) {
        const regex = validationRules[inputId];
        if (!regex.test(inputElement.value)) {
            errorMessage.textContent = 'Invalid input format';
            errorMessage.classList.remove('hidden');
        } else {
            errorMessage.textContent = '';
            errorMessage.classList.add('hidden');
        }
    } else {
        console.warn(`No validation rule found for input ID: ${inputId}`);
    }
}

// Function to attach validation event listener to input fields
function attachValidationListener(inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.addEventListener('input', () => validateInputById(inputId));
    }
}

// Attach validation listeners for all inputs
document.addEventListener('DOMContentLoaded', () => {
    for (let inputId in validationRules) {
        attachValidationListener(inputId);
    }
});
