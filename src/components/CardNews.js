class Cardnews extends HTMLElement { // Cardnews herda as carct. de um elemento HTML
constructor(){
    super();

    const shadow = this.attachShadow({ mode: "open"});
    shadow.appendChild(this.build()); //pendurando o build criado abaixo
    shadow.appendChild(this.styles()); //pendurando o style criado abaixo
}

build() {
const componentRoot = document.createElement("div");
componentRoot.setAttribute("class", "card"); //adicionando a class

//Estrutura card_left
const cardLeft = document.createElement("div");
cardLeft.setAttribute("class", "card_left");//adicionando a class

const autor = document.createElement("span");
const linkTitleH1 = document.createElement("h1");
const linkTitle = document.createElement("a");
linkTitleH1.appendChild(linkTitle);
const newsContent = document.createElement("p");
const buttonApply = document.createElement("button");
const linkApply = document.createElement("a");
buttonApply.appendChild(linkApply);

cardLeft.appendChild(autor);
cardLeft.appendChild(linkTitleH1);
cardLeft.appendChild(newsContent);
cardLeft.appendChild(buttonApply);

//Estrutura card_right
const cardRight = document.createElement("div");
cardRight.setAttribute("class", "card_right");//adicionando a class
const newsImage = document.createElement("img");
cardRight.appendChild(newsImage);



componentRoot.appendChild(cardLeft); //pendurando ao componentRoot 'div principal'
componentRoot.appendChild(cardRight);//pendurando ao componentRoot 'div principal'

return componentRoot;
}

styles(){

}
}

customElements.define("card-news", CardNews); //declaração do component criado