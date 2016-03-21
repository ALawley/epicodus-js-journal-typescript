module Journal {
  // Interface for an entry
  export interface IEntry {
    author: string;
    title: string;
    text: string;
    wordCount(): number;
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
  }
}
