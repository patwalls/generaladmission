class ChangeDateColumnName < ActiveRecord::Migration
  def change
    rename_column :attends, :date, :date_attended
  end
end
