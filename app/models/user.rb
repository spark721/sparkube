class User < ApplicationRecord

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  before_validation :ensure_session_token

  # s p i r e

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil unless @user
    @user.is_password?(password) ? @user : nil
  end

  # let's try some shit
  # check username first
  # if a user exist with the username, return true
  # if no user exist with the username, return false

  # def self.is_valid_username?(username)
  #   @user = User.find_by(username: username)
  #   return nil unless @user
  # end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    hashed = BCrypt::Password.new(self.password_digest)
    hashed.is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
