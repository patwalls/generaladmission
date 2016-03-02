json.array!(@followers) do |follower|
  json.partial!('follower', follower: follower)
end
