Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resources :friends, only: [:destroy, :index, :create]
    resources :bills
    resources :comments, only: [:index, :show, :create, :destroy]
    resource :session, only: [:create, :destroy, :show]
    
end 

root to: 'static_pages#root'
end
