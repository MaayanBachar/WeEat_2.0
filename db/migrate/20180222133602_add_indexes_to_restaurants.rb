class AddIndexesToRestaurants < ActiveRecord::Migration[5.1]
  def change
    add_index :restaurants, :max_delivery_time
    add_index :restaurants, :tenbis
    add_index :restaurants, :cuisine_id
  end
end
