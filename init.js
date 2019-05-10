import app from "./app";

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http:localhost:${PORT}`);

app.listen(PORT, handleListening);


////////////////
// MVC pattern
// M :model - data
// V :view - how does the data look
// C :controller - function that looks for the data
////////////////