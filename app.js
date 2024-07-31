

let count=0;

document.getElementById('Decrement').onclick = function(){
count-=1;
document.getElementById('countlabel').innerHTML = count;
}


document.getElementById('Increment').onclick = function(){
    count+=1;
document.getElementById('countlabel').innerHTML = count;
}

document.getElementById('Reset').onclick = function(){
    count=0;
    document.getElementById('countlabel').innerHTML = count; 
}