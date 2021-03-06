class User < ApplicationRecord

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  before_validation :ensure_session_token

  has_many :videos,
    foreign_key: :author_id,
    class_name: 'Video'

  has_many :likes,
    foreign_key: :user_id,
    class_name: 'Like'

  has_many :dislikes,
    foreign_key: :user_id,
    class_name: 'Dislike'

  has_many :liked_videos,
    through: :likes,
    source: :video

  has_many :comments,
    foreign_key: :author_id,
    class_name: 'Comment'
  
  
  # s p i r e

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil unless @user
    @user.is_password?(password) ? @user : nil
  end

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
