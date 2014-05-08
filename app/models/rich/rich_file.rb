require 'cgi'
require 'mime/types'
require 'kaminari'
require "mongoid_paperclip"

module Rich
	class RichFile
		include Mongoid::Document
		include Mongoid::Paperclip
		include Mongoid::Attributes::Dynamic

		field :image_field_name, type: String
		field :image_content_type, type: String
		field :image_file_size, type: Integer
		field :image_updated_at, type: DateTime
		field :owner_type, type: String
		field :owner_id, type: Integer
		field :uri_cache, type: String

		scope :images,  lambda { where("simplified_type = 'image'") }
		scope :files,   lambda { where("simplified_type = 'file'") }

		paginates_per Rich.options[:paginates_per]
	end
end
