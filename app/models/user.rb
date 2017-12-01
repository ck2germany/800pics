# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  profile_img_url :string           default("http://res.cloudinary.com/studio-27/image/upload/c_scale,w_32/v1511981034/landscapes/leaf.png")
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :profile_img_url, presence: true
  after_initialize :ensure_session_token

  has_many :photos,
  foreign_key: :user_id,
  primary_key: :id,
  class_name: :Photo

  has_many :followed_users,
  foreign_key: :follower_id,
  primary_key: :id,
  class_name: :Follow

  has_many :following_users,
  foreign_key: :followee_id,
  primary_key: :id,
  class_name: :Follow

  has_many :followers,
  through: :following_users,
  source: :followed_user

  has_many :idols,
  through: :followed_users,
  source: :following_user







  attr_reader :password

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_valid?(pw)
    passhash = BCrypt::Password.new(self.password_digest)
    passhash.is_password?(pw)
  end

  def self.find_by_credentials(username, pw)
    user = User.find_by(username: username)
    return nil unless user
    user.is_valid?(pw) ? user : nil
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.base64
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end


end
