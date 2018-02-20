class DeleteRatingFromRestaurants < ActiveRecord::Migration[5.1]
  def change
    remove_column :restaurants, :rating
  end
end
