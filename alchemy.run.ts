import alchemy from "alchemy";
import { Worker } from "alchemy/cloudflare";

const app = await alchemy("test-app");

const worker = await Worker("worker", {
	entrypoint: "./index.ts",
});

console.log(`Worker deployed at: ${worker.url}`);

await app.finalize();
