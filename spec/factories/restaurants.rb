class RestaurantFactory
  FactoryBot.define do
    factory :restaurant do
      name { Faker::Name.name }
      address { Faker::Address.street_address }
      max_delivery_time { Faker::Number.between(5, 120) }
      tenbis { Faker::Boolean.boolean }

      association :cuisine, factory: :cuisine

    end
  end
end