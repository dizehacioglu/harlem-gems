var tags = [
  'restaurants',
  'clothes',
  'books',
  'beauty',
  'entertainment',
  'community spaces',
  'historical landmarks',
  'places to volunteer'
]

tags.forEach(function(tag) {
  $('#tags').append('<span class="tag">' + tag + '</span>');
})
