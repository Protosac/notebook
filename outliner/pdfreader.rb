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

def heading?(obj,string)
  if /^[IVX+]+\./.match(string)
    obj["heading#{i}"] = string
  end
end

def sentence?(obj,string)
  if /^[A-Z+]+\./.match(string)
    obj["subheading#{i}"] = string
  end
end

def word?(obj,string)
  if /\b\w+\b/.match(string)
    obj["phrase#{i}"] = string
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

def store(obj,model,name)
  name = model.new
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

    # Check if it's a Heading
    # if heading?(json,line)
    #   next
    # elsif sentence?(json,line)
    #   next
    # else 
    #   json.values.last.concat(line)
    # end

    if line.upcase
        json["title#{i}"] = line
      else
        json["data#{i}"] = line unless is_lower?(line[0])
        if is_lower?(line[0]) 
          json.values.last.concat(line)
        end
      end
      
    # if line =~ /^[A-Z]+\./ 
    #   json["title#{i}"] = line
    # elsif line =~ /^[a-z1-9]+\./
    #   json["data#{i}"] = line 
    # else #line =~ /^[A-Z]+[\S\s]+[.?!]/ 
    #   # binding.pry
    #   json.values.last.concat(line)
    # end
    i+= 1
  end
  
  # Create JSON file from this object and write to file.
  create_json(json)
end

outline('file.txt')

# I. I love steak!
# A. with cheese
# 1. Coca-cola too.

# II. More headings

# IIIV. And another