class ApplicationController < ActionController::Base
  skip_before_filter :verify_authenticity_token, :only => [:update]
  protect_from_forgery with: :exception

  # Expose these methods to the views
  helper_method :current_user, :signed_in?, :current_user_id

  private
  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.reset_token!
  end

  def sign_out
    current_user.try(:reset_token!)
    session[:session_token] = nil
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end
end
