// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(sym = "*") {
    return function(words = "special"){
        return `You are ${sym}${words}${sym}!`
    }
};

const Calculator = {
    add: (num1, num2) => {
        return num1 + num2
    },
    subtract: (num1, num2) => {
        return num1 - num2
    },

    multiply: (num1, num2) => {
        return num1 * num2
    },

    divide: (num1, num2) => {
        return num1 / num2
    }
};

function actionApplyer(int, arr) {
    return arr.reduce(function(ans, element){return element(ans)}, int)
}