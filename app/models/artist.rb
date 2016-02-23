class Artist < ActiveRecord::Base
  validates :name, :photo, :genre, presence: true
end
