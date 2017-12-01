json.extract! user, :id, :username, :profile_img_url

json.fans do
  json.array! user.fans do |fan|
    fan.id
  end
end

json.idols do
  json.array! user.idols do |idol|
    idol.id
  end
end

json.following user.idols.count
json.followers user.fans.count
# if (logged_in?)
#   json.followed_by_current_user !!user.fans.find(current_user.id)
# end

json.user_photos user.photos
