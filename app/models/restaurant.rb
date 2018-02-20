# == Schema Information
#
# Table name: restaurants
#
#  id                :integer          not null, primary key
#  name              :string
#  cuisine           :string
#  address           :string
#  max_delivery_time :integer
#  image_url         :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  tenbis            :boolean
#

class Restaurant < ApplicationRecord

  # A restaurant has many associated reviews.
  # Each review contains a reference to its restaurant's ID
  # The existence of reviews is dependent on the existence of the restaurant.
  # has_many :reviews, dependent:  :destroy can be deleted
  has_many :reviews

  # Validates that the text fields all contain something
  validates :name, :cuisine, presence: true
  validates :tenbis, :address, :max_delivery_time, presence: true

  # Validates that the rating is between 0-3
  validates :rating, numericality: {greater_than_or_equal_to: 0}
  validates :rating, numericality: {less_than_or_equal_to: 3}

  # Validates that the maximum delivery time is between 0-100 minutes.
  validates :max_delivery_time, numericality: {greater_than_or_equal_to: 0}
  validates :rating, numericality: {less_than_or_equal_to: 100}

  # Make sure there are no duplicates in rastaurant names
  #validates :name, uniqueness: true

  # Validates image format
  validates :image_url, allow_blank: true, format: {
      with: %r{\.(gif|jpg|png)\Z}i,
      message: 'must be a URL for GIF, JPG or PNG image.'
  }


  def get_rating
    num_of_reviews = 0
    total_rating = 0

    if reviews.present?
      reviews.each do |review|
        total_rating += review.rating
        num_of_reviews += 1
      end
      total_rating / num_of_reviews
    else
      0
    end



  end




end
