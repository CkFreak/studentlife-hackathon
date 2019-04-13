import { App } from "./app";
import { PORT } from "./config/config";
import { MySQLService } from "./service/MySQLService";
import { MySQLServiceT } from "./types/service/MySQLService";


MySQLService().init().then((mysql: MySQLServiceT) => {
	return App(mysql).listen();
}).then(() => {
	console.info(`Server is listening on Port ${PORT}`);
}).catch((err: Error) => {
	console.error("There was an error when starting the server!", err);
});
