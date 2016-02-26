Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :artists, only: [:index, :show, :create]
    resources :attends, only: [:index, :show, :create, :edit, :destroy]
    resources :users, only: [:index, :show]
    resources :friends, only: [:index, :create, :destroy]
  end

  root to: "static_pages#root"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
end
