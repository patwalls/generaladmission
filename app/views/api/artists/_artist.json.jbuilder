if artist
  json.extract!(
    artist,
    :id, :name, :photo, :genre, :description, :songkick_id
  )
else
  artist = nil
  return artist
end
