Rails.application.routes.draw do
  devise_for :users
  root to: "quizzes#index"
  resources :quizzes
  resources :categories, only: [:new, :create, :show]
  resources :images
  resources :users
end
