# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Image.destroy_all 

seeds = JSON.parse(File.read('/Users/michellehuang/Desktop/culture-takehome/public/foam-seed.json'))

seeds.each do |seed|
    Image.create!(seed)
end