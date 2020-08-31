function isBookGenre(genreList, queryGenre) {

  var genreList = genreList.split(",");
  for (var i = 0; i < genreList.length; i++) {
    if (queryGenre == genreList[i])
      return true;
  }
  return false;
}

function loadBooks() {

  var selectedGenre = document.getElementById("genre").value;
  var bookData = "";
  var count = 0;

  for (var i = 1; i <= NUM_BOOKS; i++) {
    book = BOOKS[i];
    if (!(selectedGenre == "All" || isBookGenre(book["genre"], selectedGenre)))
      continue;

    count++;
    bookData += '<div class="col-xs-4 col-md-3 parent">';
    bookData += '<img src="' + book["image"] + '" class="img-responsive book" />';
    bookData += '<p class=\'bookTitle\'> ' + book["title"] + '</p>';
    bookData += '</div>';
    if (count % 4 == 0) {
      bookData += '<div class="col-xs-12 shelf"></div>';
    }

  }

  if (count % 4 != 0) {
      count++;
      if (count % 4 == 0) {
        bookData += '<div class="col-xs-12 shelf"></div>';
      }
    
  }

  document.getElementById("bookData").innerHTML = bookData;
}