require 'pry'

class Car
  attr_accessor :speed, :name, :engine, :style

  def initialize(name)
    @name = name
    @speed = 0
  end

  def accelerate(speed)
    @speed += speed
  end

  def deccelerate(speed)
    @speed -= speed
  end

  def self.specs
    @engine = ['Automatic', 'Manual']
    @style  = ['4-wheel', '3-wheel', '2-wheel']
  end

end

binding.pry