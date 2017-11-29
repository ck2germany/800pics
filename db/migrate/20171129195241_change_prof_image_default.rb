class ChangeProfImageDefault < ActiveRecord::Migration[5.1]
  def change
    change_column_default :users, :profile_img_url, "http://res.cloudinary.com/studio-27/image/upload/c_scale,w_32/v1511981034/landscapes/leaf.png"
  end
end
