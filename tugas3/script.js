function hitung(operator) {
    let val1 = parseFloat(document.getElementById('bil1').value);
    let val2 = parseFloat(document.getElementById('bil2').value);
    let hasilField = document.getElementById('output');

    if (isNaN(val1) || isNaN(val2)) {
        hasilField.value = "Masukkan kedua bilangan!";
        return;
    }

    let hasil = 0;

    switch (operator) {
        case '+':
            hasil = val1 + val2;
            break;
        case '-':
            hasil = val1 - val2;
            break;
        case '*':
            hasil = val1 * val2;
            break;
        case '/':
            if (val2 === 0) {
                hasilField.value = "Tidak bisa dibagi 0!";
                return;
            }
            hasil = val1 / val2;
            break;
        default:
            return;
    }

    hasilField.value = hasil;
}