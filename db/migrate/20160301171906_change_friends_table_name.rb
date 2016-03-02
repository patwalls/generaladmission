class ChangeFriendsTableName < ActiveRecord::Migration
  def change
    rename_table :friends, :followers
  end
end
