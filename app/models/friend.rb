class Friend < ActiveRecord::Base
  belongs_to :user
  belongs_to :friendy,
    class_name: "User",
    foreign_key: :friend_id,
    primary_key: :id


end
