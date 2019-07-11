class Video < ApplicationRecord

  has_one_attached :video_url
  has_one_attached :poster

  validates :title, :description, :author_id, presence: true
  validates :title, uniqueness: true

  belongs_to :user,
    foreign_key: :author_id,
    class_name: 'User'

  has_many :likes,
    foreign_key: :video_id,
    class_name: 'Like'

  has_many :dislikes,
    foreign_key: :video_id,
    class_name: 'Dislike'

  # has_many :liked_users,
  #   through: :likes,
  #   source: :user

  # has_many :disliked_users,
  #   through: :dislikes,
  #   source: :user

end
