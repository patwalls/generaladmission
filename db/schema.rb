# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160303174358) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "photo",       null: false
    t.text     "genre",       null: false
    t.text     "description"
    t.integer  "songkick_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "attends", force: :cascade do |t|
    t.text     "review"
    t.integer  "rating",            null: false
    t.text     "photo"
    t.date     "date_attended",     null: false
    t.integer  "user_id",           null: false
    t.integer  "artist_id",         null: false
    t.integer  "venue_id",          null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.integer  "venue_songkick_id"
    t.string   "venue_name"
    t.string   "venue_city"
  end

  add_index "attends", ["artist_id"], name: "index_attends_on_artist_id", using: :btree
  add_index "attends", ["rating"], name: "index_attends_on_rating", using: :btree
  add_index "attends", ["user_id"], name: "index_attends_on_user_id", using: :btree
  add_index "attends", ["venue_id"], name: "index_attends_on_venue_id", using: :btree
  add_index "attends", ["venue_songkick_id"], name: "index_attends_on_venue_songkick_id", using: :btree

  create_table "followers", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "follower_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "followers", ["follower_id"], name: "index_followers_on_follower_id", using: :btree
  add_index "followers", ["user_id"], name: "index_followers_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "name"
    t.text     "photo"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
