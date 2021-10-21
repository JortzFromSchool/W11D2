# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do
    Todo.destroy_all

    puts "creating Todos"

    wash_car = Todo.create!(title: "Wash Car", body: "use hose", done: false)
    mow_lawn = Todo.create!(title: "Mow Lawn", body: "charge mower", done: false)
    get_glasses = Todo.create!(title: "Get Glasses", body: "From Visionworks", done: true)

end