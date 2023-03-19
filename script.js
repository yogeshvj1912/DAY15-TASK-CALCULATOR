let section=document.createElement("section");

let container= document.createElement("div");
    container.setAttribute("class","container");

let input=document.createElement("div");
    input.setAttribute("id","display");


    function creatButtons(button,attribute,text){
        ele=document.createElement(button);
        ele.setAttribute("class",attribute)
    ele.innerHTML=text;
    return ele;
    }
let div1 = document.createElement("div")
    div1.setAttribute("class","buttons") ; 

let Clear=creatButtons("div","button","C");
    Clear.setAttribute("id","red")
let Del=creatButtons("div","button","/")
    Del.setAttribute("id","lightBlue")
let button1=creatButtons("div","button","*");
    button1.setAttribute("id","lightBlue")
let button2=creatButtons("div","button","&larr;");
    button2.setAttribute("id","red")
let button3=creatButtons("div","button","7")

let button4=creatButtons("div","button","8");
let button5=creatButtons("div","button","9");
let button6=creatButtons("div","button","-");
    button6.setAttribute("id","lightBlue");
let button7=creatButtons("div","button","4");
let button8=creatButtons("div","button","5");
let button9=creatButtons("div","button","6");
let button10=creatButtons("div","button","+");
    button10.setAttribute("id","lightBlue");
let button11=creatButtons("div","button","1");
let button12=creatButtons("div","button","2");
let button13=creatButtons("div","button","3");
let button14=creatButtons("div","button",".");
    button14.setAttribute("id","lightBlue");
let button15=creatButtons("div","button","0");
let button16=creatButtons("div","button","00");
let button17=creatButtons("div","button","=");
    button17.setAttribute("id","equal")

div1.append(input,Clear,Del,button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,button14,button15,button16,button17);
container.append(div1);
section.append(container);
document.body.append(section)    


let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});