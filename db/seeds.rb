# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# create_table "artists", force: :cascade do |t|
#   t.string   "name",        null: false
#   t.text     "photo",       null: false
#   t.text     "genre",       null: false
#   t.text     "description"
#   t.integer  "songkick_id"
#   t.datetime "created_at",  null: false
#   t.datetime "updated_at",  null: false
# end

Artist.create(name: "Chance The Rapper",
              photo: "https://media.livenation.com/artists/51521/51521-show-121663.jpg?1438188184",
              genre: "Hip Hop",
              description: "Chance the Rapper was born in 1993 on April 16. He showed an affinity for music from a young age and was very musical at school, forming a hip hop duo whilst still in high school. It was during his school days that he recorded his first full length project, a mixtape he titled ’10 Day’. Despite being somewhat of a troublemaker, having been suspended for weed related activities, Bennett had big musical aspirations and in December 2011 he released his first song, ‘Windows’ and announced his ’10 Day’ project. After a further year of polishing his music, Bennett finally released the album on April 3 2012. It was received very well locally and made available to download via Datpiff, which it subsequently was over 250,000 times. This staggering success marked just the start of Bennett’s career and his transformation into Chance the Rapper.",
              songkick_id: 5004833)

Artist.create(name: "Kendrick Lamar",
              photo: "http://remixblog.ca/wp-content/uploads/2011/06/Kendrick-Lamar-Concert-June-16-2011_16.jpg",
              genre: "Hip Hop",
              description: "Kendrick Lamar is a rapper born on the 17th of June 1987 in Compton, California, USA. Since the release of his mixtape “Overly Dedicated”, and his second album “good kid, m.A.A.d city”, he has proved himself to be one of the most exciting, critically acclaimed rappers of his generation.",
              songkick_id: 3277856)

Artist.create(name: "Travis Scott",
              photo: "http://www.placesplusfaces.com/wp-content/uploads/2014/03/la-flame-32-1440x960.jpg",
              genre: "Hip Hop",
              description: "Travis Scott is the stage name of Jacques Webster, a rapper hailing from Houston, Texas, USA and born on the 30th of April 1992. Since debuting in 2009 at the age of 17 he has been signed to the record labels of both Kanye West and T.I.",
              songkick_id: 6008144)

Attend.create(
  review: "What a pleasant experience!",
  rating: 4,
  photo: "http://images.musictimes.com/data/images/full/47820/vitaminwater-and-the-fader-unite-to-hydrate-the-hustle-for-fifth-anniversary-of-uncapped-concert-series.jpg?w=775",
  date_attended: '2015-08-24',
  user_id: 1,
  artist_id: 1,
  venue_id: 1,
)

Attend.create(
  review: "What a terrible concert. Chance didn't even play Sunday Candy and the set was only 40 mins",
  rating: 2,
  photo: "http://images.musictimes.com/data/images/full/47820/vitaminwater-and-the-fader-unite-to-hydrate-the-hustle-for-fifth-anniversary-of-uncapped-concert-series.jpg?w=775",
  date_attended: '2015-10-02',
  user_id: 2,
  artist_id: 1,
  venue_id: 2
)
User.create(username: 'patwalls', password: '123456', name: 'Pat Walls', photo: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAVBAAAAJGEyNGNmY2Y3LTEyYmItNGJiMy1hNWE2LWFlNmVkODVlYjcyZQ.jpg')
User.create(username: 'spyqsklar', password: '123456', name: 'Spyq Sklar', photo: 'http://www.marinatimes.com/wp-content/uploads/2014/06/MT-July2014-COVER-ReynoldsRap.jpg')
User.create(username: 'jole', password: '123456', name: 'Jole Klonoff', photo: 'http://i.imgur.com/wEml88p.png')
User.create(username: 'pejmanaftalion', password: '123456', name: 'Pejman Aftalion', photo:'https://v.cdn.vine.co/v/avatars/3E5D9B4D-9616-439E-B081-6A25A65B3A15-2527-000001FC35F3689D.jpg?versionId=eGmKbWctn3oeWvo7r1g3NOGnQu.xQv3w')
User.create(username: 'austinmiller', password: '123456', name: 'Austin Miller', photo: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/000/206/08b/0d69eb2.jpg')
User.create(username: 'johnheadley', password: '123456', name: 'John Headley', photo: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254')

Friend.create(user_id: 1, friend_id: 3)
Friend.create(user_id: 1, friend_id: 4)
Friend.create(user_id: 1, friend_id: 5)
Friend.create(user_id: 1, friend_id: 6)
Friend.create(user_id: 3, friend_id: 1)
Friend.create(user_id: 3, friend_id: 4)
Friend.create(user_id: 3, friend_id: 5)
Friend.create(user_id: 3, friend_id: 6)
