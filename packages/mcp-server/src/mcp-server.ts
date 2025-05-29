import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { generateCoolPalette } from './color-palette';
import z from 'zod';

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
      tools: {},
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

// Simple tool with parameters
mcpServer.tool(
  'generate-color-palette',
  {
    count: z.number().min(2).max(8).optional().default(5),
    minDistance: z.number().min(0).max(100).optional().default(30),
  },
  ({ count, minDistance }) => {
    try {
      const colorPalette = generateCoolPalette(count, minDistance);

      return {
        content: [
          {
            type: 'text',
            text: `Colors: ${colorPalette.join(', ')}`,
          },
        ],
      };
    } catch (error) {
      return {
        isError: true,
        content: [
          {
            type: 'text',
            text: `Error: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
      };
    }
  }
);

export { mcpServer };
