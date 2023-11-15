let num = document.getElementById('inputn')
let list = document.getElementById('list')
let res = document.getElementById('res')
let values = []


function first_test(n){
    if(Number(n) >= 1 && Number(n) <=100){
       return true
    } else{
       return false
    }
}

function second_test(n , l){

 if(l.indexOf(Number(n)) != -1){
     return true
 } else{
     return false
 }
}


function add(){

if(first_test(num.value) && !second_test(num.value , values)){

    values.push(Number(num.value))
    let v = document.createElement('option')
    v.text = `The value here is ${num.value}`
    list.appendChild(v)
    res.innerHTML = ''
    


} else{
    window.alert('valor inválido')
}

num.value = ''
num.focus()
}

function finish(){
    if(values.length == 0){
        window.alert('adicione algum valor')
    } else {
    
        
    let total = values.length
    let greatest = values[0]
    let lowest = values[0]
    let sum = 0
    let avarege = 0
    
    
    for(let pos in values){
        sum += values[pos]
          if(values[pos] > greatest)
            greatest = values[pos]
          
          if(values[pos] < lowest)
            lowest = values[pos]
       
    }
     
    avarege = sum / total
    
    res.innerHTML = ''
    res.innerHTML += `<p>In total, there is ${total} numbers in the list.</p>`
    res.innerHTML += `<p>The greatest number is ${greatest}.</p>`
    res.innerHTML += `<p>The lowest number is ${lowest}.</p>`
    res.innerHTML += `<p>The sum is ${sum}.</p>`
    res.innerHTML += `<p>The avarege is ${avarege}.</p>`
    
    }

    }