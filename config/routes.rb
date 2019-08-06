Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :show, :create, :update, :destroy] do
      resources :likes, only: [:create, :index]
      delete '/likes', to: 'likes#destroy'
      resources :dislikes, only: [:create, :index]
      delete '/dislikes', to: 'dislikes#destroy'
      resources :comments, only: [:create]
    end
    resources :comments, only: [:destroy]
    # resources :likes, only: [:destroy]
    # resources :dislikes, only: [:destroy]
  end
  
end
