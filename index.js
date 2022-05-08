window.onload = show_notes()
function cow(){
    notes = document.getElementById("mynote").value
    console.log(notes) 
    total_length = localStorage.length
    newlen = total_length+1
    localStorage.setItem(newlen,notes);
    show_notes()
}
function show_notes(){
    length = localStorage.length
    for(x=0;x<length;x++){
        table = document.getElementById('memo');
        tr = document.createElement('tr')
        td1 = document.createElement('td')
        td2= document.createElement('td')
        td3= document.createElement('td')
        button = document.createElement('button');
    
        button.setAttribute('class','btn btn-danger')
        button.append('Delete')
    
        key =  localStorage.key(x);
        value=  localStorage.getItem(key)
        button.setAttribute('onclick', "Key_delete("+ key +")")
        td2.append(value);
        td1.append(key)
        td3.append(button)
        tr.append(td1,td2,td3)
        table.append(tr);


        
    }
}
function Key_delete(key){
    localStorage.removeItem(key);
    location.reload()
}

