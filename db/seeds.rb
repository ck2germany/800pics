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
user1 = User.create!(username: "Demo User", password: "password")
user2 = User.create!(username: "CK", password: "password")

photo1 = Photo.create!(user_id: user2.id,
                      title: "Sample Photo",
                      description: "Sample Description for my sample photo",
                      img_url: "http://res.cloudinary.com/studio-27/image/upload/c_scale,w_724/v1495664854/landscapes/IMG_0036_zofjr7.jpg"
                      )
photo2 = Photo.create!(user_id: user2.id,
                       title: "Sample Photo",
                       description: "Sample Description for my sample photo",
                       img_url: "http://res.cloudinary.com/studio-27/image/upload/c_scale,w_724/v1495664854/landscapes/IMG_0036_zofjr7.jpg"
                       )
