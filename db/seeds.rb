# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


cuisine_breakfast = Cuisine.create!(name: 'Breakfast', logo: '4')
cuisine_salads = Cuisine.create!(name: 'Salads', logo: '5')
cuisine_mexican = Cuisine.create!(name: 'Mexican', logo: '8')
cuisine_hamburger = Cuisine.create!(name: 'Hamburger', logo: 'A')
cuisine_coffee = Cuisine.create!(name: 'Coffee', logo: 'B')
cuisine_asian = Cuisine.create!(name: 'Asian', logo: 'D')
cuisine_other = Cuisine.create!(name: 'Other', logo: 'F')
cuisine_vegeterian = Cuisine.create!(name: 'Vegeterian', logo: 'H')
cuisine_sushi = Cuisine.create!(name: 'Sushi', logo: 'I')
cuisine_pizza = Cuisine.create!(name: 'Pizza', logo: 'L')

rest_aroma = Restaurant.create!(
    name: 'Aroma',
    max_delivery_time: 10,
    cuisine_id: cuisine_coffee.id,
    address: 'Ibn Gavirol',
    tenbis: true
)

rest_herzog = Restaurant.create!(
    name: 'Herzog',
    max_delivery_time: 30,
    cuisine_id: cuisine_vegeterian.id,
    address: 'Ibn Gavirol',
    tenbis: true
)

Restaurant.create!(
    name: 'HaSushia',
    max_delivery_time: 40,
    cuisine_id: cuisine_sushi.id,
    address: 'Ibn Gavirol',
    tenbis: true
)

Restaurant.create!(
    name: 'Joya',
    max_delivery_time: 50,
    cuisine_id: cuisine_pizza.id,
    address: 'Ibn Gavirol',
    tenbis: false
)

Review.create!(
    reviewer_name: 'Avishai',
    restaurant: rest_aroma,
    rating: 2,
    comment: "nice..."
)

Review.create!(
    reviewer_name: 'Rona',
    restaurant: rest_herzog,
    rating: 3,
    comment: "great!"
)





