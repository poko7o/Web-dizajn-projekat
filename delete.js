const del = document.getElementById('btn3')

const Del = () =>{
    const container = document.createElement('div')
    container.setAttribute('class', 'card')

    var form = document.createElement('form')
    form.setAttribute('id', 'formaDelete')

    var idI = document.createElement('input')
    idI.setAttribute("type", "text");
    idI.setAttribute("name", "id");
    idI.setAttribute("placeholder", "Id");

    var br = document.createElement("br");

    var butons = document.createElement('div')

    const buttonD = document.createElement('button')
    buttonD.textContent = 'Submit'
    buttonD.onclick = function() {deleteSubmit()}
    buttonD.setAttribute('type', 'button')

    del.appendChild(container)
    container.appendChild(form)
    form.appendChild(idI)
    form.appendChild(br.cloneNode())

    form.appendChild(buttonD)

    let brojac = 0;
        
    fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars').then(res => res.json()).then(data => brojacF(data))

    const brojacF = function(data){
        data.forEach(id => brojac++)
        console.log(brojac)
    }

    const deleteSubmit = () =>{

        let id = idI.value

        console.log(Number(id))
        console.log(brojac)

        if(Number(id) <= brojac && Number(id) > 0){
            fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json'
                },
            }).then(res => console.log(res))
        } else {
            console.log('Djes poso')
        }
    }
}

const buttonD = document.createElement('button')
buttonD.textContent = 'Delete existing car'
buttonD.onclick = function() {Del()}

del.appendChild(buttonD)