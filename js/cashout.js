document.getElementById('button-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashOut=document.getElementById('input-cash-out').value ;
    const balance=document.getElementById('account-balance').innerText ;
    const cashOutAmount=parseFloat(cashOut);
    const balanceAmount=parseFloat(balance) ;
    const cashOutPin =document.getElementById('input-cash-out-pin').value ;

    if (cashOutPin ==='2024') {
        const newBalance= balanceAmount-cashOutAmount ;
        document.getElementById('account-balance').innerText=newBalance ;
        
    }
    else{
        alert(" Wrong Pin Or Amount")
    }
})