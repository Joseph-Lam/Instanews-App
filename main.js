$(document).ready(function() {

  $('#selector').heapbox(
    {'onChange': function() {
    //remove previous articles
    $('.article-list').empty();

    //adjust margin on the logo
    $('header').addClass('logo-margin');
    $('.letter').addClass('letter-size');
    
    //append loader onto site
    $('.ajax-loader').append('<img src="assets/images/ajax-loader.gif" alt="loading" class="loader"/>');

    //grab the section from the selector and put it into category
    var category = document.getElementById('selector').value;

  //set some initial variables
  var articleLink,
  articleCaption,
  articleImageUrl,
  articleUrl,
  $articlelist = $('.article-list');

  var url = "https://api.nytimes.com/svc/topstories/v2/" + category + ".json";
  url += '?' + $.param({ 'api-key': "9d89c6a48cfc43bfb338b4bc2e1a76a1"});

  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json'

  }).done(function(data) {

    articleData = data.results;
    nytItems = '';
    var i = 0;

    // if (articleData.length  < 1) {
    //   nytItems += '<p class="feedback">Sorry, nothing found! Please try again.</p>';
    //   return;

    // } else {
    //   let nytData = data.results.filter(function(value) {
    //     return value.multimedia.length;
    //   }).splice(0,12)

    // nytItems += '<ul>';
    $.each(articleData, function(key, value) {

      if (value.multimedia.length && i < 12) { //a simpler way to append only 12 articles - FM
        articleImageUrl = value.multimedia[4].url;
        articleCaption = value.abstract;
        articleLink = value.url;

        nytItems += '<li>';
        nytItems +=   '<a class="caption-font" href="' + articleLink + '" target="_blank">';
        nytItems +=     '<div>';
        nytItems +=       '<div class="article" style="background-image:url('+articleImageUrl+')">';
        nytItems +=         '<div class="abstract">';
        nytItems +=           '<p>' + (articleCaption || "This story has no description.") + '</p>';
        nytItems +=         '</div>';
        nytItems +=        '</div>';
        nytItems +=     '</div>';
        nytItems +=   '</a>';
        nytItems += '</li>';
        i++;
      }
    });
// 
    // nytItems += '</ul>';

     $articlelist.append(nytItems);

  }).fail(function() {
    $articlelist.append('<li class="feedback">Sorry, nothing found! Please try again.</li>');
  })

  //remove loader gif
  .always(function() {
      $('.loader').remove();
      });
}
});
});
