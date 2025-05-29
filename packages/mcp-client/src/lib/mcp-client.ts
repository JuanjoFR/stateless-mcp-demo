import {
  MCPTransport,
  experimental_createMCPClient as createMCPClient,
} from 'ai';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
// import { myTool1, myTool2 } from '@stateless-mcp-demo/mcp-server/tools';

const url = new URL('http://localhost:3000/mcp');
const mcpClient = await createMCPClient({
  transport: new StreamableHTTPClientTransport(url),
});
