# == Schema Information
#
# Table name: restaurants
#
#  id                :integer          not null, primary key
#  name              :string
#  address           :string
#  max_delivery_time :integer
#  image_url         :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  tenbis            :boolean
#  cuisine_id        :integer
#

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
