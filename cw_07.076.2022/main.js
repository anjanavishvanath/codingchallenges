

function calc(str){
    let word = str.split(" ")
    if(word[1] == "+"){
        return word[0].length + word[2].length
    }else if(word[1] == "-"){
        return word[0].length - word[2].length
    }else if(word[1] == "*"){
        return word[0].length * word[2].length
    }else if(word[1] == "//"){
        return word[0].length / word[2].length
    }
}