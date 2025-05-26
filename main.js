const array = [];
const numberInput = document.getElementById('numberInput');
const arrayDisplay = document.getElementById('arrayDisplay');
const resultDisplay = document.getElementById('resultDisplay');

document.getElementById('addButton').addEventListener('click', () => {
    const value = parseInt(numberInput.value);
    if (!isNaN(value)) {
        array.push(value);
        numberInput.value = '';
        updateArrayDisplay();
        showResult(`Đã thêm ${value} vào mảng.`);
    } else {
        showResult('Vui lòng nhập một số nguyên hợp lệ!', true);
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    array.length = 0;
    updateArrayDisplay();
    showResult('Mảng đã được xóa.');
});

//tổng số dương
document.getElementById('sumPositives').addEventListener('click', () => {
    const sum = array.reduce((acc, num) => num > 0 ? acc + num : acc, 0);
    showResult(`Tổng các số dương: ${sum}`);
});
//đếm số dương
document.getElementById('countPositives').addEventListener('click', () => {
    const count = array.filter(num => num > 0).length;
    showResult(`Số lượng số dương: ${count}`);
});
//số nhỏ nhất
document.getElementById('findMin').addEventListener('click', () => {
    if (array.length === 0) {
        showResult('Mảng rỗng!', true);
        return;
    }
    const min = Math.min(...array);
    showResult(`Số nhỏ nhất trong mảng: ${min}`);
});
//số dương nhỏ nhất
document.getElementById('findMinPositive').addEventListener('click', () => {
    const positives = array.filter(num => num > 0);
    if (positives.length === 0) {
        showResult('Không có số dương trong mảng!', true);
        return;
    }
    const minPositive = Math.min(...positives);
    showResult(`Số dương nhỏ nhất: ${minPositive}`);
});
//sô chẵn cuối cùngcùng
document.getElementById('findLastEven').addEventListener('click', () => {
    const lastEven = array.reverse().find(num => num % 2 === 0);
    if (lastEven === undefined) {
        showResult('Không có số chẵn trong mảng! Trả về -1.');
    } else {
        showResult(`Số chẵn cuối cùng: ${lastEven}`);
    }
});
// đảo số mảng
document.getElementById('swapButton').addEventListener('click', () => {
    const index1 = parseInt(document.getElementById('swapIndex1').value);
    const index2 = parseInt(document.getElementById('swapIndex2').value);
    if (index1 >= 0 && index2 >= 0 && index1 < array.length && index2 < array.length) {
        [array[index1], array[index2]] = [array[index2], array[index1]];
        updateArrayDisplay();
        showResult(`Đã đổi chỗ giá trị ở vị trí ${index1} và ${index2}.`);
    } else {
        showResult('Vị trí không hợp lệ!', true);
    }
});
// sắp xếp số tăng dần
document.getElementById('sortButton').addEventListener('click', () => {
    array.sort((a, b) => a - b);
    updateArrayDisplay();
    showResult('Mảng đã được sắp xếp tăng dần.');
});
//
document.getElementById('findFirstPrime').addEventListener('click', () => {
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    const firstPrime = array.find(isPrime);
    if (firstPrime === undefined) {
        showResult('Không có số nguyên tố trong mảng! Trả về -1.');
    } else {
        showResult(`Số nguyên tố đầu tiên: ${firstPrime}`);
    }
});
//đếm số nguyên
document.getElementById('countIntegerInFloatArray').addEventListener('click', () => {
    const floatArrayInput = document.getElementById('floatArrayInput').value;
    const floatArray = floatArrayInput.split(',').map(num => parseFloat(num.trim()));
    const integerCount = floatArray.filter(num => Number.isInteger(num)).length;
    showResult(`Số lượng số nguyên trong mảng số thực: ${integerCount}`);
});
// so sánh số dương và số âm
document.getElementById('comparePosNeg').addEventListener('click', () => {
    const positiveCount = array.filter(num => num > 0).length;
    const negativeCount = array.filter(num => num < 0).length;
    let message = `Số dương: ${positiveCount}, Số âm: ${negativeCount}. `;
    if (positiveCount > negativeCount) {
        message += 'Số dương nhiều hơn số âm.';
    } else if (negativeCount > positiveCount) {
        message += 'Số âm nhiều hơn số dương.';
    } else {
        message += 'Số dương và số âm bằng nhau.';
    }
    showResult(message);
});

function updateArrayDisplay() {
    arrayDisplay.textContent = `Mảng hiện tại: [${array.join(', ')}]`;
}

function showResult(message, isError = false) {
    resultDisplay.textContent = message;
    resultDisplay.style.color = isError ? 'red' : 'black';
}