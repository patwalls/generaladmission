class Api::ArtistsController < ApplicationController
  def create
    @artist = Artist.new(artist_params)

    if @artist.save
      render :show
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def destroy
    @artist = Artist.find(params[:id])
    @artist.destroy
    render :show
  end

  def index
    @artist = Artist.find_by_songkick_id(params[:songkick_id])
  end

  def show
    @artist = Artist.find(params[:id])
  end

  private

  def artist_params
    params.require(:artist).permit(:id, :name, :photo, :genre, :description, :songkick_id)
  end
end
