var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById('menu-cliente').outerHTML
            =this.responseText;
    }
}
xhttp.open('GET' , 'navegadorCli.html' ,true);
xhttp.send();
