# 🐶 Dog App - Consumo de API

Aplicação web simples desenvolvida com HTML, CSS e JavaScript, seguindo o conceito mobile first e consumindo uma API pública.

O app permite:

Gerar imagens aleatórias de cachorros em tempo real, utilizando a Dog CEO API
Localizar petshops próximos do usuário, usando geolocalização e integração com Google Maps

Tudo isso em uma interface rápida, responsiva e intuitiva para dispositivos móveis.

---

## 📱 Preview

> Aplicação pensada prioritariamente para dispositivos móveis 📲

- Interface simples e intuitiva  
- Botão para gerar novas imagens  
- Layout responsivo  

---

## 🚀 Funcionalidades

- ✔️ Consumo de API pública  
- ✔️ Exibição dinâmica de imagens  
- ✔️ Atualização ao clicar no botão  
- ✔️ Feedback de carregamento  
- ✔️ Responsividade (mobile e tablet)  

---

## 🛠️ Tecnologias Utilizadas

- HTML5  
- CSS3
- JavaScript (Vanilla)  
- PWA (Progressive Web App)
- API pública (Dog API)  

---

## 🔗 API Utilizada

- **Nome:** Dog CEO API  
- **Link:** https://dog.ceo/dog-api/  
- **Endpoint usado:** https://dog.ceo/api/breeds/image/random

---


---

#### 📁 Estrutura do Projeto

```bash
dog-app-api/
│
├── index.html          # Estrutura principal da aplicação
├── service-worker.js   # Service Worker (PWA / offline)
├── manifest.json       # Configurações do PWA
├── README.md           # Documentação do projeto
│
├── css/
│   └── style.css       # Estilização da aplicação
│
├── js/
│   └── script.js       # Lógica da aplicação (API de cachorros)
│
├── icons/
│   ├── icon-192.png    # Ícone PWA (192x192)
│   └── icon-512.png    # Ícone PWA (512x512)
```

---

## 🌐 Visualização Online

🔗 **Acesse o projeto:**
((https://dog-app-pwa.netlify.app/))

---

## 📸 Como Funciona

1. O usuário clica no botão **"Gerar Cachorro"**  
2. O JavaScript faz uma requisição para a API  
3. A imagem retornada é exibida na tela
4. O usuário clica no botão **"Petshops próximos"** para buscar estabelecimentos na sua região  

---

## 📚 Objetivo do Projeto

Este projeto foi desenvolvido como parte da disciplina **Coding: Mobile**, com base nos desafios propostos (Desafio I, II e III), com o objetivo de:
- Praticar o consumo de APIs (requisições assíncronas com JavaScript)  
- Trabalhar com JavaScript assíncrono (fetch/async/await)  
- Aplicar conceitos de responsividade para dispositivos móveis 
- Desenvolver uma aplicação web progressiva (PWA)
- Criar interfaces simples, funcionais e focadas na experiência do usuário 

---

## 💡 Possíveis Melhorias

- Adicionar nome da raça 🐕  
- Implementar sistema de favoritos ❤️  
- Criar animações na troca de imagens  
- Modo escuro/claro 🌙  

---

## 👩‍💻 Autora

**Maria Eduarda**  
Estudante de Fisioterapia e Análise e Desenvolvimento de Sistemas  

---

## ⭐ Considerações

Projeto simples, porém funcional, focado na aplicação prática de conceitos fundamentais do desenvolvimento web e integração com APIs.
