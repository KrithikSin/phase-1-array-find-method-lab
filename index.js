// code your solution here
const superbowlWin = (arr) => {
    if (arr.find(findW)) {
        return arr.find(findW).year;
    } else {
        return undefined;
    }
};

const findW = (element) => {
    return element.result === 'W';
};
console.log(superbowlWin());
