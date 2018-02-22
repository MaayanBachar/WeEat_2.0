class ChangeColumnsInReviewsCantBeNull < ActiveRecord::Migration[5.1]
  def change
    change_column_null(:reviews, :rating, false)
    change_column_null(:reviews, :restaurant_id, false)
    change_column_null(:reviews, :comment, false)
  end
end
