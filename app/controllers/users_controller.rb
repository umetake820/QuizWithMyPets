class UsersController < ApplicationController
  def show
    @image = Image.new
    @nickname = current_user.nickname
    @images = current_user.images.order("created_at DESC")
  end
end
