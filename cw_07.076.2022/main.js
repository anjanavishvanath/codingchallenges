

function dotCalculator(equation){
    let word = equation.split(" ")
    let newlen = 0
    let result = ""
    if(word[1] == "+"){
        newlen = word[0].length + word[2].length
        for(let i=0;i<newlen;i++){
            result += "."
        }
        return result
    }else if(word[1] == "-"){
        newlen = word[0].length - word[2].length
        for(let i=0;i<newlen;i++){
            result += "."
        }
        return result
    }else if(word[1] == "*"){
        newlen = word[0].length * word[2].length
        for(let i=0;i<newlen;i++){
            result += "."
        }
        return result

    }else if(word[1] == "//"){
        newlen = Math.round(word[0].length + word[2].length)
        console.log(newlen)
        for(let i=0;i<newlen;i++){
            result += "."
        }
        return result

    }
}