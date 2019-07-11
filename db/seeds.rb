# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# - = - = - = - = - = - = - = - = - = -

ActiveRecord::Base.transaction do

  ### User seeding
  User.destroy_all

  (1..6).each do |n|
    User.create(username: "test-author-#{n}", password: "author#{n}", email: "a#{n}@email")
  end

  # demo user
  User.create(username: 'Altoids', password: 'peppermint', email: 'strong@mints') # 7
  
  # aa official
  User.create(username: 'App Academy Official', password: 'b!gEye76', email: 'aa@aa.io') # 8
  
  # - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -
  ### Video seeding
  Video.destroy_all

  
  (1..6).each do |n|
    video_obj = Video.create(title: "test_video_0#{n}", description: "test_video_0#{n}_description", author_id: n)
    video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/test_video/test_video_0#{n}.mp4")
    poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/test_video_0#{n}.png")
    video_obj.video_url.attach(io: video, filename: "test_video_0#{n}.mp4")
    video_obj.poster.attach(io: poster, filename: "test_video_0#{n}.png")
  end

  video_obj = Video.create(title: "App Academy - Anyone Can Be A Software Engineer", description: "We want to inspire you to change your life through code. Four graduates talk about their experience at App Academy, from where they were before the program to where they are now.", author_id: 8)
  file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/etc/aa-anyone.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/aa-anyone.png")
  video_obj.video_url.attach(io: video, filename: "aa-anyone.mp4")
  video_obj.poster.attach(io: poster, filename: "aa-anyone.png")
  
  video_obj = Video.create(title: "App Academy - Who We Are", description: "Hear from App Academy teachers, students, grads and more about who App Academy is and what you'll learn through the 12-week immersive program.", author_id: 8)
  file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/etc/aa-who_we_are.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/aa-who_we_are.png")
  video_obj.video_url.attach(io: video, filename: "aa-who_we_are.mp4")
  video_obj.poster.attach(io: poster, filename: "aa-who_we_are.png")

  video_obj = Video.create(title: "Explore Coding", description: "Apply to App Academy now!", author_id: 8)
  file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/etc/aa-explore_coding.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/aa-explore_coding.png")
  video_obj.video_url.attach(io: video, filename: "aa-explore_coding.mp4")
  video_obj.poster.attach(io: poster, filename: "aa-explore_coding.png")

end





  
  # User.create(username: "BigBang OFFICIAL", password: "BigBang", email: "BigBang@email") # 8
  # User.create(username: "BlackPink OFFICIAL", password: "BlackPink", email: "BlackPink@email") # 9
  # User.create(username: "BTS OFFICIAL", password: "BTSpass", email: "BTS@email") # 10
  # User.create(username: "EXID OFFICIAL", password: "EXIDpass", email: "EXID@email") # 11
  # User.create(username: "IU OFFICIAL", password: "IUpass", email: "IU@email") # 12
  # User.create(username: "Iz*One OFFICIAL", password: "IzOnepass", email: "IzOne@email") # 13
  # User.create(username: "K/DA OFFICIAL", password: "K/DApass", email: "K/DA@email") # 14
  

  # video_obj = Video.create(title: "BIGBANG - LOSER M/V", description: "#빅뱅 #loser", author_id: 8)
  # file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/bigbang-loser.mp4")
  # video_obj.video_url.attach(io: file, filename: "bigbang-loser.mp4")


  # Video.create(title: "BLACKPINK - '붐바야'(BOOMBAYAH) M/V", description: "#블랙핑크 #붐바야", author_id: 8)
  # file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/blackpink-boombaya.mp4")
  # video_obj.video_url.attach(io: file, filename: "blackpink-boombaya.mp4")


  # Video.create(title: "BTS (방탄소년단) 'IDOL' Official MV", description: "#bts #idol", author_id: 10)
  # file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/bts-idol.mp4")
  # video_obj.video_url.attach(io: file, filename: "bts-idol.mp4")


  # Video.create(title: "BTS (방탄소년단) 'IDOL' Official MV", description: "#bts #idol", author_id: 10)
  # file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/bts-idol.mp4")
  # video_obj.video_url.attach(io: file, filename: "bts-idol.mp4")


  # Video.create(title: "[EXID] 덜덜덜(DDD) (Official Music Video)", description: "#exid #ddd", author_id: 11)
  # file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/exid-ddd.mp4")
  # video_obj.video_url.attach(io: file, filename: "exid-ddd.mp4")


  # Video.create(title: "IZ*ONE (아이즈원) - 비올레타 (Violeta) MV", description: "#izone #violeta", author_id: 13)
  # file = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/iz_one-violeta.mp4")
  # video_obj.video_url.attach(io: file, filename: "iz_one-violeta.mp4")
  


