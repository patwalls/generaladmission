if artist
  json.extract!(
    artist,
    :id, :name, :photo, :genre, :description, :songkick_id
  )
  json.attends artist.attends
else
  artist = nil
  return artist
end
