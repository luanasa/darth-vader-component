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
autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

const linkTitleH1 = document.createElement("h1");
const linkTitle = document.createElement("a");
linkTitle.textContent = this.getAttribute("title");
linkTitle.href = this.getAttribute("link-url");
linkTitleH1.appendChild(linkTitle);


const newsContent = document.createElement("p");
newsContent.textContent = this.getAttribute("content");

const buttonApply = document.createElement("button");
const linkApply = document.createElement("a");
linkApply.textContent = this.getAttribute("button");
linkApply.href = this.getAttribute("link-apply");
buttonApply.appendChild(linkApply);

cardLeft.appendChild(autor);
cardLeft.appendChild(linkTitleH1);
cardLeft.appendChild(newsContent);
cardLeft.appendChild(buttonApply);

//Estrutura card_right
const cardRight = document.createElement("div");
cardRight.setAttribute("class", "card_right");//adicionando a class
const newsImage = document.createElement("img");
newsImage.src = this.getAttribute("photo");
newsImage.alt = "Darth Vader image";
cardRight.appendChild(newsImage);



componentRoot.appendChild(cardLeft); //pendurando ao componentRoot 'div principal'
componentRoot.appendChild(cardRight);//pendurando ao componentRoot 'div principal'

return componentRoot;
}

styles(){
    const style = document.createElement("style");
    style.textContent = `
    .card {
        width: 720px;
        border: 1px solid gray;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    
        box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
    }
    
    .card_left, .card_right {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .card_left span{
        font-size: 13px;
        color: rgb(156, 9, 34);
        font-weight: bold;
    }
    
    .card_left h1{
        margin-top: 10px;
        font-size: 25px;
    }
    
    .card_left a{
        color: black;
        text-decoration: none;
    }
    
    
    .card_left p{
        color: rgb(70,70,70);
    }
    
    .card_right img {
        width: 17rem;
    }
    
    button {
        padding: 10px 20px;
        margin-top: 2rem;
        width: 15rem;
        border: none;
        font-size: 10px;
        border-radius: 7px;
        letter-spacing: 4px;
        font-weight: 700;
        text-transform: uppercase;
        transition: 0.5s;
        transition-property: box-shadow;
        background: rgb(69, 69, 69);
        box-shadow: 0 0 25px rgb(86, 88, 90);
      }
      
      button:hover {
        box-shadow: 0 0 5px rgb(19, 20, 20),
                    0 0 25px rgb(112, 114, 116),
                    0 0 50px rgb(66, 67, 69),
                    0 0 100px rgb(6, 7, 7);
      }
    
      .card_left button a {
        color: white;
      }
    `
    return style;
}
}

customElements.define("card-news",Cardnews); //declaração do component criado