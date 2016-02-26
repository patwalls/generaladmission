json.array!(@friend) do |friend|
  json.partial!('friend', friend: friend)
end
