import { stylesToBody, stylesToHeader } from "./styles";

const header = document.querySelector("header");

const helloWithName = (name) => {
    const htmlTemplate = `
        <h1>Hello there, ${name}!!
    `;

    header.innerHTML = htmlTemplate;
};

helloWithName("Ironman");
stylesToBody();
stylesToHeader();