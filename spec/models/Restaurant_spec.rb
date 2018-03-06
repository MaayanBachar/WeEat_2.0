require 'rails_helper'

RSpec.describe Restaurant, type: :model do

  # before(:each) do
  #   valid_restaurant = FactoryBot.build(:restaurant)
  # end

  describe 'validations' do
    it {is_expected.to validate_presence_of :name}

    context 'when all validations pass' do
      let(:valid_restaurant) {FactoryBot.build(:restaurant)}
      let(:valid_restaurant_tenbis) {FactoryBot.build(:restaurant, tenbis: false)}

      it 'should pass validations' do
        expect(valid_restaurant.valid?).to be_truthy
        expect(valid_restaurant_tenbis.valid?).to be_truthy
        expect(valid_restaurant.get_rating).to be -1
      end
    end

    context 'when all validations raise error' do
      let(:invalid_restaurant_name) {FactoryBot.build(:restaurant, name: '')}
      let(:invalid_restaurant_address) {FactoryBot.build(:restaurant, address: '')}
      let(:invalid_restaurant_delivery) {FactoryBot.build(:restaurant, max_delivery_time: '')}
      let(:invalid_restaurant_tenbis) {FactoryBot.build(:restaurant, tenbis: '')}
      let(:invalid_restaurant_negative_delivery) {FactoryBot.build(:restaurant, max_delivery_time: -1)}
      let(:invalid_restaurant_cuisine) {FactoryBot.build(:restaurant, cuisine: nil)}


      it 'should not pass validations' do
        expect(invalid_restaurant_name.valid?).to be_falsey
        expect(invalid_restaurant_address.valid?).to be_falsey
        expect(invalid_restaurant_delivery.valid?).to be_falsey
        expect(invalid_restaurant_tenbis.valid?).to be_falsey
        expect(invalid_restaurant_negative_delivery.valid?).to be_falsey
        expect(invalid_restaurant_cuisine.valid?).to be_falsey
        # puts invalid_restaurant2.reviews.count
      end
    end
  end

  describe 'functionality' do
    context 'when all functionality tests pass' do
      let!(:valid_restaurant_with_reviews1) {FactoryBot.build(:restaurant)}
      let!(:valid_restaurant_with_reviews2) {FactoryBot.build(:restaurant)}
      let!(:valid_restaurant_with_reviews3) {FactoryBot.build(:restaurant)}

      let!(:review11) {FactoryBot.create(:review, :review1, restaurant: valid_restaurant_with_reviews1)}
      let!(:review22) {FactoryBot.create(:review, :review1, restaurant: valid_restaurant_with_reviews1)}
      let!(:review33) {FactoryBot.create(:review, :review2, restaurant: valid_restaurant_with_reviews1)}

      it 'should pass functionality tests and be 1' do
        expect(valid_restaurant_with_reviews1.get_rating).to eq(1)
      end

      let!(:review4) {FactoryBot.create(:review, :review1, restaurant: valid_restaurant_with_reviews2)}
      let!(:review5) {FactoryBot.create(:review, :review2, restaurant: valid_restaurant_with_reviews2)}

      it 'should pass functionality tests and be 2' do
        expect(valid_restaurant_with_reviews2.get_rating).to eq(2)
      end

      let!(:review6) {FactoryBot.create(:review, :review2, restaurant: valid_restaurant_with_reviews3)}

      it 'should pass functionality tests and be 3' do
        expect(valid_restaurant_with_reviews3.get_rating).to eq(2)
      end
    end
  end
end