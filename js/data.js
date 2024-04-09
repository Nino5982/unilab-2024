

const userData = [
  {
    id: 2,
    name: "Josh",
    description: "qweqwsxasdqwew",
    profilePicture:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: 3,
    name: "Jane",
    description: "yjtykyumjhjhjkgjhhjkhkj",
    profilePicture:
      "https://media.istockphoto.com/photos/elegant-beauty-picture-id516208984?k=20&m=516208984&s=612x612&w=0&h=KooFBmqHtO2lz5CFV5Oe87u_12wgKCxHvTHxlYuErCU=",
  },
  {
    id: 4,
    name: "Iness",
    description: "k4jh23k4jh23kjhk2jhk",
    profilePicture:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  },
];

const root = document.querySelector("#services-cards");

function cardSection(card) {
  const section = document.createElement("section");
  section.classList.add("card");
  const cardInner = div();
  const decript = p(card.description);
  const cardimg = img(card.imageUrl);
  const userHeading = h3(card.title);
  cardInner.appendChild(cardimg);
  cardInner.appendChild(userHeading);
  cardInner.appendChild(decript);
  section.appendChild(cardInner);
  return section;
}

function div(desc) {
  const div = document.createElement("div");
  div.textContent = desc;
  return div;
}

function img(imgSrc) {
  const img = document.createElement("img");
  img.setAttribute("src", imgSrc);
  img.classList.add("card__img");
  return img;
}

function h3(title) {
  const h3 = document.createElement("h3");
  h3.textContent = `${title}`;
  h3.classList.add("card__title");
  return h3;
}

function p(desc) {
  const p = document.createElement("p");
  p.textContent = `${desc}`;
  p.classList.add("card__description");
  return p;
}

const serviceCards = cardData.map(cardSection);
root.append(...serviceCards);
