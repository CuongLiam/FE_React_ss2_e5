let phoneBooks = [];

function addContact(name, phone, email, arr){
    const newUsers = {name, phone, email};
    arr.push(newUsers);
}

function displayContact(arr){
    if (arr.length === 0){
        console.log("nothing in arr");
        return;
    }

    arr.forEach(function (val, idx){
        console.log(`${idx + 1}. name: ${val.name}
   phone: ${val.phone}
   email: ${val.email}`);
    })
}

addContact("abc", "0844334", "@gmail.com", phoneBooks);
addContact("asd", "0844334", "@gmail.com", phoneBooks);
addContact("oqwie", "0844334", "@gmail.com", phoneBooks);
displayContact(phoneBooks);