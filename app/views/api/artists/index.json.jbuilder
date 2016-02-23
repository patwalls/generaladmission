json.array!(@artist) do |artist|
  json.partial!('artist', artist: artist)
end
