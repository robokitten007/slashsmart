# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Friend.destroy_all
Bill.destroy_all

demoUser = User.create!(
    name: 'demoUser',
    email: 'demoUser@email.com',
    password: '123456')

Cathy = User.create!(
    name: 'Cathy',
    email: 'cathy@email.com',
    password: '123456'
)

Mike = User.create!(
    name: 'Mike',
    email: 'mike@email.com',
    password: '123456'
)

Penn = User.create!(
    name: 'Penn',
    email: 'penn@email.com',
    password: '123456'
)

Eric = User.create!(
    name: 'Eric',
    email: 'eric@email.com',
    password: '123456'
)

Lucy = User.create!(
    name: 'Lucy',
    email: 'lucy@email.com',
    password: '123456'

)



Friend.create!(user_id: 1, friend_id: 2)
Friend.create!(user_id: 2, friend_id: 1)
Friend.create!(user_id: 1, friend_id: 3)
Friend.create!(user_id: 3, friend_id: 1)
Friend.create!(user_id: 2, friend_id: 4)
Friend.create!(user_id: 4, friend_id: 2)
Friend.create!(user_id: 5, friend_id: 6)
Friend.create!(user_id: 6, friend_id: 5)
Friend.create!(user_id: 3, friend_id: 5)
Friend.create!(user_id: 5, friend_id: 3)


Bill.create!(
    user_id: 1,
    friend_id: 2,
    amount: 1500,
    amount_paid: 750,
    description: 'rent',
    category: 'general',
    notes: 'July rent',
    paid_by_user: true
)


Bill.create!(
    user_id: 1,
    friend_id: 2,
    amount: 100,
    amount_paid: 20,
    description: 'utility',
    category: 'general',
    notes: 'July utility',
    paid_by_user: true
)

Bill.create!(
    user_id: 1,
    friend_id: 2,
    amount: 80,
    amount_paid: 30,
    description: 'dinner',
    category: 'general',
    notes:'general',
    paid_by_user: false
)

Bill.create!(
    user_id: 1,
    friend_id: 3,
    amount: 50,
    amount_paid: 25,
    description: 'movie',
    category: 'general',
    notes:'general',
    paid_by_user: false
)


Bill.create!(
    user_id: 2,
    friend_id: 1,
    amount: 250,
    amount_paid: 120,
    description: 'gas',
    category:'general',
    notes:'general',
    paid_by_user: true
)

Bill.create!(
    user_id: 2,
    friend_id: 1,
    amount: 300,
    amount_paid: 50,
    description: 'grocery shopping',
    category: 'general',
    notes:'general',
    paid_by_user: false
)

