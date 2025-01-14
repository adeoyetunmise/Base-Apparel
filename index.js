
function show(){

    let input = userInput1.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let icon = document.getElementById('icon');
     
     if (input == ''){
    display.innerHTML = "Input a valid email"

     }else if(emailPattern.test(input)){
        display.innerHTML = "Done, expect to hear from us soon"
        userInput1.value = ''
        
        
     }else{
        display.innerHTML = "Please provide a valid email"
        icon.style.display = 'inline'
     }
}