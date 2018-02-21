class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :edit, :update, :destroy]

  # GET /reviews
  # GET /reviews.json
  def index
    restaurant = Restaurant.find(params[:restaurant_id])
    @reviews = restaurant.reviews

    respond_to do |format|
      format.html #index.html.erb
    end

  end

  # GET /reviews/1
  # GET /reviews/1.json
  def show
    restaurant = Restaurant.find(params[:restaurant_id])

    @review = restaurant.reviews.find(params[:id])

    respond_to do |format|
      format.html #show.html.erb
    end

  end

  # GET /reviews/new
  def new
    restaurant = Restaurant.find(params[:restaurant_id])

    @review = restaurant.reviews.build

    respond_to do |format|
      format.html #new.html.erb
    end

  end

  # GET /reviews/1/edit
  def edit
    restaurant = Restaurant.find(params[:restaurant_id])
    @review = restaurant.reviews.find(params[:id])

  end

  # POST /reviews
  # POST /reviews.json
  def create
    restaurant = Restaurant.find(params[:restaurant_id])
    params.permit!
    @review = restaurant.reviews.create(params[:review])

    respond_to do |format|
      if @review.save
        format.html { redirect_to([@review.restaurant, @review], notice: 'Review was successfully created.')}
        format.json { render :show, status: :created, location: @review }
      else
        format.html { render :action => "new" }
        format.json { render json: @review.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /reviews/1
  # PATCH/PUT /reviews/1.json
  def update
    restaurant = Restaurant.find(params[:restaurant_id])
    @review = restaurant.reviews.find(params[:id])

    respond_to do |format|
      if @review.update(review_params)
        format.html { redirect_to([@review.restaurant, @review], notice: 'Review was successfully updated.')}
        format.json { render :show, status: :ok, location: @review }
      else
        format.html { render :action => "edit" }
        format.json { render json: @review.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reviews/1
  # DELETE /reviews/1.json
  def destroy
    restaurant = Restaurant.find(params[:restaurant_id])
    @review = restaurant.reviews.find(params[:id])
    @review.destroy

    respond_to do |format|
      format.html { redirect_to(restaurant_reviews_url) }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def review_params
      params.require(:review).permit(:restaurant_id, :reviewer_name, :rating, :comment)
    end
end
