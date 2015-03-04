require 'open-uri'
require "yaml"

def qrcode(user)
	api = "https://api.qrserver.com/v1/create-qr-code/?data=#{user}&size=200x200"
	api
end

def createList(list)
	File.open(list, "r") do |f|
	  f.each_line do |line|
	    new_qrcode = qrcode(line)
	    save_code(new_qrcode)
	  end
	end
end

def save_code(image)
	open(image, 'wb') do |file|
	  file << open(image).read
		File.rename(file, "#{file}-#{number}")
	end

	print ' . '
end

p "Where to save the pictures?"
destination = gets.chomp

Dir.chdir "#{destination}"

p "Where is the list?"
list = gets.chomp

createList(list)

p "Operation complete!"
