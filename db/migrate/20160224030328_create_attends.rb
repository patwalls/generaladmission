class CreateAttends < ActiveRecord::Migration
  def change
    create_table :attends do |t|
      t.text :review
      t.integer :rating, null: false
      t.text :photo
      t.date :date, null: false
      t.integer :user_id, null: false
      t.integer :artist_id, null: false
      t.integer :venue_id, null: false

      t.timestamps null: false
    end
    add_index :attends, :rating
    add_index :attends, :user_id
    add_index :attends, :artist_id
    add_index :attends, :venue_id
  end
end
