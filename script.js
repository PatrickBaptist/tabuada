function gerar() {
    let num = document.getElementById('numero')
    let tab = document.getElementById('list')

    if (num.value.length == 0){
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        while(c <= 10) {
            let x = document.createElement('option')
            x.text = `${n} x ${c} = ${n*c}`
            x.value = `tab${c}`
            tab.appendChild(x)           
            c++
        }
    }
}