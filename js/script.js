async function getCachorro() {
  const div = document.getElementById("cachorro");

  // loading (fica mais profissional)
  div.innerHTML = "<p>Carregando dog...</p>";

  try {
    const resposta = await fetch("https://dog.ceo/api/breeds/image/random");
    const dados = await resposta.json();

    div.innerHTML = `
      <img src="${dados.message}" alt="Cachorro fofo 🐶">
    `;
  } catch (erro) {
    div.innerHTML = "<p>Erro ao carregar dog 😢</p>";
    console.error(erro);
  }
}