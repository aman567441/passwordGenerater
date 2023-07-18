const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="1234567890";
const symbol="~!#$%^&*'+-=";

//selectors
const passBox=document.getElementById("pass-box")
const totalChar=document.getElementById("total-char");
const upperInput=document.getElementById("upper-case");
const lowerInput=document.getElementById("lower-case");
const numberInput=document.getElementById("numbers");
const symbolsInput=document.getElementById("symbols")

const gaterandomData=(dataset)=>{
    return dataset[Math.floor(Math.random() * dataset.length
        )]

}
const generatepassword = (password="") => {
if(upperInput.checked){
    password +=gaterandomData(uppercase);
}if(lowerInput.checked){
    password +=gaterandomData(lowercase);

}if(numberInput.checked){
    password +=gaterandomData(number);
}if(symbolsInput.checked){
password +=gaterandomData(symbol);
}
if(password.length < totalChar.value){
    return generatepassword(password);
}

passBox.innerText=truncateString(password,totalChar.value);
}
generatepassword();

document.getElementById("btn").addEventListener(
    "click",
    
    function(){
        generatepassword();
        
    }
)
function truncateString(str,num){
    if (str.length > num) {
     let substr=str.substring(0,num)
     return substr        
    }else{
        return str
    }
}