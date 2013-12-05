# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Project.create!(name: "Super projet 1", language_code: "FR", segments_count: 540)
Project.create!(name: "Super projet 2", language_code: "ES", segments_count: 328)
Project.create!(name: "Super projet 3", language_code: "EN", segments_count: 125)
Project.create!(name: "Super projet 4", language_code: "IT", segments_count: 873)
Project.create!(name: "Super projet 5", language_code: "NL", segments_count: 44)
