class ChangeTenbisTypeInRestaurants < ActiveRecord::Migration[5.1]
  def change
    remove_column :restaurants, :tenbis
  end

  # def self.down
  #   change_column :restaurants, :tenbis, :integer
  # end

end
