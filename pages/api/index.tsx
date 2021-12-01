var Mock = require('mockjs')
var Random = Mock.Random
var data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1,
        "name": Random.name(),
        "email" : Random.email(),
        "address": Random.city(),
        "color": Random.color()
    }]
})

export default function handler(req:any, res:any) {
    if (req.method === 'GET') {
        res.status(200).json(data.list)
    } else {
      
    }
  }