var tags = [
  'restaurants',
  'clothes',
  'books',
  'beauty',
  'entertainment',
  'community spaces',
  'historical landmarks',
  'places to volunteer'
];

var data = {
  'clothes': [
    {
      name: 'Harlem Haberdasher',
      description: 'Harlem Haberdasher draws inspiration from the rich cultural history and distinctive style of the Harlem Renaissance while adding a future-forward edge to our exclusive designs.',
      image: 'Harlem-Pictures/Harlem-Haberdashery.jpg'
    },
    {
      name: 'Harlem Underground',
      description: 'Harlem Underground opened its doors in 1998. From the onset HU has embodied the essence of Harlem, New York City, the epicenter of African-American culture. Harlem Underground has two locations. We provide quality and unique apparel that transcends time. Over the last eighteen years, we have been a consistent and solid part of the community and look forward to doing so for years to come. Harlem Underground is proud to be a product of Harlem NYC.',
      image: 'Harlem-Pictures/Harlem-Underground.jpg'
    }
  ],
  'restaurants': [
    {
      name: 'Sylvia\'s',
      description: 'Sylvia Woods, the “Queen of Soulfood,” is the founder and owner of the world famous Sylvia’s Restaurant, located in the historical village of Harlem, since 1962.',
      image: 'Harlem-Pictures/Sylvias.jpg'
    },
    {
      name: 'Amy Ruth\'s',
      description: 'Harlem\'s famous Soul Food Restaurant, Amy Ruth’s, was inspired by the memory of a loving Grandmother. Amy Ruth Moore Bass was a native Alabamian. A devout Christian, she was the wife of Elijah Bass Sr., the mother of 10 children (7 daughters and 3 sons); and the grandmother of 12 grandchildren. Amy Ruth was also a farmer, a gardener, the world’s best cook, and a friendly person.',
      image: 'Harlem-Pictures/Amy-Ruths.jpg'
    }
  ],
  'entertainment': [
    {
      name: 'National Black Theatre Inc',
      description: 'NBT\'s core mission remains the same today as it was at the time of its founding, to produce transformational theatrical experiences that enhance African American cultural identity by telling authentic stories of the Black experience. Dr. Teer envisioned NBT as a means to educate, enrich, entertain, empower and inform the national conscience around current social justice issues that impact our communities. We continue to provide a safe unhindered space for artist of color to articulate the complexity, and beauty of their experience through theater.',
      image: 'Harlem-Pictures/National-Black-Theatre.jpg'
    },
    {
      name: 'Apollo Theater',
      description: 'The Apollo Theater at 253 West 125th Street between Adam Clayton Powell Jr. Boulevard and Frederick Douglass Boulevard in the Harlem neighborhood of Manhattan, New York City is a music hall which is a noted venue for African-American performers.',
      image: 'Harlem-Pictures/Apollo-Theater.jpg'
    }
  ],
  'places to volunteer': [
    {
      name: 'Volunteers of America',
      description: 'Volunteers of America is a church without walls that answers God’s call to transform our communities through a ministry of service that demonstrates to all people that they are beloved.',
      image: 'Harlem-Pictures/Volunteers-of-America.jpg'
    },
    {
      name: 'Little Sisters of the Assumptions Health Service',
      description: 'LSA’s founders insisted upon keeping an open door so anyone in need of care or support would feel welcome regardless of a family’s ability to pay. To this day, our door remains wide open. If we can’t help you, we’ll help you connect with someone who can.',
      image: 'Harlem-Pictures/Little-Sister-Assumption.jpg'
    }
  ],
  'historical landmarks': [
    {
      name: 'Hamilton Grange',
      description: 'Hamilton created the tools for the success of the United States. From his humble beginnings as an orphan on the Caribbean island of Nevis, he became George Washington\'s right-hand man. Come visit Hamilton Grange and find out more about this controversial founder and the country home that he built on his Harlem estate.',
      image: 'Harlem-Pictures/Hamiltion-Grange.jpg'
    },
    {
      name: 'Hotel Theresa',
      description: 'he 13-story hotel was built in 1912-13 by German-born stockbroker Gustavus Sidenberg , whose wife the hotel is named after, and was designed by the firm of George & Edward Blum, who specialized in designing apartment buildings. The hotel, which was known in its heyday as "the Waldorf of Harlem", exemplifies the Blums\' inventive use of terra-cotta for ornamentation, and has been called "one of the most visually striking structures in northern Manhattan.',
      image: 'Harlem-Pictures/Hotel-Theresa.jpg'
    }
  ],
  'books': [
    {
      name: 'Revolution Books',
      description: 'Radical indie bookstore with a selection of global books & DVDs, as well as regular events.',
      image: 'Harlem-Pictures/Revolution-Books.jpg'
    },
    {
      name: 'Grandma\'s Place',
      description: 'Since its revolution of African American art and culture in the Harlem Renaissance, Central Harlem is abuzz with art and history. But the beloved uptown nabe is once again being redefined with a new vibrancy.Often referred to simply as Harlem, a real estate renaissance occurred in recent years, luring a more diverse crowd of residents and businesses.',
      image: 'Harlem-Pictures/Grandmas-Place.jpg'
    }
  ]
};

tags.forEach(function(tag) {
  $('#tags').append('<span class="tag"><i class="fa fa-times" aria-hidden="true"></i>' + tag + '</span>');
})

$('#tags').on('click', 'span', function() {

  $('.result').remove();
  $('#content').css('height', '250px')

  $('html, body').animate({
        scrollTop: $('#results').offset().top
    }, 500);

  var results = data[$(this).text()]

  results.forEach(function(result) {
    var name = '<h3>' + result.name + '</h3>';
    var description = '<p>' + result.description + '</p>';
    var image = '<img src="' + result.image + '">';

    $('#results').append('<div class="result">'+ image + '<div class="info">' + name + description + '</div></div>')
  })

})
