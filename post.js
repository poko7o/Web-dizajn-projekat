// api: https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars

const btn = document.getElementById('btn')

const entry = () =>{
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

    const button = document.createElement('button')
    button.textContent = 'POST'
    button.onclick = function() {create()}

    btn.appendChild(container)
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

    container.appendChild(button)

    const create = () =>{
        let cars = {id: idI.value, name: nameI.value, manufacturer: manufacturerI.value, imgUrl: imgUrlI.value, year: yearI.value, price: priceI.value}

        let brojac = 0;
        
        fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars').then(res => res.json()).then(data => brojacF(data))

        let brojacF = (data) =>{
            data.forEach(id => brojac++)
            console.log(brojac)
        }

        console.log(typeof cars.id)

        if(cars.id > brojac){
            fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars', {
                method: "POST",
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

const button = document.createElement('button')
button.textContent = 'Enter a new car'
button.onclick = function() {entry()}

btn.appendChild(button)