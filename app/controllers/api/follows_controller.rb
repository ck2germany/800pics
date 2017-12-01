class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.followee_id = params[:puId]
    @follow.follower_id = current_user.id

    if @follow.save
      @user = User.find(params[:puId])
      render "api/users/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
  
    @follower = User.find(current_user.id)
    @user = User.find(params[:id])

    @follow = Follow.find_by(followee_id: @user.id, follower_id: @follower.id)

    if @follow && @follow.destroy
      render "api/users/show"
    else
      render json: ['Couldn\'t destroy follow'], status: 422
    end

  end

end
