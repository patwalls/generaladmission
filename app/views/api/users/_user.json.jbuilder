json.extract!(
  user,
  :id, :username, :name, :photo
)

json.shows_amt user.shows
json.unique_shows_amt user.unique_shows
json.friends_amt user.friends_amt
json.friends user.friends
