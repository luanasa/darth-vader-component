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

const cardLeft = document.createElement("div");
cardLeft.setAttribute("class", "card_left");//adicionando a class

const cardRight = document.createElement("div");
cardRight.setAttribute("class", "card_right");//adicionando a class

componentRoot.appendChild(cardLeft); //pendurando ao componentRoot 'div principal'
componentRoot.appendChild(cardRight);//pendurando ao componentRoot 'div principal'

return componentRoot;
}

styles(){

}
}

customElements.define("card-news", CardNews); //declaração do component criado