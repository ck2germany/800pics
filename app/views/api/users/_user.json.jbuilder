json.extract! user, :id, :username, :profile_img_url
json.following user.idols.count
json.followers user.followers.count
json.followed_by_current_user !!user.followers.find_by(id: current_user.id)

json.user_photos user.photos
