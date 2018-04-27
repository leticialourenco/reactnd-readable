const clone = require('clone')
const posts = require('./posts')

let db = {}

const defaultData = {
    "7af0a4f8-a179-4d59-b70d-7ce5b12c6998": {
        id: '7af0a4f8-a179-4d59-b70d-7ce5b12c6998',
        parentId: "7af0a4f8-a179-4d59-b70d-7ce5b12c5997",
        timestamp: 1508330494003,
        body: 'With larger high schools (500+ students/grade), there isnt really the social hierarchy presented in most films, theres just too many kids for everyone to know each other like that. There arent the "cool kids" and the "losers", theres just different groups - the football players, the anime nerds, the class government kids, etc. Theres no pecking order or anything, most people just sort of keep to their groups. At my high school prom, the prom king (an athlete and class clown) and queen (class vice president and prom organizer) had literally never met before and had only a vague inkling of who the other was. EDIT: While Ive been attributing this to class size, a lot of commenters are saying they had the same experience with much smaller classes, so it might just be Hollywood making stuff up, or maybe things have changed since our parents generation.',
        author: 'notmiefault',
        voteScore: 3,
        deleted: false,
        parentDeleted: false
    },
    "7af0a4f8-a179-4d59-b70d-7ce5b12c6996": {
        id: '7af0a4f8-a179-4d59-b70d-7ce5b12c6996',
        parentId: "7af0a4f8-a179-4d59-b70d-7ce5b12c5996",
        timestamp: 1501330224010,
        body: 'My brother is allergic to tree nuts. My aunt thought he was lying because he would eat things with peanuts in it. Several times she brought foods with nuts in them to Christmas get togethers. Never bothered my brother much he just didn\'t eat them. This pissed her off, so once she make this big plate of chocolate chip cookies. My brother eats about 6 of them. About 20 minutes later he\'s hacking and coughing. Epipen benedryl and a trip to the hospital later my aunt finally tells us that she used almond flour because she knew he was making it up.',
        author: 'tcp-45',
        voteScore: 32,
        deleted: false,
        parentDeleted: false
    },
    "7af0a4f8-a179-4d59-b70d-7ce5b12c6997": {
        id: '7af0a4f8-a179-4d59-b70d-7ce5b12c6997',
        parentId: "7af0a4f8-a179-4d59-b70d-7ce5b12c5996",
        timestamp: 1501330224010,
        body: 'My "best friend" at the time didnt believe anyone could be allergic to cedar. It makes my eyes itch and burn then swell shut. She thought I was probably just being dramatic because I didn\'t like the smell or something. I was spending the night at her place and she brought me some blankets... as soon as I wrapped up in them I realized something was wrong, they reeked of cedar. Her mother kept them in a cedar chest and she thought it would be no big deal. She quickly changed her tune and then apologized profusely once my eyes started to swell shut and I had to call my folks to come take me to the ER in the middle of the damn night.',
        author: 'sick__muse',
        voteScore: 17,
        deleted: false,
        parentDeleted: false
    },
    "7af0a4f8-a179-4d59-b70d-7ce5b12c6999": {
        id: '7af0a4f8-a179-4d59-b70d-7ce5b12c6999',
        parentId: "7af0a4f8-a179-4d59-b70d-7ce5b12c5960",
        timestamp: 1519211809934,
        body: 'For people working overseas, carrying around your diploma is a major pain in the ass. Not that you literally have to have it in your back pocket, but for some countries you need it for proof of your certifications whenever you change jobs. On top of that it will have to be verified in your home country, then again in the country where you want to work. It\'s completely annoying.',
        author: 'gelatin-crispy',
        voteScore: 2,
        deleted: false,
        parentDeleted: false
    }
}

function getData (token) {
  let data = db[token]
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getByParent (token, parentId) {
  return new Promise((res) => {
    let comments = getData(token)
    let keys = Object.keys(comments)
    filtered_keys = keys.filter(key => comments[key].parentId === parentId && !comments[key].deleted)
    res(filtered_keys.map(key => comments[key]))
  })
}

function get (token, id) {
  return new Promise((res) => {
    const comments = getData(token)
    res(
      comments[id].deleted || comments[id].parentDeleted
        ? {}
        : comments[id]
      )
  })
}

function add (token, comment) {
  return new Promise((res) => {
    let comments = getData(token)

    comments[comment.id] = {
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId,
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }

    posts.incrementCommentCounter(token, comment.parentId, 1)
    res(comments[comment.id])
  })
}

function vote (token, id, option) {
  return new Promise((res) => {
    let comments = getData(token)
    comment = comments[id]
    switch(option) {
        case "upVote":
            comment.voteScore = comment.voteScore + 1
            break
        case "downVote":
            comment.voteScore = comment.voteScore - 1
            break
        default:
            console.log(`comments.vote received incorrect parameter: ${option}`)
    }
    res(comment)
  })
}

function disableByParent (token, post) {
    return new Promise((res) => {
        let comments = getData(token)
        keys = Object.keys(comments)
        filtered_keys = keys.filter(key => comments[key].parentId === post.id)
        filtered_keys.forEach(key => comments[key].parentDeleted = true)
        res(post)
    })
}

function disable (token, id) {
    return new Promise((res) => {
      let comments = getData(token)
      comments[id].deleted = true
      posts.incrementCommentCounter(token, comments[id].parentId, -1)
      res(comments[id])
    })
}

function edit (token, id, comment) {
    return new Promise((res) => {
        let comments = getData(token)
        for (prop in comment) {
            comments[id][prop] = comment[prop]
        }
        res(comments[id])
    })
}

module.exports = {
  get,
  getByParent,
  add,
  vote,
  disableByParent,
  disable,
  edit
}
