class AddIndexesToReviews < ActiveRecord::Migration[5.1]
  def change
    add_index :reviews, :rating
  end
end
