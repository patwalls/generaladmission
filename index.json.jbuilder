json.array!(@attend_artists) do |attend|
  json.partial!('attend', attend: attend)
end
