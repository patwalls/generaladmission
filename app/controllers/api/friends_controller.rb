class Api::FriendsController < ApplicationController
  def create
    @friend = Friend.new(friend_params)

    if @friend.save
      render :show
    else
      render json: @friend.errors.full_messages, status: 422
    end
  end

  def destroy
    @friend = Friend.find(params[:id])
    @friend.destroy
    render :show
  end

  def index
    @friend = Friend.includes(:user).where('user_id = ?', params[:user_id])
  end

  private

  def friend_params
    params.require(:friend).permit(:id, :user_id, :friend_id)
  end
end
