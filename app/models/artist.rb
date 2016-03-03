class Artist < ActiveRecord::Base
  validates :name, :photo, :genre, presence: true

  has_many :attends
end
