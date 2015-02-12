module Outliner
# Must find a roman numeral on the line.

# Must iterate through numerals
# If 'I' is found then either 'A' or 'II' must be next.
# Same for A: next either 'II' or '1'
  def create(doc)
    json     = {}
    i        = 0
    document = File.open(doc, 'a+')

    document.each_line do |f|
      if /^\S/.match(f)
        json[i] = f
        i+= 1
      end
    end
  end

  def jsonify(doc)
    data = JSON.generate(doc)

    File.open('policy.json', 'w') { |d| d.write(data)}
  end

  def sorter (doc)
    document = File.open(doc, 'a+')

    document.each_line do |f|
      json[i] = f
      i+= 1
    end

    if doc[0] == 'I'
      json[:main] = line
      f.write(json)
    end
  end

end