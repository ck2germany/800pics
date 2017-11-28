# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :string           default("")
#  img_url     :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  validates :user_id, :title, :img_url, presence: true
  validates :title, length: { maximum: 64 }
  before_validation :ensure_description
  def ensure_description
    self.description ||= ""
  end

  belongs_to :user,
  foreign_key: :user_id,
  primary_key: :id,
  class_name: :User

end
