class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.followee_id = current_user.id
    @follow.follower_id = params[:uid]

    if @follow.save
      @user = User.find(params[:uid])
      render "api/users/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    followee = current_user.id
    @user = User.find(params[:uid])
    @follow = Follow.where(followee_id: followee, follower_id: @user.id)
    if @follow && @follow.destroy
      render "api/users/show"
    else
      render json: ['Couldn\'t destroy follow'], status: 422
    end

  end

end
