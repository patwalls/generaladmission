class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many(
    :attends,
    class_name: "Attend",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :friends,
    class_name: "Friend",
    foreign_key: :friend_id,
    primary_key: :id
  )

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def shows
    self.attends.length
  end

  def unique_shows
    unique_shows = []
    self.attends.each do |attend|
      if unique_shows.include?(attend.artist_id) == false
        unique_shows << attend.artist_id
      end
    end
    unique_shows.length
  end

  def friends_amt
    self.friends.length
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
