const put = document.getElementById('btn2')

var modify = () =>{
    const container = document.createElement('div')
    container.setAttribute('class', 'card')

    var form = document.createElement('form')

    var idI = document.createElement('input')
    idI.setAttribute("type", "text");
    idI.setAttribute("name", "id");
    idI.setAttribute("placeholder", "Id");

    var nameI = document.createElement('input')
    nameI.setAttribute("type", "text");
    nameI.setAttribute("name", "name");
    nameI.setAttribute("placeholder", "Ime");

    var manufacturerI = document.createElement('input')
    manufacturerI.setAttribute("type", "text");
    manufacturerI.setAttribute("name", "manufacturer");
    manufacturerI.setAttribute("placeholder", "Proizvodjac");

    var imgUrlI = document.createElement('input')
    imgUrlI.setAttribute("type", "text");
    imgUrlI.setAttribute("name", "imageUrl");
    imgUrlI.setAttribute("placeholder", "Image URL");

    var yearI = document.createElement('input')
    yearI.setAttribute("type", "text");
    yearI.setAttribute("name", "year");
    yearI.setAttribute("placeholder", "Godina proizvodnje");

    var priceI = document.createElement('input')
    priceI.setAttribute("type", "text");
    priceI.setAttribute("name", "price");
    priceI.setAttribute("placeholder", "Cijena");

    var br = document.createElement("br");

    const buttonM = document.createElement('button')
    buttonM.textContent = 'Submit'
    buttonM.onclick = function() {submit()}

    put.appendChild(container)
    container.appendChild(form)
    form.appendChild(idI)
    form.appendChild(br.cloneNode())

    form.appendChild(nameI)
    form.appendChild(br.cloneNode())

    form.appendChild(manufacturerI)
    form.appendChild(br.cloneNode())

    form.appendChild(imgUrlI)
    form.appendChild(br.cloneNode())

    form.appendChild(yearI)
    form.appendChild(br.cloneNode())

    form.appendChild(priceI)
    form.appendChild(br.cloneNode())

    container.appendChild(buttonM)

    let brojac = 0;
        
    fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars').then(res => res.json()).then(data => brojacF(data))

    const brojacF = function(data){
        data.forEach(id => brojac++)
        console.log(brojac)
    }

    const submit = () =>{

        let cars = {id: idI.value, name: nameI.value, manufacturer: manufacturerI.value, imgUrl: imgUrlI.value, year: yearI.value, price: priceI.value}

        console.log(Number(cars.id))
        console.log(brojac)

        if(Number(cars.id) <= brojac && Number(cars.id) > 0){
            fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars', {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "id": Number(cars.id),
                        "name": cars.name,
                        "manufacturer": cars.manufacturer,
                        "imageUrl": cars.imgUrl,
                        "price": Number(cars.price),
                        "year": Number(cars.year)
                    }
                )
            }).then(res => console.log(res))
        } else {
            console.log('Djes poso')
        }
    }
}

const buttonM = document.createElement('button')
buttonM.textContent = 'Modify existing car'
buttonM.onclick = function() {modify()}

put.appendChild(buttonM)