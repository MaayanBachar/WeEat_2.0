class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :cuisine
      t.integer :rating, limit: 1
      t.integer :tenbis, limit: 1
      t.string :address
      t.integer :max_delivery_time, limit: 2
      t.string :image_url

      t.timestamps
    end
  end
end
