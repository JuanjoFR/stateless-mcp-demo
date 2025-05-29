import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import {
  ListResourcesRequestSchema,
  ListResourceTemplatesRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

if (!process.env.MCP_SERVER_NAME) {
  throw new Error('MCP_SERVER_NAME environment variable is not set');
}
if (!process.env.MCP_SERVER_VERSION) {
  throw new Error('MCP_SERVER_VERSION environment variable is not set');
}

export const server = new Server(
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

// List available resources
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: 'docs://guides/getting-started',
        name: 'Getting started',
        mimeType: 'text/plain',
      },
    ],
  };
});

// List resource templates
server.setRequestHandler(ListResourceTemplatesRequestSchema, async () => {
  return {
    resourceTemplates: [], // or provide actual templates if you have any
  };
});

// Read resource contents
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri;

  if (uri === 'docs://guides/getting-started') {
    const text =
      'This is a mock getting started file content for demonstration purposes.';
    return {
      contents: [
        {
          uri,
          mimeType: 'text/plain',
          text,
        },
      ],
    };
  }

  throw new Error('Resource not found');
});
