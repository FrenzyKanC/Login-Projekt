import express from "express";


const app = express()
const port = 3000

app.arguments(express.urlencoded())

app.get('/', (req, res) => {
  res.sendFile("C:\Users\stkan\Desktop\Visual Studio Code Projects\hst login project\index.html")
})

app.post('/login-page.html', (req, res) => {
  const Username = req.body.Username;
  const Password = req.body.Password;
  if(Username === 'Stephan' && Password === 'Kansy') {
   return  res.sendFile("C:\Users\stkan\Desktop\Visual Studio Code Projects\hst login project\login-page.html")
  };
  res.sendFile("C:\Users\stkan\Desktop\Visual Studio Code Projects\hst login project\denied.html")
})

app.listen(port, () => {
  console.log(`Genutzter Port: ${port}`)
})