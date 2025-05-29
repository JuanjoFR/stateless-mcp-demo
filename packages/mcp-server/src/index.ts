import 'dotenv/config';
import { mcpServer } from './mcp-server';
import { createStreamableHTTPServer } from './streamable-http-server';

// Start the server
createStreamableHTTPServer(mcpServer).listen(
  process.env.STREAMABLE_HTTP_SERVER_PORT,
  () => {
    console.log(
      `MCP Stateless Streamable HTTP Server listening on port ${process.env.STREAMABLE_HTTP_SERVER_PORT} with name ${process.env.MCP_SERVER_NAME} and version ${process.env.MCP_SERVER_VERSION}`
    );
  }
);
