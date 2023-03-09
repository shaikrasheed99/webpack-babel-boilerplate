const body = document.querySelector("body");
const header = document.querySelector("header");

const stylesToBody = () => {
    body.style.background = "black";
};

const stylesToHeader = () => {
    header.style.color = "white";
    header.style.textAlign = "center";
    header.style.paddingTop = "40vh";
};

export {
    stylesToBody,
    stylesToHeader
}