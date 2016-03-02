  json.extract!(
    follower,
    :id, :user_id, :follower_id
  )

  json.followed_user_name follower.follower_user.username
  json.followed_name follower.follower_user.name
  json.followed_photo follower.follower_user.photo
  json.followed_shows_amt follower.follower_user.shows
  json.followed_followers_amt follower.follower_user.followers_amt


  json.follower_user_name follower.followed.username
  json.follower_name follower.followed.name
  json.follower_photo follower.followed.photo
  json.follower_shows_amt follower.followed.shows
  json.follower_followers_amt follower.followed.followers_amt
