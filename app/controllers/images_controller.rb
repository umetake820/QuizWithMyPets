class ImagesController < ApplicationController

  def create
    Image.create(image_params)
    redirect_to user_path(current_user.id)
  end

  private
  def image_params
    params.require(:image).permit(:photo).merge(user_id: current_user.id)
  end
end
