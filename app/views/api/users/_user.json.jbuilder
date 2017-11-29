json.extract! user, :id, :username, :profile_img_url

json.user_photos (user.photos.map { |e| e.id  })
