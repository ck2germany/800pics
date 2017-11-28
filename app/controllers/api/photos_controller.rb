class Api::PhotosController < ApplicationController

  def index
    # have to decide to split indexes here or use selector in frontend
    # I want either a specific users id and all photos, or all photos period
    # for now, just returning all photos
    @photos = Photo.all
  end

  def show
    @photo = Photo.find_by(id: params[:id])
    if @photo
      render "api/photos/show"
    else
      render json: ["Couldn't find photo"], status: 422
    end
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find_by(id: params[:id])
    if @photo.update_attributes(photo_edit_params)
      render "api/photos/show"
    else
      render json: @photo.erros.full_messages, status: 422
    end

  end

  def delete
    @photo = Photo.find_by(id: params[:id])
    if @photo
      @photo.destroy
      render "api/photos/show"
    else
      render json: ['Photo was not found, ergo not deleted']
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :description, :img_url)
  end

  def photo_edit_params
    params.require(:photo).permit(:title, :description)
  end
end
