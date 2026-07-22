import { app } from "./app.js";
import { connectDatabase } from "./config/db.js";
import { serverPort } from "./secret.js";
app.listen(serverPort, '0.0.0.0', async () => {
    console.log(`server is running http://localhost:${serverPort}`);
    await connectDatabase();
});
//# sourceMappingURL=server.js.map