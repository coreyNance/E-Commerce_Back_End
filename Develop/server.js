const express = require('express');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});



// {
// 	"category_name": "duck"


	
	
// }

// {
// 	"tag_name": "black"


	
	
// }

// {
// 	"product_name": "Football",
// 	"price": 45,
// 	"stock": 5,
// 	"category_id": 3,
// 	"tagIds": [1, 2, 3, 4]
	
// }