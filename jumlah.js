// jumlah barang
let counterEl = document.getElementById('count')
let btnTambah = document.getElementById('tambah')
let btnKurang = document.getElementById('kurang')

let number = 1

counterEl.innerText = number

btnTambah.addEventListener('click', () => tambah())
btnKurang.addEventListener('click', () => kurang())

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
