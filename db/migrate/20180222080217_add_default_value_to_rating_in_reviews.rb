class AddDefaultValueToRatingInReviews < ActiveRecord::Migration[5.1]
  def change
    change_column_default :reviews, :rating, default: 3
  end
end
