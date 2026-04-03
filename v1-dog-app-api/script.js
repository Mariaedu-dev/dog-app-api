async function getCachorro() {
    let response = await fetch("https://dog.ceo/api/breeds/image/random")
    console.log(response)

    let data = await response.json()
    console.log(data)

    let cachorro = data.message
    console.log(cachorro)

    document.getElementById("cachorro").innerHTML = `
    <img src="${cachorro}" alt="Cachorro fofo 🐶">
    `
}