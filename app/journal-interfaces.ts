module Journal {
  // Interface for an entry
  export interface IEntry {
    author: string;
    title: string;
    text: string;
    wordCount(): number;
  }

  // Declare Class Entry as an implementation of interface IEntry
  class Entry implements IEntry {

    // Constructor for Entry class
    constructor (public author: string, public title: string, public text: string) {}

    // Methods for Entry class
    wordCount(){
      return this.text.split(' ').length;
    }
  }
}
