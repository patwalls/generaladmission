class ChangeFollowersColumnName < ActiveRecord::Migration
  def change
    rename_column :followers, :friend_id, :follower_id
  end
end
