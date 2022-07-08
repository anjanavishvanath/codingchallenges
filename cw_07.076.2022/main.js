
function dotCalculator(equation){
    let word =  equation.split(" ")
    let result = ""

    if(word[1] == "+"){
        for(let i=0;i<word[0].length+word[2].length;i++){
            result += "."
        }
        return (result)
    }else if(word[1] == "-"){
        for(let i=0;i<word[0].length-word[2].length;i++){
            result += "."
        }
        return (result)
    }else if(word[1] == "*"){
        for(let i=0;i<word[0].length*word[2].length;i++){
            result += "."
        }
        return (result)
    }else if(word[1] == "//"){
        for(let i=0;i<Math.floor(word[0].length/word[2].length);i++){
            result += "."
        }
        return (result)
    }
}


console.log(dotCalculator("..... + .."))