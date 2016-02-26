json.extract!(
  attend,
  :id, :review, :rating, :photo, :date_attended, :user_id, :artist_id, :venue_id
)

json.username attend.user.username
json.artist_name attend.artist.name
