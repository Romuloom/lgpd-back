import { express } from "express";
import { pkg } from "body-parser";
import { router } from "./routes/router.js"
import sequelize from "./utils/database.js";
import association from "./models/Associations.js";

const app = express();
const { json, urlendcoded } = pkg;
const port = 9001

app.use(json(), urlendcoded({ extends: true }));

(async () => {
    try {
        association.associations();
        await sequelize.sync();
        app.listen(port, () => {
            console.log("Servidor rodando na porta " + port)
        })

    } catch (err) {
        console.log(err);
    }
})();



app.use("/", router);
