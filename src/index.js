import axios from "axios";
import chalk from "chalk";
import { program } from "commander";

export default async function cli() {
    program
        .name("mcp-index")
        .description("Submit a GitHub MCP Server repository to mcprepository.com")
        .argument("<github-url>", "GitHub repository URL")
        .action(async (url) => {
            if (!url.startsWith("https://github.com/")) {
                console.error(chalk.red("❌ Please provide a valid GitHub URL."));
                process.exit(1);
            }

            try {
                const response = await axios.post("https://mcprepository.com/api/index", { url });
                const data = response.data;

                console.log(chalk.green("✅ Index request submitted successfully!"));

                if (data.url) {
                    console.log(`📦 Expected MCP Server URL: ${chalk.blue(data.url)}`);
                }

                if (data.status === "queued") {
                    console.log(chalk.yellow("⏳ Your repository is now queued for validation and processing."));
                    console.log("🔍 We will check if it's a valid MCP Server.");
                    console.log("🔔 You’ll be notified when it becomes available on the MCP Repository.");
                }

                if (data.duplicate) {
                    console.log(chalk.yellow("⚠️ This repository has already been indexed."));
                }

                if (data.message) {
                    console.log(chalk.gray(data.message));
                }

            } catch (error) {
                const message = error.response?.data?.message || error.message;
                console.error(chalk.red("❌ Error submitting index:"), message);
                process.exit(1);
            }
        });

    program.parse();
}