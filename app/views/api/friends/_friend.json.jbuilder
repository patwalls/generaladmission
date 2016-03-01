  json.extract!(
    friend,
    :id, :user_id, :friend_id
  )
  json.friend_user_name friend.friendy.username
  json.friend_name friend.friendy.name
  json.user_username friend.user.username
  json.friend_photo friend.friendy.photo
  json.shows_amt friend.friendy.shows
  json.friends_amt friend.friendy.friends_amt
