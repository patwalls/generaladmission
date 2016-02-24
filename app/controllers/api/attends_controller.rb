class Api::AttendsController < ApplicationController
  def create
    @attend = Attend.new(attend_params)

    if @attend.save
      render :show
    else
      render json: @attend.errors.full_messages, status: 422
    end
  end

  def destroy
    @attend = Attend.find(params[:id])
    @attend.destroy
    render :show
  end

  def index
    @attend = Attend.where('artist_id = ?', params[:artist_id])
  end

  def show
    @attend = Attend.find(params[:id])
  end

  private

  def attend_params
    params.require(:attend).permit(:review, :rating, :photo, :date, :user_id, :artist_id, :venue_id)
  end
end
