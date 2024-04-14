// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('taxForm');
//     const modal = document.getElementById('resultModal');
//     const closeButton = document.querySelector('.close');

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();
//         calculateTax();
//     });

//     closeButton.addEventListener('click', function () {
//         modal.style.display = 'none';
//     });

//     function calculateTax() {
//         const income = parseFloat(document.getElementById('income').value);
//         const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
//         const deductions = parseFloat(document.getElementById('deductions').value) || 0;
//         const age = document.getElementById('age').value;
//         const ageGroup = getAgeGroup(age);

//         const grossIncome = income + extraIncome - deductions;
//         let tax = 0;

//         if (grossIncome <= 800000) {
//             tax = 0;
//         } else {
//             const taxableIncome = grossIncome - 800000;
//             switch (ageGroup) {
//                 case 'below40':
//                     tax = taxableIncome * 0.3;
//                     break;
//                 case '40to60':
//                     tax = taxableIncome * 0.4;
//                     break;
//                 case 'above60':
//                     tax = taxableIncome * 0.1;
//                     break;
//                 default:
//                     break;
//             }
//         }

//         displayResult(grossIncome, tax);
//     }

//     function getAgeGroup(age) {
//         if (age === '<40') {
//             return 'below40';
//         } else if (age === '>=40 & <60') {
//             return '40to60';
//         } else if (age === '>=60') {
//             return 'above60';
//         }
//     }

//     function displayResult(grossIncome, tax) {
//         const resultModal = document.getElementById('result');
//         resultModal.innerHTML = `<p>Gross Annual Income: ₹${grossIncome.toFixed(2)}</p><p>Tax: ₹${tax.toFixed(2)}</p>`;
//         modal.style.display = 'block';
//     }
// });
// **********************************

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('taxForm');
    const modal = document.getElementById('resultModal');
    const closeButton = document.querySelector('.close');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        calculateTax();
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    function calculateTax() {
        const income = parseFloat(document.getElementById('income').value);
        const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
        const deductions = parseFloat(document.getElementById('deductions').value) || 0;
        const age = document.getElementById('age').value;
        const ageGroup = getAgeGroup(age);

        const grossIncome = income + extraIncome - deductions;
        let tax = 0;

        if (grossIncome <= 800000) {
            tax = 0;
        } else {
            const taxableIncome = grossIncome - 800000;
            switch (ageGroup) {
                case 'below40':
                    tax = taxableIncome * 0.3;
                    break;
                case '40to60':
                    tax = taxableIncome * 0.4;
                    break;
                case 'above60':
                    tax = taxableIncome * 0.1;
                    break;
                default:
                    break;
            }
        }

        const overallIncome = grossIncome - tax; // Calculate overall income after tax

        displayResult(overallIncome, tax);
    }

    function getAgeGroup(age) {
        if (age === '<40') {
            return 'below40';
        } else if (age === '>=40 & <60') {
            return '40to60';
        } else if (age === '>=60') {
            return 'above60';
        }
    }

    function displayResult(overallIncome, tax) {
        const resultModal = document.getElementById('result');
        resultModal.innerHTML = `<p>Your overall income  after tax deduction will be: ₹${overallIncome.toFixed(2)}</p><p>Tax: ₹${tax.toFixed(2)}</p>`;
        modal.style.display = 'block';
    }
});
