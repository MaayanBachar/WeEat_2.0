class ChangeColumnsInRestaurantsCantBeNull < ActiveRecord::Migration[5.1]
  def change
    change_column_null(:restaurants, :name, false)
    change_column_null(:restaurants, :address, false)
    change_column_null(:restaurants, :tenbis, false)
  end
end
