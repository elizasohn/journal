
import './styles.css';
import { Entry } from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var titleInput = $('input#title').val();
    var postInput = $('input#post').val();
    // console.log(wordCount);
    console.log(titleInput);
    console.log(postInput);
    console.log(myEntry);
    var myEntry = new Entry(titleInput, postInput);
    myEntry.getWords();
    // console.log(wordCount);
    console.log(titleInput);
    console.log(postInput);
    console.log(myEntry.words);
    // $("#words").text(wordCount);
    $("#title").text(titleInput);

  });

  // console.log(wordCount "hey");
  // console.log(myEntry "ho");

});
