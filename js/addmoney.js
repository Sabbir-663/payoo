document.getElementById('button-add-money').addEventListener('click',function(event){
 event.preventDefault();
 const addMoneyInput=document.getElementById('input-add-money').value;
 const pinNumberInput=document.getElementById('input-pin-number').value;
    


 if ( pinNumberInput==="2024"){
    const balance =document.getElementById('account-balance').innerText;
   const addMoneyNumber= parseFloat(addMoneyInput);
   const balanceNumber= parseFloat(balance);
   const newBalance= balanceNumber+addMoneyNumber;
  

   document.getElementById('account-balance').innerText=newBalance;
   


    
}
else{
    alert('Failed to add money \n Wrong Pin!!');
    
}
    
})

