class Follower < ActiveRecord::Base
  belongs_to :follower_user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :followed,
    class_name: "User",
    foreign_key: :follower_id,
    primary_key: :id


end
