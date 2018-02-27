class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :cuisine, :max_delivery_time, :tenbis, :get_rating
end
