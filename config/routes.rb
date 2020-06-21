Rails.application.routes.draw do
  devise_for :users
  root to: "quizzes#index"
  resources :quizzes
  resources :categories, only: :show
  resources :images
  resources :users
end
