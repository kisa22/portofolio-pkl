let owo = () => {
    fetch('imgd.json').then((res) => res.json()).then(data => {
        data.forEach((aa) => {
            box.innerHTML += `<div class="www"><img src="${aa.file}"/><span>${aa.desc}</span></div>`
        })
    })
}

window.onload = owo();