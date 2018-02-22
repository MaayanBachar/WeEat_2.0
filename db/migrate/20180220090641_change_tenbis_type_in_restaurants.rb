class ChangeTenbisTypeInRestaurants < ActiveRecord::Migration[5.1]
  def change
    remove_column :restaurants, :tenbis
  end
end
