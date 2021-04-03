const matrix = [
    [1, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 1]
]

function twoDArray(matrix) {    
    let resultIndexCount = 0;
    let resultIndex = 0;
    let currentIndex = 0;
    let length = matrix.length;

    while(length !== 0) {
        const oneCount = (matrix[currentIndex].filter(m => m === 1)).length;
        if(resultIndexCount < oneCount) {
            resultIndex = currentIndex;
            resultIndexCount = oneCount;
        }
        console.log(resultIndex, matrix[currentIndex]);
        length --;
        currentIndex++;
    }
    console.log(`Finally index of max no of 1's is `, resultIndex);
}

twoDArray(matrix);