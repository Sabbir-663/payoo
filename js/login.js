

// to show id and pin && console it! line:3-12

// document.getElementById('button-login').addEventListener('click',function(event){

//     event.preventDefault();

//     const phoneNumber=document.getElementById('phone-number').value ;
//     console.log(phoneNumber);
//     const pinNumber=document.getElementById('pin-number').value ;
//     console.log(pinNumber);
    
    
// })

document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber=document.getElementById('phone-number').value ;
    const pinNumber=document.getElementById('pin-number').value ;
    //console.log(phoneNumber,pinNumber);

    if (phoneNumber==="0123456789" && pinNumber==="2024"){
        console.log('You are Welcome !!!! ^_^');
        window.location.href ='/home.html'
        
    }
    else{
        alert('Phaili fursat me nikal ');
        
    }


})