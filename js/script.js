// 🐶 GERAR CACHORRO
async function getCachorro() {
    const div = document.getElementById("cachorro");

    div.innerHTML = "Carregando... 🐶";

    try {
        let response = await fetch("https://dog.ceo/api/breeds/image/random");
        let data = await response.json();

        let cachorro = data.message;

        div.innerHTML = `
        <img src="${cachorro}" alt="Cachorro fofo 🐶">
        `;

       

    } catch (erro) {
        div.innerHTML = "Erro ao carregar 😢";
        console.error(erro);
    }
}


// 📍 GEOLOCALIZAÇÃO (PETSHOPS)
function buscarPetshops() {
    const div = document.getElementById("cachorro");

    if (!navigator.geolocation) {
        div.innerHTML = "Geolocalização não suportada 😢";
        return;
    }

    div.innerHTML = "Localizando você... 📍";

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;

            div.innerHTML = `
                <h3>Petshops perto de você 🐾</h3>

                <iframe
                    width="100%"
                    height="300"
                    style="border:0; border-radius:15px; margin-top:10px;"
                    loading="lazy"
                    allowfullscreen
                    src="https://www.google.com/maps?q=petshop&ll=${lat},${lon}&z=15&output=embed">
                </iframe>

                <a href="https://www.google.com/maps/search/petshop/@${lat},${lon},15z" target="_blank">
                    Abrir no Google Maps 🗺️
                </a>
            `;

            if (navigator.vibrate) {
                navigator.vibrate(200);
            }
        },
        (erro) => {
            if (erro.code === 1) {
                div.innerHTML = "Você bloqueou a localização 😢";
            } else {
                div.innerHTML = "Erro ao pegar localização 😢";
            }
        }
    );
}


if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js")
            .then(() => console.log("Service Worker registrado 🔥"))
            .catch((err) => console.error("Erro:", err));
    });
}