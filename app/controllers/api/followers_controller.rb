class Api::FollowersController < ApplicationController
  def create
    @follower = Follower.new(follower_params)

    if @follower.save
      render :show
    else
      render json: @follower.errors.full_messages, status: 422
    end
  end

  def destroy
    @follower = Follower.find(params[:id])
    @follower.destroy
    render :show
  end

  def index
    @followers = Follower.includes(:follower_user).where('follower_id = ?', params[:follower_id])
  end

  private

  def follower_params
    params.require(:follower).permit(:id, :user_id, :follower_id)
  end
end
