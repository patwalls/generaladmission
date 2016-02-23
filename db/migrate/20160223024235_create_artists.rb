class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.text :photo, null: false
      t.text :genre, null: false
      t.text :description
      t.integer :songkick_id

      t.timestamps null: false
    end
  end
end
