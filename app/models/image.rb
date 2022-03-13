class Image < ApplicationRecord
    validates :url, :foamType, :lastModified, presence: true
end
