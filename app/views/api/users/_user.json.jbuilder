json.extract!(
  user,
  :id, :username, :name, :photo
)

json.shows_amt user.shows
json.unique_shows_amt user.unique_shows
json.followers_amt user.followers_amt
json.followers user.followers
json.following user.following
