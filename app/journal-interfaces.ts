module Journal {
  // Interface for an entry
  export interface IEntry {
    author: string;
    title: string;
    text: string;
    wordCount(): number;
    validate(): boolean;
  }

  // Declare Class Entry as an implementation of interface IEntry
  export class Entry implements IEntry {

    // Constructor for Entry class
    constructor (public author: string, public title: string, public text: string) {}

    // Methods for Entry class
    wordCount(){
      var words: string[] = this.text.split(' ');
      for (var i = 0; words.length; i++) {
        if (words[i] === "") {
          words.splice(i, 1);
          i--;
        }
      }
      return words.length;
    }

    validate(){
      if (this.title === "") {
        alert("Please enter a title");
        return false;
      } else if (this.text === "") {
        alert("Please enter some text");
        return false;
      } else if (this.title.split('').length > 20) {
        alert("Please enter a title less than 20 characters");
        return false;
      }  else if (this.text.split('').length > 500) {
        alert("Please enter text less than 500 characters");
        return false;
      } else {
        return true;
      }
    }
  }
}
