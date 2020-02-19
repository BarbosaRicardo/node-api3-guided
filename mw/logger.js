//Why return a HOF?
//lets create the morgan middleware
module.exports = (format) => {
   return (req, res, next) => {

      const {ip, method, url } = req
      const agent = req.get("User-Agent")

      if(format ==="short"){
         console.log(`${ip} ${method} ${url}`)
      } else{
         console.log(`${ip} ${method} ${url} ${agent}`)
      }
      next()
   }
}