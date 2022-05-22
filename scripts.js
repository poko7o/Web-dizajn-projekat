const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars', true)
request.onload = function () {

  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(car => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = car.name

      const manufacturer = document.createElement('h2')
      manufacturer.textContent = car.manufacturer

      const img = document.createElement('img')
      img.src = car.imageUrl

      const year = document.createElement('h2')
      year.textContent = `Godina proizvodnje: ${car.year}`

      const price = document.createElement('h2')
      price.textContent = `Cijena: ${car.price}`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(manufacturer)
      card.appendChild(img)
      card.appendChild(year)
      card.appendChild(price)

    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}
request.send()






   



