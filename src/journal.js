

export function Entry(title, post, words){
  this.title = title;
  this.post = post;
  this.words = 0;
}

Entry.prototype.getWords = function() {

  this.words = (this.post.split(' ').length);
};


// Entry.prototype.getVowels;
//
// Entry.prototype.getCons;
//
// Entry.prototype.getTeaser;
//display only first 8 words no more
