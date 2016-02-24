json.array!(@attend) do |attend|
  json.partial!('attend', attend: attend)
end
