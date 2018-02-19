class Restaurant < ApplicationRecord
  # Validates that the text fields all contain something
  validates :name, :cuisine, :rating, presence: true
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

end
