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
  
  
  User.create(username: 'App Academy', password: 'shinyparrot54', email: 'aa@email') # 8
  User.create(username: "League of Legends", password: "scarybull54", email: "lol@email") # 9
  User.create(username: "BlackPink", password: "tallparrot60", email: "blackpink@email") # 10
  User.create(username: "Iz*One", password: "bestfact96", email: "izone@email") # 11
  User.create(username: "StarCraft", password: "windyram52", email: "sc2@email") # 12
  User.create(username: "BTS", password: "happypatch58", email: "bts@email") # 13
  User.create(username: "EXID", password: "badsneeze49", email: "exid@email") # 14
  User.create(username: "Flatiron School", password: "bumpyfeet14", email: "flatironschool@email") # 15
  User.create(username: "Galvanize", password: "hotrain21", email: "galvanize@email") # 16
  User.create(username: "Culver's", password: "mistyred50", email: "culvers@email") # 17
  User.create(username: "tvN", password: "wildbear60", email: "tvn@email") # 18
  User.create(username: "Ultra Music", password: "quietstar52", email: "ppap@email") # 19
  User.create(username: "Animal Planet", password: "goodwing27", email: "animalplanet@email") # 20
  User.create(username: "The World of Dave데이브", password: "richsalt26", email: "dave@email") # 21
  User.create(username: "영국남자 Korean Englishman", password: "badpie26", email: "koen@email") # 22
  User.create(username: "Film simsimking", password: "luckyfly74", email: "cook@email") # 23
  User.create(username: "BuzzFeedVideo", password: "lightsnow91", email: "buzzfeed@email") # 24
  User.create(username: "Impulse", password: "lushdime88", email: "impulse@email") # 25
  User.create(username: "Origin", password: "sweetnewt16", email: "origin@email") # 26
  User.create(username: "Chicago's Best", password: "nicespy97", email: "chicagosbest@email") # 27
  User.create(username: "mayuko", password: "goodhat50", email: "mayuko@email") # 28
  User.create(username: "Fullstack Academy", password: "bluegeese49", email: "fullstackacademy@email") # 29
  User.create(username: "1theK (원더케이)", password: "hotbutter24", email: "1thek@email") # 30
  User.create(username: "BIGBANG", password: "windycloud86", email: "bigbang@email") # 31



  

  # - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -
  ### Video seeding
  Video.destroy_all

  
  # (1..6).each do |n|
  #   video_obj = Video.create(title: "test_video_0#{n}", description: "test_video_0#{n}_description", author_id: n)
  #   video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/test_video/test_video_0#{n}.mp4")
  #   poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/test_video_0#{n}.png")
  #   video_obj.video_url.attach(io: video, filename: "test_video_0#{n}.mp4")
  #   video_obj.poster.attach(io: poster, filename: "test_video_0#{n}.png")
  # end

  video_obj = Video.create(title: "App Academy - Anyone Can Be A Software Engineer", description: "We want to inspire you to change your life through code. Four graduates talk about their experience at App Academy, from where they were before the program to where they are now.", author_id: 8)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/etc/aa-anyone.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/aa-anyone.png")
  video_obj.video_url.attach(io: video, filename: "aa-anyone.mp4")
  video_obj.poster.attach(io: poster, filename: "aa-anyone.png")
  
  video_obj = Video.create(title: "App Academy - Who We Are", description: "Hear from App Academy teachers, students, grads and more about who App Academy is and what you'll learn through the 12-week immersive program.", author_id: 8)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/etc/aa-who_we_are.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/aa-who_we_are.png")
  video_obj.video_url.attach(io: video, filename: "aa-who_we_are.mp4")
  video_obj.poster.attach(io: poster, filename: "aa-who_we_are.png")

  video_obj = Video.create(title: "Explore Coding", description: "Apply to App Academy now!", author_id: 8)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/etc/aa-explore_coding.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/aa-explore_coding.png")
  video_obj.video_url.attach(io: video, filename: "aa-explore_coding.mp4")
  video_obj.poster.attach(io: poster, filename: "aa-explore_coding.png")

  video_obj = Video.create(title: "K/DA - POP/STARS (ft Madison Beer, (G)I-DLE, Jaira Burns) | Official Music Video - League of Legends", description: "K/DA Ahri, K/DA Evelynn, K/DA Kai’Sa, and K/DA Akali take the world stage with their debut single. Keep the show going on the Rift with these new Epic skins.", author_id: 9)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/kda-popstars.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/kda-popstars.png")
  video_obj.video_url.attach(io: video, filename: "kda-popstars.mp4")
  video_obj.poster.attach(io: poster, filename: "kda-popstars.png")

  video_obj = Video.create(title: "BLACKPINK - '붐바야'(BOOMBAYAH) M/V", description: "Available @ https://BLACKPINK.lnk.to/SQUAREONEFA", author_id: 10)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/blackpink-boombaya.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/blackpink-boombaya.png")
  video_obj.video_url.attach(io: video, filename: "blackpink-boombaya.mp4.mp4")
  video_obj.poster.attach(io: poster, filename: "blackpink-boombaya.png")

  video_obj = Video.create(title: "IZ*ONE (아이즈원) - 비올레타 (Violeta) MV", description: "♬ Available on iTunes, Apple Music : https://apple.co/2VMVM0t", author_id: 11)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/iz_one-violeta.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/iz_one-violeta.png")
  video_obj.video_url.attach(io: video, filename: "iz_one-violeta.mp4")
  video_obj.poster.attach(io: poster, filename: "iz_one-violeta.png")

  video_obj = Video.create(title: "StarCraft II: Heart of the Swarm Opening Cinematic", description: "We're pleased to present the opening cinematic for StarCraft II: Heart of the Swarm in full HD glory!", author_id: 12)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/game/sc2-hots.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/sc2-hots.png")
  video_obj.video_url.attach(io: video, filename: "sc2-hots.mp4")
  video_obj.poster.attach(io: poster, filename: "sc2-hots.png")

  video_obj = Video.create(title: "StarCraft II: Legacy of the Void Opening Cinematic", description: "The time of reclamation is upon us! Blizzard Entertainment is pleased to present the StarCraft II: Legacy of the Void opening cinematic. On November 10, 2015, players will join the fight to reclaim Aiur and vanquish the universe’s most ancient evil.", author_id: 12)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/game/sc2-lotv.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/sc2-lotv.png")
  video_obj.video_url.attach(io: video, filename: "sc2-lotv.mp4")
  video_obj.poster.attach(io: poster, filename: "sc2-lotv.png")

  video_obj = Video.create(title: "BTS (방탄소년단) 'Not Today' Official MV", description: "BTS (방탄소년단) 'Not Today' Official MV", author_id: 13)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/bts-not_today.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/bts-not_today.png")
  video_obj.video_url.attach(io: video, filename: "bts-not_today.mp4")
  video_obj.poster.attach(io: poster, filename: "bts-not_today.png")
  
  video_obj = Video.create(title: "[EXID(이엑스아이디)] 덜덜덜(DDD) 뮤직 비디오 (Official Music Video)", description: "EXID가 네 번째 미니앨범 [Full Moon]으로 돌아왔다.", author_id: 14)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/exid-ddd.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/exid-ddd.png")
  video_obj.video_url.attach(io: video, filename: "exid-ddd.mp4")
  video_obj.poster.attach(io: poster, filename: "exid-ddd.png")

  video_obj = Video.create(title: "IZ*ONE (아이즈원) - 라비앙로즈 (La Vie en Rose) MV", description: "♬ Available on iTunes, Apple Music : https://apple.co/2SEDi0L", author_id: 11)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/iz_one-la_vie_en_rose.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/iz_one-la_vie_en_rose_poster.png")
  video_obj.video_url.attach(io: video, filename: "iz_one-la_vie_en_rose.mp4")
  video_obj.poster.attach(io: poster, filename: "iz_one-la_vie_en_rose_poster.png")

  video_obj = Video.create(title: "BTS (방탄소년단) 'IDOL' Official MV", description: "BTS (방탄소년단) 'IDOL' Official MV", author_id: 13)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/bts-idol.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/bts-idol.png")
  video_obj.video_url.attach(io: video, filename: "bts-idol.mp4")
  video_obj.poster.attach(io: poster, filename: "bts-idol.png")

  video_obj = Video.create(title: "PIKOTARO - PPAP (Pen Pineapple Apple Pen) (Long Version) [Official Video]", description: "PIKOTARO - PPAP (Pen Pineapple Apple Pen) (Long Version) Available Now!", author_id: 19)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/PIKOTARO+-+PPAP+(Pen+Pineapple+Apple+Pen)+(Long+Version)+%5BOfficial+Video%5D.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/PIKOTARO+-+PPAP+(Pen+Pineapple+Apple+Pen)+(Long+Version)+%5BOfficial+Video%5D.png")
  video_obj.video_url.attach(io: video, filename: "ppap.mp4")
  video_obj.poster.attach(io: poster, filename: "ppap.png")

  video_obj = Video.create(title: "[MV] IU(아이유) _ Through the Night(밤편지)", description: "[MV] IU(아이유) _ Through the Night(밤편지)", author_id: 30)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/iu-through_the_night.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/iu-through_the_night.png")
  video_obj.video_url.attach(io: video, filename: "iu-through_the_night.mp4")
  video_obj.poster.attach(io: poster, filename: "iu-through_the_night.png")

  video_obj = Video.create(title: "BIGBANG - LOSER M/V", description: "Available on Spotify @ http://sptfy.com/BIGBANG_M", author_id: 31)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/music/bigbang-loser.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/bigbang-loser.png")
  video_obj.video_url.attach(io: video, filename: "bigbang-loser.mp4")
  video_obj.poster.attach(io: poster, filename: "bigbang-loser.png")

  video_obj = Video.create(title: "a day in the life of a software engineer", description: "here’s my first video, giving you an inside look to a typical day in the life of me, a software engineer. hope you enjoy!", author_id: 28)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/etc/a+day+in+the+life+of+a+software+engineer.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/a+day+in+the+life+of+a+software+engineer.png")
  video_obj.video_url.attach(io: video, filename: "softwareday.mp4")
  video_obj.poster.attach(io: poster, filename: "softwareday.png")

  video_obj = Video.create(title: "What is a Front End Developer?", description: "Interested in learning more about our program? Visit Galvanize", author_id: 16)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/etc/What+is+a+Front+End+Developer.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/What+is+a+Front+End+Developer.png")
  video_obj.video_url.attach(io: video, filename: "frontend.mp4")
  video_obj.poster.attach(io: poster, filename: "frontend.png")

  video_obj = Video.create(title: "Hack Reactor: Don't Just Learn to Code. Think Like a Software Engineer", description: "Visit www.hackreactor.com today.", author_id: 16)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/etc/Hack+Reactor+Don't+Just+Learn+to+Code.+Think+Like+a+Software+Engineer..mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/Hack+Reactor+Don't+Just+Learn+to+Code.+Think+Like+a+Software+Engineer..png")
  video_obj.video_url.attach(io: video, filename: "hackreactor.mp4")
  video_obj.poster.attach(io: poster, filename: "hackreactor.png")

  video_obj = Video.create(title: "Change Things with Flatiron School", description: "We teach people how to change things: their careers, their lives, and the world.", author_id: 15)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/etc/Change+Things+with+Flatiron+School.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/Change+Things+with+Flatiron+School.png")
  video_obj.video_url.attach(io: video, filename: "flatiron.mp4")
  video_obj.poster.attach(io: poster, filename: "flatiron.png")

  video_obj = Video.create(title: "5 Tips on How to Land a Tech Job After A Coding Bootcamp", description: "Co-founder David Yang and Career Success Counselor Jackie Ore talk about some of the best tips for finding a job after graduating from a coding bootcamp.", author_id: 29)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/etc/5+Tips+on+How+to+Land+a+Tech+Job+After+A+Coding+Bootcamp.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/5+Tips+on+How+to+Land+a+Tech+Job+After+A+Coding+Bootcamp.png")
  video_obj.video_url.attach(io: video, filename: "jobafterbootcamp.mp4")
  video_obj.poster.attach(io: poster, filename: "jobafterbootcamp.png")

  video_obj = Video.create(title: "Dogs 101 - Japanese Chin", description: "Contrary to its name, the Japanese Chin is actually from China.", author_id: 20)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/etc/Dogs+101+-+Japanese+Chin.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/Dogs+101+-+Japanese+Chin.png")
  video_obj.video_url.attach(io: video, filename: "japanesechin.mp4")
  video_obj.poster.attach(io: poster, filename: "japanesechin.png")

  video_obj = Video.create(title: "A Crinkle Cut Above", description: "French fry perfection starts with perfectly grown potatoes. At Culver's, our potatoes are grown in the Great Northwest and crinkle cut for better dipping. See why out Crinkle Cut Fries are truly a cut above.", author_id: 17)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/food/A+Crinkle+Cut+Above.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/A+Crinkle+Cut+Above.png")
  video_obj.video_url.attach(io: video, filename: "fries.mp4")
  video_obj.poster.attach(io: poster, filename: "fries.png")

  video_obj = Video.create(title: "ButterBurger 101", description: "There's an art to ordering any of our handcrafted ButterBurgers. Here's what every Culver's newbie needs to know.", author_id: 17)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/food/ButterBurger+101.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/ButterBurger+101.png")
  video_obj.video_url.attach(io: video, filename: "butterburger.mp4")
  video_obj.poster.attach(io: poster, filename: "butterburger.png")

  video_obj = Video.create(title: "Culver's Sides 101",
    description: "From craveworthy Crinkle Cut Fries to real Wisconsin Cheese Curds, Culver's offers a wide range of Sides to pair with any meal or enjoy on their own. Here's your guide to ordering Sides and Snacks at Culver's.", author_id: 17)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/food/Culver's+Sides+101.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/Culver's+Sides+101.png")
  video_obj.video_url.attach(io: video, filename: "sides101.mp4")
  video_obj.poster.attach(io: poster, filename: "sides101.png")

  video_obj = Video.create(title: "Chicago's Best Pizza: Lou Malnati's Pizzeria",
    description: "Elliott Bambrough heads to the original Lou Malnati’s Pizzeria for some classic deep dish pizza.", author_id: 27)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/food/Chicago's+Best+Pizza+Lou+Malnati's+Pizzeria.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/Chicago's+Best+Pizza+Lou+Malnati's+Pizzeria.png")
  video_obj.video_url.attach(io: video, filename: "deepdish.mp4")
  video_obj.poster.attach(io: poster, filename: "deepdish.png")

  video_obj = Video.create(title: "People Try The Fire Noodle Challenge", description: "I think my tongue grew two sizes.", author_id: 24)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/food/People+Try+The+Fire+Noodle+Challenge.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/People+Try+The+Fire+Noodle+Challenge.png")
  video_obj.video_url.attach(io: video, filename: "buzzfeed.mp4")
  video_obj.poster.attach(io: poster, filename: "buzzfeed.png")

  video_obj = Video.create(title: "[매운도전] 드디어 재인 신길동매운짬뽕 도전! FEAT.브아이,에리나 Jaein Challenges the spiciest Soup in Korea FT. Erina & Vai",
    description: "So we got the crew together and we have Jaein challenge the spiciest soup in Korea. ", author_id: 21)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/food/%5B%E1%84%86%E1%85%A2%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%83%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%5D+%E1%84%83%E1%85%B3%E1%84%83%E1%85%B5%E1%84%8B%E1%85%A5+%E1%84%8C%E1%85%A2%E1%84%8B%E1%85%B5%E1%86%AB+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%83%E1%85%A9%E1%86%BC%E1%84%86%E1%85%A2%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8D%E1%85%A1%E1%86%B7%E1%84%88%E1%85%A9%E1%86%BC+%E1%84%83%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB!+FEAT.%E1%84%87%E1%85%B3%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%2C%E1%84%8B%E1%85%A6%E1%84%85%E1%85%B5%E1%84%82%E1%85%A1+Jaein+Challenges+the+spiciest+Soup+in+Korea+FT.+Erina+%26+Vai.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/%5B%E1%84%86%E1%85%A2%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%83%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%5D+%E1%84%83%E1%85%B3%E1%84%83%E1%85%B5%E1%84%8B%E1%85%A5+%E1%84%8C%E1%85%A2%E1%84%8B%E1%85%B5%E1%86%AB+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%83%E1%85%A9%E1%86%BC%E1%84%86%E1%85%A2%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8D%E1%85%A1%E1%86%B7%E1%84%88%E1%85%A9%E1%86%BC+%E1%84%83%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB!+FEAT.%E1%84%87%E1%85%B3%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%2C%E1%84%8B%E1%85%A6%E1%84%85%E1%85%B5%E1%84%82%E1%85%A1+Jaein+Challenges+the+spiciest+Soup+in+Korea+FT.+Erina+%26+Vai.png")
  video_obj.video_url.attach(io: video, filename: "davefirenoodle.mp4")
  video_obj.poster.attach(io: poster, filename: "davefirenoodle.png")

  video_obj = Video.create(title: "스팸 Spam",
    description: "I found it really interesting how often Spam is eaten here, while as in the states, I've never even tried it. Turns out, it's freaking delicious, especially fried. Not a sponsored video whatsoever, just wanted to talk about it, since i found it interesting. ",
    author_id: 21)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/food/%E1%84%89%E1%85%B3%E1%84%91%E1%85%A2%E1%86%B7+Spam.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/%E1%84%89%E1%85%B3%E1%84%91%E1%85%A2%E1%86%B7+Spam.png")
  video_obj.video_url.attach(io: video, filename: "spam.mp4")
  video_obj.poster.attach(io: poster, filename: "spam.png")

  video_obj = Video.create(title: "NUCLEAR 🔥FIRE NOODLE🔥 CHALLENGE", 
    description: "This week, we try the NUCLEAR Fire Noodles with our English friends! It’s already been 3 years since we uploaded the original Fire Noodle Challenge, our first viral video",
    author_id: 22)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/food/%E1%84%85%E1%85%A5%E1%86%AB%E1%84%83%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%B4%F0%9F%94%A5%E1%84%92%E1%85%A2%E1%86%A8%E1%84%87%E1%85%AE%E1%86%AF%E1%84%83%E1%85%A1%E1%86%B0%E1%84%87%E1%85%A9%E1%86%A9%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%86%E1%85%A7%E1%86%AB%F0%9F%94%A5%E1%84%83%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB!!!.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/%E1%84%85%E1%85%A5%E1%86%AB%E1%84%83%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%B4%F0%9F%94%A5%E1%84%92%E1%85%A2%E1%86%A8%E1%84%87%E1%85%AE%E1%86%AF%E1%84%83%E1%85%A1%E1%86%B0%E1%84%87%E1%85%A9%E1%86%A9%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%86%E1%85%A7%E1%86%AB%F0%9F%94%A5%E1%84%83%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB!!!.png")
  video_obj.video_url.attach(io: video, filename: "londonfire.mp4")
  video_obj.poster.attach(io: poster, filename: "londonfire.png")

  video_obj = Video.create(title: "마파두부 레시피 麻婆豆腐 Mapo Doufu Recipe",
    description: "Grinded Pork, Doufu, Garlic, Ginger, Green Oniion, Starch, Oil, Toban Djan, Soy Sauce, Rice Wine, Salt, Pepper", author_id: 23)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/food/%E1%84%86%E1%85%A1%E1%84%91%E1%85%A1%E1%84%83%E1%85%AE%E1%84%87%E1%85%AE+%E1%84%85%E1%85%A6%E1%84%89%E1%85%B5%E1%84%91%E1%85%B5+%E9%BA%BB%E5%A9%86%E8%B1%86%E8%85%90+Mapo+Doufu+Recipe.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/%E1%84%86%E1%85%A1%E1%84%91%E1%85%A1%E1%84%83%E1%85%AE%E1%84%87%E1%85%AE+%E1%84%85%E1%85%A6%E1%84%89%E1%85%B5%E1%84%91%E1%85%B5+%E9%BA%BB%E5%A9%86%E8%B1%86%E8%85%90+Mapo+Doufu+Recipe.png")
  video_obj.video_url.attach(io: video, filename: "mapotofu.mp4")
  video_obj.poster.attach(io: poster, filename: "mapotofu.png")

  video_obj = Video.create(title: "영롱한 짜장면의 자태.. 지금 주문해도 늦지 않았어!! 4wheeledrestaurant3 190418 EP.1",
    description: "영롱한 짜장면의 자태.. 지금 주문해도 늦지 않았어!! 이연복 확장판 현지에서 먹힐까 미국편", author_id: 18)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/food/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%85%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%8D%E1%85%A1%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8B%E1%85%B4+%E1%84%8C%E1%85%A1%E1%84%90%E1%85%A2..+%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B3%E1%86%B7+%E1%84%8C%E1%85%AE%E1%84%86%E1%85%AE%E1%86%AB%E1%84%92%E1%85%A2%E1%84%83%E1%85%A9+%E1%84%82%E1%85%B3%E1%86%BD%E1%84%8C%E1%85%B5+%E1%84%8B%E1%85%A1%E1%86%AD%E1%84%8B%E1%85%A1%E1%86%BB%E1%84%8B%E1%85%A5!!+4wheeledrestaurant3+190418+EP.1.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%85%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%8D%E1%85%A1%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8B%E1%85%B4+%E1%84%8C%E1%85%A1%E1%84%90%E1%85%A2..+%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B3%E1%86%B7+%E1%84%8C%E1%85%AE%E1%84%86%E1%85%AE%E1%86%AB%E1%84%92%E1%85%A2%E1%84%83%E1%85%A9+%E1%84%82%E1%85%B3%E1%86%BD%E1%84%8C%E1%85%B5+%E1%84%8B%E1%85%A1%E1%86%AD%E1%84%8B%E1%85%A1%E1%86%BB%E1%84%8B%E1%85%A5!!+4wheeledrestaurant3+190418+EP.1.png")
  video_obj.video_url.attach(io: video, filename: "yeonbok.mp4")
  video_obj.poster.attach(io: poster, filename: "yeonbok.png")

  video_obj = Video.create(title: "이건 꼭 봐야해! 드디어 ′여셰프′의 ′짜장면′ 레시피 공개!! 수미네 반찬 29화",
    description: "▶ 김수미표 손맛 전수 클래스 수미네 반찬", author_id: 18)
  video = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/food/%E1%84%8B%E1%85%B5%E1%84%80%E1%85%A5%E1%86%AB+%E1%84%81%E1%85%A9%E1%86%A8+%E1%84%87%E1%85%AA%E1%84%8B%E1%85%A3%E1%84%92%E1%85%A2!+%E1%84%83%E1%85%B3%E1%84%83%E1%85%B5%E1%84%8B%E1%85%A5+%E2%80%B2%E1%84%8B%E1%85%A7%E1%84%89%E1%85%A8%E1%84%91%E1%85%B3%E2%80%B2%E1%84%8B%E1%85%B4+%E2%80%B2%E1%84%8D%E1%85%A1%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A7%E1%86%AB%E2%80%B2+%E1%84%85%E1%85%A6%E1%84%89%E1%85%B5%E1%84%91%E1%85%B5+%E1%84%80%E1%85%A9%E1%86%BC%E1%84%80%E1%85%A2!!+%E1%84%89%E1%85%AE%E1%84%86%E1%85%B5%E1%84%82%E1%85%A6+%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%A1%E1%86%AB+29%E1%84%92%E1%85%AA.mp4")
  poster = EzDownload.open("https://sparkube-seed.s3-us-west-1.amazonaws.com/poster/%E1%84%8B%E1%85%B5%E1%84%80%E1%85%A5%E1%86%AB+%E1%84%81%E1%85%A9%E1%86%A8+%E1%84%87%E1%85%AA%E1%84%8B%E1%85%A3%E1%84%92%E1%85%A2!+%E1%84%83%E1%85%B3%E1%84%83%E1%85%B5%E1%84%8B%E1%85%A5+%E2%80%B2%E1%84%8B%E1%85%A7%E1%84%89%E1%85%A8%E1%84%91%E1%85%B3%E2%80%B2%E1%84%8B%E1%85%B4+%E2%80%B2%E1%84%8D%E1%85%A1%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A7%E1%86%AB%E2%80%B2+%E1%84%85%E1%85%A6%E1%84%89%E1%85%B5%E1%84%91%E1%85%B5+%E1%84%80%E1%85%A9%E1%86%BC%E1%84%80%E1%85%A2!!+%E1%84%89%E1%85%AE%E1%84%86%E1%85%B5%E1%84%82%E1%85%A6+%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%A1%E1%86%AB+29%E1%84%92%E1%85%AA.png")
  video_obj.video_url.attach(io: video, filename: "jjm.mp4")
  video_obj.poster.attach(io: poster, filename: "jjm.png")

end

  # video_obj = Video.create(title: "", description: "", author_id: )
  # video = EzDownload.open("")
  # poster = EzDownload.open("")
  # video_obj.video_url.attach(io: video, filename: ".mp4")
  # video_obj.poster.attach(io: poster, filename: ".png")







