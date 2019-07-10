# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# - = - = - = - = - = - = - = - = - = -

ActiveRecord::Base.transaction do

  # User seeding
  User.delete_all

  (1..6).each do |n|
    User.create(username: "test-author-#{n}", password: "author#{n}", email: "a#{n}@email")
  end

  # demo user
  User.create(username: 'Altoids', password: 'peppermint', email: 'strong@mints') # 7

  
  
  # Video seeding
  Video.delete_all
  
  (1..6).each do |n|
    video_obj = Video.create(title: "test_video_0#{n}_title", description: "test_video_0#{n}_description", author_id: n)
    video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/test_video/test_video_0#{n}.mp4")
    poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/test_video_0#{n}.png")
    # video_obj = Video.last
    video_obj.video_url.attach(io: video, filename: "test_video_0#{n}.mp4")
    video_obj.poster.attach(io: poster, filename: "test_video_0#{n}.png")
    video_obj.save!
  end

end





  
  # User.create(username: "BigBang OFFICIAL", password: "BigBang", email: "BigBang@email") # 8
  # User.create(username: "BlackPink OFFICIAL", password: "BlackPink", email: "BlackPink@email") # 9
  # User.create(username: "BTS OFFICIAL", password: "BTSpass", email: "BTS@email") # 10
  # User.create(username: "EXID OFFICIAL", password: "EXIDpass", email: "EXID@email") # 11
  # User.create(username: "IU OFFICIAL", password: "IUpass", email: "IU@email") # 12
  # User.create(username: "Iz*One OFFICIAL", password: "IzOnepass", email: "IzOne@email") # 13
  # User.create(username: "K/DA OFFICIAL", password: "K/DApass", email: "K/DA@email") # 14
  
  # Video.create(title: "BIGBANG - LOSER M/V", description: "#빅뱅 #loser", author_id: 8)
  # file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/bigbang-loser.mp4")
  # video = Video.last
  # video.video_url.attach(io: file, filename: "bigbang-loser.mp4")
  # video.save!

  # Video.create(title: "BLACKPINK - '붐바야'(BOOMBAYAH) M/V", description: "#블랙핑크 #붐바야", author_id: 8)
  # file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/blackpink-boombaya.mp4")
  # video = Video.last
  # video.video_url.attach(io: file, filename: "blackpink-boombaya.mp4")
  # video.save!

  # Video.create(title: "BTS (방탄소년단) 'IDOL' Official MV", description: "#bts #idol", author_id: 10)
  # file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/bts-idol.mp4")
  # video = Video.last
  # video.video_url.attach(io: file, filename: "bts-idol.mp4")
  # video.save!

  # Video.create(title: "[EXID] 덜덜덜(DDD) (Official Music Video)", description: "#exid #ddd", author_id: 11)
  # file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/exid-ddd.mp4")
  # video = Video.last
  # video.video_url.attach(io: file, filename: "exid-ddd.mp4")
  # video.save!

  # Video.create(title: "IZ*ONE (아이즈원) - 비올레타 (Violeta) MV", description: "#izone #violeta", author_id: 13)
  # file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/iz_one-violeta.mp4")
  # video = Video.last
  # video.video_url.attach(io: file, filename: "iz_one-violeta.mp4")
  # video.save!
  


