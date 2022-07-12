// button loading
let btnLoading = document.getElementById('btnloading')
btnLoading.addEventListener('click', () => loaded())
function loaded() {
  btnLoading.innerText = 'Loading ...'
  const timeout = setTimeout(
    () => (
      (btnLoading.innerText = 'Purchase'),
      (window.location.href = 'success_checkout.html')
    ),
    5000,
  )
}
