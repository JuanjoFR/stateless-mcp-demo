import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

if (!process.env.MCP_SERVER_NAME) {
  throw new Error('MCP_SERVER_NAME environment variable is not set');
}
if (!process.env.MCP_SERVER_VERSION) {
  throw new Error('MCP_SERVER_VERSION environment variable is not set');
}

const mcpServer = new McpServer(
  {
    name: process.env.MCP_SERVER_NAME,
    version: process.env.MCP_SERVER_VERSION,
    description: process.env.MCP_SERVER_DESCRIPTION,
  },
  {
    capabilities: {
      resources: {},
    },
  }
);

mcpServer.resource('Guides', 'guides://getting-started', async (uri: URL) => {
  const uriString = uri.toString();
  if (uriString === 'guides://getting-started') {
    return {
      contents: [
        {
          uri: uriString,
          mimeType: 'text/plain',
          text: 'This is a mock getting started file content for demonstration purposes.',
        },
      ],
    };
  }
  throw new Error('Resource not found');
});

export { mcpServer };
