class AddCuisineIdToRestaurants < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :cuisine_id, :bigint
  end
end
