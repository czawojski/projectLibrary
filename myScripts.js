// used below with button next to h3: <button type="button" id="createLibrary" class="createLibrary">Click here to build your library!</button>
// let books = [];
// const button = document.getElementById("createLibrary");
// button.onclick = function(event) {
//   for (let i = 0; i < 6; i++) {
//     let resp = prompt("Which book would you like to add to your library?");
//     books.push(resp);
// }
// document.getElementById('book0').innerHTML = books[0];
// document.getElementById('book1').innerHTML = books[1];
// document.getElementById('book2').innerHTML = books[2];
// document.getElementById('book3').innerHTML = books[3];
// document.getElementById('book4').innerHTML = books[4];
// document.getElementById('book5').innerHTML = books[5];
// };


// const dialog = document.querySelector("dialog");
const showAdd = document.querySelector(".bookEdit");
const showRead0 = document.querySelector(".bookRead0");
const showRead1 = document.querySelector(".bookRead1");
const showRead2 = document.querySelector(".bookRead2");
const showRead3 = document.querySelector(".bookRead3");
const showRead4 = document.querySelector(".bookRead4");
const showRead5 = document.querySelector(".bookRead5");
const showRemove0 = document.querySelector(".bookRemove0");
const showRemove1 = document.querySelector(".bookRemove1");
const showRemove2 = document.querySelector(".bookRemove2");
const showRemove3 = document.querySelector(".bookRemove3");
const showRemove4 = document.querySelector(".bookRemove4");
const showRemove5 = document.querySelector(".bookRemove5");
// const closeButton = document.querySelector("dialog > button");

// "Show the dialog" button opens the dialog modally
// showAdd.addEventListener("click", () => {
//   dialog.showModal();
// });

// showRead.addEventListener("click", () => {
//   dialog.showModal();
// });

showRemove0.addEventListener("click", () => {
  document.getElementById('book0').innerHTML = " ";
  document.getElementById('author0').innerHTML = " ";
  document.getElementById('pages0').innerHTML = " ";
  document.getElementById('read0').innerHTML = " ";
});
showRemove1.addEventListener("click", () => {
  document.getElementById('book1').innerHTML = " ";
  document.getElementById('author1').innerHTML = " ";
  document.getElementById('pages1').innerHTML = " ";
  document.getElementById('read1').innerHTML = " ";
});
showRemove2.addEventListener("click", () => {
  document.getElementById('book2').innerHTML = " ";
  document.getElementById('author2').innerHTML = " ";
  document.getElementById('pages2').innerHTML = " ";
  document.getElementById('read2').innerHTML = " ";
});
showRemove3.addEventListener("click", () => {
  document.getElementById('book3').innerHTML = " ";
  document.getElementById('author3').innerHTML = " ";
  document.getElementById('pages3').innerHTML = " ";
  document.getElementById('read3').innerHTML = " ";
});
showRemove4.addEventListener("click", () => {
  document.getElementById('book4').innerHTML = " ";
  document.getElementById('author4').innerHTML = " ";
  document.getElementById('pages4').innerHTML = " ";
  document.getElementById('read4').innerHTML = " ";
});
showRemove5.addEventListener("click", () => {
  document.getElementById('book5').innerHTML = " ";
  document.getElementById('author5').innerHTML = " ";
  document.getElementById('pages5').innerHTML = " ";
  document.getElementById('read5').innerHTML = " ";
});

// "Close" button closes the dialog
// closeButton.addEventListener("click", () => {
//   dialog.close();
// });

showRead0.addEventListener("click", () => {
    // this works to toggle Y or N for read icon
    if (document.getElementById("read0").innerHTML == "Yes") {
      document.getElementById("read0").innerHTML = "No";
    } else {
      document.getElementById("read0").innerHTML = "Yes";
    }
});
showRead1.addEventListener("click", () => {
    if (document.getElementById("read1").innerHTML == "Yes") {
      document.getElementById("read1").innerHTML = "No";
    } else {
      document.getElementById("read1").innerHTML = "Yes";
    }
});
showRead2.addEventListener("click", () => {
    if (document.getElementById("read2").innerHTML == "Yes") {
      document.getElementById("read2").innerHTML = "No";
    } else {
      document.getElementById("read2").innerHTML = "Yes";
    }
});
showRead3.addEventListener("click", () => {
    if (document.getElementById("read3").innerHTML == "Yes") {
      document.getElementById("read3").innerHTML = "No";
    } else {
      document.getElementById("read3").innerHTML = "Yes";
    }
});
showRead4.addEventListener("click", () => {
    if (document.getElementById("read4").innerHTML == "Yes") {
      document.getElementById("read4").innerHTML = "No";
    } else {
      document.getElementById("read4").innerHTML = "Yes";
    }
});
showRead5.addEventListener("click", () => {
    if (document.getElementById("read5").innerHTML == "Yes") {
      document.getElementById("read5").innerHTML = "No";
    } else {
      document.getElementById("read5").innerHTML = "Yes";
    }
});


function openForm0() {
  document.getElementById("myForm0").style.display = "block";
}
function openForm1() {
  document.getElementById("myForm1").style.display = "block";
}
function openForm2() {
  document.getElementById("myForm2").style.display = "block";
}
function openForm3() {
  document.getElementById("myForm3").style.display = "block";
}
function openForm4() {
  document.getElementById("myForm4").style.display = "block";
}
function openForm5() {
  document.getElementById("myForm5").style.display = "block";
}

function closeForm0() {
  document.getElementById("myForm0").style.display = "none";
}
function closeForm1() {
  document.getElementById("myForm1").style.display = "none";
}
function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}
function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
}
function closeForm4() {
  document.getElementById("myForm4").style.display = "none";
}
function closeForm5() {
  document.getElementById("myForm5").style.display = "none";
}


// Old prototype constructor function: 
// function Book1(title, author, pages) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
// }

// Class declaration:
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// adapting SO createPerson function
function createBook0() {
  const title0 = document.getElementById('inputTitle0').value;
  const author0 = document.getElementById('inputAuthor0').value;
  const pages0 = document.getElementById('inputPages0').value;

  class Book0 {
    constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

  const newBook0 = new Book0(title0, author0, pages0);

  document.getElementById("book0").innerHTML = newBook0.title;
  document.getElementById("author0").innerHTML = newBook0.author;
  document.getElementById("pages0").innerHTML = newBook0.pages;
}

function createBook1() {
  const title1 = document.getElementById('inputTitle1').value;
  const author1 = document.getElementById('inputAuthor1').value;
  const pages1 = document.getElementById('inputPages1').value;

  class Book1 {
    constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

  const newBook1 = new Book1(title1, author1, pages1);

  document.getElementById("book1").innerHTML = newBook1.title;
  document.getElementById("author1").innerHTML = newBook1.author;
  document.getElementById("pages1").innerHTML = newBook1.pages;
}

function createBook2() {
  const title2 = document.getElementById('inputTitle2').value;
  const author2 = document.getElementById('inputAuthor2').value;
  const pages2 = document.getElementById('inputPages2').value;

  class Book2 {
    constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

  const newBook2 = new Book2(title2, author2, pages2);

  document.getElementById("book2").innerHTML = newBook2.title;
  document.getElementById("author2").innerHTML = newBook2.author;
  document.getElementById("pages2").innerHTML = newBook2.pages;
}

function createBook3() {
  const title3 = document.getElementById('inputTitle3').value;
  const author3 = document.getElementById('inputAuthor3').value;
  const pages3 = document.getElementById('inputPages3').value;

  class Book3 {
    constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

  const newBook3 = new Book3(title3, author3, pages3);

  document.getElementById("book3").innerHTML = newBook3.title;
  document.getElementById("author3").innerHTML = newBook3.author;
  document.getElementById("pages3").innerHTML = newBook3.pages;
}

function createBook4() {
  const title4 = document.getElementById('inputTitle4').value;
  const author4 = document.getElementById('inputAuthor4').value;
  const pages4 = document.getElementById('inputPages4').value;

  class Book4 {
    constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

  const newBook4 = new Book4(title4, author4, pages4);

  document.getElementById("book4").innerHTML = newBook4.title;
  document.getElementById("author4").innerHTML = newBook4.author;
  document.getElementById("pages4").innerHTML = newBook4.pages;
}

function createBook5() {
  const title5 = document.getElementById('inputTitle5').value;
  const author5 = document.getElementById('inputAuthor5').value;
  const pages5 = document.getElementById('inputPages5').value;

  class Book5 {
    constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

  const newBook5 = new Book5(title5, author5, pages5);

  document.getElementById("book5").innerHTML = newBook5.title;
  document.getElementById("author5").innerHTML = newBook5.author;
  document.getElementById("pages5").innerHTML = newBook5.pages;
}


