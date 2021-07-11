takevalue = () => {
    var inp=document.getElementById('inp');
    var data= "My name is" + " " + inp.value;
    document.getElementById('name').innerText=data;
}
