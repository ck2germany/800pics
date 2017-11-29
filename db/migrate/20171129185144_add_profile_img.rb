class AddProfileImg < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :profile_img_url, :string, default: "/assets/images/leaf.png"
  end
end
