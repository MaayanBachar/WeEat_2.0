Rails.application.routes.draw do

  resources :cuisines
  # change (wasn't comment)
  # resources :reviews
  # resources :restaurants

  #root 'pages#index' change
  root 'restaurants#index', as: 'restaurant_index'

  # changed added:
  resources :restaurants do
    resources :reviews
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
