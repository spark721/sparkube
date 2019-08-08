class Comment < ApplicationRecord

  validates :body, presence: true

  belongs_to :user,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :video,
    foreign_key: :video_id,
    class_name: 'Video'

end
