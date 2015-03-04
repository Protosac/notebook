require "yaml"

puts "Where to move the pictures?"
destination = gets.chomp

Dir.chdir "#{destination}"

puts "What shall we name this batch?"
batch = gets.chomp

puts "Where to get your new pictures?"
findpics = gets.chomp

pictures = Dir["#{findpics}/*.{jpg,JPG,JPEG,jpeg,png,PNG}"]

print "Downloading #{pictures.length} files: "

amount = 1

pictures.each do |pic|
	print ' . '
	
	newname = if amount < 10
		"#{batch}-0#{amount}.jpg"
	else
		"#{batch}-#{amount}.jpg"
	end

	File.rename pic, newname
	amount += 1
end

puts

puts "Operation complete!"