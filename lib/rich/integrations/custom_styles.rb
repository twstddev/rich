module Rich
	module Integrations
		module CustomStyles
			def custom_wrapping( &block )
				template.content_tag(:div,
					template.capture(&block).html_safe,
					class: "form-group input" )
			end

			def custom_label_html
				render_label? ? builder.label(input_name, label_text, class: "control-label") : "".html_safe
			end
		end
	end
end
