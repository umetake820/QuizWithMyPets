class CategoriesController < ApplicationController

  def new
    if current_user.id == 1
      @category = Category.new
    else
      redirect_to root_path
    end
  end

  def create
    Category.create(category_params)
  end

  def show
    category = Category.find(params[:id])
    gon.quizzes = category.quizzes.sample(5)
    gon.images = Image.includes(:user).sample(5)
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end
end
