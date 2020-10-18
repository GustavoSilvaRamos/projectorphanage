const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
}

const map = L.map('mapid', options).setView([-20.8167218,-49.5408522], 14.25)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58,68],
  iconAnchor: [29,68],
  popupAnchor: [170,2]
})


//create popup
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240,
}).setContent('Lar das meninas <a href="orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg" ></a>')

//create and marker
L.marker([-20.8167218,-49.5408522], {icon})
.addTo(map)
.bindPopup(popup)
    
//img gallery


function selectImage(event) {
const button = event.currentTarget

// remover todos os active
const buttons = document.querySelectorAll(".images button")
buttons.forEach(removeActiveClass)

function removeActiveClass(button) {
  button.classList.remove("active")
}


//selecionar a imagem clicada
const image = button.children[0]
const imageContainer = document.querySelector(".orphanage-details > img")

//atualizar o container de imagem
imageContainer.src = image.src
//adicionar a classe .active para este botao
button.classList.add("active")

}