function caesarCipher(text, shift, decrypt = false) {
    if (decrypt) shift = -shift;
    return text.split('').map(char => {
        if (char.match(/[a-zA-Z]/)) {
            let base = char.charCodeAt(0) >= 97 ? 97 : 65;
            return String.fromCharCode((char.charCodeAt(0) - base + shift + 26) % 26 + base);
        }
        return char;
    }).join('');
}
function encrypt() {
    let text = document.getElementById("inputText").value;
    let shift = parseInt(document.getElementById("shift").value);
    let encryptedText = caesarCipher(text, shift);
    document.getElementById("outputText").innerText = encryptedText;
    document.getElementById("decryptionInput").value = encryptedText;
}
function syncDecryption() {
    document.getElementById("decryptionInput").value = document.getElementById("inputText").value;
}
function syncShift() {
    let shiftValue = parseInt(document.getElementById("shift").value);
    document.getElementById("decryptionShift").value = shiftValue ? -shiftValue : "";
}
function syncEncryption() {
    document.getElementById("inputText").value = document.getElementById("decryptionInput").value;
}
function encryptDecryption() {
    let text = document.getElementById("decryptionInput").value;
    let shift = parseInt(document.getElementById("decryptionShift").value);
    document.getElementById("decryptionOutput").innerText = caesarCipher(text, shift);
}
function appendNumber(num) {
    document.getElementById("display").value += num;
}
function appendOperator(operator) {
    document.getElementById("display").value += operator;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}