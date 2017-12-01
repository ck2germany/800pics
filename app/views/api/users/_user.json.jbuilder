json.extract! user, :id, :username, :profile_img_url
json.following user.followees.count
json.followers user.followers.count
json.followed_by_current_user !!user.fans.find_by(followee_id: current_user.id)

json.user_photos user.photos
