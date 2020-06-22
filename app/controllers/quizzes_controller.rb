class QuizzesController < ApplicationController

  def index
  end

  def new
    if current_user.id == 1
      @quiz = Quiz.new
    else
      redirect_to root_path
    end
  end

  def create
    Quiz.create(quiz_params)
  end

  def show
    gon.quizzes = Quiz.includes(:user).sample(5)
    gon.images = Image.includes(:user).sample(5)
  end

  private
  def quiz_params
    params.require(:quiz).permit(:text, :correct, :uncorrect1, :uncorrect2, :uncorrect3, :category_id).merge(user_id: current_user.id)
  end

end