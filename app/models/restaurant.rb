# == Schema Information
#
# Table name: restaurants
#
#  id                :integer          not null, primary key
#  name              :string
#  address           :string
#  max_delivery_time :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  tenbis            :boolean
#  cuisine_id        :integer
#

class Restaurant < ApplicationRecord

  # A restaurant has many associated reviews.
  # Each review contains a reference to its restaurant's ID
  # The existence of reviews is dependent on the existence of the restaurant.
  has_many :reviews
  belongs_to :cuisine

  # Validates that the text fields all contain something
  validates_presence_of :name,
                        :cuisine,
                        :tenbis,
                        :address,
                        :max_delivery_time

  # Validates that the maximum delivery time is between 0-100 minutes.
  validates :max_delivery_time, numericality: {greater_than_or_equal_to: 0}

  # Validates image format
  # validates :image_url, allow_blank: true, format: {
  #     with: %r{\.(gif|jpg|png)\Z}i,
  #     message: 'must be a URL for GIF, JPG or PNG image.'
  # }

  def get_rating
    reviews.size == 0 ? "-" : reviews.average(:rating).round
  end
end
