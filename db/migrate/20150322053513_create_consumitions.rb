class CreateConsumitions < ActiveRecord::Migration
  def change
    create_table :consumitions do |t|
      t.datetime "consumition_time"
      t.integer "consumition_value"      
      t.datetime "created_at"
      t.datetime "updated_at"
      t.timestamps
    end
  end
end
