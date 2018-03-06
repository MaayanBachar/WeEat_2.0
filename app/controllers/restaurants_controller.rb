class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:show, :edit, :update, :destroy]

  # GET /restaurants
  # GET /restaurants.json
  def index
     @restaurants = Restaurant.order(:name)
     render json: @restaurants, each_serializer: RestaurantSerializer
  end

  # GET /restaurants/1
  # GET /restaurants/1.json
  def show; end

  # GET /restaurants/new
  def new
    @restaurant = Restaurant.new
  end

  # GET /restaurants/1/edit
  def edit; end

  # POST /restaurants
  # POST /restaurants.json
  def create
    Rails.logger.info restaurant_params
    cuisine = Cuisine.find(restaurant_params[:cuisine])
    updated_restaurant_params = restaurant_params
    updated_restaurant_params[:cuisine] = cuisine
    @restaurant = Restaurant.new(updated_restaurant_params)
    Rails.logger.info "Created new restaurant"

    respond_to do |format|
      if @restaurant.save
        Rails.logger.info "Saved restaurant"
        format.html { redirect_to @restaurant, notice: 'Restaurant was successfully created.' }
        format.json { render :show, status: :created, location: @restaurant }
      else
        Rails.logger.info "Didn't save restaurant"
        Rails.logger.info @restaurant.errors
        format.html { render :new }
        format.json { render json: @restaurant.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /restaurants/1
  # PATCH/PUT /restaurants/1.json
  def update
    respond_to do |format|
      if @restaurant.update(restaurant_params)
        format.html { redirect_to @restaurant, notice: 'Restaurant was successfully updated.' }
        format.json { render :show, status: :ok, location: @restaurant }
      else
        format.html { render :edit }
        format.json { render json: @restaurant.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /restaurants/1
  # DELETE /restaurants/1.json
  def destroy
    @restaurant.destroy
    respond_to do |format|
      format.html { redirect_to restaurants_url, notice: 'Restaurant was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = Restaurant.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def restaurant_params
      params.require(:restaurant).permit(:name, :cuisine, :tenbis, :address, :max_delivery_time)
    end
end
