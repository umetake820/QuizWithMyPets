class CategoriesController < ApplicationController
  def show
    category = Category.find(params[:id])
    gon.quizzes = category.quizzes.sample(5)
    gon.images = Image.includes(:user).sample(5)
  end
end
