class AddColumnsToAttends < ActiveRecord::Migration
  def change
    add_column :attends, :venue_songkick_id, :integer
    add_index :attends, :venue_songkick_id
    add_column :attends, :venue_name, :string
    add_column :attends, :venue_city, :string
  end
end
