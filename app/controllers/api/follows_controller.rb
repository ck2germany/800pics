class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.followee_id = params[:id]
    @follow.follower_id = current_user.id

    if @follow.save
      render "api/users/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])

    if @follow.destroy
      render "api/users/show"
    else
      render json: ['Couldn\'t destroy follow'], status: 422
    end

  end
end
