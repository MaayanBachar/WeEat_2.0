class RemoveImageColumnFromRestaurants < ActiveRecord::Migration[5.1]
  def change
    remove_column :restaurants, :image_url
  end
end
