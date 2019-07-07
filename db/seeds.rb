# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# - = - = - = - = - = - = - = - = - = -
# 
# video_local = Video.new(
#   title: 'Mapo Tofu receipe',
#   description: 'Description for Mapo Tofu receipe',
#   author_id: 8
#   )
  
#   video_local.save!
#   v6 = Video.last
#   file = File.open('app/assets/videos/mapo_tofu.mp4')
#   v6.video_url.attach(io: file, filename: 'mapo_tofu.mp4')
  
# v1 = Video.new(
#   title: 'test-video-1',
#   description: 'test-video-1',
#   author_id: 9
#   )
    
#   v1.save!
#   v6 = Video.last
#   file = File.open('app/assets/videos/test_video_1.mp4')
#   v6.video_url.attach(io: file, filename: 'test_video_1.mp4')
  

ActiveRecord::Base.transaction do

  User.delete_all

  User.create(username: 'Altoids', password: 'peppermint', email: 'strong@mints')
  User.create(username: 'test-author-1', password: 'author1', email: 'a1@email')
  User.create(username: 'test-author-2', password: 'author2', email: 'a2@email')
  User.create(username: 'test-author-3', password: 'author3', email: 'a3@email')

  Video.delete_all
  Video.destroy_all
  Video.create(title: 'test_video_01_title', description: 'test_video_01_description', author_id: 1)
  
  file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/test_video/test_video_01.mp4")
  video = Video.first
  video.video_url.attach(io: file, filename: "test_video_01.mp4")
  video.save!

end

