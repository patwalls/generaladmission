json.extract!(
  attend,
  :id, :review, :rating, :photo, :date_attended, :user_id, :artist_id, :venue_id, :venue_name, :venue_city
)

json.username attend.user.username
json.name attend.user.name
json.artist_name attend.artist.name
json.artist_songkick_id attend.artist.songkick_id
json.photo attend.user.photo
json.artist_photo attend.artist.photo
