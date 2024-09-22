
document.getElementById('btn-show-cash-out').addEventListener('click',function(){
    document.getElementById('out').classList.remove('hidden')
    document.getElementById('add').classList.add('hidden')
    
    
})


document.getElementById('btn-show-cash-in').addEventListener('click',function(){
    document.getElementById('add').classList.remove('hidden')
    document.getElementById('out').classList.add('hidden')
    
    
})