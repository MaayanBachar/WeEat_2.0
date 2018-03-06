FactoryBot.define do
  factory :cuisine do
    name {Faker::Food.dish}
    # association :restaurant, factory: :restaurant
  end
end



