const double = ((arr) => {
    return arr.map((val) => val * 2);
});

const squareAndFindEven = ((numbers) =>{
    const squares = numbers.map((num) => num ** 2);
    const evens = squares.filter((square) => square % 2 === 0);
    return evens;
});