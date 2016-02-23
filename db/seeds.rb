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
