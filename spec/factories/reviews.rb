FactoryBot.define do
  factory :review do
    reviewer_name { Faker::Name.name }
    rating { Faker::Number.between(0, 3) }
    comment { Faker::ChuckNorris.fact }

    association :restaurant, factory: :restaurant
  end

  trait 'review1' do
    rating 1
  end

  trait 'review2' do
    rating 2
  end

  trait 'review3' do
    rating 3
  end
end

