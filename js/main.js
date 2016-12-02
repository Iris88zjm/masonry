(function($){
  $(function(){
    var sources = [
      { title: 'targeting ', img: 'images/1.jpg', content: '1nspired by hashtags and store locations.', name: 'Jack1', id: 1, },
      { title: 'influences ', img: 'images/2.jpg', content: '2nspired by hashtags and store locations.', name: 'Jack2', id: 2, },
      { title: 'products', img: 'images/3.jpg', content: '3nspired by hashtags and store locations.', name: 'Jack3', id: 3, },
      { title: 'influences ', img: 'images/4.jpg', content: '4nspired by hashtags and store locations.', name: 'Jack4', id: 4, },
      { title: 'connected ', img: 'images/8.jpg', content: '8nspired by hashtags and store locations.', name: 'Jack5', id: 5, },
      { title: 'irrelevants', img: 'images/5.jpg', content: '5nspired by hashtags and store locations.', name: 'Jack6', id: 6, },
      { title: 'irrelevants', img: 'images/3.jpg', content: '3nspired by hashtags and store locations.', name: 'Jack7', id: 7, },
      { title: 'products', img: 'images/1.jpg', content: '1nspired by hashtags and store locations.', name: 'Jack8', id: 8, },
      { title: 'machine ', img: 'images/7.jpg', content: '7nspired by hashtags and store locations.', name: 'Jack9', id: 9, },
      { title: 'connected ', img: 'images/4.jpg', content: '4nspired by hashtags and store locations.', name: 'Jack10', id: 10, },
      { title: 'machine ', img: 'images/8.jpg', content: '8nspired by hashtags and store locations.', name: 'Jack11', id: 11, },
      { title: 'irrelevants', img: 'images/6.jpg', content: '6nspired by hashtags and store locations.', name: 'Jack12', id: 12, },
      { title: 'machine ', img: 'images/7.jpg', content: '7nspired by hashtags and store locations.', name: 'Jack9', id: 13, },
      { title: 'irrelevants', img: 'images/5.jpg', content: '5nspired by hashtags and store locations.', name: 'Jack6', id: 14, },
      { title: 'irrelevants', img: 'images/6.jpg', content: '6nspired by hashtags and store locations.', name: 'Jack12', id: 15, },
    ];
    _.each(sources, function(s) {
      $('.grid').append('<div class="grid-item" data-id="'+ s.id +'"><img src="'+ s.img +'"></div>');
    });
    $('.grid').masonry({
      itemSelector: '.grid-item',
      gutter: 5
    });
    var detail = _.template($('#info').html());
    $('.grid').on('click', '.grid-item', function(){
      $('.info').addClass('active');
      id = $(this).attr('data-id');
      _.each(sources, function(s) {
        if(id == s.id){
          $('.info').append(
              detail({ title: s.title,
                    img: s.img,
                    content: s.content,
                    name: s.name
              })
          );
          var $overlay = $('.show-overlay');
          if ($overlay.length <= 0) {
              $('.info').append('<div class="show-overlay"></div>');
          }
        }
      });
    });
    $('.info').on('click', '.btn-close', function() {
      $('.info').removeClass('active');
      $('.detail').remove();
      $('.show-overlay').remove();
    });
  })
})(jQuery);