export function maskPhone(phone: string) {
    const numbersOnly = phone.replace(/\D/g, '');

    if (numbersOnly.length <= 2) {
        return numbersOnly;
    } else if (numbersOnly.length <= 7) {
        return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2)}`;
    } else if (numbersOnly.length <= 11) {
        return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2, 3)} ${numbersOnly.slice(3, 7)}-${numbersOnly.slice(7)}`;
    } else {
        return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2, 3)} ${numbersOnly.slice(3, 7)}-${numbersOnly.slice(7, 11)}`;
    }
}