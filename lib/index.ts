export function isValidName(username: string): boolean {
    username = username.trimEnd();

    if (!username) {
        return false;
    }

    // Check length
    if (username.length < 3 || username.length > 20) {
        return false;
    }

    // Check allowed characters (alphanumeric, underscore, hyphen)
    const allowedChars = /^[a-zA-Z]+$/;
    if (!allowedChars.test(username)) {
        return false;
    }

    // Check if username starts or ends with special characters
    if (username.startsWith("-") || username.startsWith("_") || username.endsWith("-") || username.endsWith("_")) {
        return false;
    }

    return true;
}

export function isValidEmail(email: string): boolean {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
    // This function performs basic phone number validation for common formats.
    // You might need to adjust it based on specific country formats.
  
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  }

export function splitText(text: string) {
    const separators = /[\s.,;:!?(){}\[\]<>\/\\@#$%^&*_\-+=|~]+/;
    return text.split(separators).filter(Boolean);
}

export function isValidDate(dateString: string) {
    // Check if dateString is in the YYYY-MM-DD format and a valid date
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regex)) return false;

    const date = new Date(dateString);
    const timestamp = date.getTime();
    return !isNaN(timestamp) && dateString === date.toISOString().split('T')[0];
}

interface ValidationResult {
    isValid: boolean;
    error: string;
}

export function isValidAddress(address: string): ValidationResult {
    if (!address || typeof address !== 'string' || address.trim().length === 0) {
        return { isValid: false, error: 'Address is empty or not a string' };
    }

    const parts = address.split(/[\s,]+/);

    if (parts.length < 4) {
        return { isValid: false, error: 'Address is too short' };
    }

    const postalCodeRegex = /[A-Za-z0-9]{3,}/;

    const hasStreetNumber = parts.some(part => /\d+/.test(part));
    if (!hasStreetNumber) {
        return { isValid: false, error: 'Address is missing a street number' };
    }

    const hasStreetNameOrCity = parts.some(part => /[A-Za-z]+/.test(part));
    if (!hasStreetNameOrCity) {
        return { isValid: false, error: 'Address is missing a street name or city' };
    }

    const hasPostalCode = parts.some(part => postalCodeRegex.test(part));
    if (!hasPostalCode) {
        return { isValid: false, error: 'Address is missing a postal code' };
    }

    const hasCountry = parts.some(part => /[A-Za-z]{2,}/.test(part));
    if (!hasCountry) {
        return { isValid: false, error: 'Address is missing a country' };
    }

    return { isValid: true, error: '' };
}