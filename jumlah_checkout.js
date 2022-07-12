// jumlah barang
let counterEl = document.getElementById('count')
let btnTambah = document.getElementById('tambah')
let btnKurang = document.getElementById('kurang')

let counterEl2 = document.getElementById('count2')
let btnTambah2 = document.getElementById('tambah2')
let btnKurang2 = document.getElementById('kurang2')
let counterEl3 = document.getElementById('count3')
let btnTambah3 = document.getElementById('tambah3')
let btnKurang3 = document.getElementById('kurang3')
let number = 1

counterEl.innerText = number
counterEl2.innerText = number
counterEl3.innerText = number

btnTambah.addEventListener('click', () => tambah())
btnKurang.addEventListener('click', () => kurang())
btnTambah2.addEventListener('click', () => tambah2())
btnKurang2.addEventListener('click', () => kurang2())
btnTambah3.addEventListener('click', () => tambah3())
btnKurang3.addEventListener('click', () => kurang3())

function tambah() {
  number++
  counterEl.innerText = number
}
function kurang() {
  if (number >= 2) {
    number--
    counterEl.innerText = number
  }
}
function tambah2() {
  number++
  counterEl2.innerText = number
}
function kurang2() {
  if (number >= 2) {
    number--
    counterEl2.innerText = number
  }
}
function tambah3() {
  number++
  counterEl3.innerText = number
}
function kurang3() {
  if (number >= 2) {
    number--
    counterEl3.innerText = number
  }
}
