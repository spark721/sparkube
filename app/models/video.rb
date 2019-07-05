class Video < ApplicationRecord
  has_one_attached :video

  validates :title, :description, :author_id, presence: true
  validates :title, uniqueness: true

  belongs_to :user,
    foreign_key: :author_id,
    class_name: 'User'

end
