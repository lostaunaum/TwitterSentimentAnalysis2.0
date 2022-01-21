# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.create(name: 'Luke Wan', age: 23, address: '123 Test St.')
User.create(name: 'Mary Poppins', age: 41, address: '123 ABC St.')
User.create(name: 'John Neilman', age: 76, address: '000 Test St.')