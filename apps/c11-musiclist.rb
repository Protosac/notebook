# Playlist Maker
# This program should take any folder of MP3s and make a playlist from it.

require "yaml"

def savelist(songs, playlist)
	File.open playlist, 'w' do |f|
		f.write(songs.to_yaml)
	end
end

def openlist(playlist)
	loadlist = File.read playlist
	YAML::load loadlist
end

puts "Welcome to the Playlist Maker!"

puts "Where are the MP3s you want to use (without the trailing slash)?"
dirloc = gets.chomp
# If user inputs backslashes(\), substitute them with forward slashes (/)
# dirloc = dirloc.sub(/\\/) { / }

puts "What would you like to name your Playlist?"
list = gets.chomp

mp3s = Dir['#{dirloc}/*.mp3']

list = "#{list}.m3u"

savelist(mp3s, list)

openlist(list)

puts "All done!"

# How can I make this search subfolders?
# How can I access metadata from the MP3s like artist and title?
# How do I create a graphical interface for this program?