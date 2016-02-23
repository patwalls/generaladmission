Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :artists, only: [:index, :show, :create, :destroy, :update]
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
end
