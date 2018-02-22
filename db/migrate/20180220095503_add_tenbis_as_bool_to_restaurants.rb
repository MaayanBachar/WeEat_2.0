class AddTenbisAsBoolToRestaurants < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :tenbis, :boolean
  end
end
