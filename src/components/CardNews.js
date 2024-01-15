class CardNews extends HTMLElement { // CardNews herda as carct. de um elemento HTML
constructor(){
    super();

    const shadow = this.attachShadow({ mode: "open"});
    shadow.innerHTML = "<h1>Isso aqui é um componente</h1>";
}
}

customElements.define("card-news", CardNews);