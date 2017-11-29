json.extract! photo, :id, :user_id, :title, :description, :img_url

json.extract! photo.user, :username, :profile_img_url
