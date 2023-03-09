const header = document.querySelector("header");

const helloWithName = (name) => {
    const htmlTemplate = `
        <h1>Hello there, ${name}!!
    `;

    header.innerHTML = htmlTemplate;
};

helloWithName("Ironman");