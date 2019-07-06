# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.delete_all

# demo = User.new(
#   username: 'Altoids',
#   password: 'peppermint',
#   email: 'strong@mints'
# )

# demo.save!



v4 = Video.find(4)
file = File.open('app/assets/videos/test_video_4.mp4')
v4.video_url.attach(io: file, filename: 'test_video_4.mp4')

v5 = Video.find(5)
file = File.open('app/assets/videos/test_video_5.mp4')
v5.video_url.attach(io: file, filename: 'test_video_5.mp4')

v6 = Video.find(6)
file = File.open('app/assets/videos/test_video_6.mp4')
v6.video_url.attach(io: file, filename: 'test_video_6.mp4')
