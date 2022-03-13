class Image < ApplicationRecord
    validates :url, :type, :date, presence: true
end
