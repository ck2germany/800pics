# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Photo.destroy_all

# User
jasmine = User.create!(username: "Jas", password: "password")
jd = User.create!(username: "JD", password: "password")
bremen = User.create!(username: "Hansa Bremen", password: "password")
degg = User.create!(username: "Deggendorf", password: "password")
stormy = User.create!(username: "Stormy", password: "password")
demo = User.create!(username: "Demo User", password: "password")

# {
#   user_id: ,
#   title: "",
#   description: "",
#   img_url: "",
# }


jas_photos = [{
    user_id: jasmine.id,
    title: "Serene Reflection",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731707/landscapes/JK/jk_photos-bancroft1.jpg"
  },
  {
    user_id: jasmine.id,
    title: "Long Road to the Mountains",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731706/landscapes/JK/jk_photos-bancroft2.jpg",
  },
  {
    user_id: jasmine.id,
    title: "Serene Lake",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731704/landscapes/JK/jk_photos-bancroft3.jpg",
  },
  {
    user_id: jasmine.id,
    title: "Caribou Natl Forest",
    description: "Bridge across the water",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731706/landscapes/JK/jk_photos-caribou_natl_forest_1.jpg",
  },
  {
    user_id: jasmine.id,
    title: "Roxie",
    description: "Snaggle-toothed love bug",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731702/landscapes/JK/jk_photos-caribou_natl_forest_2.jpg",
  },
  {
    user_id: jasmine.id,
    title: "Caribou Natl Forest",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731706/landscapes/JK/jk_photos-caribou_natl_forest_3.jpg",
  },
  {
    user_id: jasmine.id,
    title: "Great Old Tree",
    description: "Caribou Natl Forest",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731709/landscapes/JK/jk_photos-caribou_natl_forest_4.jpg",
  },
  {
    user_id: jasmine.id,
    title: "Snowy Lake",
    description: "Snow!",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731709/landscapes/JK/jk_photos-fisher_pond.jpg",
  }]

  jd_photos = [
    {
      user_id: jd.id,
      title: "Fields of Gold",
      description: "under a bright blue sky",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731669/landscapes/JD/jd_photos-idaho_1.jpg",
    },
    {
      user_id: jd.id,
      title: "Sunset",
      description: "",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731665/landscapes/JD/jd_photos-idaho_2.jpg",
    },
    {
      user_id: jd.id,
      title: "Sunset colors the hills",
      description: "",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731666/landscapes/JD/jd_photos-idaho_3.jpg",
    },
    {
      user_id: jd.id,
      title: "View over the city",
      description: "",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731665/landscapes/JD/jd_photos-idaho_4.jpg",
    },
    {
      user_id: jd.id,
      title: "Idaho Hills",
      description: "",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731666/landscapes/JD/jd_photos-idaho_5.jpg",
    },
    {
      user_id: jd.id,
      title: "Trekking through the hills",
      description: "",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731669/landscapes/JD/jd_photos-idaho_6.jpg",
    },
    {
      user_id: jd.id,
      title: "More trekking through the hills",
      description: "",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511731668/landscapes/JD/jd_photos-idaho_7.jpg",
    }]

bremen_photos = [
  {
    user_id: bremen.id,
    title: "Werdersee in Winter",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511940126/landscapes/CK/bremen/IMG_0030.jpg",
  },
  {
    user_id: bremen.id,
    title: "Serene Snow by the River",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511940132/landscapes/CK/bremen/IMG_0031.jpg",
  },
  {
    user_id: bremen.id,
    title: "Along the banks of the Werder",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511938320/landscapes/CK/bremen/IMG_0036.jpg",
  },
  {
    user_id: bremen.id,
    title: "Ducks!",
    description: "Almost like the pied piper",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511940142/landscapes/CK/bremen/IMG_0039.jpg",
  },
  {
    user_id: bremen.id,
    title: "Flowers",
    description: "springtime",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/a_0/v1511938321/landscapes/CK/bremen/IMG_0120.jpg",
  },
  {
    user_id: bremen.id,
    title: "Butterfly",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511938291/landscapes/CK/bremen/IMG_0337.jpg",
  },
  {
    user_id: bremen.id,
    title: "Little pumpkin hiding in the vines",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511940017/landscapes/CK/bremen/IMG_0381.jpg",
  },
  {
    user_id: bremen.id,
    title: "Purple Flowers",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511938395/landscapes/CK/bremen/IMG_0479.jpg",
  },
  {
    user_id: bremen.id,
    title: "Flowering tree in spring",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511938416/landscapes/CK/bremen/IMG_0813.jpg",
  },
  {
    user_id: bremen.id,
    title: "Fields of Gold",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511938385/landscapes/CK/bremen/IMG_0870.jpg",
  }]

  degg_photos = [
    {
      user_id: degg.id,
      title: "Sunset overlooking the town",
      description: "",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511938357/landscapes/CK/degg/IM_0035.jpg",
    },
    {
      user_id: degg.id,
      title: "Follow along the path",
      description: "",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/a_0/v1511940001/landscapes/CK/degg/IMG_0025.jpg",
    },
    {
      user_id: degg.id,
      title: "Autumn Hills",
      description: "At the nature preserve north of town",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1495664844/landscapes/CK/degg/IMG_0026_ewezyh.jpg",
    },
    {
      user_id: degg.id,
      title: "Tall snowy tree",
      description: "on my path to work each day",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/a_0/v1495664949/landscapes/CK/degg/IMG_0217_mjvc4g.jpg",
    },
    {
      user_id: degg.id,
      title: "Looking Out",
      description: "perspective from the cover of the tree trunk",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511939981/landscapes/CK/degg/IMG_0236.jpg",
    },
    {
      user_id: degg.id,
      title: "Lonely tree in the clearing",
      description: "",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511939765/landscapes/CK/degg/IMG_0238.jpg",
    },
    {
      user_id: degg.id,
      title: "Up the hill",
      description: "Fire road was one of my favorite hikes ever",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511939850/landscapes/CK/degg/IMG_0239.jpg",
    },
    {
      user_id: degg.id,
      title: "Bach",
      description: "not so little stream anymore",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/a_0/v1511939707/landscapes/CK/degg/IMG_0240.jpg",
    },
    {
      user_id: degg.id,
      title: "Winter sun in the snow",
      description: "",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511939537/landscapes/CK/degg/IMG_0273.jpg",
    },
    {
      user_id: degg.id,
      title: "Another winter trail",
      description: "Nestled in the hills, never far from town",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511939471/landscapes/CK/degg/IMG_0275.jpg",
    },
    {
      user_id: degg.id,
      title: "Looking towards the Danube",
      description: "It is faint, but there it is in the background",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511939231/landscapes/CK/degg/IMG_0289.jpg",
    },
    {
      user_id: degg.id,
      title: "Snowy View",
      description: "love the blue sky",
      img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511939192/landscapes/CK/degg/IMG_0298.jpg",
    }]

demo_photos = [
  {
    user_id: demo.id,
    title: "Point Reyes",
    description: "coastline",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1495479675/landscapes/CK/calif/IMG_0268_nst4ib.jpg",
  },
  {
    user_id: demo.id,
    title: "Point Reyes",
    description: "gull island",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1495479677/landscapes/CK/calif/IMG_0287_kaqlqr.jpg",
  },
  {
    user_id: demo.id,
    title: "Long way down",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1495665401/landscapes/CK/calif/IMG_0293_lpsmki.jpg",
  },
  {
    user_id: demo.id,
    title: "Grangeland, CA",
    description: "old canal",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1495479686/landscapes/CK/calif/IMG_0634_kbvluo.jpg",
  },
  {
    user_id: demo.id,
    title: "Rainbow",
    description: "somewhere near Linden",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511938882/landscapes/CK/calif/IMG_0887.jpg",
  },
  {
    user_id: demo.id,
    title: "Small Lake",
    description: "near Dana Point, Yosemite Natl Park",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511938988/landscapes/CK/calif/IMG_1365.jpg",
  },
  {
    user_id: demo.id,
    title: "Amazing Mountains",
    description: "Yosemite Natl Park",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511938982/landscapes/CK/calif/IMG_1371.jpg",
  },
  {
    user_id: demo.id,
    title: "Storm Clouds",
    description: "always changing weather",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511938933/landscapes/CK/calif/IMG_1382.jpg",
  },
  {
    user_id: demo.id,
    title: "Halfway to Dana Point",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511938882/landscapes/CK/calif/IMG_1384.jpg",
  },
  {
    user_id: demo.id,
    title: "Hail in August",
    description: "Tuolomne Meadows",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511939018/landscapes/CK/calif/IMG_1405.jpg",
  },
  {
    user_id: demo.id,
    title: "Steaming Meadows",
    description: "hail covering the ground",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511938883/landscapes/CK/calif/IMG_1408.jpg",
  },
  {
    user_id: demo.id,
    title: "Yosemite Storm",
    description: "view of the storm that hailed",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511938849/landscapes/CK/calif/IMG_1429.jpg",
  },
  {
    user_id: demo.id,
    title: "Eastern Sierras",
    description: "unknown lake",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1495479685/landscapes/CK/calif/Mammoth_2011_153_u5bjui.jpg",
  },]

stormy_photos = [
  {
    user_id: stormy.id,
    title: "Feed Me.",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1511938296/landscapes/CK/stormy/IMG_0018.jpg",
  },
  {
    user_id: stormy.id,
    title: "It was a long day",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/a_0/v1511939849/landscapes/CK/stormy/IMG_0121.jpg",
  },
  {
    user_id: stormy.id,
    title: "Really I just sleep",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/a_0/v1511940104/landscapes/CK/stormy/IMG_0141.jpg",
  },
  {
    user_id: stormy.id,
    title: "All tucked in",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/a_0/v1511940120/landscapes/CK/stormy/IMG_0170.jpg",
  },
  {
    user_id: stormy.id,
    title: "Study Kitty",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/a_0/v1511940088/landscapes/CK/stormy/IMG_0184.jpg",
  },
  {
    user_id: stormy.id,
    title: "Cat in a box",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/v1495479671/landscapes/CK/stormy/IMG_0256_fnfsjw.jpg",
  },
  {
    user_id: stormy.id,
    title: "More sleep for me",
    description: "",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/a_0/v1511939996/landscapes/CK/stormy/IMG_0316.jpg",
  },
  {
    user_id: stormy.id,
    title: "Happy in the grass",
    description: "when the human actually lets me outside",
    img_url: "http://res.cloudinary.com/studio-27/image/upload/a_0/v1511938328/landscapes/CK/stormy/IMG_0399.jpg",
  }
]


jas_photos.each do |photo|
  Photo.create!(photo)
end

jd_photos.each do |photo|
  Photo.create!(photo)
end

bremen_photos.each do |photo|
  Photo.create!(photo)
end

degg_photos.each do |photo|
  Photo.create!(photo)
end

stormy_photos.each do |photo|
  Photo.create!(photo)
end

demo_photos.each do |photo|
  Photo.create!(photo)
end
