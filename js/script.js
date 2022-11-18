const users = [
  {
    userName: "Marcos",
    userMail: "marcos@gmail.com",
    userPass: "Coscogol",
  },
  {
    userName: "Daniella",
    userMail: "daniella@gmail.com",
    userPass: "Iruya12",
  },
  {
    userName: "Máximo",
    userMail: "maximo@gmail.com",
    userPass: "Boquita74",
  },
];

class Perro {
  constructor(nombre, raza, edad, sexo, imagen, id) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = parseInt(edad);
    this.sexo = sexo;
    this.imagen = imagen;
    this.id = id;
  }

  asignarID(array) {
    this.id = array.length;
  }
}

class Gato {
  constructor(nombre, raza, edad, sexo, imagen, id) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = parseInt(edad);
    this.sexo = sexo;
    this.imagen = imagen;
    this.id = id;
  }
  asignarID(array) {
    this.id = array.length;
  }
}

class Conejo {
  constructor(nombre, raza, edad, sexo, imagen, id) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = parseInt(edad);
    this.sexo = sexo;
    this.imagen = imagen;
    this.id = id;
  }
  asignarID(array) {
    this.id = array.length;
  }
}

const perritosEnAdopcion = [
  new Perro("Pluto", "callejero", 4, "macho", "./img/Pluto.jpeg", 1),
  new Perro("Bono", "Border Collie", 3, "macho", "./img/Bono.jpeg", 2),
  new Perro("Nina", "Jack Russel", 6, "hembra", "./img/Nina.webp", 3),
  new Perro("Wilson", "Cocker Spaniel", 6, "macho", "./img/wilson.webp", 4),
];

const perrosAdoptados = [];

const gatitosEnAdopcion = [
  new Gato("Garfield", "Americano", 7, "macho", "./img/garfield.jpeg", 1),
  new Gato("Felix", "Bombay", 1, "macho", "./img/Felix.jpeg", 2),
  new Gato("Clara", "Azul Ruso", 2, "hembra", "./img/Clara.webp", 3),
  new Gato(
    "Bola de nieve",
    "Chinchilla",
    3,
    "hembra",
    "./img/Bola de nieve.jpeg",
    4
  ),
];

const gatosAdoptados = [];

const conejosEnAdopcion = [
  new Conejo("Tambor", "Rex", 2, "macho", "./img/Tambor.jpeg", 1),
  new Conejo("Tambora", "Cabeza de León", 4, "hembra", "./img/Tambora.jpeg", 2),
  new Conejo("Tita", "Belier", 6, "hembra", "./img/Tita.jpeg", 3),
  new Conejo("Lina", "Gigante de Flandes", 2, "hembra", "./img/Lina.webp", 4),
];

const conejosAdoptados = [];

const inputMailLogin = document.getElementById("mailLogin"),
  inputPassLogin = document.getElementById("passLogin"),
  loginButton = document.getElementById("loginButton"),
  loginHeaderButton = document.getElementById("goToFormOne"),
  loginSecondButton = document.getElementById("goToFormTwo"),
  cardsContainer = document.getElementsByClassName("cardContainer"),
  dogsContainer = document.getElementById("containerDogs"),
  catsContainer = document.getElementById("containerCats"),
  bunniesContainer = document.getElementById("containerBunnies"),
  loginForm = document.getElementById("loginForm"),
  messageIndex = document.getElementById("messageIndex"),
  checkButton = document.getElementById("checkButton"),
  toggeable = document.querySelectorAll(".toggeable"),
  logOutBtn = document.getElementById("logOut"),
  homeTitle = document.getElementById("title");

loginHeaderButton.onclick = (e) => {
  e.preventDefault();
  toggleShowLoginForm();
};

loginSecondButton.onclick = () => {
  toggleShowLoginForm();
};

function toggleShowLoginForm() {
  let toggleAble = document.querySelectorAll(".toggeable");
  for (let x of toggleAble) {
    x.classList.toggle("d-none");
  }
}

function addDogCard() {
  dogsContainer.innerHTML = "";
  perritosEnAdopcion.forEach((perro) => {
    let card = `<div class="card" id= card${perro.nombre}">
      <img src="${perro.imagen}" class="card-img-top" alt="${perro.nombre}">
      <div class="card-body">
        <h5 class="card-title">${perro.nombre}</h5>
        <p class="card-text">${perro.nombre} es de raza: ${perro.raza} y tiene ${perro.edad} años</p>
  
      </div>
      </div>`;
    return (dogsContainer.innerHTML += card);
  });
}

addDogCard();

function addCatCard() {
  catsContainer.innerHTML = "";
  gatitosEnAdopcion.forEach((gato) => {
    let card = `<div class="card" id= card${gato.nombre}">
    <img src="${gato.imagen}" class="card-img-top" alt="${gato.nombre}">
    <div class="card-body">
      <h5 class="card-title">${gato.nombre}</h5>
      <p class="card-text">${gato.nombre} es de raza: ${gato.raza} y tiene ${gato.edad} años</p>
  
    </div>
    </div>`;
    return (catsContainer.innerHTML += card);
  });
}

addCatCard();

function addBunnyCard() {
  bunniesContainer.innerHTML = "";
  conejosEnAdopcion.forEach((bunny) => {
    let card = `<div class="card" id= card${bunny.nombre}">
    <img src="${bunny.imagen}" class="card-img-top" alt="${bunny.nombre}">
    <div class="card-body">
      <h5 class="card-title">${bunny.nombre}</h5>
      <p class="card-text">${bunny.nombre} es de raza: ${bunny.raza} y tiene ${bunny.edad} años</p>
  
    </div>
    </div>`;
    return (bunniesContainer.innerHTML += card);
  });
}

addBunnyCard();

function validarUsuario(usersDB, user, pass) {
  let encontrado = usersDB.find((userDB) => userDB.userMail == user);
  // console.log(encontrado)
  // console.log(typeof encontrado)

  if (typeof encontrado === "undefined") {
    return false;
  } else {
    if (encontrado.userPass != pass) {
      return false;
    } else {
      return encontrado;
    }
  }
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (!inputMailLogin.value || !inputPassLogin.value) {
    alert("Tienes que rellenar toda la información");
  } else {
    let data = validarUsuario(
      users,
      inputMailLogin.value,
      inputPassLogin.value
    );

    if (!data) {
      alert("Usuario y/o contraseña erroneos");
    } else {
      if (checkButton.checked == true) {
        guardarDatos(data, localStorage);
        console.log(data.userName);
      } else {
        guardarDatos(data, sessionStorage);
        console.log(data.userMail);
      }
      toggleShowPrincipalMenu();
      saluteUser(data);
    }
  }
});

function toggleShowPrincipalMenu() {
  let toggleAble = document.querySelectorAll(".toggeableTwo");
  for (let x of toggleAble) {
    x.classList.toggle("d-none");
  }
}

function guardarDatos(usersDB, storage) {
  const usuario = {
    name: usersDB.userName,
    user: usersDB.userMail,
    pass: usersDB.userPass,
  };

  storage.setItem("usuario", JSON.stringify(usuario));
}

function borrarDatos() {
  localStorage.clear();
  sessionStorage.clear();
}

function logOut() {
  let toggleAble = document.querySelectorAll(".toggeableTwo");
  for (let x of toggleAble) {
    x.classList.toggle("d-none");
  }
  homeTitle.innerHTML = `Bienvenido a MaxCot, adopta tu mascota!`;
  toggleShowLoginForm();
  resetFormValues();
  borrarDatos();
}

logOutBtn.onclick = (e) => {
  e.preventDefault();
  logOut();
};

function resetFormValues() {
  inputPassLogin.value = "";
  inputMailLogin.value = "";
}

function saluteUser(userDB) {
  return (homeTitle.innerHTML = `Hola ${userDB.userName}! Bienvenido/a a MaxCot!`);
}

function alreadyLogged (usuario) {
  if (usuario) {

    toggleShowPrincipalMenu;
  }
}

function recoverUser(storage) {
  return JSON.parse(storage.getItem('usuario'));
}

alreadyLogged(recoverUser(storage));