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