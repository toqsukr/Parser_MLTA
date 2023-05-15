export function beginTest(ch) {
    const sign = () => {
        if(ch.length > index && "+-*/".indexOf(ch[index]) === -1)  return "error sign"
    }
    
    const letter = () => {
        if(ch.length > index && "abcdefghijklmnopqrstuvwxyz".indexOf(ch[index]) === -1)    return "error letter"        
    }

    const CBF = () => {
        if(ch.length > index && "({[".indexOf(ch[index]) != -1){
            msg = BE()
            if(msg)    return msg
            index++
            msg = sign()
            if(msg)    return msg
            index++
            msg = DBE()
            if(msg)    return msg
        }
        else if(ch.length > index && "abcdefghijklmnopqrstuvwxyz".indexOf(ch[index]) != -1) {
            msg = letter()
            if(msg)    return msg
            index++
            msg = sign()
            if(msg)    return msg
            index++
            msg = KBE()
            if(msg)    return msg
        } else return "error CBF"
    }

    const KBE = () => {
        if(ch.length > index && "({[".indexOf(ch[index]) != -1){
            msg = BE()
            if(msg)    return msg
            index++
            msg = PE()
            if(msg)    return msg
        }
        else if(ch.length > index && "abcdefghijklmnopqrstuvwxyz".indexOf(ch[index]) != -1) {
            msg = letter()
            if(msg)    return msg
            index++
            msg = SE()
            if(msg)    return msg
        }
        else return "error KBE" 
    }

    const BE = () => {
        if(ch.length > index && '(' === ch[index]) {
            index++
            msg = CBF()
            if(msg)    return msg
            if(ch.length == index || ')' != ch[index])   return "error BE"
        }
        else if(ch.length > index && '{' === ch[index]) {
            index++
            msg = CBF()
            if(msg)    return msg
            if(ch.length == index || '}' != ch[index])   return "error BE"
        }
        else if(ch.length > index && '[' === ch[index]) {
            index++
            msg = CBF()
            if(msg)    return msg
            if(ch.length== index || ']' != ch[index])    return "error BE"
        }
        else    return "error BE"
        
    }

    const DBE = () => {
        if(ch.length > index && "({[".indexOf(ch[index]) != -1) {
            msg = BE()
            if(msg)    return msg
            index++
            msg = LE()
            if(msg)    return msg
        }
        else if(ch.length > index && "abcdefghijklmnopqrstuvwxyz".indexOf(ch[index]) != -1) {
            msg = letter()
            if(msg)    return msg
            index++
            msg = PE()
            if(msg)    return msg
        }
        else return "error DBE"
        
    }

    const SE = () => {
        if(ch.length > index && "+-*/".indexOf(ch[index]) != -1) {
            msg = sign()
            if(msg)    return msg
            index++
            msg = KBE()
            if(msg)    return msg
        }
        
    }

    const LE = () => {
        if(ch.length > index && "+-*/".indexOf(ch[index]) != -1) {
            msg = sign()
            if(msg)    return msg
            index++
            msg = letter()
            if(msg)    return msg
            index++
            msg = LE()
            if(msg)    return msg
        }
    }

    const PE = () => {
        if(ch.length > index && "+-*/".indexOf(ch[index]) != -1) {
            msg = sign()
            if(msg)    return msg
            index++
            msg = DBE()
            if(msg)    return msg
        }
        
    }
    let msg = ''
    let index = 0;
    msg = CBF()
    if(msg || ch.length != index)   return "Введенное выражение не соответствует грамматике!"
    else    return "Введенное выражение соответствует грамматике!"
}
