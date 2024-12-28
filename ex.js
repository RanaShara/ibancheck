const banks = [
    { 'samaCode': '55', 'nameAr': 'البنك السعودي الفرنسي' },
    { 'samaCode': '80', 'nameAr': 'بنك الراجحي' },
    { 'samaCode': '10', 'nameAr': 'البنك الأهلي التجاري' },
    { 'samaCode': '45', 'nameAr': 'ساب' },
    { 'samaCode': '20', 'nameAr': 'بنك الرياض' },
    { 'samaCode': '40', 'nameAr': 'سامبا' },
    { 'samaCode': '05', 'nameAr': 'بنك الإنماء' },
    { 'samaCode': '50', 'nameAr': 'البنك الأول' },
    { 'samaCode': '60', 'nameAr': 'بنك الجزيرة' },
    { 'samaCode': '65', 'nameAr': 'البنك السعودي للاستثمار' },
    { 'samaCode': '15', 'nameAr': 'بنك البلاد' },
    { 'samaCode': '30', 'nameAr': 'البنك العربي الوطني' },
    { 'samaCode': '90', 'nameAr': 'بنك الخليج' },
    { 'samaCode': '95', 'nameAr': 'بنك الإمارات' },
    { 'samaCode': '76', 'nameAr': 'بنك مسقط' },
    { 'samaCode': '71', 'nameAr': 'بنك البحرين الوطني' },
    { 'samaCode': '75', 'nameAr': 'بنك الكويت الوطني' },
    { 'samaCode': '85', 'nameAr': 'بي ان بي باريبوس' }
];
function findBankBySamaCode(samaCode) {
   
    const bank = banks.find(bank => bank.samaCode === samaCode);
    
    return bank ? bank.nameAr : "البنك غير معروف";
}
function validateIban() {
    let ibanInput = document.getElementById('ibanInput').value.trim();
    const resultElement = document.getElementById('result');

    ibanInput = ibanInput.replace(/\s+/g, '');

    if (!ibanInput) {
        resultElement.textContent = "يرجى إدخال رقم الإيبان.";
        resultElement.style.color = "red";
        return;
    }

    const isValid = checkIban(ibanInput);

    if (isValid) {
        const bankCode = ibanInput.slice(4, 6); 
        const bankName = findBankBySamaCode(bankCode);
        resultElement.textContent = `الإيبان صحيح. البنك: ${bankName}`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "الإيبان غير صحيح.";
        resultElement.style.color = "red";
    }
}

function checkIban(iban) {
    if (iban.length !== 24) return false;
    if (!iban.startsWith("SA")) return false;

    return true;
}
