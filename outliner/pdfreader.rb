require 'rubygems'
require 'pdf/reader'
require 'io/console'
require 'json'
require 'yaml'
require 'pry'
############### END REQUIRED ##################

def pdf_to_text(pdf, file)
  File.open(file, 'w') do |f|
    pdf.pages.each do |p|
      f.write(p)
    end
  end
end

def is_lower?(string)
  string == string.downcase ? true : false
end

def is_upper?(string)
  string == string.upcase ? true : false
end

def create_json(obj, file = 'policy.json')
  data = JSON.generate(obj)
  File.open(file, 'w') { |d| d.write(data)}
end

# Outline the text document to create JSON object
def outline(doc)
  json     = {}
  i        = 0
  document = File.open(doc, 'a+')

  document.each_line do |f|
    # Get rid of extra whitespace
    line = f.strip
    next if line.empty?
    next if line == ""

    # Find the headings for each section by counting words
    # and checking them.
    words = line.split(" ")

    # Headings are all caps and short. Lines that are capitalized
    # are the start of a paragraph. Lines not capitalized are
    # part of previous data sentence, so append it.
    if is_upper?(line) #|| words.length <= 5
      json["title#{i}"] = line
    else
      json["data#{i}"] = line #unless is_lower?(line[0])
      if is_lower?(line[0]) 
        json.values.last.concat(line)
      end
    end
    i+= 1
  end
  
  # Create JSON file from this object and write to file.
  create_json(json)
end

outline('file.txt')
