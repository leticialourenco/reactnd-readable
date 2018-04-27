const clone = require('clone')

let db = {}

const defaultData = {
  "7af0a4f8-a179-4d59-b70d-7ce5b12c5996": {
    id: '7af0a4f8-a179-4d59-b70d-7ce5b12c5996',
    timestamp: 1501330224010,
    title: 'People with food allergy or intolerance...',
    body: 'Have you ever been tricked by a friend or family member to see if you were lying about your condition? If so what happened?',
    author: 'littleredhoodlum',
    category: 'ask-reddit-ish',
    voteScore: 53,
    deleted: false,
    commentCount: 2
  },
  "7af0a4f8-a179-4d59-b70d-7ce5b12c5997": {
    id: '7af0a4f8-a179-4d59-b70d-7ce5b12c5997',
    timestamp: 1508330494000,
    title: 'Are high schools in the USA anything like in the movies?',
    body: 'What do they get right/wrong?',
    author: 'kerrypug',
    category: 'ask-reddit-ish',
    voteScore: 18,
    deleted: false,
    commentCount: 1
  },
  "7af0a4f8-a179-4d59-b70d-7ce5b12c5998": {
    id: '7af0a4f8-a179-4d59-b70d-7ce5b12c5998',
    timestamp: 1519129858900,
    title: '80\'s kids started programming at an earlier age than today\'s millennials',
    body: '',
    author: 'jakdak',
    category: 'old-school-cool',
    voteScore: -21,
    deleted: false,
    commentCount: 0
  },
    "7af0a4f8-a179-4d59-b70d-7ce5b12c5960": {
    id: '7af0a4f8-a179-4d59-b70d-7ce5b12c5960',
    timestamp: 1519211809934,
    title: 'Georgia Tech sent me a wallet-sized version of my diploma.',
    body: 'Finally, I can stop carrying around my full sized one!',
    author: 'elbimio',
    category: 'mildly-interesting',
    voteScore: 15,
    deleted: false,
    commentCount: 1
  },
    "7af0a4f8-a179-4d59-b70d-7ce5b12c5999": {
    id: '7af0a4f8-a179-4d59-b70d-7ce5b12c5999',
    timestamp: 1519211811670,
    title: 'Technically, everybody’s favorite thing is endorphins.',
    body: 'I only enjoy two things: serotonin and dopamine',
    author: 'ctrlaltwarrior',
    category: 'shower-thoughts',
    voteScore: 11,
    deleted: false,
    commentCount: 0
    }
}

function getData (token) {
  let data = db[token]
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getByCategory (token, category) {
  return new Promise((res) => {
    let posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => posts[key].category === category && !posts[key].deleted)
    res(filtered_keys.map(key => posts[key]))
  })
}

function get (token, id) {
  return new Promise((res) => {
    const posts = getData(token)
    res(
      posts[id].deleted
        ? {}
        : posts[id]
    )
  })
}

function getAll (token) {
  return new Promise((res) => {
    const posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => !posts[key].deleted)
    res(filtered_keys.map(key => posts[key]))
  })
}

function add (token, post) {
  return new Promise((res) => {
    let posts = getData(token)

    posts[post.id] = {
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      voteScore: 1,
      deleted: false,
      commentCount: 0
    }

    res(posts[post.id])
  })
}

function vote (token, id, option) {
  return new Promise((res) => {
    let posts = getData(token)
    post = posts[id]
    switch(option) {
        case "upVote":
            post.voteScore = post.voteScore + 1
            break
        case "downVote":
            post.voteScore = post.voteScore - 1
            break
        default:
            console.log(`posts.vote received incorrect parameter: ${option}`)
    }
    res(post)
  })
}

function disable (token, id) {
    return new Promise((res) => {
      let posts = getData(token)
      posts[id].deleted = true
      res(posts[id])
    })
}

function edit (token, id, post) {
    return new Promise((res) => {
        let posts = getData(token)
        for (prop in post) {
            posts[id][prop] = post[prop]
        }
        res(posts[id])
    })
}

function incrementCommentCounter(token, id, count) {
  const data = getData(token)
  if (data[id]) {
    data[id].commentCount += count
  }
}

module.exports = {
  get,
  getAll,
  getByCategory,
  add,
  vote,
  disable,
  edit,
  getAll,
  incrementCommentCounter
}
