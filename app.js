

const http=require('http')
const url=require('url')
const fs=require('fs')

const events=require('events')

let myEmitter=new events.EventEmitter()


myEmitter.on('userCreated',(name,id)=>{
    console.log(`A new user ${name} with the ID ${id} is created`);
    
})

myEmitter.on('userCreated',(name,id)=>{
    console.log(`A new user ${name} with the ID ${id} added ot the database`);
    
})

myEmitter.emit('userCreated','Fazliddin',21)
myEmitter.emit('userCreated','John',11)



const html =fs.readFileSync('./templates/index.html', 'utf-8')

const server=http.createServer((request, response)=>{
    // console.log('Hi from the server');
    // // response.end('Hi from the server!')

    //   const{query,pathname:path}=url.parse(request.url,true)
    // // console.log(request.url);
    // // const path=request.url
    // console.log(path);
    

    // if (path==='/'||path.toLocaleLowerCase()==='/home') {
    //     response.end(html.replace('{{%CONTENT%}}','you are in home page'))
        
    // }else if(path.toLocaleLowerCase()==='/contact'){
    //     response.end(html.replace('{{%CONTENT%}}','you are in contact page'))
      
    // }
    // else {
    //     response.end('404')
    // }
    
    
})



server.listen(7000,'127.0.0.1',()=>{
    console.log('Server has started ');
    
})

//writeable stream
// server.on('request',(req,res)=>{
//    fs.readFile('./files/large.txt','utf-8',(err,data)=>{
//     if(err){
//         res.end('something happened wrong')

//     }else{
//         res.end(data)
//     }
//    })
// })

// server.on('request',(req,res)=>{
//    const rs= fs.createReadStream('./files/large.txt')


//    rs.on('data',(chunk)=>{
//      res.write(chunk)
   

//    })
//    rs.on('end',()=>{
//     res.end()
//    })

//    rs.on('error',(error)=>{
//     res.end(error.message)
//    })

    
//  })


    
server.on('request',(req,res)=>{
    let rs=fs.createReadStream('./files/large.txt')
    rs.pipe(res)
})