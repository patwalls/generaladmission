# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(username: 'patwalls', password: '123456', name: 'Pat Walls',
  photo: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAVBAAAAJGEyNGNmY2Y3LTEyYmItNGJiMy1hNWE2LWFlNmVkODVlYjcyZQ.jpg')
User.create(username: 'cosmokramer', password: '123456', name: 'Cosmo Kramer',
  photo: 'http://www.seinfeldonline.com/kramer2.jpg')
User.create(username: 'jerryseinfeld', password: '123456', name: 'Jerry Seinfeld',
    photo: 'https://geekygirlfilmblog.files.wordpress.com/2014/07/jerry-seinfeld-dad.jpg')
User.create(username: 'georgecostanza', password: '123456', name: 'George Costanza',
    photo: 'http://vignette1.wikia.nocookie.net/seinfeld/images/7/76/George-costanza.jpg/revision/latest?cb=20110406222711')
User.create(username: 'elainebenes', password: '123456', name: 'Elaine Benes',
    photo: 'http://www.endedtvseries.com/wp-content/uploads/2013/09/endedtvseries001-elaine-benes-picture000.jpg')
User.create(username: 'larrydavid', password: '123456', name: 'Larry David',
    photo: 'http://www.sitcomsonline.com/photopost/data/511/curb-hbo.jpg')
User.create(username: 'jeffgreene', password: '123456', name: 'Jeff Greene',
    photo: 'http://images.buddytv.com/btv_2_505572109_0_350_10000_-1_/cye-garlin.jpg')
User.create(username: 'susiegreene', password: '123456', name: 'Susie Greene',
    photo: 'http://live.drjays.com/wp-content/uploads/2011/07/susie.jpg')
User.create(username: 'martyfunkhouser', password: '123456', name: 'Marty Funkhouser',
    photo: 'http://cdn0.vox-cdn.com/imported_assets/2244243/curb-season-premiere.jpg')
User.create(username: 'leonblack', password: '123456', name: 'Leon Black',
    photo: 'https://s-media-cache-ak0.pinimg.com/736x/0d/43/3c/0d433c1788226cd38a95faa095ae09f7.jpg')
User.create(username: 'richardlewis', password: '123456', name: 'Richard Lewis',
    photo: 'http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE1ODA0OTcyMDQ5NzI5MDM3.jpg')
User.create(username: 'cheryldavid', password: '123456', name: 'Cheryl David',
    photo: 'http://cimg.tvgcdn.net/i/r/2010/05/27/3e5a6c22-1c8f-4ed0-88ce-82733a9115da/resize/300x206/d96ffcb5e331916de38816d7b4b979ad/100527cheryly-hines1.jpg')


Follower.create(user_id: 2, follower_id: 1)
Follower.create(user_id: 2, follower_id: 3)
Follower.create(user_id: 2, follower_id: 5)
Follower.create(user_id: 2, follower_id: 7)
Follower.create(user_id: 2, follower_id: 9)
Follower.create(user_id: 3, follower_id: 2)
Follower.create(user_id: 3, follower_id: 4)
Follower.create(user_id: 3, follower_id: 6)
Follower.create(user_id: 3, follower_id: 8)
Follower.create(user_id: 3, follower_id: 10)
Follower.create(user_id: 4, follower_id: 1)
Follower.create(user_id: 4, follower_id: 3)
Follower.create(user_id: 4, follower_id: 5)
Follower.create(user_id: 4, follower_id: 7)
Follower.create(user_id: 4, follower_id: 9)
Follower.create(user_id: 5, follower_id: 2)
Follower.create(user_id: 5, follower_id: 4)
Follower.create(user_id: 5, follower_id: 6)
Follower.create(user_id: 5, follower_id: 8)
Follower.create(user_id: 5, follower_id: 10)
Follower.create(user_id: 6, follower_id: 1)
Follower.create(user_id: 6, follower_id: 3)
Follower.create(user_id: 6, follower_id: 5)
Follower.create(user_id: 6, follower_id: 7)
Follower.create(user_id: 6, follower_id: 9)
Follower.create(user_id: 7, follower_id: 2)
Follower.create(user_id: 7, follower_id: 4)
Follower.create(user_id: 7, follower_id: 6)
Follower.create(user_id: 7, follower_id: 8)
Follower.create(user_id: 7, follower_id: 10)
Follower.create(user_id: 8, follower_id: 1)
Follower.create(user_id: 8, follower_id: 3)
Follower.create(user_id: 8, follower_id: 5)
Follower.create(user_id: 8, follower_id: 7)
Follower.create(user_id: 8, follower_id: 9)
Follower.create(user_id: 9, follower_id: 2)
Follower.create(user_id: 9, follower_id: 4)
Follower.create(user_id: 9, follower_id: 6)
Follower.create(user_id: 9, follower_id: 8)
Follower.create(user_id: 9, follower_id: 10)
