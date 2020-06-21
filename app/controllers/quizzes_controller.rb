class QuizzesController < ApplicationController

  def index
  end

  def new
    @quiz = Quiz.new
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