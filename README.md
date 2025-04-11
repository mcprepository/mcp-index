# 📬 mcp-index

**Submit your MCP Server to the official registry.**  
Powered by [mcprepository.com](https://mcprepository.com) — the official MCP Server Repository.

---

## 📦 About

`mcp-index` is a simple CLI tool to **submit your GitHub repository** as an MCP Server to [mcprepository.com](https://mcprepository.com).  
Whether you’ve built an automation tool, an AI server, or a protocol interface — this tool helps you get listed publicly and discoverable by others.

---

## 🚀 Installation

You can use it instantly via `npx`:

```bash
npx mcp-index <github-repo-url>
```

Or install globally:

```bash
npm install -g mcp-index
```

---

## 📬 Usage

```bash
mcp-index https://github.com/yourname/your-mcp-server
```

### Example output:

```
✅ Index request submitted successfully!
📦 Expected MCP Server URL: https://mcprepository.com/yourname/your-mcp-server
⏳ Your repository is now queued for validation and processing.
🔍 We will check if it's a valid MCP Server.
🔔 You’ll be notified when it becomes available on the MCP Repository.
```

---

## 🧠 Notes

- You **must provide a valid GitHub repository URL**.
- The server will handle:
    - Checking for duplicates
    - Detecting MCP compatibility
    - Queuing for processing
- We auto-detect based on your project’s language and structure.

---

## 🌐 Powered by MCPRepository

This tool uses the official MCP indexing API:

```
POST https://mcprepository.com/api/index
```

Read more at [mcprepository.com](https://mcprepository.com)

---