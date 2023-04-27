var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById('menu-admin').outerHTML
            =this.responseText;
    }
}
xhttp.open('GET' , 'navegadorAdmin.html' ,true);
xhttp.send();
