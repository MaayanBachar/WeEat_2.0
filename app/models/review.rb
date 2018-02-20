# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  restaurant_id :integer
#  reviewer_name :string
#  rating        :integer
#  comment       :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord
  belongs_to :restaurant

  # change (added)
  validates :reviewer_name, :presence => true
  validates :rating, :presence => true
  validates :comment, :presence => true



end
