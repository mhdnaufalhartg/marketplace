// button loading
let btnLoading = document.getElementById('btnloading')

btnLoading.addEventListener('click', () => loaded())

function loaded() {
  btnLoading.innerText = 'Loading ...'
  const timeout = setTimeout(
    () => (
      (btnLoading.innerText = 'Buy Now'),
      (window.location.href = 'success_checkout.html')
    ),
    1500,
  )
}

// jumlah barang
let counterEl = document.getElementById('count')
let btnTambah = document.getElementById('tambah')
let btnKurang = document.getElementById('kurang')
let number = 0
counterEl.innerText = number

btnTambah.addEventListener('click', () => tambah())
btnKurang.addEventListener('click', () => kurang())

function tambah() {
  number++
  counterEl.innerText = number
}
function kurang() {
  if (number >= 1) {
    number--
    counterEl.innerText = number
  }
}
