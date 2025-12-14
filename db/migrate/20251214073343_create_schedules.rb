class CreateSchedules < ActiveRecord::Migration[7.2]
  def change
    create_table :schedules do |t|
      t.string :title, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.boolean :all_day, null: false, default: false
      t.text :memo

      t.timestamps
    end
  end
end
