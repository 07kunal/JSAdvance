class Book {
    constructor(title, author,year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  }
      
  class Ebook extends Book {
      constructor (title,author,year,fileSize){
          super(title,author,year);
          this.fileSize = fileSize
      }
      
      download (){
          return `the title of book is ${this.title} and author is ${this.author}`
      }
  }
  
  const myBook = new Ebook("Teast","Teastss",2025,25);
  console.log(myBook.download());