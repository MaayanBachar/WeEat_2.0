json.extract! restaurant, :id, :name, :cuisine, :rating, :tenbis, :address, :max_delivery_time, :image_url, :created_at, :updated_at
json.url restaurant_url(restaurant, format: :json)
